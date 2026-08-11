import React, { useState } from 'react';
import {
  Image as ImageIcon,
  Plus,
  Trash2,
  Star,
  Check,
  Upload,
  X,
  Sparkles,
  Tag,
  Eye,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { GalleryCategory, GalleryPhoto } from '../../types';

const categoriesList: GalleryCategory[] = [
  'Hero',
  'Quartos',
  'Sala',
  'Cozinha',
  'Banheiros',
  'Área externa',
  'Vista',
  'Experiências',
];

export const GalleryView: React.FC = () => {
  const { gallery, addPhoto, deletePhoto, setMainPhoto } = useApp();

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Form for adding photo
  const [newUrl, setNewUrl] = useState('');
  const [newCaption, setNewCaption] = useState('');
  const [newCategory, setNewCategory] = useState<GalleryCategory>('Hero');

  const filteredPhotos =
    selectedCategory === 'all'
      ? gallery
      : gallery.filter((p) => p.category === selectedCategory);

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalUrl =
      newUrl ||
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1000&auto=format&fit=crop&q=80';

    addPhoto({
      url: finalUrl,
      caption: newCaption || 'Nova foto da Villa do Poente',
      category: newCategory,
      isMain: gallery.length === 0,
    });

    setIsAddModalOpen(false);
    setNewUrl('');
    setNewCaption('');
  };

  return (
    <div id="gallery-view-container" className="space-y-6 animate-in fade-in duration-300">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-zinc-200/80 shadow-xs">
        <div>
          <h3 className="text-xl font-bold text-zinc-900">Galeria de Fotos</h3>
          <p className="text-xs text-zinc-500 mt-0.5">
            Gerencie e organize as fotos exibidas na landing page da hospedagem
          </p>
        </div>

        <button
          id="gallery-add-photo-btn"
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold shadow-xs transition-all cursor-pointer self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>+ Adicionar fotos</span>
        </button>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-1.5 bg-white p-1.5 rounded-2xl border border-zinc-200/80 overflow-x-auto">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
            selectedCategory === 'all'
              ? 'bg-rose-600 text-white shadow-2xs'
              : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50'
          }`}
        >
          Todas as fotos ({gallery.length})
        </button>

        {categoriesList.map((cat) => {
          const count = gallery.filter((p) => p.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-rose-600 text-white shadow-2xs'
                  : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50'
              }`}
            >
              {cat} ({count})
            </button>
          );
        })}
      </div>

      {/* Photo Grid */}
      {filteredPhotos.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center border border-dashed border-zinc-300">
          <ImageIcon className="w-10 h-10 text-zinc-300 mx-auto mb-2" />
          <h4 className="text-sm font-bold text-zinc-800">Nenhuma foto nesta categoria</h4>
          <p className="text-xs text-zinc-400 mt-1">
            Clique em "+ Adicionar fotos" para fazer upload de novas imagens.
          </p>
        </div>
      ) : (
        <div id="gallery-grid" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="group relative bg-white rounded-2xl border border-zinc-200/80 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              {/* Photo Canvas */}
              <div className="relative aspect-4/3 overflow-hidden bg-zinc-100">
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />

                {/* Main Tag Badge */}
                {photo.isMain && (
                  <span className="absolute top-2.5 left-2.5 bg-rose-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
                    <Star className="w-3 h-3 fill-white" /> Foto Principal
                  </span>
                )}

                {/* Category Badge */}
                <span className="absolute bottom-2.5 left-2.5 bg-zinc-900/80 backdrop-blur-xs text-white text-[10px] font-medium px-2 py-0.5 rounded-md">
                  {photo.category}
                </span>

                {/* Overlay Quick Actions */}
                <div className="absolute inset-0 bg-zinc-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 p-2">
                  {!photo.isMain && (
                    <button
                      onClick={() => setMainPhoto(photo.id)}
                      className="p-2 bg-white text-zinc-900 hover:bg-rose-50 text-xs font-semibold rounded-xl shadow-xs transition-all cursor-pointer flex items-center gap-1"
                      title="Definir como principal"
                    >
                      <Star className="w-3.5 h-3.5 text-rose-500" />
                      <span>Capa</span>
                    </button>
                  )}

                  <button
                    onClick={() => deletePhoto(photo.id)}
                    className="p-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold rounded-xl shadow-xs transition-all cursor-pointer"
                    title="Excluir foto"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Caption Footer */}
              <div className="p-3 text-xs text-zinc-700 border-t border-zinc-100 bg-white truncate">
                {photo.caption}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* MODAL: Adicionar Foto */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-zinc-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl border border-zinc-200 animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
              <div className="flex items-center gap-2">
                <Upload className="w-5 h-5 text-rose-600" />
                <h3 className="text-lg font-bold text-zinc-900">Adicionar Fotos</h3>
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
                  URL da Imagem
                </label>
                <input
                  type="url"
                  placeholder="https://images.unsplash.com/..."
                  value={newUrl}
                  onChange={(e) => setNewUrl(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 text-sm font-medium focus:ring-2 focus:ring-rose-500/20 focus:outline-none"
                />
                <span className="text-[11px] text-zinc-400 mt-1 block">
                  Ou deixe em branco para simular foto em alta definição.
                </span>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">
                  Legenda da Foto
                </label>
                <input
                  type="text"
                  placeholder="Ex: Suíte Principal com vista mar"
                  value={newCaption}
                  onChange={(e) => setNewCaption(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 text-sm font-medium focus:ring-2 focus:ring-rose-500/20 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">Categoria</label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value as GalleryCategory)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 text-sm font-medium bg-white focus:ring-2 focus:ring-rose-500/20 focus:outline-none"
                >
                  {categoriesList.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
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
                  Adicionar à Galeria
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
