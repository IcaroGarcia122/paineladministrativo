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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#16120E] p-5 rounded-2xl border border-[#C59A55]/20 shadow-md">
        <div>
          <h3 className="text-xl font-serif font-bold text-[#FBF9F4]">Guia da Região</h3>
          <p className="text-xs text-zinc-400 mt-0.5">
            Cadastre suas melhores recomendações locais de Búzios para os hóspedes
          </p>
        </div>

        <button
          id="local-guide-add-btn"
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#C59A55] to-[#B8860B] text-black hover:brightness-110 rounded-xl text-xs font-bold shadow-md transition-all cursor-pointer self-start sm:self-auto"
        >
          <Plus className="w-4 h-4 text-black" />
          <span>+ Adicionar recomendação</span>
        </button>
      </div>

      {/* AI Concierge Synergy Banner */}
      <div className="p-4 rounded-2xl bg-[#1A1612] border border-[#C59A55]/30 text-white shadow-sm flex items-start gap-3">
        <Bot className="w-5 h-5 text-[#C59A55] flex-shrink-0 mt-0.5" />
        <div className="text-xs space-y-1">
          <h4 className="font-bold text-[#FBF9F4] flex items-center gap-2">
            Alimentação do Concierge IA
            <span className="bg-[#C59A55]/20 text-[#E6C994] text-[10px] px-2 py-0.5 rounded-full border border-[#C59A55]/30 font-semibold">
              Sincronizado
            </span>
          </h4>
          <p className="text-zinc-300 leading-relaxed">
            Essas informações são utilizadas automaticamente pelo <strong>Concierge Virtual</strong> no WhatsApp como base de conhecimento para recomendar restaurantes, supermercados e praias aos seus hóspedes.
          </p>
        </div>
      </div>

      {/* Categories Horizontal Tabs */}
      <div className="flex items-center gap-1.5 bg-[#16120E] p-1.5 rounded-2xl border border-[#C59A55]/20 overflow-x-auto">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
            activeCategory === 'all'
              ? 'bg-gradient-to-r from-[#C59A55] to-[#B8860B] text-black shadow-xs font-bold'
              : 'text-zinc-400 hover:text-white hover:bg-[#1F1914]'
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
                  ? 'bg-gradient-to-r from-[#C59A55] to-[#B8860B] text-black shadow-xs font-bold'
                  : 'text-zinc-400 hover:text-white hover:bg-[#1F1914]'
              }`}
            >
              {cat.label} ({count})
            </button>
          );
        })}
      </div>

      {/* Recommendations Cards Grid */}
      {filteredRecs.length === 0 ? (
        <div className="bg-[#16120E] rounded-2xl p-12 text-center border border-dashed border-[#C59A55]/30">
          <Compass className="w-10 h-10 text-[#C59A55]/40 mx-auto mb-2" />
          <h4 className="text-sm font-serif font-bold text-[#FBF9F4]">Nenhuma recomendação nesta categoria</h4>
          <p className="text-xs text-zinc-400 mt-1">
            Clique no botão acima para cadastrar novos locais recomendados.
          </p>
        </div>
      ) : (
        <div id="local-guide-cards-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredRecs.map((rec) => (
            <div
              key={rec.id}
              className="bg-[#16120E] rounded-2xl border border-[#C59A55]/20 overflow-hidden shadow-md hover:border-[#C59A55]/50 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Image header */}
                <div className="relative h-44 overflow-hidden bg-[#1F1914]">
                  <img
                    src={rec.imageUrl}
                    alt={rec.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />

                  {rec.isHostRecommended && (
                    <span className="absolute top-2.5 left-2.5 bg-gradient-to-r from-[#C59A55] to-[#B8860B] text-black text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                      <Star className="w-3 h-3 fill-black text-black" /> Recomendado pelo Anfitrião
                    </span>
                  )}

                  <span className="absolute bottom-2.5 right-2.5 bg-black/80 backdrop-blur-xs text-[#E6C994] border border-[#C59A55]/30 text-[10px] font-medium px-2 py-0.5 rounded-md">
                    {rec.category}
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-4 space-y-2">
                  <h4 className="text-base font-serif font-bold text-[#FBF9F4]">{rec.name}</h4>
                  <p className="text-xs text-zinc-300 leading-relaxed line-clamp-3">
                    {rec.description}
                  </p>
                  <div className="flex items-center gap-1 text-[11px] text-zinc-400 pt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#C59A55] flex-shrink-0" />
                    <span className="truncate">{rec.address}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-3 bg-[#1F1914] border-t border-[#C59A55]/15 flex items-center justify-between">
                <a
                  href={rec.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E6C994] hover:text-white transition-colors"
                >
                  Abrir no Google Maps <ExternalLink className="w-3 h-3" />
                </a>

                <button
                  onClick={() => deleteRecommendation(rec.id)}
                  className="p-1.5 text-zinc-400 hover:text-rose-400 hover:bg-rose-950/50 rounded-lg transition-colors cursor-pointer"
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
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#16120E] rounded-2xl max-w-md w-full p-6 shadow-2xl border border-[#C59A55]/30 animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-[#C59A55]/15">
              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#C59A55]" />
                <h3 className="text-lg font-serif font-bold text-[#FBF9F4]">Nova Recomendação</h3>
              </div>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="p-1 text-zinc-400 hover:text-white rounded-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddSubmit} className="mt-4 space-y-4">
              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1">
                  Nome do local *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Praia da Ferradurinha"
                  value={recForm.name}
                  onChange={(e) => setRecForm({ ...recForm, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#C59A55]/30 bg-[#1A1612] text-white text-sm font-medium focus:ring-2 focus:ring-[#C59A55] focus:outline-none placeholder:text-zinc-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1">Categoria *</label>
                <select
                  value={recForm.category}
                  onChange={(e) =>
                    setRecForm({ ...recForm, category: e.target.value as LocalGuideCategory })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#C59A55]/30 bg-[#1A1612] text-white text-sm font-medium focus:ring-2 focus:ring-[#C59A55] focus:outline-none"
                >
                  {guideCategories.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1">
                  Descrição e Dicas *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Ex: Ótimo lugar para caiaque com tartarugas. Chegar antes das 10h."
                  value={recForm.description}
                  onChange={(e) => setRecForm({ ...recForm, description: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#C59A55]/30 bg-[#1A1612] text-white text-sm font-medium focus:ring-2 focus:ring-[#C59A55] focus:outline-none placeholder:text-zinc-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1">Endereço</label>
                <input
                  type="text"
                  placeholder="Ex: Canto Esquerdo de Geribá, Búzios"
                  value={recForm.address}
                  onChange={(e) => setRecForm({ ...recForm, address: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#C59A55]/30 bg-[#1A1612] text-white text-sm font-medium focus:ring-2 focus:ring-[#C59A55] focus:outline-none placeholder:text-zinc-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1">URL Imagem</label>
                <input
                  type="url"
                  placeholder="https://images.unsplash.com/..."
                  value={recForm.imageUrl}
                  onChange={(e) => setRecForm({ ...recForm, imageUrl: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#C59A55]/30 bg-[#1A1612] text-white text-sm font-medium focus:ring-2 focus:ring-[#C59A55] focus:outline-none placeholder:text-zinc-600"
                />
              </div>

              <div className="p-3 bg-[#1F1914] rounded-xl border border-[#C59A55]/20 flex items-center justify-between">
                <span className="text-xs font-bold text-[#FBF9F4] flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 text-[#C59A55] fill-[#C59A55]" /> Destaque: Recomendado pelo anfitrião
                </span>
                <input
                  type="checkbox"
                  checked={recForm.isHostRecommended}
                  onChange={(e) => setRecForm({ ...recForm, isHostRecommended: e.target.checked })}
                  className="w-4 h-4 text-[#C59A55] accent-[#C59A55] rounded cursor-pointer"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-zinc-400 hover:text-white rounded-xl cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-gradient-to-r from-[#C59A55] to-[#B8860B] text-black text-xs font-bold rounded-xl shadow-xs cursor-pointer hover:brightness-110"
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
