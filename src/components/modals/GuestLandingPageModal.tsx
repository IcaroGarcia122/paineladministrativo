import React, { useState } from 'react';
import {
  X,
  ExternalLink,
  Users,
  Bed,
  Bath,
  Maximize2,
  MapPin,
  Star,
  Wifi,
  Wind,
  Waves,
  Sparkles,
  Flame,
  UtensilsCrossed,
  Tv,
  Car,
  Sun,
  Footprints,
  FlameKindling,
  ShieldCheck,
  Building2,
  MessageSquare,
  Bot,
  Send,
  Calendar,
  Compass,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const GuestLandingPageModal: React.FC = () => {
  const {
    isLandingModalOpen,
    setIsLandingModalOpen,
    property,
    amenities,
    houseRules,
    gallery,
    recommendations,
    concierge,
    knowledgeBase,
  } = useApp();

  const [isConciergeOpen, setIsConciergeOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<
    { sender: 'user' | 'bot'; text: string; time: string }[]
  >([
    {
      sender: 'bot',
      text: concierge.welcomeMessage,
      time: '14:00',
    },
  ]);
  const [chatInput, setChatInput] = useState('');

  if (!isLandingModalOpen) return null;

  const mainPhoto = gallery.find((p) => p.isMain) || gallery[0];
  const enabledAmenities = amenities.filter((a) => a.enabled);

  const getAmenityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wifi': return Wifi;
      case 'Wind': return Wind;
      case 'Waves': return Waves;
      case 'Sparkles': return Sparkles;
      case 'Flame': return Flame;
      case 'UtensilsCrossed': return UtensilsCrossed;
      case 'Tv': return Tv;
      case 'Car': return Car;
      case 'Sun': return Sun;
      case 'Footprints': return Footprints;
      case 'FlameKindling': return FlameKindling;
      case 'ShieldCheck': return ShieldCheck;
      default: return Building2;
    }
  };

  const handleSendGuestMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userText = chatInput.trim();
    const timeNow = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

    setChatMessages((prev) => [...prev, { sender: 'user', text: userText, time: timeNow }]);
    setChatInput('');

    setTimeout(() => {
      const lower = userText.toLowerCase();
      const match = knowledgeBase.find(
        (k) =>
          k.question.toLowerCase().includes(lower) ||
          k.answer.toLowerCase().includes(lower) ||
          lower.split(' ').some((w) => w.length > 3 && k.question.toLowerCase().includes(w))
      );

      let botResponse = '';
      if (match) {
        botResponse = match.answer;
      } else {
        botResponse = `Obrigado por sua mensagem! Para essa dúvida específica, estarei encaminhando direto ao anfitrião Ícaro. Há algo mais em que posso ajudar?`;
      }

      setChatMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: botResponse,
          time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }, 500);
  };

  return (
    <div
      id="guest-landing-page-modal"
      className="fixed inset-0 z-50 bg-zinc-950/80 backdrop-blur-md flex flex-col overflow-hidden animate-in fade-in duration-200"
    >
      {/* Top Preview Admin Bar */}
      <div className="bg-zinc-900 text-white px-4 py-3 flex items-center justify-between border-b border-zinc-800 flex-shrink-0">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-mono text-zinc-300">
            Modo de Visualização do Hóspede •{' '}
            <strong className="text-white font-bold">{property.customDomain}</strong>
          </span>
        </div>

        <button
          onClick={() => setIsLandingModalOpen(false)}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
          <span>Fechar Visualização</span>
        </button>
      </div>

      {/* Main Landing Page Scrollable Canvas */}
      <div className="flex-1 overflow-y-auto bg-zinc-50 text-zinc-900">
        {/* Navigation Bar */}
        <header className="sticky top-0 z-20 bg-white/90 backdrop-blur-md border-b border-zinc-200/80 px-6 py-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl overflow-hidden border border-zinc-200 shadow-2xs">
                <img src={property.logoUrl} alt={property.name} className="w-full h-full object-cover" />
              </div>
              <span className="text-lg font-bold text-zinc-900 tracking-tight">{property.name}</span>
            </div>

            <a
              href={property.airbnbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white rounded-full text-xs font-bold shadow-md transition-all"
            >
              <span>Reservar no Airbnb</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </header>

        {/* Hero Banner */}
        <section className="relative h-[480px] bg-zinc-900 overflow-hidden flex items-end p-6 md:p-12 text-white">
          <img
            src={mainPhoto?.url}
            alt={property.name}
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

          <div className="relative z-10 max-w-4xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400 bg-zinc-900/80 backdrop-blur-xs px-3 py-1 rounded-full w-max border border-rose-500/30">
              <MapPin className="w-3.5 h-3.5" /> {property.location}
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {property.name}
            </h1>
            <p className="text-sm md:text-lg text-zinc-200 max-w-2xl font-light">
              {property.subtitle}
            </p>

            {/* Quick Specs */}
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-zinc-200">
              <span className="bg-white/10 px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-zinc-300" />
                <span>Até {property.capacity} hóspedes</span>
              </span>
              <span className="bg-white/10 px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5">
                <Bed className="w-3.5 h-3.5 text-zinc-300" />
                <span>{property.bedrooms} suítes</span>
              </span>
              <span className="bg-white/10 px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5">
                <Bath className="w-3.5 h-3.5 text-zinc-300" />
                <span>{property.bathrooms} banheiros</span>
              </span>
              <span className="bg-white/10 px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>4.98 (Airbnb Superhost)</span>
              </span>
            </div>
          </div>
        </section>

        {/* Content Container */}
        <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
          {/* Section: Description */}
          <div className="bg-white p-8 rounded-3xl border border-zinc-200/80 shadow-xs space-y-4">
            <h2 className="text-xl font-bold text-zinc-900">Sobre a Hospedagem</h2>
            <p className="text-sm text-zinc-600 leading-relaxed font-light">{property.description}</p>
          </div>

          {/* Section: Comodidades */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-zinc-900">O que este lugar oferece</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {enabledAmenities.map((item) => {
                const Icon = getAmenityIcon(item.iconName);
                return (
                  <div
                    key={item.id}
                    className="p-4 bg-white rounded-2xl border border-zinc-200/80 shadow-2xs flex items-center gap-3 text-xs font-bold text-zinc-800"
                  >
                    <Icon className="w-5 h-5 text-rose-600 flex-shrink-0" />
                    <span className="truncate">{item.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section: Photos */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-zinc-900">Galeria de Fotos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {gallery.slice(0, 6).map((photo) => (
                <div
                  key={photo.id}
                  className="h-56 rounded-2xl overflow-hidden border border-zinc-200/80 shadow-2xs relative group"
                >
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex items-end text-xs text-white font-medium">
                    {photo.caption}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Guia da Região */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-zinc-900">Recomendações Locais do Anfitrião</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recommendations.slice(0, 3).map((rec) => (
                <div
                  key={rec.id}
                  className="bg-white p-4 rounded-2xl border border-zinc-200/80 shadow-2xs space-y-2 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <img src={rec.imageUrl} alt={rec.name} className="w-full h-36 object-cover rounded-xl" />
                    <span className="text-[10px] font-bold bg-rose-50 text-rose-700 px-2 py-0.5 rounded border border-rose-200">
                      {rec.category}
                    </span>
                    <h4 className="text-sm font-bold text-zinc-900">{rec.name}</h4>
                    <p className="text-xs text-zinc-600 line-clamp-2">{rec.description}</p>
                  </div>
                  <a
                    href={rec.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-rose-600 hover:underline pt-2 block"
                  >
                    Ver no Google Maps →
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Airbnb Reservation CTA */}
          <div className="bg-gradient-to-r from-rose-600 to-rose-700 text-white p-8 rounded-3xl shadow-lg text-center space-y-4">
            <h2 className="text-2xl font-extrabold">Pronto para viver essa experiência em Búzios?</h2>
            <p className="text-sm text-rose-100 max-w-xl mx-auto">
              Garanta suas datas diretamente na nossa página do Airbnb com garantia oficial do anfitrião.
            </p>
            <a
              href={property.airbnbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-rose-700 font-extrabold rounded-full shadow-md hover:bg-rose-50 transition-all text-sm cursor-pointer"
            >
              <span>Ver Disponibilidade no Airbnb</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Virtual Concierge Button & Drawer */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isConciergeOpen ? (
          <button
            onClick={() => setIsConciergeOpen(true)}
            className="flex items-center gap-3 px-5 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-full shadow-xl transition-all hover:scale-105 cursor-pointer"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
            <MessageSquare className="w-5 h-5" />
            <span className="text-xs sm:text-sm">Concierge WhatsApp IA</span>
          </button>
        ) : (
          <div className="w-80 sm:w-96 bg-zinc-900 text-white rounded-3xl shadow-2xl border border-zinc-800 overflow-hidden flex flex-col h-[460px] animate-in slide-in-from-bottom-5 duration-200">
            <div className="p-4 bg-emerald-600 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Bot className="w-6 h-6 text-white" />
                <div>
                  <h4 className="text-xs font-bold">{concierge.name}</h4>
                  <span className="text-[10px] text-emerald-100">Concierge Virtual da Villa</span>
                </div>
              </div>
              <button
                onClick={() => setIsConciergeOpen(false)}
                className="p-1 hover:bg-emerald-700 rounded-lg cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#0b141a] text-xs">
              {chatMessages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl leading-relaxed ${
                      m.sender === 'user'
                        ? 'bg-[#005c4b] text-white rounded-tr-xs'
                        : 'bg-[#202c33] text-zinc-100 rounded-tl-xs'
                    }`}
                  >
                    <p className="whitespace-pre-line">{m.text}</p>
                    <span className="text-[9px] text-zinc-400 mt-1 block text-right">
                      {m.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSendGuestMessage} className="p-2.5 bg-zinc-900 flex gap-2 border-t border-zinc-800">
              <input
                type="text"
                placeholder="Pergunte sobre wifi, jacuzzi, praias..."
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                className="flex-1 bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
              />
              <button
                type="submit"
                className="p-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
