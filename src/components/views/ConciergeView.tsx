import React, { useState } from 'react';
import {
  Bot,
  Plus,
  Trash2,
  Send,
  HelpCircle,
  X,
  BookOpen,
  Star,
  Pencil,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { KnowledgeItem } from '../../types';
import { findBestKnowledgeMatch } from '../../utils/concierge';

const kbSections = [
  'Hospedagem',
  'Regras',
  'Check-in',
  'Checkout',
  'Comodidades',
  'Guia da região',
  'Emergências',
] as const;

export const ConciergeView: React.FC = () => {
  const {
    concierge,
    updateConcierge,
    knowledgeBase,
    addKnowledgeItem,
    updateKnowledgeItem,
    deleteKnowledgeItem,
    property,
  } = useApp();

  const [selectedKbSection, setSelectedKbSection] = useState<string>('all');
  const [isAddKbModalOpen, setIsAddKbModalOpen] = useState(false);
  const [editingKbItem, setEditingKbItem] = useState<KnowledgeItem | null>(null);

  // Form for adding / editing knowledge
  const [kbForm, setKbForm] = useState({
    section: 'Hospedagem' as KnowledgeItem['section'],
    question: '',
    answer: '',
  });

  // Simulator chat state
  const [simMessages, setSimMessages] = useState<
    { sender: 'user' | 'bot'; text: string; time: string }[]
  >([
    {
      sender: 'bot',
      text: concierge.welcomeMessage,
      time: '20:30',
    },
  ]);
  const [simInput, setSimInput] = useState('');

  const filteredKb =
    selectedKbSection === 'all'
      ? knowledgeBase
      : knowledgeBase.filter((k) => k.section === selectedKbSection);

  const handleOpenAddModal = () => {
    setEditingKbItem(null);
    setKbForm({
      section: 'Hospedagem',
      question: '',
      answer: '',
    });
    setIsAddKbModalOpen(true);
  };

  const handleStartEdit = (item: KnowledgeItem) => {
    setEditingKbItem(item);
    setKbForm({
      section: item.section,
      question: item.question,
      answer: item.answer,
    });
  };

  const handleKbFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!kbForm.question.trim() || !kbForm.answer.trim()) return;

    if (editingKbItem) {
      updateKnowledgeItem(editingKbItem.id, {
        section: kbForm.section,
        question: kbForm.question.trim(),
        answer: kbForm.answer.trim(),
      });
      setEditingKbItem(null);
    } else {
      addKnowledgeItem({
        section: kbForm.section,
        question: kbForm.question.trim(),
        answer: kbForm.answer.trim(),
      });
      setIsAddKbModalOpen(false);
    }

    setKbForm({
      section: 'Hospedagem',
      question: '',
      answer: '',
    });
  };

  // Simulator logic: Generate smart response based on knowledge base & tone
  const handleSendSimMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!simInput.trim()) return;

    const userText = simInput.trim();
    const nowTime = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

    setSimMessages((prev) => [...prev, { sender: 'user', text: userText, time: nowTime }]);
    setSimInput('');

    // Find best match in knowledge base
    setTimeout(() => {
      const matchedItem = findBestKnowledgeMatch(userText, knowledgeBase);

      let botText = '';
      if (matchedItem) {
        if (concierge.tone === 'Acolhedor') {
          botText = `Com certeza! ${matchedItem.answer} Se precisar de algo mais, estou à sua disposição!`;
        } else if (concierge.tone === 'Descontraído') {
          botText = `Com certeza! ${matchedItem.answer} Qualquer outra dúvida, só enviar uma mensagem!`;
        } else if (concierge.tone === 'Sofisticado') {
          botText = `Prezado hóspede, ${matchedItem.answer} Permaneço à total disposição para tornar sua estada memorável.`;
        } else {
          botText = `${matchedItem.answer}`;
        }
      } else {
        const lower = userText.toLowerCase();
        if (lower.includes('olá') || lower.includes('oi') || lower.includes('bom dia') || lower.includes('boa tarde')) {
          botText = concierge.welcomeMessage;
        } else {
          botText = `Obrigado por sua pergunta! Registrei sua solicitação sobre "${userText}" e nosso anfitrião ${property.name} responderá em instantes. Há algo mais em que possa ajudar?`;
        }
      }

      setSimMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: botText,
          time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }, 400);
  };

  return (
    <div id="concierge-view-container" className="space-y-8 animate-in fade-in duration-300">
      {/* Top Banner & Status */}
      <div className="bg-[#16120E] text-white p-6 rounded-2xl border border-[#C59A55]/30 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="p-2 bg-[#C59A55]/20 rounded-xl text-[#E6C994] border border-[#C59A55]/30">
              <Bot className="w-6 h-6 text-[#C59A55]" />
            </span>
            <h3 className="text-xl font-serif font-bold text-[#FBF9F4]">Seu Concierge Virtual IA</h3>
          </div>
          <p className="text-xs text-zinc-400 italic">"Seu hóspede pergunta. O Concierge responde."</p>
        </div>

        <div className="flex items-center gap-4 self-start md:self-auto">
          <div className="flex items-center gap-3 bg-[#1A1612] px-4 py-2 rounded-xl border border-[#C59A55]/20">
            <span className="text-xs font-semibold text-zinc-300">Status do Concierge:</span>
            <button
              onClick={() => updateConcierge({ enabled: !concierge.enabled })}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                concierge.enabled
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow-xs'
                  : 'bg-zinc-800 text-zinc-400 border border-zinc-700'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${concierge.enabled ? 'bg-emerald-400 animate-pulse' : 'bg-zinc-500'}`} />
              {concierge.enabled ? 'Ativo 24/7' : 'Desativado'}
            </button>
          </div>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-[#16120E] p-4 rounded-2xl border border-[#C59A55]/20 shadow-md text-center">
          <span className="text-2xl font-extrabold text-[#FBF9F4] block">{concierge.statsToday.conversations}</span>
          <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mt-1 block">Conversas hoje</span>
        </div>
        <div className="bg-[#16120E] p-4 rounded-2xl border border-[#C59A55]/20 shadow-md text-center">
          <span className="text-2xl font-extrabold text-emerald-400 block">{concierge.statsToday.answeredPercentage}%</span>
          <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mt-1 block">Perguntas respondidas</span>
        </div>
        <div className="bg-[#16120E] p-4 rounded-2xl border border-[#C59A55]/20 shadow-md text-center">
          <span className="text-2xl font-extrabold text-[#C59A55] block">{concierge.statsToday.forwardedToHost}</span>
          <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mt-1 block">Encaminhadas ao anfitrião</span>
        </div>
        <div className="bg-[#16120E] p-4 rounded-2xl border border-[#C59A55]/20 shadow-md text-center">
          <span className="text-2xl font-extrabold text-[#E6C994] flex items-center justify-center gap-1">
            {concierge.statsToday.satisfactionRating} <Star className="w-5 h-5 fill-[#E6C994] text-[#E6C994]" />
          </span>
          <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mt-1 block">Satisfação dos hóspedes</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Base de Conhecimento (7 cols) */}
        <div className="lg:col-span-7 space-y-8">
          {/* Base de Conhecimento Card */}
          <div className="bg-[#16120E] p-6 rounded-2xl border border-[#C59A55]/20 shadow-md space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#C59A55]/15 pb-2">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#E6C994] flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#C59A55]" /> Base de Conhecimento
              </h4>
              <button
                onClick={handleOpenAddModal}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-[#C59A55] to-[#B8860B] text-black hover:brightness-110 rounded-xl text-xs font-bold shadow-xs transition-all cursor-pointer self-start sm:self-auto"
              >
                <Plus className="w-3.5 h-3.5 text-black" />
                <span>+ Adicionar informação</span>
              </button>
            </div>

            {/* Sections Pills */}
            <div className="flex items-center gap-1 bg-[#1A1612] p-1 rounded-xl border border-[#C59A55]/15 overflow-x-auto">
              <button
                onClick={() => setSelectedKbSection('all')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  selectedKbSection === 'all'
                    ? 'bg-gradient-to-r from-[#C59A55] to-[#B8860B] text-black font-bold shadow-xs'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Todas ({knowledgeBase.length})
              </button>
              {kbSections.map((sec) => {
                const count = knowledgeBase.filter((k) => k.section === sec).length;
                return (
                  <button
                    key={sec}
                    onClick={() => setSelectedKbSection(sec)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                      selectedKbSection === sec
                        ? 'bg-gradient-to-r from-[#C59A55] to-[#B8860B] text-black font-bold shadow-xs'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {sec} ({count})
                  </button>
                );
              })}
            </div>

            {/* Questions List */}
            <div className="space-y-3">
              {filteredKb.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-xl border border-[#C59A55]/20 bg-[#1F1914] hover:border-[#C59A55]/40 transition-all space-y-2 relative group"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="px-2 py-0.5 text-[10px] font-bold bg-[#C59A55]/20 text-[#E6C994] border border-[#C59A55]/30 rounded">
                      {item.section}
                    </span>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleStartEdit(item)}
                        className="text-zinc-400 hover:text-[#C59A55] p-1 cursor-pointer transition-colors"
                        title="Editar item"
                      >
                        <Pencil className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => deleteKnowledgeItem(item.id)}
                        className="text-zinc-400 hover:text-rose-400 p-1 cursor-pointer transition-colors"
                        title="Excluir item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                  <h5 className="text-xs font-bold text-[#FBF9F4] flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-[#C59A55] flex-shrink-0" />
                    {item.question}
                  </h5>
                  <p className="text-xs text-zinc-300 leading-relaxed pl-5 bg-[#1A1612] p-2.5 rounded-lg border border-[#C59A55]/15">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Live WhatsApp Interactive Simulator (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-[#16120E] rounded-3xl p-4 shadow-xl border border-[#C59A55]/30 text-white space-y-3">
            {/* Phone Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#C59A55]/15 px-2">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-r from-[#C59A55] to-[#B8860B] text-black font-bold flex items-center justify-center text-sm shadow-xs">
                  <Bot className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h4 className="text-sm font-bold leading-tight text-[#FBF9F4]">{concierge.name}</h4>
                  <p className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Online • Responde instantaneamente
                  </p>
                </div>
              </div>
              <span className="text-[10px] bg-[#1A1612] px-2.5 py-1 rounded-full text-[#E6C994] border border-[#C59A55]/30">
                Simulador IA
              </span>
            </div>

            {/* Chat Messages Body */}
            <div className="h-96 overflow-y-auto p-3 space-y-3 bg-[#0d0b09] rounded-2xl border border-[#C59A55]/15 font-sans">
              {simMessages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl text-xs leading-relaxed shadow-xs ${
                      msg.sender === 'user'
                        ? 'bg-[#C59A55]/30 text-[#FBF9F4] border border-[#C59A55]/40 rounded-tr-xs'
                        : 'bg-[#1F1914] text-zinc-200 border border-[#C59A55]/15 rounded-tl-xs'
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.text}</p>
                    <span className="text-[9px] text-zinc-400 mt-1 block text-right">
                      {msg.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Input Bar */}
            <form onSubmit={handleSendSimMessage} className="flex items-center gap-2 pt-1">
              <input
                type="text"
                placeholder="Teste uma pergunta (ex: Qual a senha do wifi?)"
                value={simInput}
                onChange={(e) => setSimInput(e.target.value)}
                className="flex-1 bg-[#1A1612] border border-[#C59A55]/30 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#C59A55]"
              />
              <button
                type="submit"
                className="p-2.5 bg-gradient-to-r from-[#C59A55] to-[#B8860B] text-black hover:brightness-110 rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                <Send className="w-4 h-4 text-black" />
              </button>
            </form>
          </div>

          <div className="p-3 bg-[#16120E] rounded-xl border border-[#C59A55]/20 text-[11px] text-zinc-400 text-center">
            💡 Dica: Teste perguntar sobre Wi-Fi, Jacuzzi, regras ou restaurantes locais no simulador.
          </div>
        </div>
      </div>

      {/* MODAL: Adicionar / Editar Item na Base de Conhecimento */}
      {(isAddKbModalOpen || editingKbItem !== null) && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#16120E] rounded-2xl max-w-md w-full p-6 shadow-2xl border border-[#C59A55]/30 animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-[#C59A55]/15">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#C59A55]" />
                <h3 className="text-lg font-serif font-bold text-[#FBF9F4]">
                  {editingKbItem ? 'Editar Informação da IA' : 'Nova Informação para IA'}
                </h3>
              </div>
              <button
                onClick={() => {
                  setIsAddKbModalOpen(false);
                  setEditingKbItem(null);
                }}
                className="p-1 text-zinc-400 hover:text-white rounded-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleKbFormSubmit} className="mt-4 space-y-4">
              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1">Categoria</label>
                <select
                  value={kbForm.section}
                  onChange={(e) =>
                    setKbForm({ ...kbForm, section: e.target.value as KnowledgeItem['section'] })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#C59A55]/30 bg-[#1A1612] text-white text-sm font-medium focus:ring-2 focus:ring-[#C59A55] focus:outline-none"
                >
                  {kbSections.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1">
                  Pergunta ou Dúvida Frequente *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Como ligar a sauna?"
                  value={kbForm.question}
                  onChange={(e) => setKbForm({ ...kbForm, question: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#C59A55]/30 bg-[#1A1612] text-white text-sm font-medium focus:ring-2 focus:ring-[#C59A55] focus:outline-none placeholder:text-zinc-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1">
                  Resposta da IA *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Ex: O botão fica ao lado da porta de vidro. Pressione por 3 segundos..."
                  value={kbForm.answer}
                  onChange={(e) => setKbForm({ ...kbForm, answer: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#C59A55]/30 bg-[#1A1612] text-white text-sm font-medium focus:ring-2 focus:ring-[#C59A55] focus:outline-none placeholder:text-zinc-600"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsAddKbModalOpen(false);
                    setEditingKbItem(null);
                  }}
                  className="px-4 py-2 text-xs font-semibold text-zinc-400 hover:text-white rounded-xl cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-gradient-to-r from-[#C59A55] to-[#B8860B] text-black text-xs font-bold rounded-xl shadow-xs cursor-pointer hover:brightness-110"
                >
                  {editingKbItem ? 'Salvar Alterações' : 'Salvar Informação'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
