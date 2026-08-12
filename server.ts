import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { createClient } from '@supabase/supabase-js';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Supabase Admin Client
  const getSupabaseAdmin = () => {
    const url = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL || 'https://ewdyfsodoyhreubuihjs.supabase.co';
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY;
    return createClient(url, key);
  };

  // Configuration for Evolution API
  const getEvolutionConfig = () => {
    const baseUrl = (process.env.EVOLUTION_API_URL || 'https://n8n-evolution-api.iqfos1.easypanel.host').replace(/\/$/, '');
    const apiKey = process.env.EVOLUTION_API_KEY || 'ASDAFAWDASFSEFSDFDFSDFSFESFSDFSEFSEFS';
    const instanceName = process.env.EVOLUTION_INSTANCE_NAME || 'teste1';
    return { baseUrl, apiKey, instanceName };
  };

  // --- STAYS / RESERVATIONS API ROUTES ---
  app.get('/api/stays', async (req, res) => {
    try {
      const supabaseAdmin = getSupabaseAdmin();
      const { data, error } = await supabaseAdmin
        .from('stays')
        .select('*, guests(*)');

      if (error) {
        console.error('Error fetching stays from Supabase:', error);
        return res.status(500).json({ error: error.message });
      }

      const formatted = (data || []).map((row: any) => ({
        id: row.id,
        guestId: row.guest_id || row.guests?.id || '',
        guestName: row.guests?.name || 'Hóspede Sem Nome',
        guestPhone: row.guests?.phone || '',
        checkIn: row.check_in,
        checkOut: row.check_out,
        guestsCount: row.guests_count || 1,
        status: row.status || 'confirmed',
        source: row.source || 'Direct',
        notes: row.notes || '',
        allowAutomations: row.allow_automations ?? true,
      }));

      return res.json(formatted);
    } catch (err: any) {
      console.error('Catch fetching stays:', err);
      return res.status(500).json({ error: err.message });
    }
  });

  app.post('/api/stays', async (req, res) => {
    try {
      const supabaseAdmin = getSupabaseAdmin();
      const {
        id,
        guestId,
        guestName,
        guestPhone,
        guestEmail,
        checkIn,
        checkOut,
        guestsCount,
        status,
        source,
        notes,
        allowAutomations,
      } = req.body;

      const isValidUuid = (val: string) =>
        val && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(val);

      const targetGuestId = isValidUuid(guestId) ? guestId : crypto.randomUUID();
      const targetStayId = isValidUuid(id) ? id : crypto.randomUUID();

      // 1. Ensure Guest Record exists/updated
      const guestRecord = {
        id: targetGuestId,
        name: guestName || 'Hóspede',
        phone: guestPhone || '',
        email: guestEmail || null,
        notes: notes || null,
      };

      const { error: guestError } = await supabaseAdmin
        .from('guests')
        .upsert(guestRecord, { onConflict: 'id' });

      if (guestError) {
        console.error('Error upserting guest in Supabase:', guestError);
      }

      // 2. Ensure Stay Record exists/updated
      const stayRecord = {
        id: targetStayId,
        guest_id: targetGuestId,
        property_id: '11111111-1111-1111-1111-111111111111',
        check_in: checkIn,
        check_out: checkOut,
        guests_count: guestsCount || 1,
        status: status || 'confirmed',
        source: source || 'Direct',
        allow_automations: allowAutomations ?? true,
        notes: notes || null,
      };

      const { data: savedStay, error: stayError } = await supabaseAdmin
        .from('stays')
        .upsert(stayRecord, { onConflict: 'id' })
        .select('*, guests(*)')
        .single();

      if (stayError) {
        console.error('Error upserting stay in Supabase:', stayError);
        return res.status(500).json({ error: stayError.message });
      }

      const formatted = {
        id: savedStay.id,
        guestId: savedStay.guest_id,
        guestName: savedStay.guests?.name || guestName || 'Hóspede',
        guestPhone: savedStay.guests?.phone || guestPhone || '',
        checkIn: savedStay.check_in,
        checkOut: savedStay.check_out,
        guestsCount: savedStay.guests_count,
        status: savedStay.status,
        source: savedStay.source,
        notes: savedStay.notes || '',
        allowAutomations: savedStay.allow_automations ?? true,
      };

      return res.json({ success: true, item: formatted });
    } catch (err: any) {
      console.error('Catch saving stay:', err);
      return res.status(500).json({ error: err.message });
    }
  });

  app.delete('/api/stays/:id', async (req, res) => {
    try {
      const supabaseAdmin = getSupabaseAdmin();
      const { id } = req.params;

      const { error } = await supabaseAdmin.from('stays').delete().eq('id', id);

      if (error) {
        console.error('Error deleting stay from Supabase:', error);
        return res.status(500).json({ error: error.message });
      }

      return res.json({ success: true, message: 'Reserva removida do Supabase' });
    } catch (err: any) {
      console.error('Catch deleting stay:', err);
      return res.status(500).json({ error: err.message });
    }
  });

  // --- AUTOMATIONS API ROUTES ---
  app.get('/api/automations', async (req, res) => {
    try {
      const supabaseAdmin = getSupabaseAdmin();
      const { data, error } = await supabaseAdmin
        .from('automations')
        .select('*');

      if (error) {
        console.error('Error fetching automations from Supabase:', error);
        return res.status(500).json({ error: error.message });
      }

      const formatted = (data || []).map((row: any) => ({
        id: row.id,
        type: row.type || 'welcome',
        title: row.title || 'Automação',
        description: row.description || '',
        enabled: row.enabled ?? true,
        relativeTiming: row.relative_timing || 'No dia',
        time: row.time || '10:00',
        messageTemplate: row.message_template || '',
      }));

      return res.json(formatted);
    } catch (err: any) {
      console.error('Catch fetching automations:', err);
      return res.status(500).json({ error: err.message });
    }
  });

  app.post('/api/automations', async (req, res) => {
    try {
      const supabaseAdmin = getSupabaseAdmin();
      const {
        id,
        type,
        title,
        description,
        enabled,
        relativeTiming,
        time,
        messageTemplate,
      } = req.body;

      const isValidUuid = (val: string) =>
        val && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(val);

      const targetId = isValidUuid(id) ? id : crypto.randomUUID();

      const dbRecord = {
        id: targetId,
        property_id: '11111111-1111-1111-1111-111111111111',
        type: type || 'welcome',
        title: title || 'Automação',
        description: description || '',
        enabled: enabled ?? true,
        relative_timing: relativeTiming || 'No dia',
        time: time || '10:00',
        message_template: messageTemplate || '',
      };

      const { data, error } = await supabaseAdmin
        .from('automations')
        .upsert(dbRecord, { onConflict: 'id' })
        .select('*')
        .single();

      if (error) {
        console.error('Error upserting automation in Supabase:', error);
        return res.status(500).json({ error: error.message });
      }

      const formatted = {
        id: data.id,
        type: data.type,
        title: data.title,
        description: data.description,
        enabled: data.enabled,
        relativeTiming: data.relative_timing,
        time: data.time,
        messageTemplate: data.message_template,
      };

      return res.json({ success: true, item: formatted });
    } catch (err: any) {
      console.error('Catch saving automation:', err);
      return res.status(500).json({ error: err.message });
    }
  });

  // --- KNOWLEDGE BASE API ROUTES ---
  app.get('/api/knowledge-base', async (req, res) => {
    try {
      const supabaseAdmin = getSupabaseAdmin();
      const { data, error } = await supabaseAdmin.from('knowledge_base').select('*');
      if (error) {
        console.error('Error fetching knowledge_base:', error);
        return res.status(500).json({ error: error.message });
      }
      const formatted = (data || []).map((row: any) => ({
        id: row.id,
        section: row.section || 'Hospedagem',
        question: row.question,
        answer: row.answer,
        updatedAt: row.updated_at || new Date().toISOString(),
      }));
      return res.json(formatted);
    } catch (err: any) {
      console.error('Catch fetching knowledge base:', err);
      return res.status(500).json({ error: err.message });
    }
  });

  app.post('/api/knowledge-base', async (req, res) => {
    try {
      const supabaseAdmin = getSupabaseAdmin();
      const { id, section, question, answer } = req.body;

      if (!question || !answer) {
        return res.status(400).json({ error: 'Pergunta e resposta são obrigatórias.' });
      }

      const isValidUuid = id && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id);
      const targetId = isValidUuid ? id : crypto.randomUUID();

      const record = {
        id: targetId,
        property_id: '11111111-1111-1111-1111-111111111111',
        section: section || 'Hospedagem',
        question,
        answer,
        updated_at: new Date().toISOString(),
      };

      const { data, error } = await supabaseAdmin
        .from('knowledge_base')
        .upsert(record, { onConflict: 'id' })
        .select();

      if (error) {
        console.error('Error upserting knowledge_base:', error);
        return res.status(500).json({ error: error.message });
      }

      const savedRow = data && data[0] ? data[0] : record;
      return res.json({
        success: true,
        item: {
          id: savedRow.id,
          section: savedRow.section,
          question: savedRow.question,
          answer: savedRow.answer,
          updatedAt: savedRow.updated_at,
        },
      });
    } catch (err: any) {
      console.error('Catch saving knowledge base item:', err);
      return res.status(500).json({ error: err.message });
    }
  });

  app.delete('/api/knowledge-base/:id', async (req, res) => {
    try {
      const supabaseAdmin = getSupabaseAdmin();
      const { id } = req.params;

      const { error } = await supabaseAdmin.from('knowledge_base').delete().eq('id', id);

      if (error) {
        console.error('Error deleting from knowledge_base:', error);
        return res.status(500).json({ error: error.message });
      }

      return res.json({ success: true, message: 'Item removido do Supabase' });
    } catch (err: any) {
      console.error('Catch deleting knowledge base item:', err);
      return res.status(500).json({ error: err.message });
    }
  });

  // --- CONCIERGE SETTINGS API ROUTES ---
  app.get('/api/concierge', async (req, res) => {
    try {
      const supabaseAdmin = getSupabaseAdmin();
      const { data, error } = await supabaseAdmin.from('concierge_settings').select('*').single();
      if (error) {
        return res.status(500).json({ error: error.message });
      }
      return res.json(data);
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  });

  app.post('/api/concierge', async (req, res) => {
    try {
      const supabaseAdmin = getSupabaseAdmin();
      const { enabled, name, welcome_message, tone } = req.body;

      const record = {
        property_id: '11111111-1111-1111-1111-111111111111',
        enabled: enabled ?? true,
        name: name || 'Concierge Villa do Poente',
        welcome_message: welcome_message || 'Olá! Seja bem-vindo!',
        tone: tone || 'Acolhedor',
      };

      const { data, error } = await supabaseAdmin
        .from('concierge_settings')
        .upsert(record, { onConflict: 'property_id' })
        .select();

      if (error) {
        return res.status(500).json({ error: error.message });
      }

      return res.json({ success: true, data });
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  });

  // API Route: Check Evolution API Connection Status
  app.get('/api/evolution/status', async (req, res) => {
    try {
      const { baseUrl, apiKey, instanceName } = getEvolutionConfig();
      const instance = (req.query.instance as string) || instanceName;

      const response = await fetch(`${baseUrl}/instance/connectionState/${instance}`, {
        method: 'GET',
        headers: {
          'apikey': apiKey,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        return res.status(response.status).json({
          connected: false,
          state: 'disconnected',
          instance,
          details: errorText,
        });
      }

      const data = await response.json();
      const state = data?.instance?.state || data?.state || 'disconnected';

      return res.json({
        connected: state === 'open' || state === 'CONNECTED',
        state,
        instance,
        provider: 'Evolution API',
      });
    } catch (err: any) {
      console.error('Error checking Evolution status:', err);
      return res.status(500).json({
        connected: false,
        error: err?.message || 'Falha ao comunicar com a Evolution API',
      });
    }
  });

  // API Route: Connect / Get QR Code
  app.get('/api/evolution/connect', async (req, res) => {
    try {
      const { baseUrl, apiKey, instanceName } = getEvolutionConfig();
      const instance = (req.query.instance as string) || instanceName;

      // Check current state first
      try {
        const statusRes = await fetch(`${baseUrl}/instance/connectionState/${instance}`, {
          method: 'GET',
          headers: { 'apikey': apiKey }
        });
        if (statusRes.ok) {
          const statusData = await statusRes.json();
          const currentState = statusData?.instance?.state || statusData?.state;
          if (currentState === 'open' || currentState === 'CONNECTED') {
            return res.json({
              success: true,
              connected: true,
              state: 'open',
              instance,
              message: 'Instância já está conectada ao WhatsApp',
              qrcode: null
            });
          }
        }
      } catch (stErr) {
        console.warn('Status check before connect error:', stErr);
      }

      let response = await fetch(`${baseUrl}/instance/connect/${instance}`, {
        method: 'GET',
        headers: {
          'apikey': apiKey,
          'Content-Type': 'application/json',
        },
      });

      // If instance 404, create instance first
      if (response.status === 404) {
        console.log(`Instance ${instance} not found on Evolution. Creating instance...`);
        await fetch(`${baseUrl}/instance/create`, {
          method: 'POST',
          headers: {
            'apikey': apiKey,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            instanceName: instance,
            qrcode: true,
            integration: 'WHATSAPP-BAILEYS',
          }),
        });

        // Retry connect
        response = await fetch(`${baseUrl}/instance/connect/${instance}`, {
          method: 'GET',
          headers: {
            'apikey': apiKey,
            'Content-Type': 'application/json',
          },
        });
      }

      const data = await response.json();
      const qrcode = data?.base64 || data?.code || data?.qrcode?.base64 || data?.qrcode || null;
      const pairingCode = data?.pairingCode || data?.qrcode?.pairingCode || null;

      return res.json({
        success: response.ok,
        connected: data?.instance?.state === 'open' || data?.state === 'open',
        state: data?.instance?.state || data?.state || 'connecting',
        instance,
        qrcode,
        pairingCode,
        raw: data,
      });
    } catch (err: any) {
      console.error('Error fetching QR Code from Evolution:', err);
      return res.status(500).json({
        success: false,
        error: err?.message || 'Erro ao solicitar QR Code',
      });
    }
  });

  // API Route: Disconnect / Logout
  app.post('/api/evolution/disconnect', async (req, res) => {
    try {
      const { baseUrl, apiKey, instanceName } = getEvolutionConfig();
      const instance = req.body?.instance || instanceName;

      const response = await fetch(`${baseUrl}/instance/logout/${instance}`, {
        method: 'DELETE',
        headers: {
          'apikey': apiKey,
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json().catch(() => ({}));

      return res.json({
        success: response.ok,
        message: 'Desconectado com sucesso',
        raw: data,
      });
    } catch (err: any) {
      console.error('Error disconnecting Evolution instance:', err);
      return res.status(500).json({
        success: false,
        error: err?.message || 'Erro ao desconectar instância',
      });
    }
  });

  // API Route: Send Test Message
  app.post('/api/evolution/send-test', async (req, res) => {
    try {
      const { baseUrl, apiKey, instanceName } = getEvolutionConfig();
      const { phone, message, instance } = req.body;

      if (!phone || !message) {
        return res.status(400).json({ error: 'Número de telefone e mensagem são obrigatórios.' });
      }

      const targetInstance = instance || instanceName;
      let cleanPhone = phone.replace(/\D/g, '');

      // Standardize Brazilian country code if missing
      if (cleanPhone.length === 10 || cleanPhone.length === 11) {
        cleanPhone = `55${cleanPhone}`;
      }

      const response = await fetch(`${baseUrl}/message/sendText/${targetInstance}`, {
        method: 'POST',
        headers: {
          'apikey': apiKey,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          number: cleanPhone,
          options: {
            delay: 1200,
            presence: 'composing',
          },
          textMessage: {
            text: message,
          },
          text: message,
        }),
      });

      const data = await response.json();

      return res.json({
        success: response.ok,
        data,
      });
    } catch (err: any) {
      console.error('Error sending test message via Evolution:', err);
      return res.status(500).json({
        success: false,
        error: err?.message || 'Erro ao enviar mensagem de teste',
      });
    }
  });

  // Vite Middleware or Static Serving
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
  return app;
}

const app = startServer();
export default app;
