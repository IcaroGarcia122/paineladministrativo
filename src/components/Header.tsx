import React from 'react';
import { Menu, Globe, MessageSquare, Eye, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface HeaderProps {
  setMobileOpen: (open: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({ setMobileOpen }) => {
  const { activeView, whatsAppStatus, setIsLandingModalOpen } = useApp();

  const getTitleForView = () => {
    switch (activeView) {
      case 'dashboard':
        return {
          greeting: 'Bom dia, Ícaro 👋',
          subtitle: 'Aqui está o resumo da sua hospedagem.',
        };
      case 'calendar':
        return {
          greeting: 'Calendário & Reservas 📅',
          subtitle: 'Acompanhe a ocupação da propriedade e bloqueie datas.',
        };
      case 'guests':
        return {
          greeting: 'Gestão de Hóspedes 👥',
          subtitle: 'CRM e cadastro de estadias para envio de mensagens.',
        };
      case 'property':
        return {
          greeting: 'Minha Hospedagem 🏡',
          subtitle: 'Edite informações, comodidades e regras exibidas aos hóspedes.',
        };
      case 'gallery':
        return {
          greeting: 'Galeria de Fotos 📸',
          subtitle: 'Gerencie e organize as fotos de apresentação da Villa.',
        };
      case 'guide':
        return {
          greeting: 'Guia da Região 📍',
          subtitle: 'Indicações de praias, restaurantes e passeios recomendados.',
        };
      case 'concierge':
        return {
          greeting: 'Concierge Virtual IA 🤖',
          subtitle: 'Configurações de personalidade e base de conhecimento.',
        };
      case 'automations':
        return {
          greeting: 'Automações de WhatsApp 💬',
          subtitle: 'Configure disparos automáticos pré e pós-check-in.',
        };
      case 'analytics':
        return {
          greeting: 'Métricas & Desempenho 📈',
          subtitle: 'Acompanhe tráfego do site, conversão e cliques para o Airbnb.',
        };
      case 'settings':
        return {
          greeting: 'Configurações do Painel ⚙️',
          subtitle: 'Perfil, cores de marca, domínio e integrações.',
        };
      default:
        return {
          greeting: 'Painel do Anfitrião',
          subtitle: 'Villa do Poente',
        };
    }
  };

  const titleInfo = getTitleForView();

  return (
    <header
      id="main-app-header"
      className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-zinc-200/80 px-4 sm:px-8 py-4 transition-all"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left: Mobile Toggle & Page Title */}
        <div className="flex items-center gap-3">
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileOpen(true)}
            className="p-2 text-zinc-600 hover:text-zinc-900 bg-zinc-100 hover:bg-zinc-200 rounded-lg lg:hidden transition-colors cursor-pointer"
            aria-label="Abrir menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight">
              {titleInfo.greeting}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 font-normal mt-0.5">
              {titleInfo.subtitle}
            </p>
          </div>
        </div>

        {/* Right: Quick Badges & Landing Page Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* WhatsApp Status Indicator */}
          <div
            id="header-whatsapp-status"
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium shadow-2xs"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
            <span>WhatsApp Conectado</span>
          </div>

          {/* Guest Landing Page Preview trigger */}
          <button
            id="header-preview-landing-btn"
            onClick={() => setIsLandingModalOpen(true)}
            className="flex items-center gap-2 px-3.5 py-2 bg-zinc-900 hover:bg-zinc-800 text-white rounded-xl text-xs sm:text-sm font-semibold shadow-sm hover:shadow transition-all cursor-pointer group"
          >
            <Eye className="w-4 h-4 text-rose-400 group-hover:scale-110 transition-transform" />
            <span className="hidden md:inline">Ver Site do Hóspede</span>
            <span className="md:hidden">Site</span>
          </button>
        </div>
      </div>
    </header>
  );
};
