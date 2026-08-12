import React, { useState } from 'react';
import {
  Users,
  Search,
  UserPlus,
  Calendar,
  MessageSquare,
  CheckCircle2,
  Clock,
  X,
  Phone,
  Filter,
  Trash2,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Stay, StayStatus } from '../../types';

export const GuestsView: React.FC = () => {
  const { stays, addStay, deleteStay } = useApp();

  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'upcoming' | 'completed'>('all');
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  const [justAddedStay, setJustAddedStay] = useState<Stay | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    guestName: '',
    guestPhone: '+55 ',
    checkIn: '',
    checkOut: '',
    guestsCount: 2,
    source: 'Airbnb' as Stay['source'],
    notes: '',
    allowAutomations: true,
  });

  // Filter logic
  const filteredStays = stays.filter((stay) => {
    const matchesSearch =
      stay.guestName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stay.guestPhone.includes(searchTerm) ||
      stay.checkIn.includes(searchTerm) ||
      stay.checkOut.includes(searchTerm);

    if (!matchesSearch) return false;

    if (filterStatus === 'active') return stay.status === 'active';
    if (filterStatus === 'upcoming') return stay.status === 'confirmed';
    if (filterStatus === 'completed') return stay.status === 'completed';

    return true;
  });

  const handleCreateStay = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.guestName || !formData.checkIn || !formData.checkOut) return;

    // Estimate status
    const today = '2026-08-10';
    let status: StayStatus = 'confirmed';
    if (formData.checkIn <= today && formData.checkOut >= today) {
      status = 'active';
    } else if (formData.checkOut < today) {
      status = 'completed';
    }

    const nextAuto = formData.allowAutomations
      ? {
          title: 'Mensagem pré-estadia',
          scheduledFor: `${formData.checkIn.split('-').reverse().slice(0, 2).join('/')} às 10:00`,
        }
      : undefined;

    const newStayData: Omit<Stay, 'id'> = {
      guestId: `guest-${Date.now()}`,
      guestName: formData.guestName,
      guestPhone: formData.guestPhone,
      checkIn: formData.checkIn,
      checkOut: formData.checkOut,
      guestsCount: formData.guestsCount,
      status,
      source: formData.source,
      notes: formData.notes,
      allowAutomations: formData.allowAutomations,
      nextAutomation: nextAuto,
    };

    addStay(newStayData);

    const mockCreatedStay: Stay = {
      ...newStayData,
      id: `stay-${Date.now()}`,
    };

    setJustAddedStay(mockCreatedStay);
    setIsNewModalOpen(false);

    // Reset form
    setFormData({
      guestName: '',
      guestPhone: '+55 ',
      checkIn: '',
      checkOut: '',
      guestsCount: 2,
      source: 'Airbnb',
      notes: '',
      allowAutomations: true,
    });
  };

  return (
    <div id="guests-view-container" className="space-y-6 animate-in fade-in duration-300">
      {/* Header Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#16120E] p-5 rounded-2xl border border-[#C59A55]/20 shadow-md">
        <div>
          <h3 className="text-xl font-serif font-bold text-[#FBF9F4]">Gestão de Hóspedes</h3>
          <p className="text-xs text-zinc-400 mt-0.5">
            Cadastre estadias e gerencie o histórico de comunicação via WhatsApp
          </p>
        </div>

        <button
          id="guests-add-stay-btn"
          onClick={() => {
            setJustAddedStay(null);
            setIsNewModalOpen(true);
          }}
          className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#C59A55] to-[#B8860B] text-black hover:brightness-110 rounded-xl text-xs font-bold shadow-md transition-all cursor-pointer self-start sm:self-auto"
        >
          <UserPlus className="w-4 h-4 text-black" />
          <span>+ Nova estadia</span>
        </button>
      </div>

      {/* Success Notification Banner after adding stay */}
      {justAddedStay && (
        <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-500 text-black rounded-xl shadow-2xs font-bold">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-emerald-300">Hóspede cadastrado com sucesso.</h4>
              <p className="text-xs text-emerald-200/80 mt-0.5">
                Próxima automação agendada: {' '}
                <strong className="underline font-semibold text-white">
                  "{justAddedStay.nextAutomation?.title || 'Boas-vindas'}" — {justAddedStay.nextAutomation?.scheduledFor || 'no dia do check-in'}
                </strong>
              </p>
            </div>
          </div>
          <button
            onClick={() => setJustAddedStay(null)}
            className="text-xs font-semibold text-emerald-300 hover:text-white px-3 py-1 bg-emerald-900/80 hover:bg-emerald-800 rounded-lg transition-colors cursor-pointer border border-emerald-500/30"
          >
            Entendido
          </button>
        </div>
      )}

      {/* Filters & Search Row */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-[#C59A55] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar por nome, WhatsApp ou data..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#C59A55]/20 bg-[#16120E] text-sm text-[#FBF9F4] placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#C59A55] focus:border-[#C59A55] transition-all shadow-xs"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex items-center bg-[#16120E] p-1 rounded-xl border border-[#C59A55]/20 gap-1 overflow-x-auto">
          {(
            [
              { id: 'all', label: 'Todos os hóspedes' },
              { id: 'active', label: 'Hospedados agora' },
              { id: 'upcoming', label: 'Próximos' },
              { id: 'completed', label: 'Finalizados' },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilterStatus(tab.id)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                filterStatus === tab.id
                  ? 'bg-gradient-to-r from-[#C59A55] to-[#B8860B] text-black shadow-xs'
                  : 'text-zinc-400 hover:text-white hover:bg-[#1F1914]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main CRM Table / List */}
      <div className="bg-[#16120E] rounded-2xl border border-[#C59A55]/20 shadow-md overflow-hidden">
        {filteredStays.length === 0 ? (
          /* Empty State */
          <div className="text-center py-16 px-4">
            <div className="w-12 h-12 rounded-full bg-[#1F1914] border border-[#C59A55]/20 flex items-center justify-center mx-auto mb-3 text-[#C59A55]">
              <Users className="w-6 h-6" />
            </div>
            <h4 className="text-base font-serif font-bold text-[#FBF9F4]">Ainda não há hóspedes nesta categoria</h4>
            <p className="text-xs text-zinc-400 max-w-sm mx-auto mt-1">
              Cadastre sua primeira estadia para começar a utilizar as automações de mensagem e Concierge.
            </p>
            <button
              onClick={() => setIsNewModalOpen(true)}
              className="mt-4 px-4 py-2 bg-gradient-to-r from-[#C59A55] to-[#B8860B] text-black text-xs font-bold rounded-xl shadow-xs cursor-pointer inline-flex items-center gap-2 hover:brightness-110"
            >
              <UserPlus className="w-4 h-4" />
              <span>+ Cadastrar hóspede</span>
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#1F1914] border-b border-[#C59A55]/20 text-[11px] font-bold text-[#E6C994] uppercase tracking-wider">
                  <th className="py-3.5 px-4">Hóspede</th>
                  <th className="py-3.5 px-4">WhatsApp</th>
                  <th className="py-3.5 px-4">Período da Estadia</th>
                  <th className="py-3.5 px-4">Hóspedes</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4">Automações</th>
                  <th className="py-3.5 px-4 text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#C59A55]/10 text-xs">
                {filteredStays.map((stay) => {
                  const isActive = stay.status === 'active';
                  const isConfirmed = stay.status === 'confirmed';

                  return (
                    <tr key={stay.id} className="hover:bg-[#1F1914]/60 transition-colors">
                      {/* Name */}
                      <td className="py-4 px-4 font-bold text-[#FBF9F4]">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-[#C59A55]/20 border border-[#C59A55]/40 text-[#E6C994] font-bold flex items-center justify-center text-xs">
                            {stay.guestName.charAt(0)}
                          </div>
                          <div>
                            <div>{stay.guestName}</div>
                            <div className="text-[10px] text-zinc-400 font-normal">
                              Origem: {stay.source}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Phone */}
                      <td className="py-4 px-4 font-mono font-medium text-emerald-400">
                        <div className="flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-emerald-400" />
                          <span>{stay.guestPhone}</span>
                        </div>
                      </td>

                      {/* Check-in/out */}
                      <td className="py-4 px-4 font-medium text-zinc-300">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-[#C59A55]" />
                          <span>
                            {stay.checkIn.split('-').reverse().slice(0, 2).join('/')} →{' '}
                            {stay.checkOut.split('-').reverse().slice(0, 2).join('/')}
                          </span>
                        </div>
                      </td>

                      {/* Count */}
                      <td className="py-4 px-4 font-semibold text-zinc-300">
                        <div className="flex items-center gap-1">
                          <Users className="w-3.5 h-3.5 text-zinc-400" />
                          <span>{stay.guestsCount}</span>
                        </div>
                      </td>

                      {/* Status */}
                      <td className="py-4 px-4">
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold ${
                            isActive
                              ? 'bg-amber-950/80 text-amber-300 border border-amber-500/30'
                              : isConfirmed
                              ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/30'
                              : 'bg-zinc-800 text-zinc-400 border border-zinc-700'
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              isActive
                                ? 'bg-amber-400 animate-ping'
                                : isConfirmed
                                ? 'bg-emerald-400'
                                : 'bg-zinc-400'
                            }`}
                          />
                          {isActive ? 'Ativo' : isConfirmed ? 'Confirmado' : 'Finalizado'}
                        </span>
                      </td>

                      {/* Automations */}
                      <td className="py-4 px-4">
                        {stay.allowAutomations ? (
                          <span className="text-[10px] font-semibold text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30 flex items-center gap-1 w-max">
                            <Sparkles className="w-3 h-3 text-emerald-400" /> Ativadas
                          </span>
                        ) : (
                          <span className="text-[10px] font-medium text-zinc-500">Pausadas</span>
                        )}
                      </td>

                      {/* Actions */}
                      <td className="py-4 px-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <a
                            href={`https://wa.me/${stay.guestPhone.replace(/\D/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 bg-emerald-950/80 text-emerald-300 hover:bg-emerald-900 rounded-lg border border-emerald-500/30 transition-colors cursor-pointer"
                            title="Abrir WhatsApp Direct"
                          >
                            <MessageSquare className="w-4 h-4" />
                          </a>
                          <button
                            onClick={() => deleteStay(stay.id)}
                            className="p-1.5 text-zinc-400 hover:text-rose-400 hover:bg-rose-950/50 rounded-lg transition-colors cursor-pointer"
                            title="Excluir estadia"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* MODAL: Cadastrar Nova Estadia */}
      {isNewModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#16120E] rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-[#C59A55]/30 animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-[#C59A55]/15">
              <div className="flex items-center gap-2">
                <UserPlus className="w-5 h-5 text-[#C59A55]" />
                <h3 className="text-lg font-serif font-bold text-[#FBF9F4]">Cadastrar Nova Estadia</h3>
              </div>
              <button
                onClick={() => setIsNewModalOpen(false)}
                className="p-1 text-zinc-400 hover:text-white rounded-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateStay} className="mt-4 space-y-4">
              {/* Dados do Hóspede */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#E6C994]">
                  Dados do hóspede
                </h4>
                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: João Silva"
                    value={formData.guestName}
                    onChange={(e) => setFormData({ ...formData, guestName: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-[#C59A55]/30 bg-[#1A1612] text-white text-sm font-medium focus:ring-2 focus:ring-[#C59A55] focus:outline-none placeholder:text-zinc-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1">WhatsApp *</label>
                  <input
                    type="text"
                    required
                    placeholder="+55 21 99999-9999"
                    value={formData.guestPhone}
                    onChange={(e) => setFormData({ ...formData, guestPhone: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-[#C59A55]/30 bg-[#1A1612] text-white text-sm font-medium focus:ring-2 focus:ring-[#C59A55] focus:outline-none placeholder:text-zinc-600"
                  />
                </div>
              </div>

              {/* Estadia */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#E6C994]">
                  Estadia
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-zinc-300 mb-1">Check-in *</label>
                    <input
                      type="date"
                      required
                      value={formData.checkIn}
                      onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-[#C59A55]/30 bg-[#1A1612] text-white text-sm font-medium focus:ring-2 focus:ring-[#C59A55] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-zinc-300 mb-1">Checkout *</label>
                    <input
                      type="date"
                      required
                      value={formData.checkOut}
                      onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-[#C59A55]/30 bg-[#1A1612] text-white text-sm font-medium focus:ring-2 focus:ring-[#C59A55] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-zinc-300 mb-1">
                      Número de hóspedes
                    </label>
                    <input
                      type="number"
                      min={1}
                      max={12}
                      value={formData.guestsCount}
                      onChange={(e) =>
                        setFormData({ ...formData, guestsCount: parseInt(e.target.value) || 1 })
                      }
                      className="w-full px-3 py-2 rounded-xl border border-[#C59A55]/30 bg-[#1A1612] text-white text-sm font-medium focus:ring-2 focus:ring-[#C59A55] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-zinc-300 mb-1">Origem</label>
                    <select
                      value={formData.source}
                      onChange={(e) =>
                        setFormData({ ...formData, source: e.target.value as Stay['source'] })
                      }
                      className="w-full px-3 py-2 rounded-xl border border-[#C59A55]/30 bg-[#1A1612] text-white text-sm font-medium focus:ring-2 focus:ring-[#C59A55] focus:outline-none"
                    >
                      <option value="Airbnb">Airbnb</option>
                      <option value="Manual">Manual / Direta</option>
                      <option value="Direct">Indicação</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Informações Adicionais */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#E6C994]">
                  Informações adicionais
                </h4>
                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1">Observações</label>
                  <textarea
                    rows={2}
                    placeholder='Ex: "Casal comemorando aniversário de casamento"'
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-[#C59A55]/30 bg-[#1A1612] text-white text-sm font-medium focus:ring-2 focus:ring-[#C59A55] focus:outline-none placeholder:text-zinc-600"
                  />
                </div>
              </div>

              {/* Automações Toggle */}
              <div className="p-3 bg-[#1F1914] rounded-xl border border-[#C59A55]/20 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-[#FBF9F4] block">Automação de WhatsApp</span>
                  <span className="text-[11px] text-zinc-400">
                    Permitir disparos de mensagens pré, pós e boas-vindas
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={formData.allowAutomations}
                  onChange={(e) => setFormData({ ...formData, allowAutomations: e.target.checked })}
                  className="w-5 h-5 text-[#C59A55] accent-[#C59A55] rounded border-[#C59A55]/30 cursor-pointer"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsNewModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-zinc-400 hover:text-white rounded-xl cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-gradient-to-r from-[#C59A55] to-[#B8860B] text-black text-xs font-bold rounded-xl shadow-xs transition-all cursor-pointer hover:brightness-110"
                >
                  Cadastrar estadia
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
