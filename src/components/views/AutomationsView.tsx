import React, { useState } from 'react';
import {
  MessageSquareCode,
  CheckCircle2,
  QrCode,
  Clock,
  Sparkles,
  Smartphone,
  Save,
  Calendar,
  Send,
  Sliders,
  X,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Automation } from '../../types';

export const AutomationsView: React.FC = () => {
  const { automations, updateAutomation, whatsAppStatus, property } = useApp();

  const [selectedAutomation, setSelectedAutomation] = useState<Automation>(automations[0]);
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);

  // Variables list
  const variables = [
    { code: '{{nome}}', label: 'Nome do Hóspede', sample: 'João' },
    { code: '{{check_in}}', label: 'Data Check-in', sample: '14/08' },
    { code: '{{check_out}}', label: 'Data Checkout', sample: '17/08' },
    { code: '{{nome_hospedagem}}', label: 'Nome da Villa', sample: property.name },
    { code: '{{link_airbnb}}', label: 'Link do Anúncio', sample: property.airbnbUrl },
  ];

  // Insert variable into message
  const handleInsertVariable = (varCode: string) => {
    setSelectedAutomation((prev) => ({
      ...prev,
      messageTemplate: prev.messageTemplate + ' ' + varCode,
    }));
  };

  // Preview renderer
  const getRenderedPreview = () => {
    let msg = selectedAutomation.messageTemplate;
    msg = msg.replace(/{{nome}}/g, 'João Silva');
    msg = msg.replace(/{{check_in}}/g, '14/08/2026');
    msg = msg.replace(/{{check_out}}/g, '17/08/2026');
    msg = msg.replace(/{{nome_hospedagem}}/g, property.name);
    msg = msg.replace(/{{link_airbnb}}/g, property.airbnbUrl);
    return msg;
  };

  const handleSaveAutomation = () => {
    updateAutomation(selectedAutomation.id, {
      enabled: selectedAutomation.enabled,
      relativeTiming: selectedAutomation.relativeTiming,
      time: selectedAutomation.time,
      messageTemplate: selectedAutomation.messageTemplate,
    });
  };

  return (
    <div id="automations-view-container" className="space-y-8 animate-in fade-in duration-300">
      {/* WhatsApp Connection Header Status */}
      <div className="bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white font-bold flex items-center justify-center text-xl shadow-xs">
            <Smartphone className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-zinc-900">Status da Conexão WhatsApp</h3>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-200 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Conectado ({whatsAppStatus.provider})
              </span>
            </div>
            <p className="text-xs text-zinc-500 mt-1">
              Número ativo: <strong className="font-mono text-zinc-900">{whatsAppStatus.phone}</strong>
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsQrModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white rounded-xl text-xs font-bold shadow-xs transition-all cursor-pointer self-start md:self-auto"
        >
          <QrCode className="w-4 h-4 text-emerald-400" />
          <span>Configurar QR Code / Evolution API</span>
        </button>
      </div>

      {/* Main Grid: Automations List (Left) & Editor + Preview (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Automation Cards List (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500">
            Fluxos de Disparo Automático
          </h4>

          <div className="space-y-3">
            {automations.map((aut) => {
              const isSelected = selectedAutomation.id === aut.id;
              return (
                <div
                  key={aut.id}
                  onClick={() => setSelectedAutomation(aut)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                    isSelected
                      ? 'bg-rose-50/80 border-rose-300 shadow-sm'
                      : 'bg-white border-zinc-200/80 hover:border-zinc-300'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h5 className="text-sm font-bold text-zinc-900">{aut.title}</h5>
                      <p className="text-xs text-zinc-500 mt-0.5 leading-snug">{aut.description}</p>
                    </div>

                    {/* Toggle Switch */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        updateAutomation(aut.id, { enabled: !aut.enabled });
                        if (selectedAutomation.id === aut.id) {
                          setSelectedAutomation((prev) => ({ ...prev, enabled: !prev.enabled }));
                        }
                      }}
                      className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                        aut.enabled ? 'bg-emerald-500' : 'bg-zinc-300'
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                          aut.enabled ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between text-[11px] pt-2 border-t border-zinc-200/60 font-medium">
                    <span className="text-zinc-500 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-zinc-400" />
                      {aut.relativeTiming} às {aut.time}
                    </span>
                    <span
                      className={`font-semibold flex items-center gap-1 ${
                        aut.enabled ? 'text-emerald-700' : 'text-zinc-400'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${aut.enabled ? 'bg-emerald-500' : 'bg-zinc-400'}`} />
                      {aut.enabled ? 'Ativo' : 'Desativado'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Editor & Live WhatsApp Preview (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-xs space-y-5">
            <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
              <div>
                <h4 className="text-base font-bold text-zinc-900">
                  Editar: {selectedAutomation.title}
                </h4>
                <p className="text-xs text-zinc-500 mt-0.5">
                  Personalize o momento do disparo e o texto da mensagem
                </p>
              </div>

              <button
                type="button"
                onClick={handleSaveAutomation}
                className="flex items-center gap-1.5 px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold shadow-xs cursor-pointer transition-all"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Salvar automação</span>
              </button>
            </div>

            {/* Timing Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">
                  Quando enviar? (Timing Relativo)
                </label>
                <input
                  type="text"
                  value={selectedAutomation.relativeTiming}
                  onChange={(e) =>
                    setSelectedAutomation({ ...selectedAutomation, relativeTiming: e.target.value })
                  }
                  className="w-full px-3.5 py-2 rounded-xl border border-zinc-300 text-xs font-medium focus:ring-2 focus:ring-rose-500/20 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">
                  Horário do disparo
                </label>
                <input
                  type="time"
                  value={selectedAutomation.time}
                  onChange={(e) =>
                    setSelectedAutomation({ ...selectedAutomation, time: e.target.value })
                  }
                  className="w-full px-3.5 py-2 rounded-xl border border-zinc-300 text-xs font-medium focus:ring-2 focus:ring-rose-500/20 focus:outline-none"
                />
              </div>
            </div>

            {/* Variable Pills */}
            <div>
              <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                Variáveis Personalizáveis (Clique para inserir):
              </label>
              <div className="flex flex-wrap gap-1.5">
                {variables.map((v) => (
                  <button
                    key={v.code}
                    type="button"
                    onClick={() => handleInsertVariable(v.code)}
                    className="px-2.5 py-1 bg-zinc-100 hover:bg-rose-50 hover:border-rose-200 border border-zinc-200 rounded-lg text-xs font-mono font-medium text-zinc-800 transition-colors cursor-pointer"
                  >
                    {v.code}
                  </button>
                ))}
              </div>
            </div>

            {/* Message Textarea */}
            <div>
              <label className="block text-xs font-bold text-zinc-700 mb-1">
                Modelo da Mensagem
              </label>
              <textarea
                rows={7}
                value={selectedAutomation.messageTemplate}
                onChange={(e) =>
                  setSelectedAutomation({
                    ...selectedAutomation,
                    messageTemplate: e.target.value,
                  })
                }
                className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 text-xs font-mono font-medium focus:ring-2 focus:ring-rose-500/20 focus:outline-none leading-relaxed"
              />
            </div>

            {/* Live Preview Box */}
            <div className="space-y-2 pt-2 border-t border-zinc-100">
              <span className="text-xs font-bold text-zinc-700 block">
                Pré-visualização do WhatsApp do Hóspede:
              </span>
              <div className="bg-[#e5ddd5] p-4 rounded-2xl border border-zinc-300/80 shadow-xs">
                <div className="bg-white p-3.5 rounded-2xl rounded-tl-xs shadow-xs text-xs text-zinc-900 leading-relaxed font-sans max-w-[90%] space-y-1">
                  <p className="whitespace-pre-line">{getRenderedPreview()}</p>
                  <span className="text-[9px] text-zinc-400 mt-1 block text-right">
                    {selectedAutomation.time} ✓✓
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL: Configurar Evolution API / QR Code */}
      {isQrModalOpen && (
        <div className="fixed inset-0 z-50 bg-zinc-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl border border-zinc-200 animate-in zoom-in-95 duration-200 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
              <div className="flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-emerald-600" />
                <h3 className="text-lg font-bold text-zinc-900">Conexão Evolution API</h3>
              </div>
              <button
                onClick={() => setIsQrModalOpen(false)}
                className="p-1 text-zinc-400 hover:text-zinc-700 rounded-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-center space-y-3">
              <div className="w-48 h-48 bg-zinc-100 rounded-2xl border border-zinc-300 mx-auto flex flex-col items-center justify-center p-4 shadow-inner">
                <QrCode className="w-28 h-28 text-zinc-800" />
                <span className="text-[10px] text-emerald-600 font-bold mt-2 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Instância Conectada (+55 21 99876-5432)
                </span>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                A instância da Evolution API está operacional e conectada ao número da Villa do Poente.
              </p>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setIsQrModalOpen(false)}
                className="px-5 py-2 bg-zinc-900 text-white text-xs font-bold rounded-xl cursor-pointer"
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
