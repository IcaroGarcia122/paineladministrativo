import React, { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
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
  DoorOpen,
  Maximize2,
  Palmtree,
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
  ShieldCheck
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

interface GuestSiteViewProps {
  onAdminLogin: () => void;
}

export const GuestSiteView: React.FC<GuestSiteViewProps> = ({ onAdminLogin }) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isConciergeOpen, setIsConciergeOpen] = useState(false);
  const { concierge, knowledgeBase } = useApp();

  const [chatMessages, setChatMessages] = useState<
    { sender: 'user' | 'bot'; text: string; time: string }[]
  >([
    {
      sender: 'bot',
      text: concierge.welcomeMessage || 'Olá! Sou o Concierge do Chalé A-Frame. Como posso ajudar sua estadia em Florianópolis?',
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
      } else if (lower.includes('checkin') || lower.includes('check-in') || lower.includes('horario')) {
        botResponse = 'O horário de check-in é a partir das 15:00 e o check-out até às 11:00.';
      } else if (lower.includes('wifi') || lower.includes('internet') || lower.includes('senha')) {
        botResponse = 'A rede de Wi-Fi é "ChaleAFrame_5G" e a senha é informada no guia da casa ao fazer check-in.';
      } else if (lower.includes('restaurante') || lower.includes('comer') || lower.includes('jantar')) {
        botResponse = 'Recomendamos os restaurantes de frutos do mar no Ribeirão da Ilha, a poucos minutos do chalé!';
      } else {
        botResponse = 'Agradecemos o contato! Nossa equipe responderá sua mensagem em instantes para garantir que sua experiência no chalé seja perfeita.';
      }

      setChatMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: botResponse,
          time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }, 600);
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
      const lower = userMsg.toLowerCase();
      let botResponse = '';

      if (lower.includes('wifi') || lower.includes('wi-fi') || lower.includes('senha')) {
        botResponse = '📶 Wi-Fi: Chale_AFrame_5G\n🔑 Senha: natureza2026\nSinal de alta velocidade em todos os cômodos e deck!';
      } else if (lower.includes('restaurante') || lower.includes('comer') || lower.includes('jantar') || lower.includes('frutos do mar')) {
        botResponse = '🦐 Recomendamos o Ostradamus (Ribeirão da Ilha - 12 min) e o Bar do Arante (Pântano do Sul - 15 min). Ambos excelentes!';
      } else if (lower.includes('praia') || lower.includes('passeio') || lower.includes('mirante')) {
        botResponse = '🏖️ O chalé fica pertinho das praias de Armação, Matadeiro e Campeche. Perfeitas para banho, surf e caminhadas!';
      } else if (lower.includes('hidro') || lower.includes('banheira') || lower.includes('spa')) {
        botResponse = '习 A hidromassagem fica na suíte master. Basta acionar o aquecimento no painel lateral. Relaxamento garantido com vista para a mata!';
      } else if (lower.includes('checkin') || lower.includes('check-in') || lower.includes('horario')) {
        botResponse = '⏰ Check-in a partir das 15:00 e Check-out até às 11:00. Caso precise de early check-in, avise-nos com antecedência!';
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
    }, 500);
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden text-foreground">
      {/* Hero Section */}
      <section className="relative h-[100vh] z-0">
        <div className="fixed inset-0 w-full h-screen pointer-events-none">
          <img
            src={heroImg}
            alt="Chalé A-frame"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto pointer-events-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-block border border-white/30 px-4 py-1 mb-8 rounded-full bg-black/20 backdrop-blur-sm"
            >
              <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-white font-sans font-light">
                CHALÉ EXCLUSIVO EM FLORIANÓPOLIS - SC
              </span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-5xl md:text-8xl font-serif leading-[1.1] mb-8 tracking-tight text-white"
            >
              Conecte-se com<br />o que realmente<br />
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.8 }}
                style={{ fontFamily: "'Pinyon Script', cursive" }}
                className="bg-gradient-to-br from-[#E6C994] via-[#D4A85F] to-[#C59A55] bg-clip-text text-transparent block mt-2 text-7xl md:text-[10rem] font-normal tracking-wide drop-shadow-md py-2"
              >
                importa.
              </motion.span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-sm md:text-base font-sans mb-12 max-w-xl mx-auto opacity-90 font-light leading-relaxed text-white"
            >
              Chalé privativo com vista para o mar, banheira interna e deck exclusivo para momentos inesquecíveis.
            </motion.p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <motion.a
                href={content.airbnb_url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackClick.mutate({ source: 'hero_main' })}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#C59A55] text-white px-12 py-6 rounded-full font-sans font-bold tracking-[0.2em] hover:bg-[#d4a85f] transition-all shadow-xl text-center text-sm md:text-base"
              >
                RESERVE NO AIRBNB
              </motion.a>

              <motion.a
                href="#sobre"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="group relative px-8 py-4 overflow-hidden rounded-full border border-[#C59A55]/40 text-white font-sans transition-all hover:border-[#C59A55]"
              >
                <span className="relative z-10">CONHEÇA O CHALÉ ↓</span>
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre o Chalé */}
      <section id="sobre" className="relative py-32 bg-[#FBF9F4] z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <div className="inline-flex items-center gap-4 text-[#C59A55] mb-6">
                <div className="w-12 h-[1px] bg-[#C59A55]" />
                <span className="text-xs uppercase tracking-[0.3em] font-bold">O Refúgio</span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-serif text-[#24170F] mb-10 leading-[1.1] tracking-tight">
                {content.about_title}
              </h2>
              
              <div className="space-y-8 mb-12">
                <p className="text-xl text-zinc-600 font-sans leading-relaxed font-light">
                  {content.about_text_1}
                </p>
                
                <div className="grid grid-cols-2 gap-8 border-y border-[#C59A55]/20 py-10">
                  <div className="flex flex-col gap-2">
                    <span className="text-3xl font-serif text-[#24170F] italic">2 Quartos</span>
                    <span className="text-xs uppercase tracking-widest text-zinc-500">Conforto absoluto</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-3xl font-serif text-[#24170F] italic">Vista Mar</span>
                    <span className="text-xs uppercase tracking-widest text-zinc-500">Horizonte infinito</span>
                  </div>
                </div>

                <p className="text-lg text-zinc-600 font-sans leading-relaxed">
                  {content.about_text_2}
                </p>
              </div>

              <motion.a
                href={content.airbnb_url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackClick.mutate({ source: 'about_section' })}
                whileHover={{ gap: "2rem" }}
                className="inline-flex items-center gap-4 group w-full md:w-auto justify-center md:justify-start"
              >
                <div className="w-14 h-14 rounded-full border border-[#C59A55] flex items-center justify-center transition-all group-hover:bg-[#C59A55] shrink-0">
                  <ArrowRight className="w-6 h-6 text-[#C59A55] group-hover:text-white transition-colors" />
                </div>
                <span className="text-[#C59A55] font-sans font-bold uppercase tracking-[0.2em] text-sm text-center md:text-left">
                  Ver disponibilidade no Airbnb
                </span>
              </motion.a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5]">
                <img src={img14} alt="Vista principal" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Galeria de Destaques */}
      <section className="relative py-32 bg-[#100D0A] z-20 overflow-hidden text-white">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <span className="text-[#C59A55] font-sans font-bold text-xs uppercase tracking-[0.4em] mb-6 block">
                Galeria de Destaques
              </span>
              <h2 className="text-5xl md:text-8xl font-serif text-white leading-[0.95] tracking-tighter">
                Onde o luxo encontra a <span className="italic text-[#C59A55] block md:inline">natureza.</span>
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto">
            {/* Imagem 1: Hero Exterior */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-8 h-[380px] md:h-[480px] relative group overflow-hidden rounded-3xl"
            >
              <img src={heroImg} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" alt="Arquitetura A-Frame" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 p-2">
                <h3 className="text-2xl font-serif text-white">Design A-Frame Exclusivo</h3>
                <p className="text-xs text-white/70">Fachada icônica em meio à mata preservada</p>
              </div>
            </motion.div>

            {/* Imagem 2: Quarto */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-4 h-[380px] md:h-[480px] relative group overflow-hidden rounded-3xl"
            >
              <img src={quartoImg} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" alt="Suíte Master" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-xl font-serif text-white">Suíte Aconchegante</h3>
                <p className="text-xs text-white/70">Conforto com vista panorâmica</p>
              </div>
            </motion.div>

            {/* Imagem 3: Banheira */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-4 h-[320px] relative group overflow-hidden rounded-3xl"
            >
              <img src={banheiraImg} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" alt="Banheira de Hidromassagem" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-xl font-serif text-white">Hidromassagem Interna</h3>
                <p className="text-xs text-white/70">Relaxamento privativo</p>
              </div>
            </motion.div>

            {/* Imagem 4: Sala */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-4 h-[320px] relative group overflow-hidden rounded-3xl"
            >
              <img src={salaImg} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" alt="Living Integrado" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-xl font-serif text-white">Living Integrado</h3>
                <p className="text-xs text-white/70">Iluminação natural & pé-direito alto</p>
              </div>
            </motion.div>

            {/* Imagem 5: Cozinha */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-4 h-[320px] relative group overflow-hidden rounded-3xl"
            >
              <img src={cozinhaImg} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" alt="Cozinha Equipada" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-xl font-serif text-white">Cozinha Gourmet</h3>
                <p className="text-xs text-white/70">Equipada para refeições especiais</p>
              </div>
            </motion.div>

            {/* Imagem 6: Deck e Balanço (Image-12) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-6 h-[340px] relative group overflow-hidden rounded-3xl"
            >
              <img src={img12} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" alt="Deck com Balanço Suspenso" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-serif text-white">Deck & Balanço Suspenso</h3>
                <p className="text-xs text-white/70">O lugar perfeito para desacelerar</p>
              </div>
            </motion.div>

            {/* Imagem 7: Vista para o Mar (Image-13) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-6 h-[340px] relative group overflow-hidden rounded-3xl"
            >
              <img src={img13} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" alt="Vista Panorâmica do Mar" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-serif text-white">Vista para o Oceano</h3>
                <p className="text-xs text-white/70">Amanhecer inesquecível no Sul da Ilha</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tour pelos Ambientes e Experiências */}
      <section className="relative py-28 bg-[#FBF9F4] z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#C59A55] font-sans font-bold text-xs uppercase tracking-[0.3em] mb-3 block">
              Experiência Completa
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-[#24170F] tracking-tight">
              Cada ambiente planejado para o seu <span className="italic text-[#C59A55]">bem-estar</span>
            </h2>
            <p className="text-zinc-600 text-sm md:text-base font-light mt-4">
              Explore a distribuição dos espaços e entenda o que torna o Chalé A-Frame único.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Dormitórios Aconchegantes",
                desc: "Dois quartos confortáveis com enxoval macio e clima intimista para noites revigorantes.",
                image: quartoImg,
                tag: "2 Quartos"
              },
              {
                title: "Espaço Spa & Banheira",
                desc: "Banheira interna de hidromassagem posicionada estrategicamente para relaxar com vista.",
                image: banheiraImg,
                tag: "Relaxamento"
              },
              {
                title: "Área de Convivência Integrada",
                desc: "Salas de estar e jantar em plano aberto, integrando sofisticação em madeira e iluminação suave.",
                image: salaImg,
                tag: "Design A-Frame"
              },
              {
                title: "Gastronomia Aconchegante",
                desc: "Cozinha completa com utensílios e louças para preparar cafés da manhã ou jantares românticos.",
                image: cozinhaImg,
                tag: "Cozinha Equipada"
              },
              {
                title: "Deck Privativo na Mata",
                desc: "Ampla área externa cercada pela natureza com balanço suspenso para contemplação.",
                image: img12,
                tag: "Deck Exclusivo"
              },
              {
                title: "Refúgio em Florianópolis",
                desc: "Localização privilegiada no Sul da Ilha, combinando mar, ar puro e tranquilidade total.",
                image: img15,
                tag: "Vista Panorâmica"
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-md border border-[#C59A55]/15 hover:shadow-xl hover:border-[#C59A55]/40 transition-all duration-300 group"
              >
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full border border-white/20">
                    {card.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-[#24170F] mb-2">{card.title}</h3>
                  <p className="text-xs text-zinc-600 font-light leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Concierge Virtual com Mockup WhatsApp Sofisticado */}
      <section className="relative py-28 bg-[#F7F3EA] z-20 overflow-hidden">
        {/* Elemento de iluminação suave de fundo */}
        <div className="absolute top-1/2 -right-40 -translate-y-1/2 w-96 h-96 bg-[#C59A55]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Lado Esquerdo: Descrição & Vantagens */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C59A55]/10 border border-[#C59A55]/20 text-[#C59A55] font-sans font-bold text-xs uppercase tracking-[0.2em] mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  Atendimento Digital no WhatsApp
                </span>
                <h2 className="text-4xl md:text-5xl font-serif text-[#24170F] leading-[1.15] tracking-tight">
                  Seu Concierge Virtual <br />
                  <span className="italic text-[#C59A55] font-serif">disponível 24 horas</span>
                </h2>
                <p className="text-base md:text-lg text-zinc-600 font-sans mt-4 leading-relaxed font-light">
                  Experimente o atendimento inteligente do Chalé A-Frame. Tire dúvidas sobre a casa, peça indicações de praias e restaurantes e aproveite cada segundo do Sul da Ilha.
                </p>
              </div>

              {/* Grid de Benefícios */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  { title: "Check-in & Regras", desc: "Instruções de acesso e senha do Wi-Fi", icon: Home },
                  { title: "Roteiros & Praias", desc: "Dicas secretas no Sul de Florianópolis", icon: Compass },
                  { title: "Gastronomia Local", desc: "Restaurantes de frutos do mar & bistrôs", icon: UtensilsCrossed },
                  { title: "Suporte Instantâneo", desc: "Respostas em poucos segundos no WhatsApp", icon: Smartphone },
                ].map((item, i) => (
                  <div key={i} className="p-5 bg-white rounded-2xl shadow-sm border border-[#C59A55]/15 hover:border-[#C59A55]/40 transition-all group">
                    <div className="w-10 h-10 rounded-xl bg-[#F7F3EA] flex items-center justify-center mb-3 group-hover:bg-[#C59A55] transition-colors">
                      <item.icon className="w-5 h-5 text-[#C59A55] group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="font-serif text-[#24170F] font-bold text-base mb-1">{item.title}</h4>
                    <p className="text-xs text-zinc-500 font-light leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Ação Principal */}
              <div className="pt-2 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                <button
                  onClick={() => setIsConciergeOpen(true)}
                  className="inline-flex items-center justify-center gap-3 bg-[#24170F] text-[#F7F3EA] px-8 py-4 rounded-full font-bold text-xs tracking-widest hover:bg-[#17130F] transition-all shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 text-[#C59A55]" />
                  <span>ABRIR CONCIERGE FLUTUANTE</span>
                </button>
                <span className="text-xs text-zinc-500 font-serif italic text-center sm:text-left">
                  ✦ Resposta automática & ao vivo no mockup ao lado
                </span>
              </div>
            </div>

            {/* Lado Direito: Mockup WhatsApp Smartphone Sofisticado */}
            <div className="lg:col-span-6 flex justify-center items-center relative py-4">
              
              {/* Brilho Dourado / Verde de Fundo */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#C59A55]/20 via-[#25D366]/10 to-[#C59A55]/20 rounded-[4rem] blur-2xl opacity-80 pointer-events-none" />

              {/* Corpo do Celular */}
              <div className="relative w-full max-w-[360px] md:max-w-[380px] bg-[#0b141a] rounded-[3.2rem] p-3 shadow-[0_35px_100px_rgba(36,23,15,0.4)] border-[8px] border-[#1e2328] ring-1 ring-white/10 overflow-hidden">
                
                {/* Ilha Dinâmica / Notch do Celular */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#1e2328] rounded-full z-30 flex items-center justify-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#0a0a0a]" />
                  <div className="w-2 h-2 rounded-full bg-[#121212]" />
                </div>

                {/* Tela do WhatsApp */}
                <div className="relative w-full bg-[#0b141a] rounded-[2.5rem] overflow-hidden flex flex-col h-[600px] text-white select-none border border-white/5">
                  
                  {/* Barra de Status */}
                  <div className="pt-3 pb-1.5 px-7 flex justify-between items-center text-[11px] text-white/90 bg-[#111b21] font-sans font-semibold z-20">
                    <span>09:41</span>
                    <div className="flex items-center gap-1.5">
                      <Wifi className="w-3.5 h-3.5 text-white/90" />
                      <div className="w-5 h-2.5 border border-white/80 rounded-[3px] p-[1px] flex items-center">
                        <div className="w-full h-full bg-white/90 rounded-[1px]" />
                      </div>
                    </div>
                  </div>

                  {/* Header do WhatsApp */}
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
                    <div className="flex items-center gap-3 text-[#aebac1]">
                      <Video className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
                      <Phone className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
                      <MoreVertical className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
                    </div>
                  </div>

                  {/* Mensagens do Chat */}
                  <div className="flex-1 overflow-y-auto p-3.5 space-y-3 bg-[#0b141a] relative font-sans text-xs" style={{
                    backgroundImage: `radial-gradient(circle at 50% 50%, rgba(37, 211, 102, 0.04) 0%, transparent 80%)`,
                  }}>
                    {/* Badge de Data */}
                    <div className="flex justify-center my-1">
                      <span className="bg-[#182229] text-[#8696a0] text-[10px] uppercase tracking-wider px-3 py-1 rounded-lg border border-white/5 font-medium shadow-sm">
                        Hoje • Atendimento Exclusivo
                      </span>
                    </div>

                    {/* Balões de Mensagem */}
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

                    {/* Sugestões Rápidas Interativas */}
                    <div className="pt-2">
                      <p className="text-[9px] text-[#8696a0] font-medium uppercase tracking-wider mb-1.5 px-1">
                        Toque em um tópico para testar:
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

                  {/* Input de Envio de Mensagem no Celular */}
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
                        placeholder="Digite uma mensagem..."
                        className="w-full bg-transparent text-xs text-[#e9edef] placeholder-[#8696a0] focus:outline-none"
                      />
                      <Paperclip className="w-4 h-4 text-[#8696a0] cursor-pointer" />
                    </div>
                    <button
                      type="submit"
                      className="w-8 h-8 rounded-full bg-[#00a884] hover:bg-[#029071] text-white flex items-center justify-center transition-all shrink-0 shadow-md"
                    >
                      {mockupInput.trim() ? (
                        <Send className="w-3.5 h-3.5" />
                      ) : (
                        <Mic className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Avaliações */}
      <section className="relative py-24 px-4 bg-white z-20 text-center">
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#C59A55] text-[#C59A55]" />
            ))}
          </div>
          <span className="text-3xl font-serif text-[#24170F]">5,0 / 5,0</span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#24170F] mt-4 mb-2">Preferido dos Hóspedes</h2>
          <p className="text-xs uppercase tracking-widest text-zinc-500">Experiências avaliadas com nota máxima no Airbnb</p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[
            { author: "Alice", text: "Tudo simplesmente maravilhoso! O chalé é incrível, extremamente limpo e acolhedor." },
            { author: "Bruna", text: "Decoração de muito bom gosto, climatização perfeita e a vista do mar é sem palavras." },
            { author: "Higor", text: "O chalé superou todas as expectativas. Paz absoluta no meio da natureza." },
          ].map((rev, i) => (
            <div key={i} className="p-8 bg-[#FBF9F4] rounded-3xl border border-[#C59A55]/20 flex flex-col justify-between">
              <p className="text-sm font-serif italic text-zinc-700 leading-relaxed mb-6">"{rev.text}"</p>
              <div>
                <p className="font-bold text-sm text-[#24170F]">{rev.author}</p>
                <p className="text-[10px] uppercase tracking-wider text-zinc-400">Hóspede verificado</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comodidades & Detalhes */}
      <section className="relative py-24 px-4 bg-[#F7F3EA] z-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-center text-[#24170F] mb-12">Principais Comodidades</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Vista para o mar", icon: Waves },
              { label: "Montanhas & Natureza", icon: Mountain },
              { label: "Cozinha completa", icon: UtensilsCrossed },
              { label: "Wi-Fi rápido", icon: Wifi },
              { label: "Estacionamento", icon: Car },
              { label: "Hidromassagem interna", icon: Bath },
              { label: "Smart TV", icon: Tv },
              { label: "Ar-condicionado", icon: Snowflake }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#C59A55]/10">
                <item.icon className="w-5 h-5 text-[#C59A55]" />
                <span className="text-xs font-bold text-[#24170F]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative py-24 px-4 flex flex-col items-center justify-center text-center text-white z-20">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img src={heroImg} alt="Chalé ao pôr do sol" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 max-w-2xl px-4">
          <h2 className="text-3xl md:text-5xl font-serif mb-6">
            Viva momentos únicos em <span className="italic text-[#C59A55]">Florianópolis.</span>
          </h2>
          <p className="text-sm font-sans mb-8 opacity-80 max-w-lg mx-auto font-light">
            Garanta sua reserva e desfrute de um refúgio boutique exclusivo.
          </p>
          <a
            href={content.airbnb_url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackClick.mutate({ source: 'cta_final' })}
            className="inline-flex items-center gap-3 bg-[#C59A55] text-white px-10 py-5 rounded-full font-bold tracking-widest text-xs uppercase hover:bg-[#d4a85f] transition-all shadow-xl"
          >
            <span>RESERVE AGORA NO AIRBNB</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-[#17110C] pt-16 pb-12 px-4 text-[#F7F3EA] z-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-serif mb-4 text-[#C59A55]">CHALÉ A-FRAME</h3>
            <p className="text-xs text-white/60 font-light leading-relaxed max-w-xs mx-auto md:mx-0">
              Uma experiência boutique em Florianópolis, conectando você com a natureza e o mar em um refúgio exclusivo.
            </p>
          </div>
          
          <div className="text-center">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-4 font-bold">Navegação</h4>
            <ul className="space-y-2 text-xs font-light text-white/80">
              <li><a href="#sobre" className="hover:text-[#C59A55] transition-colors">O Chalé</a></li>
              <li><a href={content.airbnb_url} target="_blank" rel="noreferrer" className="hover:text-[#C59A55] transition-colors">Reservar no Airbnb</a></li>
            </ul>
          </div>

          <div className="text-center md:text-right">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-4 font-bold">Localização</h4>
            <p className="text-xs font-light text-white/80">Florianópolis, SC - Brasil</p>
            <p className="text-xs font-light text-white/50">Sul da Ilha - Vista para o Mar</p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col items-center gap-4">
          <p className="text-[10px] uppercase tracking-widest text-white/30 text-center">
            &copy; {new Date().getFullYear()} Chalé A-Frame Florianópolis. Todos os direitos reservados.
          </p>

          {/* Botão Escondido no Rodapé para Acesso Administrativo */}
          <button 
            type="button"
            onClick={() => setIsLoginModalOpen(true)}
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-white/20 hover:text-[#C59A55] transition-all py-1.5 px-3 rounded-md hover:bg-white/5"
            title="Acesso Restrito ao Painel Admin"
          >
            <Lock className="w-3 h-3 text-[#C59A55]/50" />
            <span>Acesso Restrito</span>
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
            className="flex items-center gap-3 bg-[#24170F] text-white px-5 py-3.5 rounded-full shadow-2xl border border-[#C59A55]/40 hover:border-[#C59A55] transition-all"
          >
            <div className="relative">
              <Bot className="w-5 h-5 text-[#C59A55]" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full animate-ping" />
            </div>
            <span className="text-xs font-bold tracking-wider uppercase pr-1">Concierge IA</span>
          </motion.button>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="w-80 sm:w-96 bg-[#1C140E] text-[#F7F3EA] rounded-3xl shadow-2xl border border-[#C59A55]/30 overflow-hidden"
          >
            <div className="p-4 bg-[#24170F] border-b border-[#C59A55]/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#C59A55]/20 border border-[#C59A55]/40 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-[#C59A55]" />
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

            <div className="p-4 h-72 overflow-y-auto space-y-3 bg-[#17110C] text-xs font-sans">
              {chatMessages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl ${
                      msg.sender === 'user'
                        ? 'bg-[#C59A55] text-white rounded-tr-none'
                        : 'bg-[#2A1E16] text-white/90 border border-[#C59A55]/20 rounded-tl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[9px] text-white/30 mt-1 px-1">{msg.time}</span>
                </div>
              ))}
            </div>

            <form onSubmit={handleSendGuestMessage} className="p-3 bg-[#24170F] border-t border-[#C59A55]/20 flex gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Pergunte sobre a estadia..."
                className="flex-1 px-3 py-2 bg-[#1C140E] border border-[#C59A55]/20 rounded-xl text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#C59A55]"
              />
              <button
                type="submit"
                className="p-2 bg-[#C59A55] text-white rounded-xl hover:bg-[#d4a85f] transition-all"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </div>

      {/* Admin Login Modal */}
      <AdminLoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={onAdminLogin}
      />
    </div>
  );
};
