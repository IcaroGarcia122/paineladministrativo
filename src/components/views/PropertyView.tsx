import React, { useState } from 'react';
import {
  Building2,
  Check,
  Info,
  ExternalLink,
  Wifi,
  Wind,
  Waves,
  Sparkles,
  Flame,
  UtensilsCrossed,
  Tv,
  Car,
  Sun,
  Footprints,
  FlameKindling,
  ShieldCheck,
  Save,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { PropertyInfo, HouseRules } from '../../types';

export const PropertyView: React.FC = () => {
  const { property, updateProperty, amenities, toggleAmenity, houseRules, updateHouseRules } = useApp();

  const [propForm, setPropForm] = useState<PropertyInfo>(property);
  const [rulesForm, setRulesForm] = useState<HouseRules>(houseRules);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProperty(propForm);
    updateHouseRules(rulesForm);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wifi': return Wifi;
      case 'Wind': return Wind;
      case 'Waves': return Waves;
      case 'Sparkles': return Sparkles;
      case 'Flame': return Flame;
      case 'UtensilsCrossed': return UtensilsCrossed;
      case 'Tv': return Tv;
      case 'Car': return Car;
      case 'Sun': return Sun;
      case 'Footprints': return Footprints;
      case 'FlameKindling': return FlameKindling;
      case 'ShieldCheck': return ShieldCheck;
      default: return Building2;
    }
  };

  return (
    <form id="property-form" onSubmit={handleSubmit} className="space-y-8 animate-in fade-in duration-300">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#16120E] p-5 rounded-2xl border border-[#C59A55]/20 shadow-md">
        <div>
          <h3 className="text-xl font-serif font-bold text-[#FBF9F4]">Minha Hospedagem</h3>
          <p className="text-xs text-zinc-400 mt-0.5">
            Gerencie as informações, comodidades e regras exibidas na landing page do hóspede
          </p>
        </div>

        <button
          type="submit"
          className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#C59A55] to-[#B8860B] text-black text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer hover:brightness-110 self-start sm:self-auto"
        >
          <Save className="w-4 h-4 text-black" />
          <span>Salvar Alterações</span>
        </button>
      </div>

      {/* Notice about Airbnb Link */}
      <div className="p-4 rounded-2xl bg-[#C59A55]/10 border border-[#C59A55]/30 text-[#E6C994] flex items-start gap-3">
        <Info className="w-5 h-5 text-[#C59A55] flex-shrink-0 mt-0.5" />
        <div className="text-xs space-y-1">
          <p className="font-bold text-[#FBF9F4]">Sobre a integração com o Airbnb:</p>
          <p className="text-zinc-300 leading-relaxed">
            O campo <strong>Link do anúncio do Airbnb</strong> é utilizado exclusivamente para direcionar os hóspedes e visitantes da landing page para o seu anúncio oficial. Nenhuma chave de API ou permissão de conta é necessária. O controle de reservas é feito diretamente através do seu cadastro manual de hóspedes no painel.
          </p>
        </div>
      </div>

      {/* Section 1: Informações Gerais */}
      <div className="bg-[#16120E] p-6 rounded-2xl border border-[#C59A55]/20 shadow-md space-y-5">
        <h4 className="text-sm font-bold uppercase tracking-wider text-[#E6C994] border-b border-[#C59A55]/15 pb-2">
          1. Informações Gerais
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-zinc-300 mb-1">
              Nome da Hospedagem
            </label>
            <input
              type="text"
              value={propForm.name}
              onChange={(e) => setPropForm({ ...propForm, name: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#C59A55]/30 bg-[#1A1612] text-white text-sm font-medium focus:ring-2 focus:ring-[#C59A55] focus:outline-none"
            />
            <span className="text-[11px] text-zinc-500 mt-1 block">
              Nome de destaque principal da propriedade.
            </span>
          </div>

          <div>
            <label className="block text-xs font-bold text-zinc-300 mb-1">
              Link do Anúncio do Airbnb
            </label>
            <div className="relative">
              <input
                type="url"
                value={propForm.airbnbUrl}
                onChange={(e) => setPropForm({ ...propForm, airbnbUrl: e.target.value })}
                className="w-full pl-3.5 pr-9 py-2.5 rounded-xl border border-[#C59A55]/30 bg-[#1A1612] text-white text-sm font-medium focus:ring-2 focus:ring-[#C59A55] focus:outline-none font-mono"
              />
              <ExternalLink className="w-4 h-4 text-[#C59A55] absolute right-3 top-1/2 -translate-y-1/2" />
            </div>
            <span className="text-[11px] text-zinc-500 mt-1 block">
              URL direta para reserva oficial no Airbnb.
            </span>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-zinc-300 mb-1">
            Subtítulo / Chamada Curta
          </label>
          <input
            type="text"
            value={propForm.subtitle}
            onChange={(e) => setPropForm({ ...propForm, subtitle: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-[#C59A55]/30 bg-[#1A1612] text-white text-sm font-medium focus:ring-2 focus:ring-[#C59A55] focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-zinc-300 mb-1">
            Descrição Completa
          </label>
          <textarea
            rows={3}
            value={propForm.description}
            onChange={(e) => setPropForm({ ...propForm, description: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-[#C59A55]/30 bg-[#1A1612] text-white text-sm font-medium focus:ring-2 focus:ring-[#C59A55] focus:outline-none"
          />
          <span className="text-[11px] text-zinc-500 mt-1 block">
            Aparece na seção principal da landing page e serve como context para a inteligência artificial do Concierge.
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-zinc-300 mb-1">Localização (Cidade, Estado)</label>
            <input
              type="text"
              value={propForm.location}
              onChange={(e) => setPropForm({ ...propForm, location: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#C59A55]/30 bg-[#1A1612] text-white text-sm font-medium focus:ring-2 focus:ring-[#C59A55] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-zinc-300 mb-1">Endereço Completo (Para Waze / Maps)</label>
            <input
              type="text"
              value={propForm.address}
              onChange={(e) => setPropForm({ ...propForm, address: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#C59A55]/30 bg-[#1A1612] text-white text-sm font-medium focus:ring-2 focus:ring-[#C59A55] focus:outline-none"
            />
          </div>
        </div>

        {/* Capacity grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
          <div>
            <label className="block text-xs font-bold text-zinc-300 mb-1">Capacidade (Pessoas)</label>
            <input
              type="number"
              value={propForm.capacity}
              onChange={(e) => setPropForm({ ...propForm, capacity: parseInt(e.target.value) || 1 })}
              className="w-full px-3 py-2 rounded-xl border border-[#C59A55]/30 bg-[#1A1612] text-white text-sm font-medium"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-zinc-300 mb-1">Quartos / Suítes</label>
            <input
              type="number"
              value={propForm.bedrooms}
              onChange={(e) => setPropForm({ ...propForm, bedrooms: parseInt(e.target.value) || 1 })}
              className="w-full px-3 py-2 rounded-xl border border-[#C59A55]/30 bg-[#1A1612] text-white text-sm font-medium"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-zinc-300 mb-1">Banheiros</label>
            <input
              type="number"
              value={propForm.bathrooms}
              onChange={(e) => setPropForm({ ...propForm, bathrooms: parseInt(e.target.value) || 1 })}
              className="w-full px-3 py-2 rounded-xl border border-[#C59A55]/30 bg-[#1A1612] text-white text-sm font-medium"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-zinc-300 mb-1">Camas Total</label>
            <input
              type="number"
              value={propForm.beds}
              onChange={(e) => setPropForm({ ...propForm, beds: parseInt(e.target.value) || 1 })}
              className="w-full px-3 py-2 rounded-xl border border-[#C59A55]/30 bg-[#1A1612] text-white text-sm font-medium"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-2">
          <div>
            <label className="block text-xs font-bold text-zinc-300 mb-1">Horário Padrão Check-in</label>
            <input
              type="time"
              value={propForm.checkInTime}
              onChange={(e) => setPropForm({ ...propForm, checkInTime: e.target.value })}
              className="w-full px-3 py-2 rounded-xl border border-[#C59A55]/30 bg-[#1A1612] text-white text-sm font-medium"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-zinc-300 mb-1">Horário Padrão Checkout</label>
            <input
              type="time"
              value={propForm.checkOutTime}
              onChange={(e) => setPropForm({ ...propForm, checkOutTime: e.target.value })}
              className="w-full px-3 py-2 rounded-xl border border-[#C59A55]/30 bg-[#1A1612] text-white text-sm font-medium"
            />
          </div>
        </div>
      </div>

      {/* Section 2: Comodidades */}
      <div className="bg-[#16120E] p-6 rounded-2xl border border-[#C59A55]/20 shadow-md space-y-4">
        <div className="flex items-center justify-between border-b border-[#C59A55]/15 pb-2">
          <h4 className="text-sm font-bold uppercase tracking-wider text-[#E6C994]">
            2. Comodidades Destaque
          </h4>
          <span className="text-xs font-medium text-zinc-400">
            Marque as facilidades presentes na hospedagem
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {amenities.map((item) => {
            const Icon = getIcon(item.iconName);
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => toggleAmenity(item.id)}
                className={`p-3 rounded-xl border transition-all text-left flex items-center justify-between cursor-pointer ${
                  item.enabled
                    ? 'bg-[#C59A55]/20 border-[#C59A55]/50 text-[#FBF9F4] shadow-xs font-semibold'
                    : 'bg-[#1F1914] border-[#C59A55]/10 text-zinc-400 hover:bg-[#241E18]'
                }`}
              >
                <div className="flex items-center gap-2.5 truncate">
                  <Icon className={`w-4 h-4 flex-shrink-0 ${item.enabled ? 'text-[#C59A55]' : 'text-zinc-500'}`} />
                  <span className="text-xs truncate">{item.name}</span>
                </div>
                {item.enabled && <Check className="w-4 h-4 text-[#C59A55] flex-shrink-0 ml-1" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Section 3: Regras da Casa */}
      <div className="bg-[#16120E] p-6 rounded-2xl border border-[#C59A55]/20 shadow-md space-y-5">
        <h4 className="text-sm font-bold uppercase tracking-wider text-[#E6C994] border-b border-[#C59A55]/15 pb-2">
          3. Regras da Hospedagem
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Pets */}
          <div className="p-4 rounded-xl border border-[#C59A55]/20 bg-[#1F1914] space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#FBF9F4]">Aceita Animais (Pets)</span>
              <input
                type="checkbox"
                checked={rulesForm.petsAllowed}
                onChange={(e) => setRulesForm({ ...rulesForm, petsAllowed: e.target.checked })}
                className="w-4 h-4 text-[#C59A55] accent-[#C59A55] rounded cursor-pointer"
              />
            </div>
            {rulesForm.petsAllowed && (
              <input
                type="text"
                placeholder="Observações de pets..."
                value={rulesForm.petNotes || ''}
                onChange={(e) => setRulesForm({ ...rulesForm, petNotes: e.target.value })}
                className="w-full p-2 bg-[#1A1612] text-white rounded-lg border border-[#C59A55]/30 text-xs mt-1"
              />
            )}
          </div>

          {/* Smoking */}
          <div className="p-4 rounded-xl border border-[#C59A55]/20 bg-[#1F1914] space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#FBF9F4]">Permite Fumo</span>
              <input
                type="checkbox"
                checked={rulesForm.smokingAllowed}
                onChange={(e) => setRulesForm({ ...rulesForm, smokingAllowed: e.target.checked })}
                className="w-4 h-4 text-[#C59A55] accent-[#C59A55] rounded cursor-pointer"
              />
            </div>
            <p className="text-[11px] text-zinc-400">
              {rulesForm.smokingAllowed ? 'Permitido em toda a casa' : 'Apenas em áreas externas/abertas'}
            </p>
          </div>

          {/* Parties */}
          <div className="p-4 rounded-xl border border-[#C59A55]/20 bg-[#1F1914] space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#FBF9F4]">Permite Festas / Eventos</span>
              <input
                type="checkbox"
                checked={rulesForm.partiesAllowed}
                onChange={(e) => setRulesForm({ ...rulesForm, partiesAllowed: e.target.checked })}
                className="w-4 h-4 text-[#C59A55] accent-[#C59A55] rounded cursor-pointer"
              />
            </div>
            <p className="text-[11px] text-zinc-400">
              {rulesForm.partiesAllowed ? 'Eventos mediante taxa' : 'Proibido eventos abertos'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold text-zinc-300 mb-1">Máx. Visitantes Diurnos</label>
            <input
              type="number"
              value={rulesForm.maxVisitors}
              onChange={(e) => setRulesForm({ ...rulesForm, maxVisitors: parseInt(e.target.value) || 0 })}
              className="w-full px-3 py-2 rounded-xl border border-[#C59A55]/30 bg-[#1A1612] text-white text-sm font-medium"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-zinc-300 mb-1">Horário Silêncio (Início)</label>
            <input
              type="time"
              value={rulesForm.quietHoursStart}
              onChange={(e) => setRulesForm({ ...rulesForm, quietHoursStart: e.target.value })}
              className="w-full px-3 py-2 rounded-xl border border-[#C59A55]/30 bg-[#1A1612] text-white text-sm font-medium"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-zinc-300 mb-1">Horário Silêncio (Fim)</label>
            <input
              type="time"
              value={rulesForm.quietHoursEnd}
              onChange={(e) => setRulesForm({ ...rulesForm, quietHoursEnd: e.target.value })}
              className="w-full px-3 py-2 rounded-xl border border-[#C59A55]/30 bg-[#1A1612] text-white text-sm font-medium"
            />
          </div>
        </div>
      </div>

      {/* Save Button Bar */}
      <div className="flex justify-end pt-2">
        <button
          type="submit"
          className="px-6 py-3 bg-gradient-to-r from-[#C59A55] to-[#B8860B] text-black text-sm font-bold rounded-xl shadow-md hover:brightness-110 transition-all cursor-pointer flex items-center gap-2"
        >
          <Save className="w-4 h-4 text-black" />
          <span>Salvar todas as alterações</span>
        </button>
      </div>
    </form>
  );
};
