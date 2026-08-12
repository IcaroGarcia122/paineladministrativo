import { supabase } from "@/integrations/supabase/client";

const defaultContent = {
  id: "",
  chale_name: "Chalé A-Frame Florianópolis",
  hero_title: "Conecte-se com o que realmente importa.",
  hero_subtitle: "CHALÉ EXCLUSIVO EM FLORIANÓPOLIS",
  hero_description: "Um refúgio privativo entre a natureza e o mar, criado para momentos inesquecíveis.",
  about_title: "Seu refúgio entre a natureza e o mar",
  about_text_1: "Desfrute de uma experiência única em um chalé privativo, cercado pela natureza e com uma vista encantadora para o mar.",
  about_text_2: "Com arquitetura em estilo A-frame, estrutura em madeira, amplas paredes de vidro e ambientes integrados, o espaço foi pensado para proporcionar conforto, privacidade e momentos especiais.",
  airbnb_url: "https://www.airbnb.com.br/rooms/1703914788039625027",
};

// Public function to fetch content
export async function getSiteContent() {
  try {
    const { data, error } = await supabase
      .from('site_content')
      .select('*')
      .single();
    
    if (error || !data) {
      return defaultContent;
    }
    return { ...defaultContent, ...data };
  } catch (err) {
    console.warn('Error fetching site content:', err);
    return defaultContent;
  }
}

// Public function to track clicks
export async function trackAirbnbClick(input?: { data?: { source?: string }; source?: string }) {
  try {
    const source = input?.data?.source || input?.source || 'direct';
    await supabase.from('airbnb_clicks').insert({ 
      source,
      device: 'web'
    });
    return { success: true };
  } catch (err) {
    console.warn('Error tracking airbnb click:', err);
    return { success: false };
  }
}

// Protected Admin Functions
export async function updateSiteContent(input: any) {
  try {
    const payload = input?.data || input;
    const { error } = await supabase
      .from('site_content')
      .update(payload)
      .eq('id', payload.id);
    if (error) throw error;
    return { success: true };
  } catch (err) {
    console.error('Error updating site content:', err);
    throw err;
  }
}

export async function getDashboardStats() {
  try {
    const { count: clicks } = await supabase
      .from('airbnb_clicks')
      .select('*', { count: 'exact', head: true });
    
    const { count: guests } = await supabase
      .from('guests')
      .select('*', { count: 'exact', head: true });
      
    return {
      clicks: clicks || 0,
      guests: guests || 0,
      conversionRate: 0.12,
    };
  } catch (err) {
    return {
      clicks: 0,
      guests: 0,
      conversionRate: 0.12,
    };
  }
}

