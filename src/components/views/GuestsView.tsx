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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-zinc-200/80 shadow-xs">
        <div>
          <h3 className="text-xl font-bold text-zinc-900">Gestão de Hóspedes</h3>
          <p className="text-xs text-zinc-500 mt-0.5">
            Cadastre estadias e gerencie o histórico de comunicação via WhatsApp
          </p>
        </div>

        <button
          id="guests-add-stay-btn"
          onClick={() => {
            setJustAddedStay(null);
            setIsNewModalOpen(true);
          }}
          className="flex items-center gap-2 px-4 py-2.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold shadow-xs transition-all cursor-pointer self-start sm:self-auto"
        >
          <UserPlus className="w-4 h-4" />
          <span>+ Nova estadia</span>
        </button>
      </div>

      {/* Success Notification Banner after adding stay */}
      {justAddedStay && (
        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-500 text-white rounded-xl shadow-2xs">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold">Hóspede cadastrado com sucesso.</h4>
              <p className="text-xs text-emerald-700 mt-0.5">
                Próxima automação agendada: {' '}
                <strong className="underline font-semibold">
                  "{justAddedStay.nextAutomation?.title || 'Boas-vindas'}" — {justAddedStay.nextAutomation?.scheduledFor || 'no dia do check-in'}
                </strong>
              </p>
            </div>
          </div>
          <button
            onClick={() => setJustAddedStay(null)}
            className="text-xs font-semibold text-emerald-800 hover:text-emerald-900 px-3 py-1 bg-emerald-100 hover:bg-emerald-200 rounded-lg transition-colors cursor-pointer"
          >
            Entendido
          </button>
        </div>
      )}

      {/* Filters & Search Row */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar por nome, WhatsApp ou data..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-200 bg-white text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all shadow-2xs"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex items-center bg-white p-1 rounded-xl border border-zinc-200/80 gap-1 overflow-x-auto">
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
                  ? 'bg-zinc-900 text-white shadow-2xs'
                  : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main CRM Table / List */}
      <div className="bg-white rounded-2xl border border-zinc-200/80 shadow-xs overflow-hidden">
        {filteredStays.length === 0 ? (
          /* Empty State */
          <div className="text-center py-16 px-4">
            <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center mx-auto mb-3 text-zinc-400">
              <Users className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-zinc-900">Ainda não há hóspedes nesta categoria</h4>
            <p className="text-xs text-zinc-500 max-w-sm mx-auto mt-1">
              Cadastre sua primeira estadia para começar a utilizar as automações de mensagem e Concierge.
            </p>
            <button
              onClick={() => setIsNewModalOpen(true)}
              className="mt-4 px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-xl shadow-xs cursor-pointer inline-flex items-center gap-2"
            >
              <UserPlus className="w-4 h-4" />
              <span>+ Cadastrar hóspede</span>
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-zinc-50/80 border-b border-zinc-200 text-[11px] font-bold text-zinc-500 uppercase tracking-wider">
                  <th className="py-3.5 px-4">Hóspede</th>
                  <th className="py-3.5 px-4">WhatsApp</th>
                  <th className="py-3.5 px-4">Período da Estadia</th>
                  <th className="py-3.5 px-4">Hóspedes</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4">Automações</th>
                  <th className="py-3.5 px-4 text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200/60 text-xs">
                {filteredStays.map((stay) => {
                  const isActive = stay.status === 'active';
                  const isConfirmed = stay.status === 'confirmed';

                  return (
                    <tr key={stay.id} className="hover:bg-zinc-50/80 transition-colors">
                      {/* Name */}
                      <td className="py-4 px-4 font-bold text-zinc-900">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-rose-100 text-rose-700 font-bold flex items-center justify-center text-xs">
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
                      <td className="py-4 px-4 font-mono font-medium text-zinc-700">
                        <div className="flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-emerald-600" />
                          <span>{stay.guestPhone}</span>
                        </div>
                      </td>

                      {/* Check-in/out */}
                      <td className="py-4 px-4 font-medium text-zinc-800">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                          <span>
                            {stay.checkIn.split('-').reverse().slice(0, 2).join('/')} →{' '}
                            {stay.checkOut.split('-').reverse().slice(0, 2).join('/')}
                          </span>
                        </div>
                      </td>

                      {/* Count */}
                      <td className="py-4 px-4 font-semibold text-zinc-700">
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
                              ? 'bg-amber-100 text-amber-800 border border-amber-200'
                              : isConfirmed
                              ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                              : 'bg-zinc-100 text-zinc-600 border border-zinc-200'
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              isActive
                                ? 'bg-amber-500 animate-ping'
                                : isConfirmed
                                ? 'bg-emerald-500'
                                : 'bg-zinc-400'
                            }`}
                          />
                          {isActive ? 'Ativo' : isConfirmed ? 'Confirmado' : 'Finalizado'}
                        </span>
                      </td>

                      {/* Automations */}
                      <td className="py-4 px-4">
                        {stay.allowAutomations ? (
                          <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 flex items-center gap-1 w-max">
                            <Sparkles className="w-3 h-3 text-emerald-500" /> Ativadas
                          </span>
                        ) : (
                          <span className="text-[10px] font-medium text-zinc-400">Pausadas</span>
                        )}
                      </td>

                      {/* Actions */}
                      <td className="py-4 px-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <a
                            href={`https://wa.me/${stay.guestPhone.replace(/\D/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 rounded-lg transition-colors cursor-pointer"
                            title="Abrir WhatsApp Direct"
                          >
                            <MessageSquare className="w-4 h-4" />
                          </a>
                          <button
                            onClick={() => deleteStay(stay.id)}
                            className="p-1.5 text-zinc-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
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
        <div className="fixed inset-0 z-50 bg-zinc-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-xl border border-zinc-200 animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-100">
              <div className="flex items-center gap-2">
                <UserPlus className="w-5 h-5 text-rose-600" />
                <h3 className="text-lg font-bold text-zinc-900">Cadastrar Nova Estadia</h3>
              </div>
              <button
                onClick={() => setIsNewModalOpen(false)}
                className="p-1 text-zinc-400 hover:text-zinc-700 rounded-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateStay} className="mt-4 space-y-4">
              {/* Dados do Hóspede */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-rose-600">
                  Dados do hóspede
                </h4>
                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-1">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: João Silva"
                    value={formData.guestName}
                    onChange={(e) => setFormData({ ...formData, guestName: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-zinc-300 text-sm font-medium focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-1">WhatsApp *</label>
                  <input
                    type="text"
                    required
                    placeholder="+55 21 99999-9999"
                    value={formData.guestPhone}
                    onChange={(e) => setFormData({ ...formData, guestPhone: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-zinc-300 text-sm font-medium focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Estadia */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-rose-600">
                  Estadia
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-zinc-700 mb-1">Check-in *</label>
                    <input
                      type="date"
                      required
                      value={formData.checkIn}
                      onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-zinc-300 text-sm font-medium focus:ring-2 focus:ring-rose-500/20 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-zinc-700 mb-1">Checkout *</label>
                    <input
                      type="date"
                      required
                      value={formData.checkOut}
                      onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-zinc-300 text-sm font-medium focus:ring-2 focus:ring-rose-500/20 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-zinc-700 mb-1">
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
                      className="w-full px-3 py-2 rounded-xl border border-zinc-300 text-sm font-medium focus:ring-2 focus:ring-rose-500/20 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-zinc-700 mb-1">Origem</label>
                    <select
                      value={formData.source}
                      onChange={(e) =>
                        setFormData({ ...formData, source: e.target.value as Stay['source'] })
                      }
                      className="w-full px-3 py-2 rounded-xl border border-zinc-300 text-sm font-medium focus:ring-2 focus:ring-rose-500/20 focus:outline-none bg-white"
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
                <h4 className="text-xs font-bold uppercase tracking-wider text-rose-600">
                  Informações adicionais
                </h4>
                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-1">Observações</label>
                  <textarea
                    rows={2}
                    placeholder='Ex: "Casal comemorando aniversário de casamento"'
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-zinc-300 text-sm font-medium focus:ring-2 focus:ring-rose-500/20 focus:outline-none"
                  />
                </div>
              </div>

              {/* Automações Toggle */}
              <div className="p-3 bg-rose-50/80 rounded-xl border border-rose-200/80 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-zinc-900 block">Automação de WhatsApp</span>
                  <span className="text-[11px] text-zinc-600">
                    Permitir disparos de mensagens pré, pós e boas-vindas
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={formData.allowAutomations}
                  onChange={(e) => setFormData({ ...formData, allowAutomations: e.target.checked })}
                  className="w-5 h-5 text-rose-600 rounded border-zinc-300 focus:ring-rose-500 cursor-pointer"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsNewModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-zinc-600 hover:bg-zinc-100 rounded-xl cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-xl shadow-xs transition-all cursor-pointer"
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
