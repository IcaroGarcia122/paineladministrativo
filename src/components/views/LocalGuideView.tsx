import React, { useState } from 'react';
import {
  Compass,
  MapPin,
  ExternalLink,
  Plus,
  Trash2,
  Sparkles,
  Bot,
  X,
  Star,
  CheckCircle2,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { LocalGuideCategory, LocalRecommendation } from '../../types';

const guideCategories: { id: LocalGuideCategory; label: string }[] = [
  { id: 'Restaurantes', label: 'Restaurantes' },
  { id: 'Praias', label: 'Praias' },
  { id: 'Trilhas', label: 'Trilhas' },
  { id: 'Mercados', label: 'Mercados' },
  { id: 'Farmácias', label: 'Farmácias' },
  { id: 'Passeios', label: 'Passeios' },
  { id: 'Pontos turísticos', label: 'Pontos Turísticos' },
  { id: 'Cafés', label: 'Cafés' },
];

export const LocalGuideView: React.FC = () => {
  const { recommendations, addRecommendation, deleteRecommendation } = useApp();

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Form for adding recommendation
  const [recForm, setRecForm] = useState({
    name: '',
    category: 'Restaurantes' as LocalGuideCategory,
    description: '',
    address: '',
    googleMapsUrl: '',
    imageUrl: '',
    isHostRecommended: true,
  });

  const filteredRecs =
    activeCategory === 'all'
      ? recommendations
      : recommendations.filter((r) => r.category === activeCategory);

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!recForm.name || !recForm.description) return;

    addRecommendation({
      name: recForm.name,
      category: recForm.category,
      description: recForm.description,
      address: recForm.address || 'Búzios - RJ',
      googleMapsUrl: recForm.googleMapsUrl || `https://maps.google.com/?q=${encodeURIComponent(recForm.name)}+Buzios`,
      imageUrl:
        recForm.imageUrl ||
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop&q=80',
      isHostRecommended: recForm.isHostRecommended,
      isFeatured: false,
    });

    setIsAddModalOpen(false);
    setRecForm({
      name: '',
      category: 'Restaurantes',
      description: '',
      address: '',
      googleMapsUrl: '',
      imageUrl: '',
      isHostRecommended: true,
    });
  };

  return (
    <div id="local-guide-view-container" className="space-y-6 animate-in fade-in duration-300">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-zinc-200/80 shadow-xs">
        <div>
          <h3 className="text-xl font-bold text-zinc-900">Guia da Região</h3>
          <p className="text-xs text-zinc-500 mt-0.5">
            Cadastre suas melhores recomendações locais de Búzios para os hóspedes
          </p>
        </div>

        <button
          id="local-guide-add-btn"
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold shadow-xs transition-all cursor-pointer self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>+ Adicionar recomendação</span>
        </button>
      </div>

      {/* AI Concierge Synergy Banner */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-zinc-900 to-zinc-800 text-white shadow-sm flex items-start gap-3">
        <Bot className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
        <div className="text-xs space-y-1">
          <h4 className="font-bold text-white flex items-center gap-2">
            Alimentação do Concierge IA
            <span className="bg-rose-500/20 text-rose-300 text-[10px] px-2 py-0.5 rounded-full border border-rose-500/30 font-semibold">
              Sincronizado
            </span>
          </h4>
          <p className="text-zinc-300 leading-relaxed">
            Essas informações são utilizadas automaticamente pelo <strong>Concierge Virtual</strong> no WhatsApp como base de conhecimento para recomendar restaurantes, supermercados e praias aos seus hóspedes.
          </p>
        </div>
      </div>

      {/* Categories Horizontal Tabs */}
      <div className="flex items-center gap-1.5 bg-white p-1.5 rounded-2xl border border-zinc-200/80 overflow-x-auto">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
            activeCategory === 'all'
              ? 'bg-rose-600 text-white shadow-2xs'
              : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50'
          }`}
        >
          Todas ({recommendations.length})
        </button>

        {guideCategories.map((cat) => {
          const count = recommendations.filter((r) => r.category === cat.id).length;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-rose-600 text-white shadow-2xs'
                  : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50'
              }`}
            >
              {cat.label} ({count})
            </button>
          );
        })}
      </div>

      {/* Recommendations Cards Grid */}
      {filteredRecs.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center border border-dashed border-zinc-300">
          <Compass className="w-10 h-10 text-zinc-300 mx-auto mb-2" />
          <h4 className="text-sm font-bold text-zinc-800">Nenhuma recomendação nesta categoria</h4>
          <p className="text-xs text-zinc-400 mt-1">
            Clique no botão acima para cadastrar novos locais recomendados.
          </p>
        </div>
      ) : (
        <div id="local-guide-cards-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredRecs.map((rec) => (
            <div
              key={rec.id}
              className="bg-white rounded-2xl border border-zinc-200/80 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Image header */}
                <div className="relative h-44 overflow-hidden bg-zinc-100">
                  <img
                    src={rec.imageUrl}
                    alt={rec.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />

                  {rec.isHostRecommended && (
                    <span className="absolute top-2.5 left-2.5 bg-rose-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
                      <Star className="w-3 h-3 fill-white" /> Recomendado pelo Anfitrião
                    </span>
                  )}

                  <span className="absolute bottom-2.5 right-2.5 bg-zinc-900/80 backdrop-blur-xs text-white text-[10px] font-medium px-2 py-0.5 rounded-md">
                    {rec.category}
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-4 space-y-2">
                  <h4 className="text-base font-bold text-zinc-900">{rec.name}</h4>
                  <p className="text-xs text-zinc-600 leading-relaxed line-clamp-3">
                    {rec.description}
                  </p>
                  <div className="flex items-center gap-1 text-[11px] text-zinc-500 pt-1">
                    <MapPin className="w-3.5 h-3.5 text-rose-500 flex-shrink-0" />
                    <span className="truncate">{rec.address}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-3 bg-zinc-50 border-t border-zinc-100 flex items-center justify-between">
                <a
                  href={rec.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-600 hover:text-rose-700"
                >
                  Abrir no Google Maps <ExternalLink className="w-3 h-3" />
                </a>

                <button
                  onClick={() => deleteRecommendation(rec.id)}
                  className="p-1.5 text-zinc-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                  title="Excluir recomendação"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* MODAL: Adicionar Recomendação */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-zinc-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl border border-zinc-200 animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-rose-600" />
                <h3 className="text-lg font-bold text-zinc-900">Nova Recomendação</h3>
              </div>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="p-1 text-zinc-400 hover:text-zinc-700 rounded-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddSubmit} className="mt-4 space-y-4">
              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">
                  Nome do local *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Praia da Ferradurinha"
                  value={recForm.name}
                  onChange={(e) => setRecForm({ ...recForm, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 text-sm font-medium focus:ring-2 focus:ring-rose-500/20 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">Categoria *</label>
                <select
                  value={recForm.category}
                  onChange={(e) =>
                    setRecForm({ ...recForm, category: e.target.value as LocalGuideCategory })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 text-sm font-medium bg-white focus:ring-2 focus:ring-rose-500/20 focus:outline-none"
                >
                  {guideCategories.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">
                  Descrição e Dicas *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Ex: Ótimo lugar para caiaque com tartarugas. Chegar antes das 10h."
                  value={recForm.description}
                  onChange={(e) => setRecForm({ ...recForm, description: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 text-sm font-medium focus:ring-2 focus:ring-rose-500/20 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">Endereço</label>
                <input
                  type="text"
                  placeholder="Ex: Canto Esquerdo de Geribá, Búzios"
                  value={recForm.address}
                  onChange={(e) => setRecForm({ ...recForm, address: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 text-sm font-medium focus:ring-2 focus:ring-rose-500/20 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">URL Imagem</label>
                <input
                  type="url"
                  placeholder="https://images.unsplash.com/..."
                  value={recForm.imageUrl}
                  onChange={(e) => setRecForm({ ...recForm, imageUrl: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 text-sm font-medium focus:ring-2 focus:ring-rose-500/20 focus:outline-none"
                />
              </div>

              <div className="p-3 bg-rose-50 rounded-xl border border-rose-200 flex items-center justify-between">
                <span className="text-xs font-bold text-zinc-900 flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 text-rose-600 fill-rose-600" /> Destaque: Recomendado pelo anfitrião
                </span>
                <input
                  type="checkbox"
                  checked={recForm.isHostRecommended}
                  onChange={(e) => setRecForm({ ...recForm, isHostRecommended: e.target.checked })}
                  className="w-4 h-4 text-rose-600 rounded cursor-pointer"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-zinc-600 hover:bg-zinc-100 rounded-xl cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-xl shadow-xs cursor-pointer"
                >
                  Cadastrar Recomendação
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
