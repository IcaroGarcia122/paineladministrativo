-- ========================================================
-- ESQUEMA COMPLETO DO BANCO DE DADOS SUPABASE (SAAS MULTI-TENANT)
-- Villa do Poente / Anfitrião SaaS + Evolution API + n8n
-- ========================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. PROPRIEDADES (Proprietários / Anfitriões)
CREATE TABLE IF NOT EXISTS properties (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  subtitle TEXT,
  custom_domain VARCHAR(255) UNIQUE,
  location VARCHAR(255),
  logo_url TEXT,
  airbnb_url TEXT,
  capacity INT DEFAULT 6,
  bedrooms INT DEFAULT 2,
  bathrooms INT DEFAULT 2,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. CONEXÃO WHATSAPP (EVOLUTION API INSTANCES)
CREATE TABLE IF NOT EXISTS whatsapp_connections (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  property_id UUID REFERENCES properties(id) ON DELETE CASCADE UNIQUE,
  instance_name VARCHAR(255) UNIQUE NOT NULL,
  phone_number VARCHAR(50),
  status VARCHAR(50) DEFAULT 'disconnected', -- 'disconnected', 'connecting', 'connected'
  qrcode_base64 TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. BASE DE CONHECIMENTO DA IA CONCIERGE
CREATE TABLE IF NOT EXISTS knowledge_base (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  property_id UUID REFERENCES properties(id) ON DELETE CASCADE,
  section VARCHAR(100) NOT NULL DEFAULT 'Hospedagem', -- Hospedagem, Comodidades, Regras, Emergências, etc.
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. AUTOMAÇÕES DE MENSAGENS (REGRAS & TEMPLATES)
CREATE TABLE IF NOT EXISTS automations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  property_id UUID REFERENCES properties(id) ON DELETE CASCADE,
  type VARCHAR(50) NOT NULL, -- 'pre_stay', 'welcome', 'during_stay', 'checkout', 'post_stay'
  title VARCHAR(255) NOT NULL,
  description TEXT,
  enabled BOOLEAN DEFAULT true,
  relative_timing VARCHAR(100) NOT NULL,
  time VARCHAR(10) DEFAULT '10:00',
  message_template TEXT NOT NULL,
  icon_name VARCHAR(50) DEFAULT 'MessageSquare',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. HÓSPEDES E ESTADIAS (RESERVAS)
CREATE TABLE IF NOT EXISTS stays (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  property_id UUID REFERENCES properties(id) ON DELETE CASCADE,
  guest_name VARCHAR(255) NOT NULL,
  guest_phone VARCHAR(50) NOT NULL,
  check_in DATE NOT NULL,
  check_out DATE NOT NULL,
  guests_count INT DEFAULT 1,
  status VARCHAR(50) DEFAULT 'confirmed', -- 'confirmed', 'active', 'completed', 'cancelled'
  source VARCHAR(50) DEFAULT 'Airbnb', -- 'Airbnb', 'Booking', 'Direct', 'Manual'
  notes TEXT,
  allow_automations BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 6. RECOMENDAÇÕES E GUIA DA REGIÃO
CREATE TABLE IF NOT EXISTS recommendations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  property_id UUID REFERENCES properties(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL, -- 'Restaurantes', 'Praias', 'Trilhas', etc.
  description TEXT,
  google_maps_url TEXT,
  image_url TEXT,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 7. REGISTRO DE DISPAROS DE AUTOMAÇÃO / LOGS
CREATE TABLE IF NOT EXISTS automation_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  property_id UUID REFERENCES properties(id) ON DELETE CASCADE,
  stay_id UUID REFERENCES stays(id) ON DELETE CASCADE,
  automation_type VARCHAR(50) NOT NULL,
  recipient_phone VARCHAR(50) NOT NULL,
  sent_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status VARCHAR(50) DEFAULT 'sent', -- 'sent', 'failed'
  message_content TEXT
);

-- INDEXES PARA PERFORMANCE
CREATE INDEX IF NOT EXISTS idx_properties_user_id ON properties(user_id);
CREATE INDEX IF NOT EXISTS idx_knowledge_property_id ON knowledge_base(property_id);
CREATE INDEX IF NOT EXISTS idx_automations_property_id ON automations(property_id);
CREATE INDEX IF NOT EXISTS idx_stays_property_id ON stays(property_id);
CREATE INDEX IF NOT EXISTS idx_stays_dates ON stays(check_in, check_out);
CREATE INDEX IF NOT EXISTS idx_whatsapp_instance ON whatsapp_connections(instance_name);

-- ROW LEVEL SECURITY (RLS) - POLÍTICAS DE SEGURANÇA MULTI-TENANT
ALTER TABLE properties ENABLE ROW LEVEL SECURITY;
ALTER TABLE whatsapp_connections ENABLE ROW LEVEL SECURITY;
ALTER TABLE knowledge_base ENABLE ROW LEVEL SECURITY;
ALTER TABLE automations ENABLE ROW LEVEL SECURITY;
ALTER TABLE stays ENABLE ROW LEVEL SECURITY;
ALTER TABLE recommendations ENABLE ROW LEVEL SECURITY;

-- Políticas para usuários autenticados acessarem apenas os próprios dados
CREATE POLICY "Acesso total do proprietário" ON properties
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Conhecimento público para a landing page e n8n" ON knowledge_base
  FOR SELECT USING (true);

CREATE POLICY "Gestão de conhecimento pelo dono" ON knowledge_base
  FOR ALL USING (
    property_id IN (SELECT id FROM properties WHERE user_id = auth.uid())
  );

CREATE POLICY "Gestão de automações pelo dono" ON automations
  FOR ALL USING (
    property_id IN (SELECT id FROM properties WHERE user_id = auth.uid())
  );

CREATE POLICY "Gestão de estadias pelo dono" ON stays
  FOR ALL USING (
    property_id IN (SELECT id FROM properties WHERE user_id = auth.uid())
  );
