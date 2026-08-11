import React, { useState } from 'react';
import {
  Settings,
  User,
  Globe,
  Smartphone,
  Bell,
  Save,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Building2,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const SettingsView: React.FC = () => {
  const { property, updateProperty, whatsAppStatus, showToast } = useApp();

  const [profile, setProfile] = useState({
    name: 'Ícaro',
    email: 'icaro@villadopoente.com',
    phone: '+55 21 99876-5432',
  });

  const [notifications, setNotifications] = useState({
    newGuests: true,
    automationFailures: true,
    unansweredAi: true,
  });

  const [domainInput, setDomainInput] = useState(property.customDomain);

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    updateProperty({ customDomain: domainInput });
    showToast('Configurações salvas com sucesso');
  };

  return (
    <form id="settings-form" onSubmit={handleSaveSettings} className="space-y-8 animate-in fade-in duration-300">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-zinc-200/80 shadow-xs">
        <div>
          <h3 className="text-xl font-bold text-zinc-900">Configurações do Sistema</h3>
          <p className="text-xs text-zinc-500 mt-0.5">
            Gerencie seu perfil de anfitrião, credenciais, notificações e domínio do site
          </p>
        </div>

        <button
          type="submit"
          className="flex items-center gap-2 px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-xl shadow-xs transition-all cursor-pointer self-start sm:self-auto"
        >
          <Save className="w-4 h-4" />
          <span>Salvar Configurações</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1: Perfil do Anfitrião */}
        <div className="bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-xs space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-rose-600 border-b border-zinc-100 pb-2 flex items-center gap-2">
            <User className="w-4 h-4" /> Perfil do Proprietário
          </h4>

          <div>
            <label className="block text-xs font-bold text-zinc-700 mb-1">Nome Completo</label>
            <input
              type="text"
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl border border-zinc-300 text-sm font-medium focus:ring-2 focus:ring-rose-500/20 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-zinc-700 mb-1">E-mail Administrativo</label>
            <input
              type="email"
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl border border-zinc-300 text-sm font-medium focus:ring-2 focus:ring-rose-500/20 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-zinc-700 mb-1">Telefone Principal</label>
            <input
              type="text"
              value={profile.phone}
              onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl border border-zinc-300 text-sm font-medium focus:ring-2 focus:ring-rose-500/20 focus:outline-none"
            />
          </div>
        </div>

        {/* Card 2: Domínio & Site */}
        <div className="bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-xs space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-rose-600 border-b border-zinc-100 pb-2 flex items-center gap-2">
            <Globe className="w-4 h-4" /> Domínio & Publicação do Site
          </h4>

          <div>
            <label className="block text-xs font-bold text-zinc-700 mb-1">
              Domínio Personalizado
            </label>
            <input
              type="text"
              value={domainInput}
              onChange={(e) => setDomainInput(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl border border-zinc-300 text-sm font-medium font-mono focus:ring-2 focus:ring-rose-500/20 focus:outline-none"
            />
            <span className="text-[11px] text-zinc-400 mt-1 block">
              Endereço onde seus hóspedes acessam a landing page da propriedade.
            </span>
          </div>

          <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-emerald-900">Status do Site: Publicado</span>
            </div>
            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
              SSL / HTTPS Ativo
            </span>
          </div>
        </div>

        {/* Card 3: WhatsApp & Evolution API */}
        <div className="bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-xs space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-rose-600 border-b border-zinc-100 pb-2 flex items-center gap-2">
            <Smartphone className="w-4 h-4" /> Integração WhatsApp (Evolution API)
          </h4>

          <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200 space-y-2 text-xs">
            <div className="flex justify-between items-center">
              <span className="text-zinc-600 font-medium">Provedor:</span>
              <span className="font-bold text-zinc-900">{whatsAppStatus.provider}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-zinc-600 font-medium">Número Conectado:</span>
              <span className="font-bold text-zinc-900 font-mono">{whatsAppStatus.phone}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-zinc-600 font-medium">Status da Conexão:</span>
              <span className="text-emerald-600 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Ativo
              </span>
            </div>
          </div>
        </div>

        {/* Card 4: Notificações do Sistema */}
        <div className="bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-xs space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-rose-600 border-b border-zinc-100 pb-2 flex items-center gap-2">
            <Bell className="w-4 h-4" /> Alertas & Notificações
          </h4>

          <div className="space-y-3">
            <label className="flex items-center justify-between p-3 rounded-xl bg-zinc-50 border border-zinc-200/60 cursor-pointer">
              <div>
                <span className="text-xs font-bold text-zinc-900 block">Alertas de Novos Hóspedes</span>
                <span className="text-[11px] text-zinc-500">Notificar por e-mail a cada novo cadastro</span>
              </div>
              <input
                type="checkbox"
                checked={notifications.newGuests}
                onChange={(e) => setNotifications({ ...notifications, newGuests: e.target.checked })}
                className="w-4 h-4 text-rose-600 rounded cursor-pointer"
              />
            </label>

            <label className="flex items-center justify-between p-3 rounded-xl bg-zinc-50 border border-zinc-200/60 cursor-pointer">
              <div>
                <span className="text-xs font-bold text-zinc-900 block">Falhas de Automação</span>
                <span className="text-[11px] text-zinc-500">Alertar caso alguma mensagem de WhatsApp falhe</span>
              </div>
              <input
                type="checkbox"
                checked={notifications.automationFailures}
                onChange={(e) => setNotifications({ ...notifications, automationFailures: e.target.checked })}
                className="w-4 h-4 text-rose-600 rounded cursor-pointer"
              />
            </label>

            <label className="flex items-center justify-between p-3 rounded-xl bg-zinc-50 border border-zinc-200/60 cursor-pointer">
              <div>
                <span className="text-xs font-bold text-zinc-900 block">Mensagens Não Respondidas pela IA</span>
                <span className="text-[11px] text-zinc-500">Encaminhar ao anfitrião quando a IA não souber a resposta</span>
              </div>
              <input
                type="checkbox"
                checked={notifications.unansweredAi}
                onChange={(e) => setNotifications({ ...notifications, unansweredAi: e.target.checked })}
                className="w-4 h-4 text-rose-600 rounded cursor-pointer"
              />
            </label>
          </div>
        </div>
      </div>
    </form>
  );
};
