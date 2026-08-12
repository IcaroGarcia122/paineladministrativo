import React, { useState, useEffect, useCallback } from 'react';
import {
  MessageSquareCode,
  CheckCircle2,
  QrCode,
  Clock,
  Sparkles,
  Smartphone,
  Save,
  Send,
  X,
  RefreshCw,
  Power,
  AlertCircle,
  Wifi,
  ShieldCheck,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Automation } from '../../types';
import { supabase } from '../../integrations/supabase/client';

export const AutomationsView: React.FC = () => {
  const { automations, updateAutomation, property, showToast } = useApp();

  const [selectedAutomation, setSelectedAutomation] = useState<Automation>(
    automations[0] || ({} as Automation)
  );

  // Sync selected automation when automations array is loaded/updated
  useEffect(() => {
    if (automations.length > 0) {
      if (!selectedAutomation || !selectedAutomation.id) {
        if (automations[0]) setSelectedAutomation(automations[0]);
      } else {
        const found = automations.find((a) => a.id === selectedAutomation.id);
        if (found) {
          setSelectedAutomation(found);
        }
      }
    }
  }, [automations]);
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);

  // Evolution API real integration state
  const [evolutionStatus, setEvolutionStatus] = useState<{
    connected: boolean;
    state: string;
    instance: string;
    details?: string;
  }>({
    connected: true,
    state: 'open',
    instance: 'teste1',
  });

  const [qrCodeData, setQrCodeData] = useState<string | null>(null);
  const [isLoadingStatus, setIsLoadingStatus] = useState(false);
  const [isDisconnecting, setIsDisconnecting] = useState(false);
  const [testPhone, setTestPhone] = useState('');
  const [isSendingTest, setIsSendingTest] = useState(false);
  const [testFeedback, setTestFeedback] = useState<string | null>(null);

  // Check Evolution Status from backend proxy
  const checkEvolutionStatus = useCallback(async () => {
    try {
      const res = await fetch('/api/evolution/status?instance=teste1');
      if (res.ok) {
        const data = await res.json();
        setEvolutionStatus({
          connected: data.connected,
          state: data.state || (data.connected ? 'open' : 'disconnected'),
          instance: data.instance || 'teste1',
        });
        if (data.connected) {
          setQrCodeData(null);
        }
      }
    } catch (err) {
      console.error('Error checking Evolution status:', err);
    }
  }, []);

  // Check status on load
  useEffect(() => {
    checkEvolutionStatus();
  }, [checkEvolutionStatus]);

  // Real-time polling when QR Modal is open
  useEffect(() => {
    let interval: any;
    if (isQrModalOpen) {
      checkEvolutionStatus();
      interval = setInterval(() => {
        checkEvolutionStatus();
      }, 3000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isQrModalOpen, checkEvolutionStatus]);

  // Fetch QR Code when requested or modal opened
  const handleFetchQrCode = async () => {
    setIsLoadingStatus(true);
    setQrCodeData(null);
    try {
      const res = await fetch('/api/evolution/connect?instance=teste1');
      const data = await res.json();
      if (data.qrcode) {
        setQrCodeData(data.qrcode);
      } else if (data.connected) {
        setEvolutionStatus((prev) => ({ ...prev, connected: true, state: 'open' }));
        showToast('WhatsApp já está conectado e ativo!');
      } else {
        showToast('Não foi possível gerar o QR Code no momento.', 'error');
      }
    } catch (err) {
      console.error('Error fetching QR Code:', err);
      showToast('Erro ao conectar com Evolution API.', 'error');
    } finally {
      setIsLoadingStatus(false);
    }
  };

  // Open QR Modal
  const handleOpenQrModal = () => {
    setIsQrModalOpen(true);
    handleFetchQrCode();
  };

  // Disconnect Instance
  const handleDisconnect = async () => {
    if (!window.confirm('Tem certeza que deseja desconectar o WhatsApp da Evolution API?')) return;
    setIsDisconnecting(true);
    try {
      const res = await fetch('/api/evolution/disconnect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ instance: 'teste1' }),
      });
      if (res.ok) {
        setEvolutionStatus({
          connected: false,
          state: 'disconnected',
          instance: 'teste1',
        });
        setQrCodeData(null);
        showToast('WhatsApp desconectado com sucesso.', 'info');
      } else {
        showToast('Erro ao desconectar instância.', 'error');
      }
    } catch (err) {
      console.error('Error disconnecting:', err);
      showToast('Falha na requisição de desconexão.', 'error');
    } finally {
      setIsDisconnecting(false);
    }
  };

  // Send real test WhatsApp message
  const handleSendTestMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!testPhone.trim()) return;

    setIsSendingTest(true);
    setTestFeedback(null);

    try {
      const renderedMsg = getRenderedPreview();
      const res = await fetch('/api/evolution/send-test', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone: testPhone,
          message: renderedMsg,
          instance: 'teste1',
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setTestFeedback('✅ Mensagem enviada com sucesso via Evolution API!');
        showToast('Mensagem de teste enviada!');
      } else {
        const errorMsg = data?.data?.response?.message || data?.error || 'Instância desconectada ou número inválido.';
        setTestFeedback(`⚠️ Erro no disparo: ${errorMsg}`);
        showToast(`Erro ao enviar: ${errorMsg}`, 'error');
      }
    } catch (err: any) {
      setTestFeedback('❌ Falha na comunicação com o servidor.');
      showToast('Erro ao enviar mensagem de teste.', 'error');
    } finally {
      setIsSendingTest(false);
    }
  };

  // Variables list
  const variables = [
    { code: '{{nome}}', label: 'Nome do Hóspede' },
    { code: '{{check_in}}', label: 'Data Check-in' },
    { code: '{{check_out}}', label: 'Data Checkout' },
    { code: '{{nome_hospedagem}}', label: 'Nome do Chalé' },
    { code: '{{link_airbnb}}', label: 'Link do Anúncio' },
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
    let msg = selectedAutomation.messageTemplate || '';
    msg = msg.replace(/{{nome}}/g, 'João Silva');
    msg = msg.replace(/{{check_in}}/g, '14/08/2026');
    msg = msg.replace(/{{check_out}}/g, '17/08/2026');
    msg = msg.replace(/{{nome_hospedagem}}/g, property.name || 'Chalé A-Frame');
    msg = msg.replace(/{{link_airbnb}}/g, property.airbnbUrl || 'https://airbnb.com/h/chale-a-frame');
    return msg;
  };

  // Save automation to local state and Supabase
  const handleSaveAutomation = async () => {
    if (!selectedAutomation?.id) return;

    await updateAutomation(selectedAutomation.id, {
      enabled: selectedAutomation.enabled,
      relativeTiming: selectedAutomation.relativeTiming,
      time: selectedAutomation.time,
      messageTemplate: selectedAutomation.messageTemplate,
    });
  };

  const isConnected = evolutionStatus.connected || evolutionStatus.state === 'open' || evolutionStatus.state === 'CONNECTED';

  return (
    <div id="automations-view-container" className="space-y-8 animate-in fade-in duration-300">
      
      {/* WhatsApp Evolution API Status Banner */}
      <div className="bg-[#16120E] p-6 rounded-2xl border border-[#C59A55]/30 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-black font-bold text-2xl shadow-md transition-all ${
            isConnected ? 'bg-gradient-to-r from-[#C59A55] to-[#B8860B]' : 'bg-amber-600'
          }`}>
            <Smartphone className="w-7 h-7 text-black" />
          </div>
          <div>
            <div className="flex items-center gap-2.5">
              <h3 className="text-lg font-serif font-bold text-[#FBF9F4]">Automação WhatsApp & Evolution API</h3>
              <span className={`px-3 py-1 rounded-full text-xs font-bold border flex items-center gap-1.5 ${
                isConnected
                  ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                  : 'bg-amber-500/20 text-amber-400 border-amber-500/30'
              }`}>
                <span className={`w-2 h-2 rounded-full ${isConnected ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
                {isConnected ? 'Instância Conectada (OPEN)' : 'Aguardando Conexão'}
              </span>
            </div>
            <p className="text-xs text-zinc-400 mt-1 flex items-center gap-3">
              <span>Instância: <strong className="font-mono text-[#E6C994]">teste1</strong></span>
              <span>•</span>
              <span>Servidor: <strong className="font-mono text-[#E6C994]">Easypanel / Evolution</strong></span>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 self-start md:self-auto">
          <button
            type="button"
            onClick={checkEvolutionStatus}
            disabled={isLoadingStatus}
            className="p-2.5 bg-[#1A1612] hover:bg-[#251f19] text-zinc-300 border border-[#C59A55]/20 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5"
            title="Atualizar Status"
          >
            <RefreshCw className={`w-4 h-4 text-[#C59A55] ${isLoadingStatus ? 'animate-spin' : ''}`} />
          </button>

          <button
            type="button"
            onClick={handleOpenQrModal}
            className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#C59A55] to-[#B8860B] text-black hover:brightness-110 rounded-xl text-xs font-bold shadow-xs transition-all cursor-pointer"
          >
            <QrCode className="w-4 h-4 text-black" />
            <span>{isConnected ? 'Ver QR Code / Reenviar' : 'Gerar QR Code WhatsApp'}</span>
          </button>

          {isConnected && (
            <button
              type="button"
              onClick={handleDisconnect}
              disabled={isDisconnecting}
              className="flex items-center gap-1.5 px-3 py-2.5 bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/30 rounded-xl text-xs font-bold transition-all cursor-pointer"
            >
              <Power className="w-3.5 h-3.5" />
              <span>Desconectar</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Layout: List of Automations & Editor/Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: List of Automations (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E6C994] flex items-center gap-2">
              <MessageSquareCode className="w-4 h-4 text-[#C59A55]" />
              Regras e Mensagens Automáticas
            </h4>
            <span className="text-[11px] text-zinc-400 font-medium">
              {automations.filter((a) => a.enabled).length} ativas
            </span>
          </div>

          <div className="space-y-3">
            {automations.map((aut) => {
              const isSelected = selectedAutomation.id === aut.id;
              return (
                <div
                  key={aut.id}
                  onClick={() => setSelectedAutomation(aut)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                    isSelected
                      ? 'bg-[#1F1914] border-[#C59A55] shadow-md ring-1 ring-[#C59A55]/50'
                      : 'bg-[#16120E] border-[#C59A55]/20 hover:border-[#C59A55]/40 hover:bg-[#1A1612]'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h5 className="text-sm font-bold text-[#FBF9F4]">{aut.title}</h5>
                      <p className="text-xs text-zinc-400 mt-0.5 leading-snug">{aut.description}</p>
                    </div>

                    {/* Toggle Switch */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        const nextState = !aut.enabled;
                        updateAutomation(aut.id, { enabled: nextState });
                        if (selectedAutomation.id === aut.id) {
                          setSelectedAutomation((prev) => ({ ...prev, enabled: nextState }));
                        }
                      }}
                      className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                        aut.enabled ? 'bg-emerald-500' : 'bg-zinc-800'
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                          aut.enabled ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between text-[11px] pt-2 border-t border-[#C59A55]/15 font-medium">
                    <span className="text-zinc-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#C59A55]" />
                      {aut.relativeTiming} às {aut.time}
                    </span>
                    <span
                      className={`font-semibold flex items-center gap-1 ${
                        aut.enabled ? 'text-emerald-400' : 'text-zinc-500'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${aut.enabled ? 'bg-emerald-400 animate-pulse' : 'bg-zinc-600'}`} />
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
          <div className="bg-[#16120E] p-6 rounded-2xl border border-[#C59A55]/20 shadow-md space-y-5">
            <div className="flex items-center justify-between border-b border-[#C59A55]/15 pb-3">
              <div>
                <h4 className="text-base font-serif font-bold text-[#FBF9F4]">
                  Editar: {selectedAutomation.title}
                </h4>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Ajuste o gatilho de tempo e o modelo de mensagem enviado via WhatsApp
                </p>
              </div>

              <button
                type="button"
                onClick={handleSaveAutomation}
                className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-[#C59A55] to-[#B8860B] text-black hover:brightness-110 rounded-xl text-xs font-bold shadow-xs cursor-pointer transition-all active:scale-95"
              >
                <Save className="w-3.5 h-3.5 text-black" />
                <span>Salvar automação</span>
              </button>
            </div>

            {/* Timing Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1">
                  Momento do Disparo (Timing)
                </label>
                <input
                  type="text"
                  value={selectedAutomation.relativeTiming}
                  onChange={(e) =>
                    setSelectedAutomation({ ...selectedAutomation, relativeTiming: e.target.value })
                  }
                  className="w-full px-3.5 py-2 rounded-xl border border-[#C59A55]/30 bg-[#1A1612] text-white text-xs font-medium focus:border-[#C59A55] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1">
                  Horário do Disparo
                </label>
                <input
                  type="time"
                  value={selectedAutomation.time}
                  onChange={(e) =>
                    setSelectedAutomation({ ...selectedAutomation, time: e.target.value })
                  }
                  className="w-full px-3.5 py-2 rounded-xl border border-[#C59A55]/30 bg-[#1A1612] text-white text-xs font-medium focus:border-[#C59A55] focus:outline-none"
                />
              </div>
            </div>

            {/* Variable Pills */}
            <div>
              <label className="block text-xs font-bold text-zinc-300 mb-1.5">
                Variáveis Personalizáveis (Clique para inserir no texto):
              </label>
              <div className="flex flex-wrap gap-1.5">
                {variables.map((v) => (
                  <button
                    key={v.code}
                    type="button"
                    onClick={() => handleInsertVariable(v.code)}
                    className="px-2.5 py-1 bg-[#1A1612] hover:bg-[#C59A55]/20 hover:border-[#C59A55]/50 border border-[#C59A55]/30 rounded-lg text-xs font-mono font-medium text-[#E6C994] transition-colors cursor-pointer"
                  >
                    {v.code} <span className="text-[10px] text-zinc-400 font-sans">({v.label})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Message Textarea */}
            <div>
              <label className="block text-xs font-bold text-zinc-300 mb-1">
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
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#C59A55]/30 bg-[#1A1612] text-white text-xs font-mono font-medium focus:border-[#C59A55] focus:outline-none leading-relaxed"
              />
            </div>

            {/* Live WhatsApp Preview Box */}
            <div className="space-y-3 pt-3 border-t border-[#C59A55]/15">
              <span className="text-xs font-bold text-zinc-300 block">
                Pré-visualização do WhatsApp do Hóspede:
              </span>
              <div className="bg-[#0b141a] p-4 rounded-2xl border border-[#C59A55]/20 shadow-inner">
                <div className="bg-[#1F1914] p-4 rounded-2xl rounded-tl-xs border border-[#C59A55]/30 shadow-md text-xs text-[#FBF9F4] leading-relaxed font-sans max-w-[92%] space-y-1">
                  <p className="whitespace-pre-line">{getRenderedPreview()}</p>
                  <span className="text-[9px] text-zinc-400 mt-1 block text-right">
                    {selectedAutomation.time || '10:00'} ✓✓
                  </span>
                </div>
              </div>

              {/* Form de Envio de Teste Real via Evolution API */}
              <div className="bg-[#1F1914] p-4 rounded-2xl border border-[#C59A55]/30 space-y-2">
                <label className="block text-xs font-bold text-[#E6C994] flex items-center gap-2">
                  <Send className="w-4 h-4 text-[#C59A55]" />
                  Testar Disparo Real no seu WhatsApp (Evolution API):
                </label>
                <form onSubmit={handleSendTestMessage} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Seu número com DDD (ex: 21999998888)"
                    value={testPhone}
                    onChange={(e) => setTestPhone(e.target.value)}
                    className="flex-1 px-3.5 py-2 rounded-xl border border-[#C59A55]/30 bg-[#1A1612] text-white text-xs font-medium focus:outline-none focus:border-[#C59A55]"
                  />
                  <button
                    type="submit"
                    disabled={isSendingTest || !testPhone.trim()}
                    className="px-5 py-2 bg-gradient-to-r from-[#C59A55] to-[#B8860B] text-black hover:brightness-110 rounded-xl text-xs font-bold transition-all disabled:opacity-50 cursor-pointer flex items-center gap-1.5 shadow-sm"
                  >
                    {isSendingTest ? (
                      <RefreshCw className="w-3.5 h-3.5 animate-spin text-black" />
                    ) : (
                      <Send className="w-3.5 h-3.5 text-black" />
                    )}
                    <span>{isSendingTest ? 'Enviando...' : 'Enviar Teste'}</span>
                  </button>
                </form>
                {testFeedback && (
                  <p className="text-xs font-medium mt-1 transition-all text-[#E6C994]">{testFeedback}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL: Configurar Evolution API / QR Code */}
      {isQrModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#16120E] rounded-3xl max-w-md w-full p-6 shadow-2xl border border-[#C59A55]/30 animate-in zoom-in-95 duration-200 space-y-5 relative">
            <div className="flex items-center justify-between pb-3 border-b border-[#C59A55]/15">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#C59A55]/20 text-[#E6C994] border border-[#C59A55]/30 flex items-center justify-center">
                  <Smartphone className="w-4 h-4 text-[#C59A55]" />
                </div>
                <div>
                  <h3 className="text-base font-serif font-bold text-[#FBF9F4]">QR Code Evolution API</h3>
                  <p className="text-[11px] text-zinc-400">Conecte o WhatsApp para disparos automáticos</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsQrModalOpen(false)}
                className="p-1.5 text-zinc-400 hover:text-white rounded-lg cursor-pointer transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-center space-y-4">
              <div className="p-3 bg-[#1A1612] rounded-xl border border-[#C59A55]/20 text-xs text-left space-y-1 font-mono">
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400">Instância:</span>
                  <strong className="text-[#E6C994]">teste1</strong>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400">Status:</span>
                  <span className={`font-bold flex items-center gap-1 ${
                    isConnected ? 'text-emerald-400' : 'text-amber-400'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${isConnected ? 'bg-emerald-400' : 'bg-amber-400 animate-ping'}`} />
                    {isConnected ? 'ABERTO / CONECTADO' : 'AGUARDANDO QR CODE'}
                  </span>
                </div>
              </div>

              {/* QR Code Container */}
              {isLoadingStatus ? (
                <div className="w-56 h-56 bg-[#1A1612] rounded-2xl border border-dashed border-[#C59A55]/30 mx-auto flex flex-col items-center justify-center p-4">
                  <RefreshCw className="w-8 h-8 text-[#C59A55] animate-spin mb-2" />
                  <span className="text-xs text-zinc-400 font-medium">Solicitando QR Code...</span>
                </div>
              ) : isConnected ? (
                <div className="w-56 h-56 bg-[#1F1914] rounded-2xl border border-emerald-500/30 mx-auto flex flex-col items-center justify-center p-4 text-center">
                  <CheckCircle2 className="w-16 h-16 text-emerald-400 mb-2" />
                  <h4 className="font-bold text-[#FBF9F4] text-sm">WhatsApp Conectado!</h4>
                  <p className="text-[11px] text-emerald-300 mt-1 leading-snug">
                    Sua instância <strong className="font-mono text-[#E6C994]">teste1</strong> está pronta para enviar automações.
                  </p>
                </div>
              ) : qrCodeData ? (
                <div className="w-56 h-56 bg-white rounded-2xl border border-[#C59A55]/40 mx-auto p-2 flex items-center justify-center shadow-md relative group">
                  <img
                    src={qrCodeData.startsWith('data:') ? qrCodeData : `data:image/png;base64,${qrCodeData}`}
                    alt="QR Code WhatsApp"
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
              ) : (
                <div className="w-56 h-56 bg-[#1A1612] rounded-2xl border border-[#C59A55]/30 mx-auto flex flex-col items-center justify-center p-4">
                  <QrCode className="w-16 h-16 text-zinc-500 mb-2" />
                  <span className="text-xs text-zinc-400 font-medium text-center">
                    Clique abaixo para gerar o QR Code
                  </span>
                </div>
              )}

              <div className="bg-[#1A1612] p-3 rounded-xl border border-[#C59A55]/20 text-left text-[11px] text-zinc-300 leading-relaxed">
                <strong className="text-[#E6C994]">Instruções de Escaneamento:</strong>
                <ol className="list-decimal list-inside mt-1 space-y-0.5 text-zinc-400">
                  <li>Abra o <strong className="text-zinc-200">WhatsApp</strong> no celular</li>
                  <li>Vá em <strong className="text-zinc-200">Aparelhos Conectados &gt; Conectar um aparelho</strong></li>
                  <li>Aponte a câmera para o QR Code acima</li>
                </ol>
              </div>
            </div>

            <div className="pt-2 flex justify-between items-center gap-3">
              <button
                type="button"
                onClick={handleFetchQrCode}
                disabled={isLoadingStatus}
                className="px-4 py-2.5 bg-[#1A1612] hover:bg-[#251f19] text-zinc-300 border border-[#C59A55]/20 text-xs font-bold rounded-xl cursor-pointer transition-all flex items-center gap-1.5"
              >
                <RefreshCw className={`w-3.5 h-3.5 text-[#C59A55] ${isLoadingStatus ? 'animate-spin' : ''}`} />
                <span>{isLoadingStatus ? 'Gerando...' : 'Novo QR Code'}</span>
              </button>

              <button
                type="button"
                onClick={() => setIsQrModalOpen(false)}
                className="px-6 py-2.5 bg-gradient-to-r from-[#C59A55] to-[#B8860B] text-black text-xs font-bold rounded-xl cursor-pointer hover:brightness-110 transition-all"
              >
                Concluído
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
