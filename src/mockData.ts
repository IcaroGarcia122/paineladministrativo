import {
  PropertyInfo,
  Amenity,
  HouseRules,
  GalleryPhoto,
  LocalRecommendation,
  ConciergeSettings,
  KnowledgeItem,
  Automation,
  WhatsAppConnection,
  AnalyticsSummary,
  TrafficSource,
  PerformanceDataPoint,
  Stay,
  Guest,
  BlockedDate,
} from './types';

export const initialProperty: PropertyInfo = {
  name: 'Villa do Poente Chalé',
  subtitle: 'Chalé A-frame Privativo com Vista Pro Mar em Ribeirão da Ilha',
  description:
    'Chalé privativo estilo A-frame cercado pela natureza em Ribeirão da Ilha, Florianópolis. Possui grandes paredes de vidro, vista para o mar e montanhas, banheira de hidromassagem interna e amplo deck externo com balanço suspenso para apreciar o pôr do sol.',
  location: 'Ribeirão da Ilha, Florianópolis - SC',
  address: 'Ribeirão da Ilha (Próximo ao Villa Casarão) - Florianópolis, SC',
  capacity: 4,
  bedrooms: 2,
  bathrooms: 2,
  beds: 2,
  checkInTime: '14:00',
  checkOutTime: '10:00',
  airbnbUrl: 'https://www.airbnb.com.br/rooms/1703914788039625027',
  logoUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=150&auto=format&fit=crop&q=80',
  brandColor: '#FF385C',
  customDomain: 'villadopoentechale.com.br',
  domainStatus: 'published',
};

export const initialAmenities: Amenity[] = [
  { id: '1', name: 'Wi-Fi de Alta Velocidade', iconName: 'Wifi', category: 'essentials', enabled: true },
  { id: '2', name: 'Vista Panorâmica do Mar e Montanhas', iconName: 'Sun', category: 'outdoor', enabled: true },
  { id: '3', name: 'Banheira de Hidromassagem Interna', iconName: 'Sparkles', category: 'outdoor', enabled: true },
  { id: '4', name: 'Amplo Deck Externo com Balanço Suspenso', iconName: 'Waves', category: 'outdoor', enabled: true },
  { id: '5', name: 'Cozinha Completa Integrada', iconName: 'UtensilsCrossed', category: 'essentials', enabled: true },
  { id: '6', name: 'Estacionamento Gratuito no Local', iconName: 'Car', category: 'essentials', enabled: true },
  { id: '7', name: '2 Camas King Size (2 Suítes/Quartos)', iconName: 'Home', category: 'essentials', enabled: true },
  { id: '8', name: 'Self Check-in com Teclado Numérico', iconName: 'Key', category: 'essentials', enabled: true },
];

export const initialHouseRules: HouseRules = {
  petsAllowed: false,
  petNotes: 'Consulte o anfitrião Luan para exceções de pequenos animais.',
  partiesAllowed: false,
  smokingAllowed: false,
  smokingNotes: 'Permitido apenas no deck externo aberto.',
  maxVisitors: 4,
  quietHoursStart: '22:00',
  quietHoursEnd: '08:00',
  customRules: [
    'Capacidade máxima rigorosamente limitada a 4 hóspedes.',
    'Respeitar a lei do silêncio no bairro histórico entre 22:00 e 08:00.',
    'Desligar luzes e equipamentos ao ausentar-se do chalé.',
  ],
};

export const initialGallery: GalleryPhoto[] = [
  {
    id: 'photo-1',
    url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&auto=format&fit=crop&q=80',
    caption: 'Vista do Chalé A-frame ao entardecer com o mar de Ribeirão da Ilha',
    category: 'Hero',
    isMain: true,
    order: 1,
  },
  {
    id: 'photo-2',
    url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1000&auto=format&fit=crop&q=80',
    caption: 'Amplo deck externo com cadeira suspensa para contemplação do pôr do sol',
    category: 'Área externa',
    isMain: false,
    order: 2,
  },
];

export const initialLocalRecommendations: LocalRecommendation[] = [
  {
    id: 'rec-1',
    name: 'Ostradamus Bar e Restaurante',
    category: 'Restaurantes',
    description: 'Renomado restaurante em deck sobre o mar no Ribeirão da Ilha especializado em ostras e frutos do mar frescos.',
    address: 'Rod. Baldicero Filomeno, 7640 - Ribeirão da Ilha, Florianópolis - SC',
    googleMapsUrl: 'https://maps.google.com/?q=Ostradamus+Ribeirao+da+Ilha',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop&q=80',
    isHostRecommended: true,
    isFeatured: true,
  },
  {
    id: 'rec-2',
    name: 'Rancho Açoriano',
    category: 'Restaurantes',
    description: 'Gastronomia marítima tradicional da ilha com vista deslumbrante para a baía.',
    address: 'Rod. Baldicero Filomeno, 5634 - Ribeirão da Ilha',
    googleMapsUrl: 'https://maps.google.com/?q=Rancho+Acoriano+Ribeirao',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80',
    isHostRecommended: true,
    isFeatured: true,
  },
];

export const initialConciergeSettings: ConciergeSettings = {
  enabled: true,
  name: 'Concierge Villa do Poente',
  welcomeMessage:
    'Olá! 👋 Seja muito bem-vindo à Villa do Poente Chalé! Sou seu Concierge Virtual. Como posso ajudar você hoje com informações da casa, acesso, banheira ou recomendações em Florianópolis?',
  tone: 'Acolhedor',
  statsToday: {
    conversations: 0,
    answeredPercentage: 0,
    forwardedToHost: 0,
    satisfactionRating: 0,
  },
};

export const initialKnowledgeBase: KnowledgeItem[] = [
  {
    id: 'kb-1',
    section: 'Hospedagem',
    question: 'Como é o chalé e quais são os diferenciais?',
    answer: 'A Villa do Poente é um chalé A-frame privativo cercado pela natureza em Ribeirão da Ilha, Florianópolis. Os grandes destaques são a vista para o mar e montanhas, a banheira interna de hidromassagem e o amplo deck externo com balanço suspenso ideal para o pôr do sol.',
    updatedAt: '2026-08-11',
  },
  {
    id: 'kb-2',
    section: 'Hospedagem',
    question: 'Quantos hóspedes a casa acomoda?',
    answer: 'A capacidade máxima é de até 4 hóspedes. O chalé possui 2 quartos com 1 cama king em cada um deles e 2 banheiros.',
    updatedAt: '2026-08-11',
  },
  {
    id: 'kb-3',
    section: 'Check-in',
    question: 'Qual o horário e como funciona o check-in?',
    answer: 'O check-in inicia após às 14:00. O acesso é feito por self check-in através de teclado numérico com código individual enviado após a confirmação da reserva.',
    updatedAt: '2026-08-11',
  },
  {
    id: 'kb-4',
    section: 'Checkout',
    question: 'Qual o horário do checkout e o procedimento de saída?',
    answer: 'O checkout é impreterivelmente antes das 10:00. Solicitamos apenas que desligue luzes, equipamentos e tranque as portas de acesso ao deck.',
    updatedAt: '2026-08-11',
  },
  {
    id: 'kb-5',
    section: 'Comodidades',
    question: 'O chalé tem banheira de hidromassagem?',
    answer: 'Sim! O chalé possui uma banheira interna de hidromassagem com vista para a natureza.',
    updatedAt: '2026-08-11',
  },
  {
    id: 'kb-6',
    section: 'Comodidades',
    question: 'Tem Wi-Fi e Estacionamento no local?',
    answer: 'Sim, oferecemos Wi-Fi de alta velocidade e estacionamento gratuito e privativo no próprio local.',
    updatedAt: '2026-08-11',
  },
  {
    id: 'kb-7',
    section: 'Hospedagem',
    question: 'Quem é o anfitrião do chalé?',
    answer: 'O anfitrião é o Luan, Superhost do Airbnb há 4 anos, Engenheiro de Aquicultura e proprietário de fazenda marinha na região. Ele e sua família estão à disposição com 100% de taxa de resposta.',
    updatedAt: '2026-08-11',
  },
  {
    id: 'kb-8',
    section: 'Regras',
    question: 'Quais são as regras de número de pessoas e barulho?',
    answer: 'A capacidade máxima é estritamente de 4 hóspedes. Respeitamos a lei do silêncio entre 22:00 e 08:00 no bairro histórico.',
    updatedAt: '2026-08-11',
  },
];

export const initialAutomations: Automation[] = [
  {
    id: 'aut-1',
    type: 'pre_stay',
    title: 'Pré-estadia (Instruções de Chegada)',
    description: 'Enviar mensagem com informações importantes de chegada e localização antes do check-in.',
    enabled: true,
    relativeTiming: '2 dias antes',
    time: '10:00',
    messageTemplate: `Olá {{nome}}! 👋
    
Sua estadia na {{nome_hospedagem}} em Ribeirão da Ilha está chegando! 🌊

Seu check-in é no dia {{check_in}} a partir das 14:00.

O chalé está localizado próximo ao Villa Casarão no Ribeirão da Ilha, Florianópolis.

Confira mais detalhes da acomodação pelo link:
{{link_airbnb}}

Qualquer dúvida antes da chegada estamos à disposição!`,
    iconName: 'CalendarClock',
  },
  {
    id: 'aut-2',
    type: 'welcome',
    title: 'Boas-vindas e Código de Acesso',
    description: 'Enviar mensagem de boas-vindas e código do teclado numérico no horário de check-in.',
    enabled: true,
    relativeTiming: 'No dia do check-in',
    time: '14:00',
    messageTemplate: `Boas-vindas à {{nome_hospedagem}}, {{nome}}! 🌿✨

Seu código individual do teclado numérico para a porta principal é: **1408#**.

Sinta-se em casa! Aproveite a banheira de hidromassagem e o pôr do sol no nosso deck!

Se precisar de qualquer indicação de restaurante ou dúvida sobre o chalé, nosso Concierge Virtual responde por aqui 24h!`,
    iconName: 'Home',
  },
  {
    id: 'aut-3',
    type: 'checkout',
    title: 'Lembrete de Checkout',
    description: 'Enviar orientações e lembrete educado na véspera da saída.',
    enabled: true,
    relativeTiming: '1 dia antes do checkout',
    time: '18:00',
    messageTemplate: `Olá {{nome}}, esperamos que esteja aproveitando momentos incríveis aqui na Villa do Poente! 🌅

Lembramos que seu checkout é amanhã, dia {{check_out}}, até às 10:00.

Pedimos a gentileza de desligar as luzes, aparelhos e trancar os acessos do deck ao sair. Tenha um excelente retorno!`,
    iconName: 'LogOut',
  },
];

export const initialWhatsAppStatus: WhatsAppConnection = {
  status: 'connected',
  provider: 'Evolution API',
  phone: 'Servidor: n8n-evolution-api (instância: teste1)',
  lastSync: '2026-08-11T12:00:00Z',
};

export const initialStays: Stay[] = [
  {
    id: 'stay-teste-1',
    guestId: 'guest-1',
    guestName: 'Hóspede Teste Luan',
    guestPhone: '+55 48 99999-8888',
    checkIn: '2026-08-14',
    checkOut: '2026-08-17',
    guestsCount: 2,
    status: 'confirmed',
    source: 'Airbnb',
    notes: 'Reserva no chalé Villa do Poente em Ribeirão da Ilha.',
    allowAutomations: true,
    nextAutomation: {
      title: 'Mensagem pré-estadia',
      scheduledFor: '12/08 às 10:00',
    },
  },
];

export const initialBlockedDates: BlockedDate[] = [];

export const initialAnalytics: AnalyticsSummary = {
  siteVisits: 1420,
  visitsGrowth: 15.2,
  airbnbClicks: 410,
  airbnbClicksGrowth: 18.5,
  whatsappClicks: 128,
  whatsappClicksGrowth: 22.0,
  activeGuests: 2,
  conversionRate: 28.8,
};

export const initialTrafficSources: TrafficSource[] = [];

export const initialPerformance30Days: PerformanceDataPoint[] = [];
