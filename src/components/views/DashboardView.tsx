import React, { useState } from 'react';
import {
  TrendingUp,
  Users,
  Eye,
  ExternalLink,
  MessageSquare,
  Calendar,
  ArrowUpRight,
  ChevronRight,
  Bot,
  UserPlus,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { initialPerformance30Days } from '../../mockData';

export const DashboardView: React.FC = () => {
  const { analytics, stays, setActiveView, concierge } = useApp();
  const [timeRange, setTimeRange] = useState<'today' | '7d' | '30d' | '3m'>('30d');

  // Filtered upcoming stays
  const upcomingStays = stays.filter(
    (stay) => stay.status === 'confirmed' || stay.status === 'active'
  );

  return (
    <div id="dashboard-view-container" className="space-y-8 animate-in fade-in duration-300">
      {/* Date Range Selector Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-zinc-200/80 shadow-xs">
        <div>
          <h3 className="text-base font-bold text-zinc-900">Visão Geral da Hospedagem</h3>
          <p className="text-xs text-zinc-500">Métricas em tempo real de acessos, engajamento e reservas</p>
        </div>

        <div id="dashboard-timerange-selector" className="flex items-center bg-zinc-100 p-1 rounded-xl gap-1 self-start sm:self-auto">
          {(
            [
              { id: 'today', label: 'Hoje' },
              { id: '7d', label: '7 dias' },
              { id: '30d', label: 'Últimos 30 dias' },
              { id: '3m', label: '3 meses' },
            ] as const
          ).map((item) => (
            <button
              key={item.id}
              onClick={() => setTimeRange(item.id)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                timeRange === item.id
                  ? 'bg-white text-zinc-900 shadow-xs'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Metric Cards */}
      <div id="dashboard-kpi-cards-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Card 1: Visitas ao site */}
        <div className="bg-white p-5 rounded-2xl border border-zinc-200/80 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden group">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Visitas ao site</span>
            <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl">
              <Eye className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-4 flex items-baseline justify-between">
            <span className="text-3xl font-extrabold text-zinc-900 tracking-tight">
              {analytics.siteVisits.toLocaleString('pt-BR')}
            </span>
            <span className="flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
              <ArrowUpRight className="w-3 h-3 mr-0.5" />
              +{analytics.visitsGrowth}%
            </span>
          </div>
          <p className="text-xs text-zinc-400 mt-2">Vs. período anterior</p>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-indigo-500 rounded-b-2xl opacity-80" />
        </div>

        {/* Card 2: Cliques no Airbnb */}
        <div className="bg-white p-5 rounded-2xl border border-zinc-200/80 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden group">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Cliques no Airbnb</span>
            <div className="p-2 bg-rose-50 text-rose-600 rounded-xl">
              <ExternalLink className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-4 flex items-baseline justify-between">
            <span className="text-3xl font-extrabold text-zinc-900 tracking-tight">
              {analytics.airbnbClicks.toLocaleString('pt-BR')}
            </span>
            <span className="flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
              <ArrowUpRight className="w-3 h-3 mr-0.5" />
              +{analytics.airbnbClicksGrowth}%
            </span>
          </div>
          <p className="text-xs text-zinc-400 mt-2">Redirecionamentos diretos</p>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-rose-500 rounded-b-2xl opacity-80" />
        </div>

        {/* Card 3: Cliques no WhatsApp */}
        <div className="bg-white p-5 rounded-2xl border border-zinc-200/80 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden group">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Cliques no WhatsApp</span>
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">
              <MessageSquare className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-4 flex items-baseline justify-between">
            <span className="text-3xl font-extrabold text-zinc-900 tracking-tight">
              {analytics.whatsappClicks.toLocaleString('pt-BR')}
            </span>
            <span className="flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
              <ArrowUpRight className="w-3 h-3 mr-0.5" />
              +{analytics.whatsappClicksGrowth}%
            </span>
          </div>
          <p className="text-xs text-zinc-400 mt-2">Contatos pelo Concierge</p>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-emerald-500 rounded-b-2xl opacity-80" />
        </div>

        {/* Card 4: Hóspedes ativos */}
        <div className="bg-white p-5 rounded-2xl border border-zinc-200/80 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden group">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Hóspedes ativos</span>
            <div className="p-2 bg-amber-50 text-amber-600 rounded-xl">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-4 flex items-baseline justify-between">
            <span className="text-3xl font-extrabold text-zinc-900 tracking-tight">
              {analytics.activeGuests}
            </span>
            <span className="text-xs font-semibold text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded-full">
              Hospedados agora
            </span>
          </div>
          <p className="text-xs text-zinc-400 mt-2">Atualmente na Villa do Poente</p>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-500 rounded-b-2xl opacity-80" />
        </div>
      </div>

      {/* Main Performance Chart Card */}
      <div id="dashboard-performance-chart-card" className="bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-lg font-bold text-zinc-900">Desempenho da hospedagem</h3>
            <p className="text-xs text-zinc-500 mt-0.5">Evolução comparativa de tráfego e interações no site</p>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium text-zinc-600">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-indigo-500" />
              <span>Visitas</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500" />
              <span>Cliques Airbnb</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
              <span>Cliques WhatsApp</span>
            </div>
          </div>
        </div>

        {/* Custom SVG Line Chart */}
        <div className="h-64 w-full relative pt-4">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 600 200" preserveAspectRatio="none">
            {/* Grid lines */}
            <line x1="0" y1="40" x2="600" y2="40" stroke="#f4f4f5" strokeDasharray="4 4" strokeWidth="1" />
            <line x1="0" y1="80" x2="600" y2="80" stroke="#f4f4f5" strokeDasharray="4 4" strokeWidth="1" />
            <line x1="0" y1="120" x2="600" y2="120" stroke="#f4f4f5" strokeDasharray="4 4" strokeWidth="1" />
            <line x1="0" y1="160" x2="600" y2="160" stroke="#f4f4f5" strokeDasharray="4 4" strokeWidth="1" />

            {/* Line 1: Visits (Indigo) */}
            <path
              d="M 0 130 Q 60 110, 120 90 T 240 60 T 360 30 T 480 80 T 600 20"
              fill="none"
              stroke="#6366f1"
              strokeWidth="3.5"
              strokeLinecap="round"
            />

            {/* Line 2: Airbnb Clicks (Rose) */}
            <path
              d="M 0 170 Q 60 160, 120 140 T 240 120 T 360 80 T 480 120 T 600 70"
              fill="none"
              stroke="#f43f5e"
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* Line 3: WhatsApp Clicks (Emerald) */}
            <path
              d="M 0 190 Q 60 185, 120 175 T 240 165 T 360 140 T 480 160 T 600 130"
              fill="none"
              stroke="#10b981"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>

          {/* X Axis Labels */}
          <div className="flex justify-between items-center text-[11px] font-medium text-zinc-400 mt-2">
            {initialPerformance30Days.map((dp, idx) => (
              <span key={idx}>{dp.label}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Grid: Upcoming Stays & AI Concierge Status */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Section: Próximas estadias (2 Cols) */}
        <div id="dashboard-upcoming-stays-section" className="lg:col-span-2 bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-xs space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-zinc-900">Próximas estadias</h3>
              <p className="text-xs text-zinc-500">Hóspedes confirmados para os próximos dias</p>
            </div>

            <button
              id="dashboard-new-stay-btn"
              onClick={() => setActiveView('guests')}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-semibold transition-all shadow-xs cursor-pointer"
            >
              <UserPlus className="w-3.5 h-3.5" />
              <span>+ Nova estadia</span>
            </button>
          </div>

          {upcomingStays.length === 0 ? (
            <div className="text-center py-10 bg-zinc-50 rounded-xl border border-dashed border-zinc-200">
              <Calendar className="w-8 h-8 text-zinc-300 mx-auto mb-2" />
              <p className="text-sm font-semibold text-zinc-700">Ainda não há estadias futuras</p>
              <p className="text-xs text-zinc-400 mt-1">Cadastre sua primeira estadia manualmente no CRM.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {upcomingStays.map((stay) => {
                const isCurrent = stay.status === 'active';
                return (
                  <div
                    key={stay.id}
                    className="p-4 rounded-xl border border-zinc-200/80 bg-zinc-50/50 hover:bg-zinc-50 hover:border-zinc-300 transition-all flex flex-col justify-between space-y-4"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-base font-bold text-zinc-900">{stay.guestName}</h4>
                          <span className="px-2 py-0.5 text-[10px] font-semibold bg-rose-100 text-rose-700 rounded-md">
                            {stay.source}
                          </span>
                        </div>
                        <p className="text-xs text-zinc-500 mt-1 flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5 text-zinc-400" />
                          <span>{stay.guestsCount} hóspedes</span>
                        </p>
                      </div>

                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
                          isCurrent
                            ? 'bg-amber-100 text-amber-800 border border-amber-200'
                            : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            isCurrent ? 'bg-amber-500 animate-ping' : 'bg-emerald-500'
                          }`}
                        />
                        {isCurrent ? 'Em andamento' : 'Confirmado'}
                      </span>
                    </div>

                    <div className="bg-white p-3 rounded-lg border border-zinc-200/60 text-xs text-zinc-600 flex items-center justify-between">
                      <div className="flex items-center gap-2 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-rose-500" />
                        <span>
                          {stay.checkIn.split('-').reverse().slice(0, 2).join('/')} →{' '}
                          {stay.checkOut.split('-').reverse().slice(0, 2).join('/')}
                        </span>
                      </div>
                      <span className="text-[11px] text-zinc-400 font-mono">{stay.guestPhone}</span>
                    </div>

                    {stay.nextAutomation && (
                      <div className="text-[11px] text-emerald-700 bg-emerald-50/80 px-2.5 py-1.5 rounded-md border border-emerald-100 flex items-center justify-between">
                        <span className="truncate">Próxima automação:</span>
                        <span className="font-semibold">{stay.nextAutomation.scheduledFor}</span>
                      </div>
                    )}

                    <div className="pt-2 border-t border-zinc-200/60 flex items-center justify-between">
                      <span className="text-xs text-zinc-400 truncate max-w-[180px]">
                        {stay.notes || 'Sem observações'}
                      </span>
                      <button
                        onClick={() => setActiveView('guests')}
                        className="text-xs font-semibold text-rose-600 hover:text-rose-700 flex items-center gap-1 cursor-pointer"
                      >
                        Ver hóspede <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Section: Concierge Status & Quick Tools (1 Col) */}
        <div className="space-y-5">
          <div id="dashboard-concierge-quick-card" className="bg-gradient-to-br from-zinc-900 to-zinc-800 text-white p-6 rounded-2xl shadow-md space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-rose-400" />
                <h3 className="font-bold text-base">Concierge Virtual IA</h3>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Ativo
              </span>
            </div>

            <p className="text-xs text-zinc-300 leading-relaxed">
              Atendendo dúvidas de hóspedes no WhatsApp 24 horas por dia com tom{' '}
              <strong className="text-white">{concierge.tone}</strong>.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-white/10 p-3 rounded-xl border border-white/10 text-center">
                <span className="block text-xl font-bold">{concierge.statsToday.conversations}</span>
                <span className="text-[10px] text-zinc-400 uppercase tracking-wider">Conversas hoje</span>
              </div>
              <div className="bg-white/10 p-3 rounded-xl border border-white/10 text-center">
                <span className="block text-xl font-bold">{concierge.statsToday.answeredPercentage}%</span>
                <span className="text-[10px] text-zinc-400 uppercase tracking-wider">Respostas IA</span>
              </div>
            </div>

            <button
              onClick={() => setActiveView('concierge')}
              className="w-full py-2.5 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Gerenciar Base & Simular Chat</span>
            </button>
          </div>

          {/* Quick Checklist / Integration Status */}
          <div className="bg-white p-5 rounded-2xl border border-zinc-200/80 shadow-xs space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500">
              Status do Ecossistema
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between p-2 rounded-lg bg-zinc-50">
                <span className="text-zinc-700 font-medium">Landing Page da Villa</span>
                <span className="text-emerald-600 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Online
                </span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-zinc-50">
                <span className="text-zinc-700 font-medium">Evolution WhatsApp API</span>
                <span className="text-emerald-600 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Conectado
                </span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-zinc-50">
                <span className="text-zinc-700 font-medium">Automações ativas</span>
                <span className="text-rose-600 font-semibold">4 disparos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
