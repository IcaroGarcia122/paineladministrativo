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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-zinc-200/80 shadow-xs">
        <div>
          <h3 className="text-xl font-bold text-zinc-900">Analytics & Tráfego</h3>
          <p className="text-xs text-zinc-500 mt-0.5">
            Acompanhe o engajamento no site da hospedagem, origens e taxa de conversão
          </p>
        </div>

        <div className="flex items-center bg-zinc-100 p-1 rounded-xl gap-1 self-start sm:self-auto">
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
                period === p.id ? 'bg-white text-zinc-900 shadow-2xs' : 'text-zinc-600'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Top 4 KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white p-5 rounded-2xl border border-zinc-200/80 shadow-xs">
          <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
            Total de Visitantes
          </span>
          <div className="mt-3 flex items-baseline justify-between">
            <span className="text-3xl font-extrabold text-zinc-900">
              {analytics.siteVisits.toLocaleString('pt-BR')}
            </span>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
              +{analytics.visitsGrowth}%
            </span>
          </div>
          <p className="text-[11px] text-zinc-400 mt-2">Pessoas únicas que acessaram a landing page</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-zinc-200/80 shadow-xs">
          <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
            Cliques no Airbnb
          </span>
          <div className="mt-3 flex items-baseline justify-between">
            <span className="text-3xl font-extrabold text-zinc-900">
              {analytics.airbnbClicks.toLocaleString('pt-BR')}
            </span>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
              +{analytics.airbnbClicksGrowth}%
            </span>
          </div>
          <p className="text-[11px] text-zinc-400 mt-2">Direcionamentos para o anúncio oficial</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-zinc-200/80 shadow-xs">
          <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
            Cliques no WhatsApp
          </span>
          <div className="mt-3 flex items-baseline justify-between">
            <span className="text-3xl font-extrabold text-zinc-900">
              {analytics.whatsappClicks.toLocaleString('pt-BR')}
            </span>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
              +{analytics.whatsappClicksGrowth}%
            </span>
          </div>
          <p className="text-[11px] text-zinc-400 mt-2">Inícios de conversa com o Concierge</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-zinc-200/80 shadow-xs">
          <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
            Taxa de Conversão Airbnb
          </span>
          <div className="mt-3 flex items-baseline justify-between">
            <span className="text-3xl font-extrabold text-rose-600">
              {analytics.conversionRate}%
            </span>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
              Alta
            </span>
          </div>
          <p className="text-[11px] text-zinc-400 mt-2">Visitantes que clicaram para reservar</p>
        </div>
      </div>

      {/* Main Grid: Funnel & Traffic Sources */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Traffic Origins Distribution (7 cols) */}
        <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-xs space-y-6">
          <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
            <div>
              <h4 className="text-base font-bold text-zinc-900 flex items-center gap-2">
                <PieChart className="w-5 h-5 text-rose-600" /> Origem dos Visitantes
              </h4>
              <p className="text-xs text-zinc-500 mt-0.5">
                Canais de tráfego que mais atraem hóspedes para o site
              </p>
            </div>
          </div>

          {/* Source distribution bars */}
          <div className="space-y-4">
            {initialTrafficSources.map((source) => (
              <div key={source.source} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-zinc-800">{source.source}</span>
                  <div className="flex items-center gap-2 font-mono">
                    <span className="font-bold text-zinc-900">{source.visits} visitas</span>
                    <span className="text-zinc-400">({source.percentage}%)</span>
                  </div>
                </div>

                <div className="h-3 w-full bg-zinc-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${source.percentage}%`,
                      backgroundColor: source.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Conversion Funnel (5 cols) */}
        <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-xs space-y-6">
          <div className="border-b border-zinc-100 pb-3">
            <h4 className="text-base font-bold text-zinc-900 flex items-center gap-2">
              <MousePointerClick className="w-5 h-5 text-indigo-600" /> Funil de Conversão
            </h4>
            <p className="text-xs text-zinc-500 mt-0.5">Jornada do visitante até a intenção de reserva</p>
          </div>

          <div className="space-y-3 font-sans">
            {/* Step 1 */}
            <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-950 space-y-1">
              <div className="flex justify-between items-center text-xs font-bold">
                <span>1. Visitantes do Site</span>
                <span>2.483 (100%)</span>
              </div>
              <p className="text-[11px] text-indigo-700">Entraram na landing page da Villa do Poente</p>
            </div>

            {/* Down arrow */}
            <div className="text-center text-zinc-400 font-bold text-xs">↓ 27.5% conversão</div>

            {/* Step 2 */}
            <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-950 space-y-1">
              <div className="flex justify-between items-center text-xs font-bold">
                <span>2. Cliques no Anúncio Airbnb</span>
                <span>684 (27.5%)</span>
              </div>
              <p className="text-[11px] text-rose-700">Redirecionados para fechar reserva no Airbnb</p>
            </div>

            {/* Down arrow */}
            <div className="text-center text-zinc-400 font-bold text-xs">↓ 7.7% engajamento</div>

            {/* Step 3 */}
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-1">
              <div className="flex justify-between items-center text-xs font-bold">
                <span>3. Inícios de Chat WhatsApp</span>
                <span>192 (7.7%)</span>
              </div>
              <p className="text-[11px] text-emerald-700">Conversaram diretamente com o Concierge Virtual</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
