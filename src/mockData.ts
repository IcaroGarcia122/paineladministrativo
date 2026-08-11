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
  name: 'Villa do Poente',
  subtitle: 'Mansão Beira-Mar com Pôr do Sol Exclusivo em Búzios',
  description:
    'Sua casa de praia de alto padrão na Praia de Geribá. Vista panorâmica indevassável do mar, piscina privativa com borda infinita, jacuzzi aquecida e área gourmet integrada com parrilla. O refúgio perfeito para famílias e grupos seletos.',
  location: 'Armação dos Búzios, Rio de Janeiro',
  address: 'Rua das Ostras, 140 - Praia de Geribá, Búzios - RJ',
  capacity: 10,
  bedrooms: 5,
  bathrooms: 5,
  beds: 7,
  checkInTime: '14:00',
  checkOutTime: '11:00',
  airbnbUrl: 'https://www.airbnb.com.br/rooms/89201948',
  logoUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=150&auto=format&fit=crop&q=80',
  brandColor: '#FF385C',
  customDomain: 'villadopoente.com.br',
  domainStatus: 'published',
};

export const initialAmenities: Amenity[] = [
  { id: '1', name: 'Wi-Fi 600 Mbps Ultra-Rápido', iconName: 'Wifi', category: 'essentials', enabled: true },
  { id: '2', name: 'Ar-condicionado em todas as suítes', iconName: 'Wind', category: 'essentials', enabled: true },
  { id: '3', name: 'Piscina Privativa com Borda Infinita', iconName: 'Waves', category: 'outdoor', enabled: true },
  { id: '4', name: 'Jacuzzi Hidromassagem Aquecida', iconName: 'Sparkles', category: 'outdoor', enabled: true },
  { id: '5', name: 'Churrasqueira Gourmet & Parrilla', iconName: 'Flame', category: 'outdoor', enabled: true },
  { id: '6', name: 'Cozinha Completa & Adega Climatizada', iconName: 'UtensilsCrossed', category: 'essentials', enabled: true },
  { id: '7', name: 'Smart TV 75" com Netflix e Prime', iconName: 'Tv', category: 'entertainment', enabled: true },
  { id: '8', name: 'Estacionamento Privativo (4 vagas)', iconName: 'Car', category: 'essentials', enabled: true },
  { id: '9', name: 'Vista Panorâmica do Pôr do Sol', iconName: 'Sun', category: 'outdoor', enabled: true },
  { id: '10', name: 'Acesso Direto à Praia (Pé na Areia)', iconName: 'Footprints', category: 'outdoor', enabled: true },
  { id: '11', name: 'Lareira Externa (Fire Pit)', iconName: 'FlameKindling', category: 'outdoor', enabled: true },
  { id: '12', name: 'Cofre e Monitoramento 24h', iconName: 'ShieldCheck', category: 'safety', enabled: true },
];

export const initialHouseRules: HouseRules = {
  petsAllowed: true,
  petNotes: 'Animais de pequeno e médio porte são bem-vindos com taxa única de higienização.',
  partiesAllowed: false,
  smokingAllowed: false,
  smokingNotes: 'Permitido apenas nas áreas abertas da varanda e jardim.',
  maxVisitors: 4,
  quietHoursStart: '22:00',
  quietHoursEnd: '08:00',
  customRules: [
    'Manter os portões de acesso à praia trancados ao sair.',
    'Proibido copos de vidro dentro da piscina (utilizar acrílico fornecido).',
    'Desligar o ar-condicionado ao ausentar-se da suíte.',
  ],
};

export const initialGallery: GalleryPhoto[] = [
  {
    id: 'photo-1',
    url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&auto=format&fit=crop&q=80',
    caption: 'Vista frontal da Villa do Poente ao entardecer com piscina iluminada',
    category: 'Hero',
    isMain: true,
    order: 1,
  },
  {
    id: 'photo-2',
    url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1000&auto=format&fit=crop&q=80',
    caption: 'Fachada principal com deck de madeira e piscina de borda infinita',
    category: 'Área externa',
    isMain: false,
    order: 2,
  },
  {
    id: 'photo-3',
    url: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1000&auto=format&fit=crop&q=80',
    caption: 'Suíte Master Panorâmica com cama King e varanda privativa',
    category: 'Quartos',
    isMain: false,
    order: 3,
  },
  {
    id: 'photo-4',
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&auto=format&fit=crop&q=80',
    caption: 'Living Integrado com pé direito duplo e vista mar',
    category: 'Sala',
    isMain: false,
    order: 4,
  },
  {
    id: 'photo-5',
    url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1000&auto=format&fit=crop&q=80',
    caption: 'Cozinha Gourmet totalmente equipada com ilha de quartzo',
    category: 'Cozinha',
    isMain: false,
    order: 5,
  },
  {
    id: 'photo-6',
    url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1000&auto=format&fit=crop&q=80',
    caption: 'Banheiro da Suíte Principal com imersão e vista para a natureza',
    category: 'Banheiros',
    isMain: false,
    order: 6,
  },
  {
    id: 'photo-7',
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000&auto=format&fit=crop&q=80',
    caption: 'Pôr do Sol lendário na Praia de Geribá visto do deck da villa',
    category: 'Vista',
    isMain: false,
    order: 7,
  },
  {
    id: 'photo-8',
    url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1000&auto=format&fit=crop&q=80',
    caption: 'Spa e Jacuzzi com cromoterapia para momentos de puro relaxamento',
    category: 'Experiências',
    isMain: false,
    order: 8,
  },
];

export const initialLocalRecommendations: LocalRecommendation[] = [
  {
    id: 'rec-1',
    name: 'Chez Michou Crêperie',
    category: 'Restaurantes',
    description: 'A clássica e descontraída creperia da Rua das Pedras. Ponto de encontro tradicional em Búzios.',
    address: 'Rua das Pedras, 168 - Centro, Búzios - RJ',
    googleMapsUrl: 'https://maps.google.com/?q=Chez+Michou+Buzios',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop&q=80',
    isHostRecommended: true,
    isFeatured: true,
  },
  {
    id: 'rec-2',
    name: 'Fishbone Restaurante & Club',
    category: 'Restaurantes',
    description: 'Beach club renomado na Praia de Geribá com frutos do mar frescos, drinques autorais e DJs ao pôr do sol.',
    address: 'Praia de Geribá, Canto Esquerdo - Búzios',
    googleMapsUrl: 'https://maps.google.com/?q=Fishbone+Geriba',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80',
    isHostRecommended: true,
    isFeatured: true,
  },
  {
    id: 'rec-3',
    name: 'Praia da Ferradurinha',
    category: 'Praias',
    description: 'Pequena enseada de águas calmas e cristalinas, ideal para stand-up paddle, caiaque e banho com tartarugas.',
    address: 'Canto Esquerdo de Geribá, Búzios - RJ',
    googleMapsUrl: 'https://maps.google.com/?q=Praia+da+Ferradurinha',
    imageUrl: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600&auto=format&fit=crop&q=80',
    isHostRecommended: true,
    isFeatured: true,
  },
  {
    id: 'rec-4',
    name: 'Trilha da Ponta do Pai Vitório',
    category: 'Trilhas',
    description: 'Caminhada leve de 15 min na Praia da Manguinhos com vista exuberante e cenário similar ao filme A Praia.',
    address: 'Praia de Manguinhos, Búzios - RJ',
    googleMapsUrl: 'https://maps.google.com/?q=Pai+Vitorio+Buzios',
    imageUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&auto=format&fit=crop&q=80',
    isHostRecommended: true,
    isFeatured: false,
  },
  {
    id: 'rec-5',
    name: 'Supermercado Extra / Princesa Geribá',
    category: 'Mercados',
    description: 'Supermercado completo a 3 minutos da propriedade com padaria artesanal, carnes selecionadas e vinhos.',
    address: 'Av. José Bento Ribeiro Dantas, 2200 - Geribá',
    googleMapsUrl: 'https://maps.google.com/?q=Supermercado+Geriba+Buzios',
    imageUrl: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=600&auto=format&fit=crop&q=80',
    isHostRecommended: false,
    isFeatured: false,
  },
  {
    id: 'rec-6',
    name: 'Drogaria Raia Geribá 24h',
    category: 'Farmácias',
    description: 'Farmácia completa 24 horas perto do trevo de Geribá.',
    address: 'Av. José Bento Ribeiro Dantas, 1800',
    googleMapsUrl: 'https://maps.google.com/?q=Drogaria+Raia+Geriba',
    imageUrl: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?w=600&auto=format&fit=crop&q=80',
    isHostRecommended: false,
    isFeatured: false,
  },
  {
    id: 'rec-7',
    name: 'Golden Café Búzios',
    category: 'Cafés',
    description: 'Cafés especiais, brunch refinado e pães de fermentação natural.',
    address: 'Rua das Pedras, 82 - Centro',
    googleMapsUrl: 'https://maps.google.com/?q=Golden+Cafe+Buzios',
    imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&auto=format&fit=crop&q=80',
    isHostRecommended: true,
    isFeatured: false,
  },
];

export const initialConciergeSettings: ConciergeSettings = {
  enabled: true,
  name: 'Villa Concierge',
  welcomeMessage:
    'Olá! Sou o Concierge Virtual exclusivo da Villa do Poente. Estou à disposição para informar a senha do Wi-Fi, instruções de comodidades, recomendações gastronômicas e praias em Búzios. Como posso auxiliar você hoje?',
  tone: 'Acolhedor',
  statsToday: {
    conversations: 27,
    answeredPercentage: 94,
    forwardedToHost: 2,
    satisfactionRating: 4.9,
  },
};

export const initialKnowledgeBase: KnowledgeItem[] = [
  {
    id: 'kb-1',
    section: 'Hospedagem',
    question: 'Qual é o nome da rede e senha do Wi-Fi?',
    answer: 'A rede principal é "VillaDoPoente_5G" e a senha é "poente@buzios2026". Há repetidores em todos os quartos.',
    updatedAt: '2026-08-01',
  },
  {
    id: 'kb-2',
    section: 'Check-in',
    question: 'Como funciona o check-in e acesso à casa?',
    answer: 'O check-in é automático via fechadura eletrônica por senha. Enviamos a sua senha individual 2 horas antes do horário de entrada (14:00).',
    updatedAt: '2026-08-02',
  },
  {
    id: 'kb-3',
    section: 'Checkout',
    question: 'Qual o horário de checkout e o procedimento de saída?',
    answer: 'O checkout é até às 11:00. Solicitamos apenas que apague as luzes, desligue o ar-condicionado e feche as portas de acesso ao deck.',
    updatedAt: '2026-08-02',
  },
  {
    id: 'kb-4',
    section: 'Comodidades',
    question: 'Como liga e ajusta a temperatura da Jacuzzi?',
    answer: 'O painel digital fica na lateral de madeira. Pressione "Power" e ajuste nos botões de seta para até 38°C. O aquecimento leva aproximadamente 25 minutos.',
    updatedAt: '2026-08-05',
  },
  {
    id: 'kb-5',
    section: 'Regras',
    question: 'Posso receber visitantes adicionais?',
    answer: 'Permitimos até 4 visitantes durante o dia mediante aviso prévio ao anfitrião. Pernoites de não cadastrados não são permitidos.',
    updatedAt: '2026-08-03',
  },
  {
    id: 'kb-6',
    section: 'Emergências',
    question: 'Onde fica a chave geral de energia e caixa d’água?',
    answer: 'O quadro elétrico fica no corredor da lavanderia. Em caso de dúvidas graves ou emergências, ligue diretamente para o anfitrião Ícaro no +55 21 99876-5432.',
    updatedAt: '2026-08-06',
  },
];

export const initialAutomations: Automation[] = [
  {
    id: 'aut-1',
    type: 'pre_stay',
    title: 'Pré-estadia',
    description: 'Enviar mensagem com informações importantes e localização antes do check-in.',
    enabled: true,
    relativeTiming: '2 dias antes',
    time: '10:00',
    messageTemplate: `Olá {{nome}},

Sua estadia na {{nome_hospedagem}} está se aproximando!

Seu check-in está confirmado para o dia {{check_in}} a partir das 14:00.

Preparamos tudo com excelência para receber você. Para conferir o guia completo da casa e localização no Waze/Google Maps, acesse:
{{link_airbnb}}

Se necessitar de qualquer suporte antes da sua chegada, basta responder a esta mensagem.`,
    iconName: 'CalendarClock',
  },
  {
    id: 'aut-2',
    type: 'welcome',
    title: 'Boas-vindas',
    description: 'Enviar mensagem de boas-vindas e senha de acesso no dia do check-in.',
    enabled: true,
    relativeTiming: 'No dia do check-in',
    time: '14:00',
    messageTemplate: `Boas-vindas à {{nome_hospedagem}}, {{nome}}!

Seu código de acesso da fechadura principal é: **8820#**.

Rede Wi-Fi: VillaDoPoente_5G
Senha Wi-Fi: poente@buzios2026

Nosso Concierge Virtual via WhatsApp está disponível 24 horas para esclarecer dúvidas sobre a propriedade ou indicar restaurantes e praias em Búzios.

Desejamos uma excelente estadia!`,
    iconName: 'Home',
  },
  {
    id: 'aut-3',
    type: 'during_stay',
    title: 'Durante a estadia',
    description: 'Verificar se o hóspede está confortável e se precisa de alguma assistência.',
    enabled: false,
    relativeTiming: '2º dia da estadia',
    time: '11:00',
    messageTemplate: `Olá {{nome}}, gostaríamos de confirmar se a sua estadia na {{nome_hospedagem}} está atendendo todas as suas expectativas.

Caso necessite de suporte adicional ou recomendações para o dia de hoje, estamos à disposição.`,
    iconName: 'HeartHandshake',
  },
  {
    id: 'aut-4',
    type: 'checkout',
    title: 'Lembrete de Checkout',
    description: 'Enviar orientações e lembrete educado na véspera da saída.',
    enabled: true,
    relativeTiming: '1 dia antes do checkout',
    time: '18:00',
    messageTemplate: `Olá {{nome}}, esperamos que sua experiência em Búzios esteja sendo excelente.

Lembramos que o seu checkout está agendado para amanhã, dia {{check_out}}, até às 11:00.

Orientações de saída:
1. Desligar luzes e aparelhos de ar-condicionado.
2. Trancar os acessos ao deck.

Caso necessite que agendemos um serviço de transfer ou táxi para sua saída, favor nos avisar.`,
    iconName: 'LogOut',
  },
  {
    id: 'aut-5',
    type: 'post_stay',
    title: 'Pós-estadia & Avaliação',
    description: 'Agradecer a preferência e solicitar avaliação 5 estrelas no Airbnb.',
    enabled: true,
    relativeTiming: '1 dia após checkout',
    time: '12:00',
    messageTemplate: `Olá {{nome}}, agradecemos imensamente por escolher a {{nome_hospedagem}} para a sua viagem!

Foi um prazer receber você. Se puder dedicar um momento para nos deixar sua avaliação no Airbnb, ficaremos muito gratos:
{{link_airbnb}}

Esperamos poder recebê-lo novamente em breve.`,
    iconName: 'Star',
  },
];

export const initialWhatsAppStatus: WhatsAppConnection = {
  status: 'connected',
  provider: 'Evolution API v2.1',
  phone: '+55 21 99876-5432',
  lastSync: '2026-08-10T20:30:00Z',
};

export const initialStays: Stay[] = [
  {
    id: 'stay-1',
    guestId: 'guest-1',
    guestName: 'João Silva',
    guestPhone: '+55 21 98822-1100',
    checkIn: '2026-08-14',
    checkOut: '2026-08-17',
    guestsCount: 2,
    status: 'confirmed',
    source: 'Airbnb',
    notes: 'Viagem romântica de aniversário de namoro. Solicitou indicação de champanhe.',
    allowAutomations: true,
    nextAutomation: {
      title: 'Mensagem pré-estadia',
      scheduledFor: '12/08 às 10:00',
    },
  },
  {
    id: 'stay-2',
    guestId: 'guest-2',
    guestName: 'Maria Souza',
    guestPhone: '+55 11 97654-3210',
    checkIn: '2026-08-18',
    checkOut: '2026-08-21',
    guestsCount: 3,
    status: 'confirmed',
    source: 'Airbnb',
    notes: 'Família com criança pequena. Pediu berço desmontável na suíte 2.',
    allowAutomations: true,
    nextAutomation: {
      title: 'Mensagem pré-estadia',
      scheduledFor: '16/08 às 10:00',
    },
  },
  {
    id: 'stay-3',
    guestId: 'guest-3',
    guestName: 'Carlos Eduardo Mendes',
    guestPhone: '+55 31 99123-4567',
    checkIn: '2026-08-08',
    checkOut: '2026-08-12',
    guestsCount: 4,
    status: 'active',
    source: 'Airbnb',
    notes: 'Hóspede atualmente na casa. Amantes de churrasco.',
    allowAutomations: true,
    nextAutomation: {
      title: 'Lembrete de Checkout',
      scheduledFor: '11/08 às 18:00',
    },
  },
  {
    id: 'stay-4',
    guestId: 'guest-4',
    guestName: 'Fernanda Lima',
    guestPhone: '+55 41 98411-9988',
    checkIn: '2026-08-01',
    checkOut: '2026-08-05',
    guestsCount: 5,
    status: 'completed',
    source: 'Manual',
    notes: 'Reserva direta tratada via Instagram. Excelente hóspede.',
    allowAutomations: true,
  },
  {
    id: 'stay-5',
    guestId: 'guest-5',
    guestName: 'Lucas & Beatriz',
    guestPhone: '+55 21 97112-3344',
    checkIn: '2026-08-25',
    checkOut: '2026-08-30',
    guestsCount: 6,
    status: 'confirmed',
    source: 'Airbnb',
    notes: 'Aniversário de 30 anos da Beatriz.',
    allowAutomations: true,
    nextAutomation: {
      title: 'Mensagem pré-estadia',
      scheduledFor: '23/08 às 10:00',
    },
  },
];

export const initialBlockedDates: BlockedDate[] = [
  {
    id: 'block-1',
    startDate: '2026-08-22',
    endDate: '2026-08-24',
    reason: 'Manutenção',
    notes: 'Limpeza profunda do filtro da piscina e polimento do deck de ipê.',
  },
  {
    id: 'block-2',
    startDate: '2026-09-01',
    endDate: '2026-09-04',
    reason: 'Uso Próprio',
    notes: 'Feriado em família do proprietário.',
  },
];

export const initialAnalytics: AnalyticsSummary = {
  siteVisits: 2483,
  visitsGrowth: 18.4,
  airbnbClicks: 684,
  airbnbClicksGrowth: 12.7,
  whatsappClicks: 192,
  whatsappClicksGrowth: 24.2,
  activeGuests: 4,
  conversionRate: 27.5,
};

export const initialTrafficSources: TrafficSource[] = [
  { source: 'Instagram @villadopoente', percentage: 42, visits: 1042, color: '#E1306C' },
  { source: 'Google Organic / Maps', percentage: 28, visits: 695, color: '#4285F4' },
  { source: 'Airbnb Direct Link', percentage: 18, visits: 446, color: '#FF385C' },
  { source: 'Acesso Direto (Site)', percentage: 8, visits: 198, color: '#10B981' },
  { source: 'Outros / WhatsApp Share', percentage: 4, visits: 102, color: '#8B5CF6' },
];

export const initialPerformance30Days: PerformanceDataPoint[] = [
  { label: '01/08', visits: 62, airbnbClicks: 18, whatsappClicks: 5 },
  { label: '02/08', visits: 78, airbnbClicks: 22, whatsappClicks: 6 },
  { label: '03/08', visits: 85, airbnbClicks: 25, whatsappClicks: 8 },
  { label: '04/08', visits: 90, airbnbClicks: 28, whatsappClicks: 7 },
  { label: '05/08', visits: 110, airbnbClicks: 32, whatsappClicks: 9 },
  { label: '06/08', visits: 95, airbnbClicks: 24, whatsappClicks: 6 },
  { label: '07/08', visits: 130, airbnbClicks: 38, whatsappClicks: 12 },
  { label: '08/08', visits: 145, airbnbClicks: 42, whatsappClicks: 14 },
  { label: '09/08', visits: 120, airbnbClicks: 35, whatsappClicks: 10 },
  { label: '10/08', visits: 160, airbnbClicks: 48, whatsappClicks: 15 },
];
