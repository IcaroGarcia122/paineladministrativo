import React from 'react';
import {
  Home,
  Calendar,
  Users,
  Building2,
  Compass,
  Bot,
  MessageSquareCode,
  BarChart3,
  Settings,
  ExternalLink,
  ChevronRight,
  Globe,
  CheckCircle2,
  LogOut,
} from 'lucide-react';
import { ViewMode } from '../types';
import { useApp } from '../context/AppContext';

interface NavItem {
  id: ViewMode;
  label: string;
  icon: React.ElementType;
  badge?: string;
}

const navItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: Home },
  { id: 'calendar', label: 'Calendário', icon: Calendar },
  { id: 'guests', label: 'Hóspedes', icon: Users },
  { id: 'property', label: 'Minha Hospedagem', icon: Building2 },
  { id: 'guide', label: 'Guia da Região', icon: Compass },
  { id: 'concierge', label: 'Concierge IA', icon: Bot, badge: 'IA 24/7' },
  { id: 'automations', label: 'Automações', icon: MessageSquareCode },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'settings', label: 'Configurações', icon: Settings },
];

interface SidebarProps {
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
  onLogout?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ mobileOpen, setMobileOpen, onLogout }) => {
  const { activeView, setActiveView, property, setIsLandingModalOpen } = useApp();

  return (
    <>
      {/* Mobile backdrop */}
      {mobileOpen && (
        <div
          id="sidebar-mobile-backdrop"
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar container */}
      <aside
        id="sidebar-main"
        className={`fixed top-0 bottom-0 left-0 z-50 w-64 bg-[#14100C] border-r border-[#C59A55]/20 flex flex-col justify-between transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div>
          {/* Property Header Branding */}
          <div id="sidebar-header" className="p-5 border-b border-[#C59A55]/15">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-md border border-[#C59A55]/30 bg-[#1A1612] flex-shrink-0">
                <img
                  src={property.logoUrl}
                  alt={property.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="text-base font-serif font-bold text-[#FBF9F4] truncate tracking-tight">
                  {property.name}
                </h1>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-medium text-emerald-400">Site ativo</span>
                </div>
              </div>
            </div>

            {/* Quick Landing Page Preview Button */}
            <button
              id="sidebar-view-site-btn"
              onClick={() => {
                setIsLandingModalOpen(true);
                setMobileOpen(false);
              }}
              className="mt-4 w-full flex items-center justify-between px-3 py-2 text-xs font-medium text-[#FAF8F5]/80 bg-[#1A1612] hover:bg-[#241E18] rounded-lg border border-[#C59A55]/20 hover:border-[#C59A55]/50 transition-all cursor-pointer group"
            >
              <span className="flex items-center gap-2 truncate">
                <Globe className="w-3.5 h-3.5 text-[#C59A55]" />
                <span className="truncate">{property.customDomain}</span>
              </span>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-[#E6C994] transition-colors" />
            </button>
          </div>

          {/* Navigation Items */}
          <nav id="sidebar-navigation" className="p-3 space-y-1 overflow-y-auto max-h-[calc(100vh-210px)]">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeView === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => {
                    setActiveView(item.id);
                    setMobileOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#C59A55]/15 text-[#E6C994] font-semibold border border-[#C59A55]/30 shadow-xs'
                      : 'text-zinc-400 hover:text-white hover:bg-[#1A1612]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      className={`w-4 h-4 transition-colors ${
                        isActive ? 'text-[#C59A55]' : 'text-zinc-500 group-hover:text-zinc-300'
                      }`}
                    />
                    <span>{item.label}</span>
                  </div>

                  {item.badge ? (
                    <span className="px-2 py-0.5 text-[10px] font-semibold bg-[#C59A55]/20 text-[#E6C994] rounded-full border border-[#C59A55]/30">
                      {item.badge}
                    </span>
                  ) : isActive ? (
                    <ChevronRight className="w-3.5 h-3.5 text-[#C59A55]" />
                  ) : null}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Footer info & Host profile */}
        <div id="sidebar-footer" className="p-4 border-t border-[#C59A55]/15 bg-[#120F0C] space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#C59A55] to-[#B8860B] text-black font-extrabold flex items-center justify-center text-sm shadow-md">
              Í
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold text-[#FBF9F4] truncate">Ícaro (Anfitrião)</div>
              <div className="text-xs text-zinc-500 truncate">icaro@villadopoente.com</div>
            </div>
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
          </div>

          {onLogout && (
            <button
              onClick={onLogout}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-zinc-300 hover:text-white bg-[#1A1612] hover:bg-[#241E18] rounded-lg border border-[#C59A55]/30 hover:border-[#C59A55] transition-all cursor-pointer shadow-xs"
            >
              <LogOut className="w-3.5 h-3.5 text-[#C59A55]" />
              <span>Sair / Voltar ao Site</span>
            </button>
          )}
        </div>
      </aside>
    </>
  );
};
