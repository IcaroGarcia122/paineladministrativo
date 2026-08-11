export type ViewMode =
  | 'dashboard'
  | 'calendar'
  | 'guests'
  | 'property'
  | 'guide'
  | 'concierge'
  | 'automations'
  | 'analytics'
  | 'settings';

export type StayStatus = 'confirmed' | 'active' | 'completed' | 'cancelled';

export interface Guest {
  id: string;
  name: string;
  phone: string;
  email?: string;
  totalStays: number;
  avatar?: string;
  notes?: string;
  createdAt: string;
}

export interface Stay {
  id: string;
  guestId: string;
  guestName: string;
  guestPhone: string;
  checkIn: string; // YYYY-MM-DD
  checkOut: string; // YYYY-MM-DD
  guestsCount: number;
  status: StayStatus;
  source: 'Airbnb' | 'Manual' | 'Direct';
  notes?: string;
  allowAutomations: boolean;
  nextAutomation?: {
    title: string;
    scheduledFor: string;
  } | undefined;
}

export interface BlockedDate {
  id: string;
  startDate: string; // YYYY-MM-DD
  endDate: string; // YYYY-MM-DD
  reason: 'Manutenção' | 'Uso Próprio' | 'Limpeza Especial' | 'Outro';
  notes?: string;
}

export interface PropertyInfo {
  name: string;
  subtitle: string;
  description: string;
  location: string;
  address: string;
  capacity: number;
  bedrooms: number;
  bathrooms: number;
  beds: number;
  checkInTime: string;
  checkOutTime: string;
  airbnbUrl: string;
  logoUrl: string;
  brandColor: string;
  customDomain: string;
  domainStatus: 'published' | 'pending' | 'draft';
}

export type AmenityCategory = 'essentials' | 'outdoor' | 'entertainment' | 'safety';

export interface Amenity {
  id: string;
  name: string;
  iconName: string;
  category: AmenityCategory;
  enabled: boolean;
}

export interface HouseRules {
  petsAllowed: boolean;
  petNotes?: string;
  partiesAllowed: boolean;
  smokingAllowed: boolean;
  smokingNotes?: string;
  maxVisitors: number;
  quietHoursStart: string;
  quietHoursEnd: string;
  customRules: string[];
}

export type GalleryCategory =
  | 'Hero'
  | 'Quartos'
  | 'Sala'
  | 'Cozinha'
  | 'Banheiros'
  | 'Área externa'
  | 'Vista'
  | 'Experiências';

export interface GalleryPhoto {
  id: string;
  url: string;
  caption: string;
  category: GalleryCategory;
  isMain: boolean;
  order: number;
}

export type LocalGuideCategory =
  | 'Restaurantes'
  | 'Praias'
  | 'Trilhas'
  | 'Mercados'
  | 'Farmácias'
  | 'Passeios'
  | 'Pontos turísticos'
  | 'Cafés';

export interface LocalRecommendation {
  id: string;
  name: string;
  category: LocalGuideCategory;
  description: string;
  address: string;
  googleMapsUrl: string;
  imageUrl: string;
  isHostRecommended: boolean;
  isFeatured: boolean;
}

export type ConciergeTone = 'Acolhedor' | 'Profissional' | 'Descontraído' | 'Sofisticado';

export interface KnowledgeItem {
  id: string;
  section: 'Hospedagem' | 'Regras' | 'Check-in' | 'Checkout' | 'Comodidades' | 'Guia da região' | 'Emergências';
  question: string;
  answer: string;
  updatedAt: string;
}

export interface ConciergeSettings {
  enabled: boolean;
  name: string;
  welcomeMessage: string;
  tone: ConciergeTone;
  statsToday: {
    conversations: number;
    answeredPercentage: number;
    forwardedToHost: number;
    satisfactionRating: number;
  };
}

export type AutomationType = 'pre_stay' | 'welcome' | 'during_stay' | 'checkout' | 'post_stay';

export interface Automation {
  id: string;
  type: AutomationType;
  title: string;
  description: string;
  enabled: boolean;
  relativeTiming: string; // e.g. "2 dias antes", "No dia", "1 dia depois"
  time: string; // e.g. "10:00"
  messageTemplate: string;
  iconName: string;
}

export interface WhatsAppConnection {
  status: 'connected' | 'disconnected' | 'qr_code';
  provider: string; // e.g., "Evolution API"
  phone: string;
  lastSync: string;
}

export interface AnalyticsSummary {
  siteVisits: number;
  visitsGrowth: number;
  airbnbClicks: number;
  airbnbClicksGrowth: number;
  whatsappClicks: number;
  whatsappClicksGrowth: number;
  activeGuests: number;
  conversionRate: number;
}

export interface TrafficSource {
  source: string;
  percentage: number;
  visits: number;
  color: string;
}

export interface PerformanceDataPoint {
  label: string; // e.g., "01 Ago", "Mon", etc.
  visits: number;
  airbnbClicks: number;
  whatsappClicks: number;
}
