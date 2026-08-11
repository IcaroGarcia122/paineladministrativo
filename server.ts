import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Configuration for Evolution API
  const getEvolutionConfig = () => {
    const baseUrl = (process.env.EVOLUTION_API_URL || 'https://n8n-evolution-api.iqfos1.easypanel.host').replace(/\/$/, '');
    const apiKey = process.env.EVOLUTION_API_KEY || 'ASDAFAWDASFSEFSDFDFSDFSFESFSDFSEFSEFS';
    const instanceName = process.env.EVOLUTION_INSTANCE_NAME || 'teste1';
    return { baseUrl, apiKey, instanceName };
  };

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

      const response = await fetch(`${baseUrl}/instance/connect/${instance}`, {
        method: 'GET',
        headers: {
          'apikey': apiKey,
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      return res.json({
        success: response.ok,
        instance,
        qrcode: data?.code || data?.base64 || data?.qrcode?.base64 || data?.qrcode || null,
        pairingCode: data?.pairingCode || null,
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
      const cleanPhone = phone.replace(/\D/g, '');

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
