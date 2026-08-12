import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Lock,
  Unlock,
  Users,
  Calendar as CalendarIcon,
  X,
  Check,
  Info,
  User,
  Plus,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Stay, BlockedDate } from '../../types';

export const CalendarView: React.FC = () => {
  const { stays, blockedDates, addBlockedDate, deleteBlockedDate, setActiveView } = useApp();

  // Current calendar view state: August 2026 by default
  const [currentDate, setCurrentDate] = useState(new Date(2026, 7, 1)); // 0-indexed month 7 = August

  // Selected date modal states
  const [selectedStay, setSelectedStay] = useState<Stay | null>(null);
  const [selectedBlocked, setSelectedBlocked] = useState<BlockedDate | null>(null);
  const [isBlockModalOpen, setIsBlockModalOpen] = useState(false);

  // Form for blocking new date
  const [blockForm, setBlockForm] = useState<{
    startDate: string;
    endDate: string;
    reason: 'Manutenção' | 'Uso Próprio' | 'Limpeza Especial' | 'Outro';
    notes: string;
  }>({
    startDate: '2026-08-15',
    endDate: '2026-08-16',
    reason: 'Manutenção',
    notes: '',
  });

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthNames = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  // Days calculations
  const firstDayIndex = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Calendar matrix days array
  const calendarDays = [];
  for (let i = 0; i < firstDayIndex; i++) {
    calendarDays.push(null);
  }
  for (let d = 1; d <= daysInMonth; d++) {
    calendarDays.push(d);
  }

  // Helper to format YYYY-MM-DD
  const formatDateString = (day: number) => {
    const m = (month + 1).toString().padStart(2, '0');
    const d = day.toString().padStart(2, '0');
    return `${year}-${m}-${d}`;
  };

  // Find stay or blocked date for a given day
  const getDayStatus = (day: number) => {
    const dateStr = formatDateString(day);

    // Check stays
    const stay = stays.find(
      (s) => s.status !== 'cancelled' && dateStr >= s.checkIn && dateStr <= s.checkOut
    );

    // Check blocked dates
    const blocked = blockedDates.find(
      (b) => dateStr >= b.startDate && dateStr <= b.endDate
    );

    if (stay) return { type: 'stay', data: stay };
    if (blocked) return { type: 'blocked', data: blocked };
    return { type: 'available', data: null };
  };

  const handleDayClick = (day: number) => {
    const status = getDayStatus(day);
    const dateStr = formatDateString(day);

    if (status.type === 'stay') {
      setSelectedStay(status.data as Stay);
    } else if (status.type === 'blocked') {
      setSelectedBlocked(status.data as BlockedDate);
    } else {
      setBlockForm({
        startDate: dateStr,
        endDate: dateStr,
        reason: 'Manutenção',
        notes: '',
      });
      setIsBlockModalOpen(true);
    }
  };

  const handleCreateBlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (!blockForm.startDate || !blockForm.endDate) return;
    addBlockedDate({
      startDate: blockForm.startDate,
      endDate: blockForm.endDate,
      reason: blockForm.reason,
      notes: blockForm.notes,
    });
    setIsBlockModalOpen(false);
  };

  return (
    <div id="calendar-view-container" className="space-y-6 animate-in fade-in duration-300">
      {/* Top Header Controls & Legend */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#16120E] p-5 rounded-2xl border border-[#C59A55]/20 shadow-md">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevMonth}
              className="p-2 hover:bg-[#241E18] bg-[#1F1914] rounded-xl text-zinc-300 hover:text-white transition-colors cursor-pointer border border-[#C59A55]/20"
              title="Mês anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <h3 className="text-xl font-serif font-bold text-[#FBF9F4] min-w-[180px] text-center">
              {monthNames[month]} {year}
            </h3>
            <button
              onClick={handleNextMonth}
              className="p-2 hover:bg-[#241E18] bg-[#1F1914] rounded-xl text-zinc-300 hover:text-white transition-colors cursor-pointer border border-[#C59A55]/20"
              title="Próximo mês"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-5 text-xs font-semibold text-zinc-300 bg-[#1F1914] p-2.5 rounded-xl border border-[#C59A55]/15">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500 border border-emerald-400" />
            <span>Disponível</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500 border border-rose-400" />
            <span>Ocupado (Reserva)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#C59A55] border border-[#E6C994]" />
            <span>Bloqueado</span>
          </div>
        </div>

        {/* Quick Block Button */}
        <button
          onClick={() => {
            const todayStr = formatDateString(15);
            setBlockForm({ startDate: todayStr, endDate: todayStr, reason: 'Manutenção', notes: '' });
            setIsBlockModalOpen(true);
          }}
          className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#C59A55] to-[#B8860B] text-black hover:brightness-110 rounded-xl text-xs font-bold shadow-md transition-all cursor-pointer"
        >
          <Lock className="w-4 h-4 text-black" />
          <span>Bloquear Período</span>
        </button>
      </div>

      {/* Main Monthly Calendar Grid */}
      <div id="calendar-grid-wrapper" className="bg-[#16120E] rounded-2xl border border-[#C59A55]/20 shadow-md overflow-hidden">
        {/* Days of Week Row */}
        <div className="grid grid-cols-7 border-b border-[#C59A55]/15 bg-[#1F1914] text-center text-xs font-bold text-[#E6C994] uppercase tracking-wider py-3">
          {daysOfWeek.map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>

        {/* Month Days Matrix */}
        <div className="grid grid-cols-7 divide-x divide-y divide-[#C59A55]/10 bg-[#120F0C]">
          {calendarDays.map((day, idx) => {
            if (day === null) {
              return <div key={`empty-${idx}`} className="h-28 sm:h-32 bg-[#120F0C]/50" />;
            }

            const status = getDayStatus(day);
            const isStay = status.type === 'stay';
            const isBlocked = status.type === 'blocked';
            const stayData = status.data as Stay | null;
            const blockedData = status.data as BlockedDate | null;

            return (
              <div
                key={`day-${day}`}
                onClick={() => handleDayClick(day)}
                className={`h-28 sm:h-32 p-2 transition-all cursor-pointer flex flex-col justify-between group relative overflow-hidden ${
                  isStay
                    ? 'bg-rose-950/40 hover:bg-rose-950/60 border-l-4 border-l-rose-500'
                    : isBlocked
                    ? 'bg-[#C59A55]/10 hover:bg-[#C59A55]/20 border-l-4 border-l-[#C59A55]'
                    : 'bg-[#18130F] hover:bg-[#221B15]'
                }`}
              >
                {/* Day Number */}
                <div className="flex items-center justify-between">
                  <span
                    className={`text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center ${
                      isStay
                        ? 'bg-rose-500 text-white shadow-2xs'
                        : isBlocked
                        ? 'bg-[#C59A55] text-black font-extrabold'
                        : 'text-zinc-300 group-hover:text-[#E6C994] font-extrabold'
                    }`}
                  >
                    {day}
                  </span>

                  {isStay && (
                    <span className="text-[10px] font-bold text-rose-300 bg-rose-950 px-1.5 py-0.5 rounded border border-rose-500/30">
                      {stayData?.source}
                    </span>
                  )}
                  {isBlocked && (
                    <Lock className="w-3.5 h-3.5 text-[#E6C994]" />
                  )}
                </div>

                {/* Day Content Tag */}
                <div className="mt-1">
                  {isStay && stayData && (
                    <div className="p-1.5 bg-[#1F1914] rounded-lg shadow-2xs border border-rose-500/30 text-xs">
                      <p className="font-bold text-[#FBF9F4] truncate">{stayData.guestName}</p>
                      <p className="text-[10px] text-zinc-400 flex items-center gap-1 mt-0.5">
                        <Users className="w-3 h-3 text-rose-400" />
                        {stayData.guestsCount} {stayData.guestsCount === 1 ? 'hóspede' : 'hóspedes'}
                      </p>
                    </div>
                  )}

                  {isBlocked && blockedData && (
                    <div className="p-1.5 bg-[#C59A55]/15 rounded-lg border border-[#C59A55]/30 text-xs text-[#E6C994] font-semibold">
                      <p className="truncate">{blockedData.reason}</p>
                    </div>
                  )}

                  {!isStay && !isBlocked && (
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity text-[11px] font-medium text-emerald-300 flex items-center justify-center gap-1 h-12 bg-emerald-950/60 rounded-lg border border-emerald-500/30">
                      <Plus className="w-3.5 h-3.5" /> Bloquear
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* MODAL 1: Block Date Modal */}
      {isBlockModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#16120E] rounded-2xl max-w-md w-full p-6 shadow-2xl border border-[#C59A55]/30 animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-[#C59A55]/15">
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-[#C59A55]" />
                <h3 className="text-lg font-serif font-bold text-[#FBF9F4]">Bloquear Período</h3>
              </div>
              <button
                onClick={() => setIsBlockModalOpen(false)}
                className="p-1 text-zinc-400 hover:text-white rounded-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateBlock} className="mt-4 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1">
                    Data inicial
                  </label>
                  <input
                    type="date"
                    value={blockForm.startDate}
                    onChange={(e) => setBlockForm({ ...blockForm, startDate: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-[#C59A55]/30 bg-[#1A1612] text-white text-sm font-medium focus:ring-2 focus:ring-[#C59A55] focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1">
                    Data final
                  </label>
                  <input
                    type="date"
                    value={blockForm.endDate}
                    onChange={(e) => setBlockForm({ ...blockForm, endDate: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-[#C59A55]/30 bg-[#1A1612] text-white text-sm font-medium focus:ring-2 focus:ring-[#C59A55] focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1">Motivo</label>
                <select
                  value={blockForm.reason}
                  onChange={(e) =>
                    setBlockForm({
                      ...blockForm,
                      reason: e.target.value as BlockedDate['reason'],
                    })
                  }
                  className="w-full px-3 py-2 rounded-xl border border-[#C59A55]/30 bg-[#1A1612] text-white text-sm font-medium focus:ring-2 focus:ring-[#C59A55] focus:outline-none"
                >
                  <option value="Manutenção">Manutenção</option>
                  <option value="Uso Próprio">Uso Próprio (Proprietário)</option>
                  <option value="Limpeza Especial">Limpeza Especial</option>
                  <option value="Outro">Outro Motivo</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1">Observações</label>
                <textarea
                  rows={2}
                  value={blockForm.notes}
                  onChange={(e) => setBlockForm({ ...blockForm, notes: e.target.value })}
                  placeholder="Ex: Reforma na piscina, troca de encanamento..."
                  className="w-full px-3 py-2 rounded-xl border border-[#C59A55]/30 bg-[#1A1612] text-white text-sm font-medium focus:ring-2 focus:ring-[#C59A55] focus:outline-none placeholder:text-zinc-600"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsBlockModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-zinc-400 hover:text-white rounded-xl cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-gradient-to-r from-[#C59A55] to-[#B8860B] text-black text-xs font-bold rounded-xl shadow-xs transition-all cursor-pointer hover:brightness-110"
                >
                  Bloquear período
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 2: Stay Info Modal */}
      {selectedStay && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#16120E] rounded-2xl max-w-md w-full p-6 shadow-2xl border border-[#C59A55]/30 animate-in zoom-in-95 duration-200 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#C59A55]/15">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-[#C59A55]" />
                <h3 className="text-lg font-serif font-bold text-[#FBF9F4]">{selectedStay.guestName}</h3>
              </div>
              <button
                onClick={() => setSelectedStay(null)}
                className="p-1 text-zinc-400 hover:text-white rounded-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-sm">
              <div className="grid grid-cols-2 gap-2 bg-[#1F1914] p-3 rounded-xl border border-[#C59A55]/15">
                <div>
                  <span className="text-[11px] font-bold text-zinc-400 uppercase block">Check-in</span>
                  <span className="font-semibold text-white">{selectedStay.checkIn}</span>
                </div>
                <div>
                  <span className="text-[11px] font-bold text-zinc-400 uppercase block">Checkout</span>
                  <span className="font-semibold text-white">{selectedStay.checkOut}</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-2.5 bg-[#1F1914] rounded-xl border border-[#C59A55]/15">
                <span className="text-xs font-semibold text-zinc-300">Número de Hóspedes:</span>
                <span className="text-xs font-bold text-white">{selectedStay.guestsCount} pessoas</span>
              </div>

              <div className="flex items-center justify-between p-2.5 bg-[#1F1914] rounded-xl border border-[#C59A55]/15">
                <span className="text-xs font-semibold text-zinc-300">Origem da Reserva:</span>
                <span className="text-xs font-bold text-[#E6C994] bg-[#C59A55]/20 px-2 py-0.5 rounded border border-[#C59A55]/30">
                  {selectedStay.source}
                </span>
              </div>

              <div className="p-3 bg-[#1F1914] rounded-xl border border-[#C59A55]/15">
                <span className="text-[11px] font-bold text-zinc-400 uppercase block mb-1">Observações</span>
                <p className="text-xs text-zinc-300 italic">
                  "{selectedStay.notes || 'Nenhuma observação informada.'}"
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-[#C59A55]/15 flex items-center justify-end gap-2">
              <button
                onClick={() => setSelectedStay(null)}
                className="px-4 py-2 text-xs font-semibold text-zinc-400 hover:text-white rounded-xl cursor-pointer"
              >
                Fechar
              </button>
              <button
                onClick={() => {
                  setSelectedStay(null);
                  setActiveView('guests');
                }}
                className="px-4 py-2 bg-gradient-to-r from-[#C59A55] to-[#B8860B] text-black text-xs font-bold rounded-xl shadow-xs transition-all cursor-pointer hover:brightness-110"
              >
                Ver Hóspede no CRM
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 3: Blocked Date Info Modal */}
      {selectedBlocked && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#16120E] rounded-2xl max-w-md w-full p-6 shadow-2xl border border-[#C59A55]/30 animate-in zoom-in-95 duration-200 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#C59A55]/15">
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-[#C59A55]" />
                <h3 className="text-lg font-serif font-bold text-[#FBF9F4]">Período Bloqueado</h3>
              </div>
              <button
                onClick={() => setSelectedBlocked(null)}
                className="p-1 text-zinc-400 hover:text-white rounded-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <div className="p-3 bg-[#C59A55]/15 rounded-xl border border-[#C59A55]/30">
                <span className="text-xs font-bold text-[#E6C994] block uppercase">Motivo: {selectedBlocked.reason}</span>
                <p className="text-xs text-zinc-300 mt-1">{selectedBlocked.notes || 'Sem observações adicionais.'}</p>
              </div>

              <div className="text-xs font-medium text-zinc-300">
                <span>Período: </span>
                <strong className="text-white">{selectedBlocked.startDate}</strong> até{' '}
                <strong className="text-white">{selectedBlocked.endDate}</strong>
              </div>
            </div>

            <div className="pt-3 border-t border-[#C59A55]/15 flex items-center justify-between">
              <button
                onClick={() => {
                  deleteBlockedDate(selectedBlocked.id);
                  setSelectedBlocked(null);
                }}
                className="px-3 py-2 bg-rose-950/80 hover:bg-rose-900 text-rose-300 text-xs font-bold rounded-xl border border-rose-500/30 cursor-pointer transition-colors"
              >
                Desbloquear Período
              </button>
              <button
                onClick={() => setSelectedBlocked(null)}
                className="px-4 py-2 bg-[#1A1612] hover:bg-[#241E18] text-white text-xs font-bold rounded-xl cursor-pointer border border-[#C59A55]/30"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
