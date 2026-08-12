import React, { useState } from 'react';
import {
  BarChart3,
  TrendingUp,
  Globe,
  MessageSquare,
  ExternalLink,
  Users,
  ArrowUpRight,
  PieChart,
  MousePointerClick,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { initialTrafficSources, initialPerformance30Days } from '../../mockData';

export const AnalyticsView: React.FC = () => {
  const { analytics } = useApp();
  const [period, setPeriod] = useState<'30d' | '7d' | '3m'>('30d');

  return (
    <div id="analytics-view-container" className="space-y-8 animate-in fade-in duration-300">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#16120E] p-5 rounded-2xl border border-[#C59A55]/30 shadow-md">
        <div>
          <h3 className="text-xl font-serif font-bold text-[#FBF9F4]">Analytics & Tráfego</h3>
          <p className="text-xs text-zinc-400 mt-0.5">
            Acompanhe o engajamento no site da hospedagem, origens e taxa de conversão
          </p>
        </div>

        <div className="flex items-center bg-[#1A1612] p-1 rounded-xl border border-[#C59A55]/20 gap-1 self-start sm:self-auto">
          {(
            [
              { id: '7d', label: '7 dias' },
              { id: '30d', label: '30 dias' },
              { id: '3m', label: '3 meses' },
            ] as const
          ).map((p) => (
            <button
              key={p.id}
              onClick={() => setPeriod(p.id)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                period === p.id
                  ? 'bg-gradient-to-r from-[#C59A55] to-[#B8860B] text-black font-bold shadow-xs'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Top 4 KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-[#16120E] p-5 rounded-2xl border border-[#C59A55]/20 shadow-md">
          <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Total de Visitantes
          </span>
          <div className="mt-3 flex items-baseline justify-between">
            <span className="text-3xl font-extrabold text-[#FBF9F4]">
              {analytics.siteVisits.toLocaleString('pt-BR')}
            </span>
            <span className="text-xs font-bold text-emerald-400 bg-emerald-500/20 border border-emerald-500/30 px-2 py-0.5 rounded-full">
              +{analytics.visitsGrowth}%
            </span>
          </div>
          <p className="text-[11px] text-zinc-400 mt-2">Pessoas únicas que acessaram a landing page</p>
        </div>

        <div className="bg-[#16120E] p-5 rounded-2xl border border-[#C59A55]/20 shadow-md">
          <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Cliques no Airbnb
          </span>
          <div className="mt-3 flex items-baseline justify-between">
            <span className="text-3xl font-extrabold text-[#FBF9F4]">
              {analytics.airbnbClicks.toLocaleString('pt-BR')}
            </span>
            <span className="text-xs font-bold text-emerald-400 bg-emerald-500/20 border border-emerald-500/30 px-2 py-0.5 rounded-full">
              +{analytics.airbnbClicksGrowth}%
            </span>
          </div>
          <p className="text-[11px] text-zinc-400 mt-2">Direcionamentos para o anúncio oficial</p>
        </div>

        <div className="bg-[#16120E] p-5 rounded-2xl border border-[#C59A55]/20 shadow-md">
          <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Cliques no WhatsApp
          </span>
          <div className="mt-3 flex items-baseline justify-between">
            <span className="text-3xl font-extrabold text-[#FBF9F4]">
              {analytics.whatsappClicks.toLocaleString('pt-BR')}
            </span>
            <span className="text-xs font-bold text-emerald-400 bg-emerald-500/20 border border-emerald-500/30 px-2 py-0.5 rounded-full">
              +{analytics.whatsappClicksGrowth}%
            </span>
          </div>
          <p className="text-[11px] text-zinc-400 mt-2">Inícios de conversa com o Concierge</p>
        </div>

        <div className="bg-[#16120E] p-5 rounded-2xl border border-[#C59A55]/20 shadow-md">
          <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Taxa de Conversão Airbnb
          </span>
          <div className="mt-3 flex items-baseline justify-between">
            <span className="text-3xl font-extrabold text-[#C59A55]">
              {analytics.conversionRate}%
            </span>
            <span className="text-xs font-bold text-emerald-400 bg-emerald-500/20 border border-emerald-500/30 px-2 py-0.5 rounded-full">
              Alta
            </span>
          </div>
          <p className="text-[11px] text-zinc-400 mt-2">Visitantes que clicaram para reservar</p>
        </div>
      </div>

      {/* Main Grid: Funnel & Traffic Sources */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Traffic Origins Distribution (7 cols) */}
        <div className="lg:col-span-7 bg-[#16120E] p-6 rounded-2xl border border-[#C59A55]/20 shadow-md space-y-6">
          <div className="flex items-center justify-between border-b border-[#C59A55]/15 pb-3">
            <div>
              <h4 className="text-base font-serif font-bold text-[#FBF9F4] flex items-center gap-2">
                <PieChart className="w-5 h-5 text-[#C59A55]" /> Origem dos Visitantes
              </h4>
              <p className="text-xs text-zinc-400 mt-0.5">
                Canais de tráfego que mais atraem hóspedes para o site
              </p>
            </div>
          </div>

          {/* Source distribution bars */}
          <div className="space-y-4">
            {initialTrafficSources.map((source) => (
              <div key={source.source} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[#FBF9F4]">{source.source}</span>
                  <div className="flex items-center gap-2 font-mono">
                    <span className="font-bold text-[#E6C994]">{source.visits} visitas</span>
                    <span className="text-zinc-400">({source.percentage}%)</span>
                  </div>
                </div>

                <div className="h-3 w-full bg-[#1A1612] rounded-full overflow-hidden border border-[#C59A55]/15">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${source.percentage}%`,
                      backgroundColor: source.color === '#f43f5e' ? '#C59A55' : source.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Conversion Funnel (5 cols) */}
        <div className="lg:col-span-5 bg-[#16120E] p-6 rounded-2xl border border-[#C59A55]/20 shadow-md space-y-6">
          <div className="border-b border-[#C59A55]/15 pb-3">
            <h4 className="text-base font-serif font-bold text-[#FBF9F4] flex items-center gap-2">
              <MousePointerClick className="w-5 h-5 text-[#C59A55]" /> Funil de Conversão
            </h4>
            <p className="text-xs text-zinc-400 mt-0.5">Jornada do visitante até a intenção de reserva</p>
          </div>

          <div className="space-y-3 font-sans">
            {/* Step 1 */}
            <div className="p-4 rounded-xl bg-[#1A1612] border border-[#C59A55]/20 text-[#FBF9F4] space-y-1">
              <div className="flex justify-between items-center text-xs font-bold">
                <span>1. Visitantes do Site</span>
                <span className="text-[#E6C994]">2.483 (100%)</span>
              </div>
              <p className="text-[11px] text-zinc-400">Entraram na landing page da Villa do Poente</p>
            </div>

            {/* Down arrow */}
            <div className="text-center text-[#C59A55] font-bold text-xs">↓ 27.5% conversão</div>

            {/* Step 2 */}
            <div className="p-4 rounded-xl bg-[#1F1914] border border-[#C59A55]/30 text-[#FBF9F4] space-y-1">
              <div className="flex justify-between items-center text-xs font-bold">
                <span>2. Cliques no Anúncio Airbnb</span>
                <span className="text-[#E6C994]">684 (27.5%)</span>
              </div>
              <p className="text-[11px] text-zinc-400">Redirecionados para fechar reserva no Airbnb</p>
            </div>

            {/* Down arrow */}
            <div className="text-center text-[#C59A55] font-bold text-xs">↓ 7.7% engajamento</div>

            {/* Step 3 */}
            <div className="p-4 rounded-xl bg-[#1A1612] border border-emerald-500/30 text-[#FBF9F4] space-y-1">
              <div className="flex justify-between items-center text-xs font-bold">
                <span>3. Inícios de Chat WhatsApp</span>
                <span className="text-emerald-400">192 (7.7%)</span>
              </div>
              <p className="text-[11px] text-zinc-400">Conversaram diretamente com o Concierge Virtual</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
