-- ========================================================
-- POPOULAR DADOS DO 1º CLIENTE (VILLA DO POENTE CHALÉ)
-- Cole e execute no SQL Editor do Supabase
-- ========================================================

-- 1. CRIAR A PROPRIEDADE DO CLIENTE (VILLA DO POENTE)
INSERT INTO properties (id, name, subtitle, custom_domain, location, airbnb_url, capacity, bedrooms, bathrooms, description)
VALUES (
  'a1b2c3d4-e5f6-7890-abcd-111111111111',
  'Villa do Poente Chalé',
  'Chalé A-frame Privativo com Vista Pro Mar em Ribeirão da Ilha',
  'villadopoentechale.com.br',
  'Ribeirão da Ilha, Florianópolis - SC',
  'https://www.airbnb.com.br/rooms/1703914788039625027',
  4,
  2,
  2,
  'Chalé privativo estilo A-frame em madeira e vidro cercado pela natureza. Vista panorâmica para o mar, banheira de hidromassagem interna e amplo deck externo com balanço suspenso.'
) ON CONFLICT (id) DO NOTHING;

-- 2. VINCULAR A INSTÂNCIA DO WHATSAPP DA EVOLUTION API (teste1)
INSERT INTO whatsapp_connections (property_id, instance_name, phone_number, status)
VALUES (
  'a1b2c3d4-e5f6-7890-abcd-111111111111',
  'teste1',
  '+55 48 99999-8888',
  'connected'
) ON CONFLICT (property_id) DO NOTHING;

-- 3. CADASTRAR A BASE DE CONHECIMENTO COMPLETA DO CONCIERGE IA
INSERT INTO knowledge_base (property_id, section, question, answer)
VALUES
(
  'a1b2c3d4-e5f6-7890-abcd-111111111111',
  'Hospedagem',
  'Como é o chalé e quais são os diferenciais?',
  'A Villa do Poente é um chalé A-frame privativo cercado pela natureza em Ribeirão da Ilha, Florianópolis. Os grandes destaques são a vista para o mar e montanhas, a banheira interna de hidromassagem e o amplo deck externo com balanço suspenso ideal para apreciar o pôr do sol.'
),
(
  'a1b2c3d4-e5f6-7890-abcd-111111111111',
  'Hospedagem',
  'Quantos hóspedes a casa acomoda?',
  'A capacidade máxima é de até 4 hóspedes. O chalé possui 2 quartos com 1 cama king em cada um deles e 2 banheiros (sendo 1 suíte).'
),
(
  'a1b2c3d4-e5f6-7890-abcd-111111111111',
  'Check-in',
  'Qual o horário e como funciona o check-in?',
  'O check-in inicia após às 14:00. O acesso é feito por self check-in através de um teclado numérico. O código de acesso individual da reserva é enviado nas instruções de chegada.'
),
(
  'a1b2c3d4-e5f6-7890-abcd-111111111111',
  'Checkout',
  'Qual o horário do checkout e o procedimento de saída?',
  'O checkout deve ser realizado impreterivelmente antes das 10:00. Solicitamos apenas desligar as luzes e trancar as portas de acesso ao deck.'
),
(
  'a1b2c3d4-e5f6-7890-abcd-111111111111',
  'Comodidades',
  'O chalé tem banheira de hidromassagem?',
  'Sim! O chalé possui uma banheira interna de hidromassagem com vista para a natureza.'
),
(
  'a1b2c3d4-e5f6-7890-abcd-111111111111',
  'Comodidades',
  'Tem Wi-Fi e Estacionamento no local?',
  'Sim, oferecemos Wi-Fi de alta velocidade e estacionamento gratuito no próprio local.'
),
(
  'a1b2c3d4-e5f6-7890-abcd-111111111111',
  'Anfitrião',
  'Quem é o anfitrião do chalé?',
  'O anfitrião é o Luan, Superhost do Airbnb há 4 anos, Engenheiro de Aquicultura e proprietário de fazenda marinha no Ribeirão da Ilha.'
),
(
  'a1b2c3d4-e5f6-7890-abcd-111111111111',
  'Regras',
  'Quais são as regras de número de pessoas e barulho?',
  'A capacidade é rigorosamente de até 4 hóspedes. Respeitamos a lei do silêncio entre 22:00 e 08:00 no bairro histórico.'
);

-- 4. AUTOMAÇÕES DE MENSAGENS CONFIGURADAS
INSERT INTO automations (property_id, type, title, description, relative_timing, time, message_template, icon_name)
VALUES
(
  'a1b2c3d4-e5f6-7890-abcd-111111111111',
  'pre_stay',
  'Pré-estadia (Instruções de Chegada)',
  'Enviar mensagem com informações importantes de chegada antes do check-in.',
  '2 dias antes',
  '10:00',
  'Olá {{nome}}! 👋 Sua estadia na {{nome_hospedagem}} em Ribeirão da Ilha está chegando! 🌊 Check-in no dia {{check_in}} a partir das 14:00. O chalé fica próximo ao Villa Casarão. Qualquer dúvida estamos à disposição!',
  'CalendarClock'
),
(
  'a1b2c3d4-e5f6-7890-abcd-111111111111',
  'welcome',
  'Boas-vindas e Código de Acesso',
  'Enviar mensagem de boas-vindas e código do teclado numérico no horário de check-in.',
  'No dia do check-in',
  '14:00',
  'Boas-vindas à {{nome_hospedagem}}, {{nome}}! 🌿✨ Seu código individual do teclado numérico é: **1408#**. Aproveite a banheira de hidromassagem e o pôr do sol! Dúvidas de restaurantes ou do chalé, nosso Concierge responde 24h por aqui!',
  'Home'
),
(
  'a1b2c3d4-e5f6-7890-abcd-111111111111',
  'checkout',
  'Lembrete de Checkout',
  'Enviar orientações na véspera da saída.',
  '1 dia antes do checkout',
  '18:00',
  'Olá {{nome}}, esperamos que esteja aproveitando momentos incríveis aqui na Villa do Poente! 🌅 Lembramos que seu checkout é amanhã, dia {{check_out}}, até às 10:00. Desejamos um ótimo retorno!',
  'LogOut'
);

-- 5. CADASTRAR RECOMENDAÇÕES DA REGIÃO (GASTRONOMIA NO RIBEIRÃO DA ILHA)
INSERT INTO recommendations (property_id, name, category, description, google_maps_url, is_featured)
VALUES
(
  'a1b2c3d4-e5f6-7890-abcd-111111111111',
  'Ostradamus Bar e Restaurante',
  'Restaurantes',
  'Renomado restaurante em deck sobre o mar no Ribeirão da Ilha especializado em ostras e frutos do mar frescos.',
  'https://maps.google.com/?q=Ostradamus+Ribeirao+da+Ilha',
  true
),
(
  'a1b2c3d4-e5f6-7890-abcd-111111111111',
  'Rancho Açoriano',
  'Restaurantes',
  'Gastronomia marítima tradicional da ilha com vista deslumbrante para a baía.',
  'https://maps.google.com/?q=Rancho+Acoriano+Ribeirao',
  true
);

-- 6. CADASTRAR UMA ESTADIA DE TESTE (HÓSPEDE)
INSERT INTO stays (property_id, guest_name, guest_phone, check_in, check_out, guests_count, status, source, notes, allow_automations)
VALUES (
  'a1b2c3d4-e5f6-7890-abcd-111111111111',
  'João Silva',
  '+5511999999999',
  '2026-08-14',
  '2026-08-17',
  2,
  'confirmed',
  'Airbnb',
  'Reserva confirmada pelo Airbnb para a Villa do Poente Chalé',
  true
);
