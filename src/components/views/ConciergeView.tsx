import React, { useState } from 'react';
import {
  Bot,
  MessageSquare,
  Sparkles,
  Plus,
  Trash2,
  Send,
  HelpCircle,
  X,
  CheckCircle2,
  Sliders,
  BookOpen,
  Star,
  Smile,
  Briefcase,
  Sun,
  Crown,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ConciergeTone, KnowledgeItem } from '../../types';

const tonesList: { id: ConciergeTone; label: string; desc: string }[] = [
  { id: 'Acolhedor', label: 'Acolhedor', desc: 'Caloroso, solícito, atencioso e simpático' },
  { id: 'Profissional', label: 'Profissional', desc: 'Direto, cortês, objetivo e institucional' },
  { id: 'Descontraído', label: 'Descontraído', desc: 'Jovial, praiano, informal e leve' },
  { id: 'Sofisticado', label: 'Sofisticado', desc: 'Elegante, refinado, tom de alta hotelaria' },
];

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
  const { concierge, updateConcierge, knowledgeBase, addKnowledgeItem, deleteKnowledgeItem, property } =
    useApp();

  const [selectedKbSection, setSelectedKbSection] = useState<string>('all');
  const [isAddKbModalOpen, setIsAddKbModalOpen] = useState(false);

  // Form for adding knowledge
  const [newKbForm, setNewKbForm] = useState({
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

  const handleAddKbSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newKbForm.question || !newKbForm.answer) return;

    addKnowledgeItem({
      section: newKbForm.section,
      question: newKbForm.question,
      answer: newKbForm.answer,
    });

    setIsAddKbModalOpen(false);
    setNewKbForm({
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
      const lower = userText.toLowerCase();
      let matchedItem = knowledgeBase.find(
        (k) =>
          k.question.toLowerCase().includes(lower) ||
          k.answer.toLowerCase().includes(lower) ||
          lower.split(' ').some((word) => word.length > 3 && k.question.toLowerCase().includes(word))
      );

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
      } else if (lower.includes('olá') || lower.includes('oi') || lower.includes('bom dia')) {
        botText = concierge.welcomeMessage;
      } else {
        botText = `Obrigado por sua pergunta! Registrei sua solicitação sobre "${userText}" e nosso anfitrião ${property.name} responderá em instantes. Há algo mais em que possa ajudar?`;
      }

      setSimMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: botText,
          time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }, 600);
  };

  return (
    <div id="concierge-view-container" className="space-y-8 animate-in fade-in duration-300">
      {/* Top Banner & Status */}
      <div className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 text-white p-6 rounded-2xl shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="p-2 bg-rose-500/20 rounded-xl text-rose-400 border border-rose-500/30">
              <Bot className="w-6 h-6" />
            </span>
            <h3 className="text-xl font-bold">Seu Concierge Virtual IA</h3>
          </div>
          <p className="text-xs text-zinc-300 italic">"Seu hóspede pergunta. O Concierge responde."</p>
        </div>

        <div className="flex items-center gap-4 self-start md:self-auto">
          <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-xl border border-white/10">
            <span className="text-xs font-semibold">Status do Concierge:</span>
            <button
              onClick={() => updateConcierge({ enabled: !concierge.enabled })}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                concierge.enabled
                  ? 'bg-emerald-500 text-white shadow-xs'
                  : 'bg-zinc-600 text-zinc-300'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${concierge.enabled ? 'bg-white animate-pulse' : 'bg-zinc-400'}`} />
              {concierge.enabled ? 'Ativo 24/7' : 'Desativado'}
            </button>
          </div>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-2xl border border-zinc-200/80 shadow-xs text-center">
          <span className="text-2xl font-extrabold text-zinc-900 block">{concierge.statsToday.conversations}</span>
          <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mt-1 block">Conversas hoje</span>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-zinc-200/80 shadow-xs text-center">
          <span className="text-2xl font-extrabold text-emerald-600 block">{concierge.statsToday.answeredPercentage}%</span>
          <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mt-1 block">Perguntas respondidas</span>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-zinc-200/80 shadow-xs text-center">
          <span className="text-2xl font-extrabold text-rose-600 block">{concierge.statsToday.forwardedToHost}</span>
          <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mt-1 block">Encaminhadas ao anfitrião</span>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-zinc-200/80 shadow-xs text-center">
          <span className="text-2xl font-extrabold text-amber-500 flex items-center justify-center gap-1">
            {concierge.statsToday.satisfactionRating} <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
          </span>
          <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mt-1 block">Satisfação dos hóspedes</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Personalidade & Base de Conhecimento (7 cols) */}
        <div className="lg:col-span-7 space-y-8">
          {/* Personalidade Card */}
          <div className="bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-xs space-y-5">
            <h4 className="text-sm font-bold uppercase tracking-wider text-rose-600 border-b border-zinc-100 pb-2 flex items-center gap-2">
              <Sliders className="w-4 h-4" /> Personalidade do Concierge
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">
                  Nome do Concierge
                </label>
                <input
                  type="text"
                  value={concierge.name}
                  onChange={(e) => updateConcierge({ name: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-zinc-300 text-sm font-medium focus:ring-2 focus:ring-rose-500/20 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">
                  Tom de Voz Ativo
                </label>
                <span className="px-3 py-2 bg-rose-50 text-rose-700 font-bold text-xs rounded-xl border border-rose-200 block text-center">
                  {concierge.tone}
                </span>
              </div>
            </div>

            {/* Tone Selector Cards */}
            <div>
              <label className="block text-xs font-bold text-zinc-700 mb-2">
                Selecione a atmosfera do atendimento:
              </label>
              <div className="grid grid-cols-2 gap-3">
                {tonesList.map((t) => {
                  const isSelected = concierge.tone === t.id;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => updateConcierge({ tone: t.id })}
                      className={`p-3 rounded-xl border transition-all text-left cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-rose-50 border-rose-400 text-rose-900 shadow-2xs font-bold'
                          : 'bg-zinc-50 border-zinc-200 text-zinc-600 hover:bg-zinc-100'
                      }`}
                    >
                      <span className="text-xs font-bold block">{t.label}</span>
                      <span className="text-[11px] font-normal text-zinc-500 mt-1">{t.desc}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-zinc-700 mb-1">
                Mensagem Padrão de Apresentação
              </label>
              <textarea
                rows={3}
                value={concierge.welcomeMessage}
                onChange={(e) => updateConcierge({ welcomeMessage: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 text-xs font-medium focus:ring-2 focus:ring-rose-500/20 focus:outline-none"
              />
            </div>
          </div>

          {/* Base de Conhecimento Card */}
          <div className="bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-xs space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-100 pb-2">
              <h4 className="text-sm font-bold uppercase tracking-wider text-rose-600 flex items-center gap-2">
                <BookOpen className="w-4 h-4" /> Base de Conhecimento
              </h4>
              <button
                onClick={() => setIsAddKbModalOpen(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-semibold shadow-2xs transition-all cursor-pointer self-start sm:self-auto"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>+ Adicionar informação</span>
              </button>
            </div>

            {/* Sections Pills */}
            <div className="flex items-center gap-1 bg-zinc-100 p-1 rounded-xl overflow-x-auto">
              <button
                onClick={() => setSelectedKbSection('all')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  selectedKbSection === 'all'
                    ? 'bg-white text-zinc-900 shadow-2xs'
                    : 'text-zinc-600 hover:text-zinc-900'
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
                        ? 'bg-white text-zinc-900 shadow-2xs'
                        : 'text-zinc-600 hover:text-zinc-900'
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
                  className="p-4 rounded-xl border border-zinc-200 bg-zinc-50/50 hover:bg-zinc-50 transition-all space-y-2 relative group"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="px-2 py-0.5 text-[10px] font-bold bg-zinc-200 text-zinc-800 rounded">
                      {item.section}
                    </span>
                    <button
                      onClick={() => deleteKnowledgeItem(item.id)}
                      className="text-zinc-400 hover:text-rose-600 p-1 cursor-pointer"
                      title="Excluir item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <h5 className="text-xs font-bold text-zinc-900 flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-rose-500 flex-shrink-0" />
                    {item.question}
                  </h5>
                  <p className="text-xs text-zinc-600 leading-relaxed pl-5 bg-white p-2.5 rounded-lg border border-zinc-200/60">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Live WhatsApp Interactive Simulator (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-zinc-900 rounded-3xl p-4 shadow-xl border border-zinc-800 text-white space-y-3">
            {/* Phone Header */}
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800 px-2">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center text-sm shadow-2xs">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-bold leading-tight">{concierge.name}</h4>
                  <p className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Online • Responde instantaneamente
                  </p>
                </div>
              </div>
              <span className="text-[10px] bg-zinc-800 px-2.5 py-1 rounded-full text-zinc-400 border border-zinc-700">
                Simulador IA
              </span>
            </div>

            {/* Chat Messages Body */}
            <div className="h-96 overflow-y-auto p-3 space-y-3 bg-[#0b141a] rounded-2xl border border-zinc-800/80 font-sans">
              {simMessages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl text-xs leading-relaxed shadow-2xs ${
                      msg.sender === 'user'
                        ? 'bg-[#005c4b] text-white rounded-tr-xs'
                        : 'bg-[#202c33] text-zinc-100 rounded-tl-xs'
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
                className="flex-1 bg-zinc-800 border border-zinc-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-emerald-500"
              />
              <button
                type="submit"
                className="p-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          <div className="p-3 bg-zinc-100 rounded-xl border border-zinc-200 text-[11px] text-zinc-500 text-center">
            💡 Dica: Teste perguntar sobre Wi-Fi, Jacuzzi, regras ou restaurantes locais no simulador.
          </div>
        </div>
      </div>

      {/* MODAL: Adicionar Item à Base de Conhecimento */}
      {isAddKbModalOpen && (
        <div className="fixed inset-0 z-50 bg-zinc-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl border border-zinc-200 animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-rose-600" />
                <h3 className="text-lg font-bold text-zinc-900">Nova Informação para IA</h3>
              </div>
              <button
                onClick={() => setIsAddKbModalOpen(false)}
                className="p-1 text-zinc-400 hover:text-zinc-700 rounded-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddKbSubmit} className="mt-4 space-y-4">
              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">Categoria</label>
                <select
                  value={newKbForm.section}
                  onChange={(e) =>
                    setNewKbForm({ ...newKbForm, section: e.target.value as KnowledgeItem['section'] })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 text-sm font-medium bg-white focus:ring-2 focus:ring-rose-500/20 focus:outline-none"
                >
                  {kbSections.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">
                  Pergunta ou Dúvida Frequente *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Como ligar a sauna?"
                  value={newKbForm.question}
                  onChange={(e) => setNewKbForm({ ...newKbForm, question: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 text-sm font-medium focus:ring-2 focus:ring-rose-500/20 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">
                  Resposta da IA *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Ex: O botão fica ao lado da porta de vidro. Pressione por 3 segundos..."
                  value={newKbForm.answer}
                  onChange={(e) => setNewKbForm({ ...newKbForm, answer: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 text-sm font-medium focus:ring-2 focus:ring-rose-500/20 focus:outline-none"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsAddKbModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-zinc-600 hover:bg-zinc-100 rounded-xl cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-xl shadow-xs cursor-pointer"
                >
                  Salvar Informação
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
