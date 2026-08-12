import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { getSiteContent, trackAirbnbClick } from "@/lib/cms.functions";
import { 
  Waves, 
  Mountain, 
  UtensilsCrossed, 
  Wifi, 
  Car, 
  Bath, 
  Tv, 
  Snowflake,
  Home,
  BedDouble,
  Maximize2,
  Users,
  MessageCircle,
  Compass,
  Star,
  ArrowRight,
  Lock,
  Bot,
  X,
  Send,
  Smartphone,
  CheckCheck,
  Phone,
  Video,
  MoreVertical,
  Paperclip,
  Smile,
  Mic,
  Sparkles,
  ChevronLeft,
  ShieldCheck,
  MapPin,
  Clock,
  Sparkle,
  Image as ImageIcon,
  Check,
  SlidersHorizontal,
  ExternalLink
} from "lucide-react";

import heroImg from "@/components/assets/hero-chale.jfif";
import banheiraImg from "@/components/assets/banheira.jfif";
import salaImg from "@/components/assets/sala.jfif";
import cozinhaImg from "@/components/assets/cozinha.jfif";
import quartoImg from "@/components/assets/quarto.jfif";
import img12 from "@/components/assets/image-12.jfif";
import img13 from "@/components/assets/image-13.jfif";
import img14 from "@/components/assets/image-14.jfif";
import img15 from "@/components/assets/image-15.jfif";
import { AdminLoginModal } from "@/components/modals/AdminLoginModal";
import { useApp } from "@/context/AppContext";
import { findBestKnowledgeMatch } from "@/utils/concierge";

interface GuestSiteViewProps {
  onAdminLogin: () => void;
}

export const GuestSiteView: React.FC<GuestSiteViewProps> = ({ onAdminLogin }) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isConciergeOpen, setIsConciergeOpen] = useState(false);
  const [activeGalleryTab, setActiveGalleryTab] = useState<'all' | 'suite' | 'nature' | 'living'>('all');
  const [lightboxImage, setLightboxImage] = useState<{ url: string; title: string; subtitle: string } | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const { concierge, knowledgeBase } = useApp();

  // Scroll detect for header background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [chatMessages, setChatMessages] = useState<
    { sender: 'user' | 'bot'; text: string; time: string }[]
  >([
    {
      sender: 'bot',
      text: concierge.welcomeMessage || 'Olá! Sou o Concierge Virtual do Chalé A-Frame. Como posso tornar sua estadia em Florianópolis memorável?',
      time: '14:00',
    },
  ]);
  const [chatInput, setChatInput] = useState('');

  const { data: content = {
    id: "",
    chale_name: "Chalé A-Frame Florianópolis",
    hero_title: "Conecte-se com o que realmente importa.",
    hero_subtitle: "CHALÉ EXCLUSIVO EM FLORIANÓPOLIS",
    hero_description: "Um refúgio privativo entre a natureza e o mar, criado para momentos inesquecíveis.",
    about_title: "Seu refúgio entre a natureza e o mar",
    about_text_1: "Desfrute de uma experiência única em um chalé privativo, cercado pela natureza e com uma vista encantadora para o mar.",
    about_text_2: "Com arquitetura em estilo A-frame, estrutura em madeira, amplas paredes de vidro e ambientes integrados, o espaço foi pensado para proporcionar conforto, privacidade e momentos especiais.",
    airbnb_url: "https://www.airbnb.com.br/rooms/1703914788039625027",
  } } = useQuery({
    queryKey: ["site-content"],
    queryFn: () => getSiteContent(),
  });

  const trackClick = useMutation({
    mutationFn: (data: { source: string }) => trackAirbnbClick({ data })
  });

  const handleSendGuestMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userText = chatInput.trim();
    const timeNow = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

    setChatMessages((prev) => [...prev, { sender: 'user', text: userText, time: timeNow }]);
    setChatInput('');

    setTimeout(() => {
      const match = findBestKnowledgeMatch(userText, knowledgeBase);

      let botResponse = '';
      if (match) {
        botResponse = match.answer;
      } else {
        botResponse = 'Agradecemos a mensagem! Nossa inteligência Concierge já registrou sua dúvida e notificamos o anfitrião diretamente.';
      }

      setChatMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: botResponse,
          time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }, 400);
  };

  const [mockupMessages, setMockupMessages] = useState<
    { sender: 'user' | 'concierge'; text: string; time: string }[]
  >([
    {
      sender: 'concierge',
      text: 'Olá! Seja muito bem-vindo ao Chalé A-Frame! 🌿 Como posso tornar sua hospedagem ainda mais especial hoje?',
      time: '09:30',
    },
    {
      sender: 'user',
      text: 'Oi! Gostaria de uma indicação de restaurante bacana para jantar perto do chalé.',
      time: '09:31',
    },
    {
      sender: 'concierge',
      text: 'Com certeza! Indicamos o famoso Ostradamus no Ribeirão da Ilha (a 12 min), com ostras frescas e vista espetacular do pôr do sol! 🌅\n\nQuer a localização no mapa ou a senha do Wi-Fi do chalé?',
      time: '09:31',
    },
    {
      sender: 'user',
      text: 'Perfeito! Qual é a senha do Wi-Fi e o horário do check-in?',
      time: '09:32',
    },
    {
      sender: 'concierge',
      text: '📶 Wi-Fi: Chale_AFrame_5G\n🔑 Senha: natureza2026\n⏰ Check-in: A partir das 15:00.\n\nAproveite a hidromassagem e a vista para o mar! Tenha uma excelente estadia! ✨',
      time: '09:32',
    },
  ]);
  const [mockupInput, setMockupInput] = useState('');

  const handleSendMockupMessage = (text: string) => {
    if (!text.trim()) return;
    const timeNow = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    const userMsg = text.trim();

    setMockupMessages((prev) => [
      ...prev,
      { sender: 'user', text: userMsg, time: timeNow },
    ]);
    setMockupInput('');

    setTimeout(() => {
      const match = findBestKnowledgeMatch(userMsg, knowledgeBase);
      let botResponse = '';

      if (match) {
        botResponse = match.answer;
      } else {
        botResponse = '✨ Atendimento Concierge IA: Mensagem recebida! Nossa equipe e sistema inteligente garantem que sua estadia no Chalé A-Frame seja perfeita.';
      }

      setMockupMessages((prev) => [
        ...prev,
        {
          sender: 'concierge',
          text: botResponse,
          time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }, 400);
  };

  // Gallery items with categories
  const galleryItems = [
    { id: 1, url: heroImg, title: "Design A-Frame Exclusivo", subtitle: "Fachada icônica em meio à mata preservada", category: "nature", colSpan: "md:col-span-8" },
    { id: 2, url: quartoImg, title: "Suíte Aconchegante", subtitle: "Conforto supremo com vista panorâmica", category: "suite", colSpan: "md:col-span-4" },
    { id: 3, url: banheiraImg, title: "Hidromassagem Interna", subtitle: "Spa e relaxamento privativo", category: "suite", colSpan: "md:col-span-4" },
    { id: 4, url: salaImg, title: "Living Integrado", subtitle: "Pé-direito alto e iluminação natural", category: "living", colSpan: "md:col-span-4" },
    { id: 5, url: cozinhaImg, title: "Cozinha Gourmet", subtitle: "Equipada para momentos especiais", category: "living", colSpan: "md:col-span-4" },
    { id: 6, url: img12, title: "Deck & Balanço Suspenso", subtitle: "O lugar perfeito para contemplar", category: "nature", colSpan: "md:col-span-6" },
    { id: 7, url: img13, title: "Vista Panorâmica do Mar", subtitle: "Horizonte infinito no Sul da Ilha", category: "nature", colSpan: "md:col-span-6" },
  ];

  const filteredGallery = galleryItems.filter(item => 
    activeGalleryTab === 'all' ? true : item.category === activeGalleryTab
  );

  return (
    <div className="min-h-screen bg-[#0F0D0A] text-[#FBF9F4] font-sans antialiased selection:bg-[#C59A55] selection:text-black overflow-x-hidden">
      
      {/* 1. Header Fixo & Flutuante Premium */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-[#14100C]/90 backdrop-blur-xl border-b border-[#C59A55]/20 py-3.5 shadow-2xl" 
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-6"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#C59A55] via-[#E6C994] to-[#B8860B] p-[1px] shadow-lg group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#14100C] rounded-full flex items-center justify-center">
                <Sparkle className="w-4 h-4 text-[#E6C994]" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-base sm:text-lg font-bold tracking-tight text-white leading-none">
                CHALÉ A-FRAME
              </span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#C59A55] font-semibold mt-0.5">
                Florianópolis • SC
              </span>
            </div>
          </a>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-medium text-white/80">
            <a href="#sobre" className="hover:text-[#E6C994] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-[#C59A55] after:transition-all">
              O Chalé
            </a>
            <a href="#galeria" className="hover:text-[#E6C994] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-[#C59A55] after:transition-all">
              Galeria
            </a>
            <a href="#experiencia" className="hover:text-[#E6C994] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-[#C59A55] after:transition-all">
              Experiência
            </a>
            <a href="#concierge" className="hover:text-[#E6C994] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-[#C59A55] after:transition-all">
              Concierge 24h
            </a>
            <a href="#comodidades" className="hover:text-[#E6C994] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-[#C59A55] after:transition-all">
              Comodidades
            </a>
          </nav>

          {/* Action Buttons Header */}
          <div className="flex items-center gap-3">
            {/* Botão Anfitrião / Login */}
            <button
              type="button"
              onClick={() => setIsLoginModalOpen(true)}
              className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/5 border border-white/10 hover:border-[#C59A55]/50 text-white/80 hover:text-white text-xs font-medium tracking-wider transition-all hover:bg-white/10 active:scale-95"
              title="Área do Anfitrião / Painel Admin"
            >
              <Lock className="w-3.5 h-3.5 text-[#C59A55]" />
              <span className="hidden sm:inline">Anfitrião</span>
            </button>

            {/* CTA Reservar */}
            <a
              href={content.airbnb_url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackClick.mutate({ source: 'header_nav' })}
              className="relative group overflow-hidden px-5 py-2.5 rounded-full bg-gradient-to-r from-[#C59A55] via-[#D4A85F] to-[#B8860B] text-black font-bold text-xs uppercase tracking-[0.15em] transition-all hover:shadow-[0_0_25px_rgba(197,154,85,0.4)] active:scale-95 flex items-center gap-2"
            >
              <span>Reservar</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </header>

      {/* 2. Hero Section Principal Luxo */}
      <section className="relative h-[100vh] min-h-[680px] z-10 flex items-center justify-center overflow-hidden">
        {/* Imagem de Fundo Parallax Suave (Fixed) */}
        <div className="fixed inset-0 w-full h-screen pointer-events-none z-0">
          <img
            src={heroImg}
            alt="Chalé A-frame Florianópolis"
            className="w-full h-full object-cover scale-105 filter brightness-90 contrast-105"
          />
          {/* Gradients de Sobreposição Sofisticados */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0D0A] via-black/40 to-black/60" />
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
        </div>

        {/* Conteúdo Central da Hero */}
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto pt-20">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2.5 border border-[#C59A55]/40 px-4 py-1.5 mb-8 rounded-full bg-black/40 backdrop-blur-md shadow-2xl"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E6C994]" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#E6C994] font-sans font-semibold">
              REFÚGIO BOUTIQUE DE LUXO • FLORIANÓPOLIS
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-8xl font-serif leading-[1.05] mb-6 tracking-tight text-white drop-shadow-lg"
          >
            Conecte-se com<br />o que realmente<br />
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              style={{ fontFamily: "'Pinyon Script', cursive" }}
              className="bg-gradient-to-r from-[#F3E5AB] via-[#E6C994] to-[#C59A55] bg-clip-text text-transparent block mt-1 text-6xl sm:text-8xl md:text-[9.5rem] font-normal tracking-wide py-1 drop-shadow-2xl"
            >
              importa.
            </motion.span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-sm sm:text-base md:text-lg font-sans mb-10 max-w-2xl mx-auto text-white/90 font-light leading-relaxed drop-shadow"
          >
            Chalé privativo estilo A-Frame com vista privilegiada para o mar, banheira de hidromassagem e deck exclusivo na mata nativa.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href={content.airbnb_url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackClick.mutate({ source: 'hero_main' })}
              className="w-full sm:w-auto bg-gradient-to-r from-[#C59A55] via-[#D4A85F] to-[#B8860B] text-black px-10 py-4.5 rounded-full font-sans font-bold tracking-[0.2em] hover:brightness-110 transition-all shadow-[0_10px_35px_rgba(197,154,85,0.3)] text-center text-xs sm:text-sm uppercase active:scale-95"
            >
              RESERVE NO AIRBNB
            </a>

            <a
              href="#sobre"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-4.5 rounded-full border border-white/30 hover:border-[#C59A55] bg-black/30 backdrop-blur-sm text-white font-sans text-xs sm:text-sm font-semibold tracking-widest uppercase transition-all hover:bg-white/10 text-center cursor-pointer"
            >
              CONHEÇA O CHALÉ ↓
            </a>
          </motion.div>
        </div>

        {/* Indicador Flutuante no Rodapé da Hero */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/50 animate-bounce">
          <span>Rolar para explorar</span>
        </div>
      </section>

      {/* 3. Ribbon de Destaques Rápidos */}
      <section className="relative z-20 bg-[#16120E] border-y border-[#C59A55]/20 py-6 text-white/90">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x-0 md:divide-x divide-[#C59A55]/15">
          <div className="flex flex-col items-center p-2">
            <div className="flex items-center gap-1 text-[#E6C994] mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#E6C994]" />
              ))}
            </div>
            <span className="text-sm font-bold text-white">5.0 ★ Nota Máxima</span>
            <span className="text-[10px] text-white/50 uppercase tracking-widest mt-0.5">Preferido dos Hóspedes</span>
          </div>

          <div className="flex flex-col items-center p-2">
            <Bath className="w-5 h-5 text-[#E6C994] mb-1" />
            <span className="text-sm font-bold text-white">Hidromassagem Privativa</span>
            <span className="text-[10px] text-white/50 uppercase tracking-widest mt-0.5">Spa Panorâmico</span>
          </div>

          <div className="flex flex-col items-center p-2">
            <Waves className="w-5 h-5 text-[#E6C994] mb-1" />
            <span className="text-sm font-bold text-white">Vista para o Oceano</span>
            <span className="text-[10px] text-white/50 uppercase tracking-widest mt-0.5">Sul da Ilha de Floripa</span>
          </div>

          <div className="flex flex-col items-center p-2">
            <Bot className="w-5 h-5 text-[#E6C994] mb-1" />
            <span className="text-sm font-bold text-white">Concierge IA 24/7</span>
            <span className="text-[10px] text-white/50 uppercase tracking-widest mt-0.5">Suporte Instantâneo</span>
          </div>
        </div>
      </section>

      {/* 4. Sobre o Chalé (O Refúgio) */}
      <section id="sobre" className="relative py-28 bg-[#FAF8F5] text-[#24170F] z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            
            {/* Lado Texto */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <div className="inline-flex items-center gap-3 text-[#C59A55] mb-4">
                <div className="w-10 h-[1px] bg-[#C59A55]" />
                <span className="text-xs uppercase tracking-[0.3em] font-bold">O Refúgio</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#24170F] mb-8 leading-[1.1] tracking-tight">
                {content.about_title}
              </h2>
              
              <div className="space-y-6 mb-10">
                <p className="text-base sm:text-lg text-zinc-700 font-sans leading-relaxed font-light">
                  {content.about_text_1}
                </p>
                
                <div className="grid grid-cols-2 gap-6 border-y border-[#C59A55]/20 py-8">
                  <div className="flex flex-col gap-1">
                    <span className="text-2xl sm:text-3xl font-serif text-[#24170F] italic">2 Suítes</span>
                    <span className="text-xs uppercase tracking-widest text-zinc-500 font-medium">Conforto absoluto</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-2xl sm:text-3xl font-serif text-[#24170F] italic">Vista Mar</span>
                    <span className="text-xs uppercase tracking-widest text-zinc-500 font-medium">Horizonte infinito</span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-zinc-600 font-sans leading-relaxed font-light">
                  {content.about_text_2}
                </p>
              </div>

              <a
                href={content.airbnb_url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackClick.mutate({ source: 'about_section' })}
                className="inline-flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full border border-[#C59A55] flex items-center justify-center transition-all group-hover:bg-[#C59A55] shrink-0 shadow-sm">
                  <ArrowRight className="w-5 h-5 text-[#C59A55] group-hover:text-white transition-colors" />
                </div>
                <span className="text-[#C59A55] font-sans font-bold uppercase tracking-[0.2em] text-xs sm:text-sm">
                  Verificar disponibilidade no Airbnb
                </span>
              </a>
            </motion.div>

            {/* Lado Imagem */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5]">
                <img src={img14} alt="Vista principal Chalé A-Frame" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/40 backdrop-blur-md rounded-2xl border border-white/20 text-white">
                  <p className="font-serif text-lg italic">"A harmonia perfeita entre sofisticação e natureza."</p>
                  <span className="text-[10px] uppercase tracking-widest text-[#E6C994]">Acomodação Exclusiva</span>
                </div>
              </div>

              {/* Elemento Decorativo Mágico */}
              <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-[#C59A55]/20 rounded-full blur-3xl pointer-events-none" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. Galeria de Destaques com Filtros & Lightbox */}
      <section id="galeria" className="relative py-28 bg-[#100D0A] text-white z-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-[#C59A55] font-sans font-bold text-xs uppercase tracking-[0.4em] mb-3 block">
                Galeria de Destaques
              </span>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif text-white leading-[1] tracking-tight">
                Onde o luxo encontra a <span className="italic text-[#C59A55]">natureza.</span>
              </h2>
            </div>

            {/* Filtros da Galeria */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'Todos' },
                { id: 'suite', label: 'Suíte & SPA' },
                { id: 'nature', label: 'Deck & Vista' },
                { id: 'living', label: 'Living & Gastronomia' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveGalleryTab(tab.id as any)}
                  className={`px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all ${
                    activeGalleryTab === tab.id
                      ? 'bg-[#C59A55] text-black font-bold shadow-lg'
                      : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Interativo de Fotos */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-12 gap-5">
            <AnimatePresence>
              {filteredGallery.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setLightboxImage({ url: item.url, title: item.title, subtitle: item.subtitle })}
                  className={`${item.colSpan} h-[320px] sm:h-[400px] relative group overflow-hidden rounded-3xl cursor-pointer border border-white/10 hover:border-[#C59A55]/50 transition-all`}
                >
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-serif text-white mb-1 group-hover:text-[#E6C994] transition-colors">{item.title}</h3>
                      <p className="text-xs text-white/70 font-light">{item.subtitle}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* Lightbox Modal para Fotos em Tela Cheia */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors z-50"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="max-w-5xl max-h-[85vh] flex flex-col items-center">
              <img
                src={lightboxImage.url}
                alt={lightboxImage.title}
                className="max-w-full max-h-[75vh] object-contain rounded-2xl border border-white/10 shadow-2xl"
              />
              <div className="text-center mt-4">
                <h3 className="text-2xl font-serif text-white">{lightboxImage.title}</h3>
                <p className="text-sm text-white/70 mt-1">{lightboxImage.subtitle}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 6. Concierge Virtual com WhatsApp Smartphone Mockup */}
      <section id="concierge" className="relative py-28 bg-[#FAF8F5] text-[#24170F] z-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Lado Texto & Vantagens */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C59A55]/10 border border-[#C59A55]/30 text-[#C59A55] font-sans font-bold text-xs uppercase tracking-[0.2em] mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  Atendimento Digital no WhatsApp
                </span>
                <h2 className="text-4xl sm:text-5xl font-serif text-[#24170F] leading-[1.15] tracking-tight">
                  Seu Concierge Virtual <br />
                  <span className="italic text-[#C59A55] font-serif">disponível 24 horas</span>
                </h2>
                <p className="text-base text-zinc-600 font-sans mt-4 leading-relaxed font-light">
                  Aproveite cada segundo do Sul da Ilha com assistência instantânea. Tire dúvidas da casa, solicite recomendações gastronômicas e receba dicas locais no seu próprio WhatsApp.
                </p>
              </div>

              {/* Grid de Benefícios */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Check-in & Regras", desc: "Instruções de acesso e Wi-Fi", icon: Home },
                  { title: "Roteiros & Praias", desc: "Dicas secretas de Florianópolis", icon: Compass },
                  { title: "Gastronomia Local", desc: "Restaurantes de frutos do mar & bistrôs", icon: UtensilsCrossed },
                  { title: "Suporte Instantâneo", desc: "Respostas em segundos via IA", icon: Smartphone },
                ].map((item, i) => (
                  <div key={i} className="p-5 bg-white rounded-2xl shadow-sm border border-[#C59A55]/15 hover:border-[#C59A55]/40 transition-all group">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] flex items-center justify-center mb-3 group-hover:bg-[#C59A55] transition-colors">
                      <item.icon className="w-5 h-5 text-[#C59A55] group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="font-serif text-[#24170F] font-bold text-base mb-1">{item.title}</h4>
                    <p className="text-xs text-zinc-500 font-light leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center pt-2">
                <button
                  onClick={() => setIsConciergeOpen(true)}
                  className="inline-flex items-center justify-center gap-3 bg-[#24170F] text-[#FAF8F5] px-8 py-4 rounded-full font-bold text-xs tracking-widest hover:bg-black transition-all shadow-xl hover:scale-[1.02] active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 text-[#C59A55]" />
                  <span>TESTAR CHAT FLUTUANTE</span>
                </button>
                <span className="text-xs text-zinc-500 font-serif italic text-center sm:text-left">
                  ✦ Teste também no celular interativo ao lado
                </span>
              </div>
            </div>

            {/* Lado Celular Smartphone Mockup WhatsApp */}
            <div className="lg:col-span-6 flex justify-center items-center relative py-4">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#C59A55]/20 via-[#25D366]/10 to-[#C59A55]/20 rounded-[4rem] blur-2xl opacity-80 pointer-events-none" />

              <div className="relative w-full max-w-[360px] md:max-w-[380px] bg-[#0b141a] rounded-[3.2rem] p-3 shadow-[0_35px_100px_rgba(36,23,15,0.3)] border-[8px] border-[#1e2328] ring-1 ring-white/10 overflow-hidden">
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#1e2328] rounded-full z-30 flex items-center justify-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#0a0a0a]" />
                  <div className="w-2 h-2 rounded-full bg-[#121212]" />
                </div>

                <div className="relative w-full bg-[#0b141a] rounded-[2.5rem] overflow-hidden flex flex-col h-[580px] text-white select-none border border-white/5">
                  <div className="pt-3 pb-1.5 px-7 flex justify-between items-center text-[11px] text-white/90 bg-[#111b21] font-sans font-semibold z-20">
                    <span>09:41</span>
                    <div className="flex items-center gap-1.5">
                      <Wifi className="w-3.5 h-3.5 text-white/90" />
                      <div className="w-5 h-2.5 border border-white/80 rounded-[3px] p-[1px] flex items-center">
                        <div className="w-full h-full bg-white/90 rounded-[1px]" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#111b21] px-4 py-2.5 flex items-center justify-between border-b border-white/10 z-20 shadow-md">
                    <div className="flex items-center gap-2.5">
                      <ChevronLeft className="w-5 h-5 text-[#00a884] cursor-pointer" />
                      <div className="relative">
                        <img src={heroImg} alt="Avatar Chalé" className="w-10 h-10 rounded-full object-cover border border-[#C59A55]" />
                        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#25D366] rounded-full border-2 border-[#111b21]" />
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1">
                          <span className="text-xs font-bold text-white tracking-wide">Concierge A-Frame</span>
                          <ShieldCheck className="w-3.5 h-3.5 text-[#C59A55]" />
                        </div>
                        <span className="text-[10px] text-[#25D366] font-medium flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-[#25D366] rounded-full animate-pulse" />
                          online • Resposta em segundos
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 overflow-y-auto p-3.5 space-y-3 bg-[#0b141a] relative font-sans text-xs">
                    <div className="flex justify-center my-1">
                      <span className="bg-[#182229] text-[#8696a0] text-[10px] uppercase tracking-wider px-3 py-1 rounded-lg border border-white/5 font-medium shadow-sm">
                        Hoje • Atendimento Exclusivo
                      </span>
                    </div>

                    {mockupMessages.map((msg, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                      >
                        <div
                          className={`max-w-[88%] p-3 rounded-2xl relative shadow-md leading-relaxed whitespace-pre-line text-[11px] ${
                            msg.sender === 'user'
                              ? 'bg-[#005c4b] text-[#e9edef] rounded-tr-none border border-[#007a63]/30'
                              : 'bg-[#202c33] text-[#e9edef] rounded-tl-none border border-white/5'
                          }`}
                        >
                          {msg.text}
                          <div className="flex items-center justify-end gap-1 mt-1">
                            <span className="text-[9px] text-[#8696a0] font-light">{msg.time}</span>
                            {msg.sender === 'user' && (
                              <CheckCheck className="w-3.5 h-3.5 text-[#53bdeb]" />
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}

                    <div className="pt-2">
                      <p className="text-[9px] text-[#8696a0] font-medium uppercase tracking-wider mb-1.5 px-1">
                        Toque em uma pergunta pronta:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {[
                          { label: "📶 Senha Wi-Fi", q: "Qual a senha do Wi-Fi?" },
                          { label: "🦐 Restaurantes", q: "Indique restaurantes próximos." },
                          { label: "🏖️ Praias", q: "Quais são as melhores praias?" },
                          { label: "🛁 Hidromassagem", q: "Como ligar a banheira?" },
                        ].map((chip, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => handleSendMockupMessage(chip.q)}
                            className="bg-[#1f2c34] hover:bg-[#2a3942] border border-[#C59A55]/30 text-[#e9edef] text-[10px] px-2.5 py-1 rounded-full transition-all flex items-center gap-1 active:scale-95 cursor-pointer"
                          >
                            <span>{chip.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <form 
                    onSubmit={(e) => { 
                      e.preventDefault(); 
                      if (mockupInput.trim()) handleSendMockupMessage(mockupInput); 
                    }} 
                    className="bg-[#111b21] p-2 flex items-center gap-2 border-t border-white/10 z-20"
                  >
                    <div className="flex-1 bg-[#202c33] rounded-full px-3 py-1.5 flex items-center gap-2 border border-white/5">
                      <Smile className="w-4 h-4 text-[#8696a0]" />
                      <input
                        type="text"
                        value={mockupInput}
                        onChange={(e) => setMockupInput(e.target.value)}
                        placeholder="Pergunte ao Concierge..."
                        className="w-full bg-transparent text-xs text-[#e9edef] placeholder-[#8696a0] focus:outline-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-8 h-8 rounded-full bg-[#00a884] hover:bg-[#029071] text-white flex items-center justify-center transition-all shrink-0 shadow-md"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Comodidades & Detalhes */}
      <section id="comodidades" className="relative py-28 bg-[#14100C] text-white z-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#C59A55] font-sans font-bold text-xs uppercase tracking-[0.3em] mb-3 block">
              Comodidades Exclusivas
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
              Tudo pensado para o seu conforto
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {[
              { label: "Vista para o mar", icon: Waves, desc: "Amanhecer no horizonte" },
              { label: "Montanhas & Natureza", icon: Mountain, desc: "Mata nativa preservada" },
              { label: "Cozinha completa", icon: UtensilsCrossed, desc: "Equipada com eletros" },
              { label: "Wi-Fi 5G Rápido", icon: Wifi, desc: "Conexão de alta velocidade" },
              { label: "Estacionamento Privativo", icon: Car, desc: "Vaga na propriedade" },
              { label: "Hidromassagem Interna", icon: Bath, desc: "Banheira com vista" },
              { label: "Smart TV & Streaming", icon: Tv, desc: "Entretenimento completo" },
              { label: "Climatização Dupla", icon: Snowflake, desc: "Ar quente e frio" }
            ].map((item, i) => (
              <div key={i} className="p-5 bg-white/5 rounded-2xl border border-white/10 hover:border-[#C59A55]/40 transition-all hover:bg-white/10 group">
                <item.icon className="w-6 h-6 text-[#C59A55] mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="text-sm font-bold text-white mb-1">{item.label}</h4>
                <p className="text-[11px] text-white/50 font-light">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. Depoimentos dos Hóspedes */}
      <section className="relative py-28 px-4 bg-[#FAF8F5] text-[#24170F] z-20 text-center">
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#C59A55] text-[#C59A55]" />
            ))}
          </div>
          <span className="text-3xl sm:text-4xl font-serif text-[#24170F] font-bold">5,0 / 5,0</span>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#24170F] mt-3 mb-2">Avaliações dos Hóspedes</h2>
          <p className="text-xs uppercase tracking-widest text-zinc-500 font-medium">Experiências nota 10 verificadas no Airbnb</p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[
            { author: "Alice M.", date: "Janeiro 2026", text: "Tudo simplesmente maravilhoso! O chalé A-frame é impecável, extremamente limpo e a vista para o mar ao amanhecer é algo inesquecível." },
            { author: "Bruna S.", date: "Dezembro 2025", text: "Decoração de extremo bom gosto, climatização perfeita e a hidromassagem interna é fantástica. Com certeza voltaremos em breve!" },
            { author: "Higor C.", date: "Novembro 2025", text: "O chalé superou todas as expectativas. Paz absoluta cercado pela natureza e com o suporte incrível do concierge no WhatsApp." },
          ].map((rev, i) => (
            <div key={i} className="p-8 bg-white rounded-3xl border border-[#C59A55]/20 shadow-sm flex flex-col justify-between hover:border-[#C59A55]/50 transition-all">
              <p className="text-sm font-serif italic text-zinc-700 leading-relaxed mb-6">"{rev.text}"</p>
              <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                <div>
                  <p className="font-bold text-sm text-[#24170F]">{rev.author}</p>
                  <p className="text-[10px] uppercase tracking-wider text-zinc-400">{rev.date}</p>
                </div>
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#C59A55] bg-[#C59A55]/10 px-2.5 py-1 rounded-full">
                  Verificado
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. CTA Final Chamada para Ação */}
      <section className="relative py-28 px-4 flex flex-col items-center justify-center text-center text-white z-20 overflow-hidden">
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <img src={heroImg} alt="Chalé ao pôr do sol" className="w-full h-full object-cover filter brightness-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#14100C] via-black/60 to-black/70" />
        </div>
        <div className="relative z-10 max-w-3xl px-4">
          <span className="text-[#E6C994] font-sans font-bold text-xs uppercase tracking-[0.3em] mb-4 block">
            Sua próxima escapada inesquecível
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif mb-6 leading-tight">
            Viva momentos únicos em <span className="italic text-[#E6C994]">Florianópolis.</span>
          </h2>
          <p className="text-sm sm:text-base font-sans mb-10 opacity-90 max-w-xl mx-auto font-light leading-relaxed">
            Garanta sua reserva diretamente no Airbnb com a garantia e segurança da plataforma.
          </p>
          <a
            href={content.airbnb_url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackClick.mutate({ source: 'cta_final' })}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#C59A55] via-[#D4A85F] to-[#B8860B] text-black px-12 py-5 rounded-full font-bold tracking-[0.2em] text-xs uppercase hover:brightness-110 transition-all shadow-[0_10px_40px_rgba(197,154,85,0.4)] active:scale-95"
          >
            <span>RESERVAR AGORA NO AIRBNB</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* 10. Footer Footer Luxo */}
      <footer className="relative bg-[#0E0C09] pt-16 pb-12 px-4 text-[#FAF8F5] z-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          
          <div className="text-center md:text-left">
            <h3 className="text-xl font-serif mb-3 text-[#E6C994] font-bold">CHALÉ A-FRAME</h3>
            <p className="text-xs text-white/60 font-light leading-relaxed max-w-xs mx-auto md:mx-0">
              Uma experiência boutique em Florianópolis, conectando você com a natureza e o mar em um refúgio exclusivo.
            </p>
          </div>
          
          <div className="text-center">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#C59A55] mb-3 font-bold">Navegação</h4>
            <ul className="space-y-2 text-xs font-light text-white/80">
              <li><a href="#sobre" className="hover:text-[#E6C994] transition-colors">O Chalé</a></li>
              <li><a href="#galeria" className="hover:text-[#E6C994] transition-colors">Galeria</a></li>
              <li><a href="#concierge" className="hover:text-[#E6C994] transition-colors">Concierge IA</a></li>
              <li><a href={content.airbnb_url} target="_blank" rel="noreferrer" className="hover:text-[#E6C994] transition-colors">Reservar no Airbnb</a></li>
            </ul>
          </div>

          <div className="text-center md:text-right">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#C59A55] mb-3 font-bold">Localização</h4>
            <p className="text-xs font-light text-white/80">Florianópolis, SC - Brasil</p>
            <p className="text-xs font-light text-white/50">Sul da Ilha - Vista para o Mar</p>
          </div>

        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-7xl mx-auto">
          <p className="text-[10px] uppercase tracking-widest text-white/40 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Chalé A-Frame Florianópolis. Todos os direitos reservados.
          </p>

          <button 
            type="button"
            onClick={() => setIsLoginModalOpen(true)}
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-white/40 hover:text-[#E6C994] transition-all py-1.5 px-3 rounded-full hover:bg-white/5 border border-white/5 hover:border-[#C59A55]/30"
            title="Acesso ao Painel Admin do Anfitrião"
          >
            <Lock className="w-3 h-3 text-[#C59A55]" />
            <span>Acesso Restrito do Anfitrião</span>
          </button>
        </div>
      </footer>

      {/* Floating Concierge Chat Widget */}
      <div className="fixed bottom-6 right-6 z-40">
        {!isConciergeOpen ? (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsConciergeOpen(true)}
            className="flex items-center gap-3 bg-[#1B1510] text-white px-5 py-3.5 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-[#C59A55]/50 hover:border-[#C59A55] transition-all group cursor-pointer"
          >
            <div className="relative">
              <Bot className="w-5 h-5 text-[#E6C994]" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full animate-ping" />
            </div>
            <span className="text-xs font-bold tracking-wider uppercase pr-1 text-white group-hover:text-[#E6C994] transition-colors">
              Concierge IA
            </span>
          </motion.button>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="w-80 sm:w-96 bg-[#18130F] text-[#FAF8F5] rounded-3xl shadow-2xl border border-[#C59A55]/40 overflow-hidden"
          >
            <div className="p-4 bg-[#241B13] border-b border-[#C59A55]/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#C59A55]/20 border border-[#C59A55]/50 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-[#E6C994]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Concierge do Chalé</h4>
                  <span className="text-[9px] text-green-400 font-medium">Atendimento 24h</span>
                </div>
              </div>
              <button
                onClick={() => setIsConciergeOpen(false)}
                className="p-1 rounded-lg text-white/50 hover:text-white hover:bg-white/10"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 h-72 overflow-y-auto space-y-3 bg-[#120E0A] text-xs font-sans">
              {chatMessages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl ${
                      msg.sender === 'user'
                        ? 'bg-[#C59A55] text-black font-medium rounded-tr-none'
                        : 'bg-[#241B13] text-white/90 border border-[#C59A55]/20 rounded-tl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[9px] text-white/40 mt-1 px-1">{msg.time}</span>
                </div>
              ))}
            </div>

            <form onSubmit={handleSendGuestMessage} className="p-3 bg-[#241B13] border-t border-[#C59A55]/20 flex gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Pergunte sobre a estadia..."
                className="flex-1 px-3 py-2 bg-[#14100C] border border-[#C59A55]/30 rounded-xl text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#C59A55]"
              />
              <button
                type="submit"
                className="p-2 bg-[#C59A55] text-black font-bold rounded-xl hover:bg-[#E6C994] transition-all"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </div>

      {/* Modal de Login Administrativo */}
      <AdminLoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={onAdminLogin}
      />

    </div>
  );
};

