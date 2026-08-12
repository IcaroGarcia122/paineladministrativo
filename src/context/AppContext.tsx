import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  ViewMode,
  PropertyInfo,
  Amenity,
  HouseRules,
  GalleryPhoto,
  LocalRecommendation,
  ConciergeSettings,
  KnowledgeItem,
  Automation,
  WhatsAppConnection,
  AnalyticsSummary,
  Stay,
  BlockedDate,
} from '../types';
import {
  initialProperty,
  initialAmenities,
  initialHouseRules,
  initialGallery,
  initialLocalRecommendations,
  initialConciergeSettings,
  initialKnowledgeBase,
  initialAutomations,
  initialWhatsAppStatus,
  initialStays,
  initialBlockedDates,
  initialAnalytics,
} from '../mockData';

interface Toast {
  id: string;
  type: 'success' | 'error' | 'info';
  message: string;
}

interface AppContextType {
  activeView: ViewMode;
  setActiveView: (view: ViewMode) => void;
  property: PropertyInfo;
  updateProperty: (data: Partial<PropertyInfo>) => void;
  amenities: Amenity[];
  toggleAmenity: (id: string) => void;
  houseRules: HouseRules;
  updateHouseRules: (data: Partial<HouseRules>) => void;
  gallery: GalleryPhoto[];
  addPhoto: (photo: Omit<GalleryPhoto, 'id' | 'order'>) => void;
  deletePhoto: (id: string) => void;
  setMainPhoto: (id: string) => void;
  recommendations: LocalRecommendation[];
  addRecommendation: (rec: Omit<LocalRecommendation, 'id'>) => void;
  deleteRecommendation: (id: string) => void;
  concierge: ConciergeSettings;
  updateConcierge: (data: Partial<ConciergeSettings>) => void;
  knowledgeBase: KnowledgeItem[];
  addKnowledgeItem: (item: Omit<KnowledgeItem, 'id' | 'updatedAt'>) => void;
  updateKnowledgeItem: (id: string, item: Partial<KnowledgeItem>) => void;
  deleteKnowledgeItem: (id: string) => void;
  automations: Automation[];
  updateAutomation: (id: string, data: Partial<Automation>) => void;
  whatsAppStatus: WhatsAppConnection;
  updateWhatsAppStatus: (data: Partial<WhatsAppConnection>) => void;
  stays: Stay[];
  addStay: (stay: Omit<Stay, 'id'>) => void;
  updateStay: (id: string, data: Partial<Stay>) => void;
  deleteStay: (id: string) => void;
  blockedDates: BlockedDate[];
  addBlockedDate: (blocked: Omit<BlockedDate, 'id'>) => void;
  deleteBlockedDate: (id: string) => void;
  analytics: AnalyticsSummary;
  isLandingModalOpen: boolean;
  setIsLandingModalOpen: (open: boolean) => void;
  toasts: Toast[];
  showToast: (message: string, type?: 'success' | 'error' | 'info') => void;
  removeToast: (id: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEY = 'villa_do_poente_saas_v3';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeView, setActiveView] = useState<ViewMode>('dashboard');
  const [isLandingModalOpen, setIsLandingModalOpen] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);

  // Local state with localStorage hydrater
  const [property, setProperty] = useState<PropertyInfo>(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY}_property`);
    return saved ? JSON.parse(saved) : initialProperty;
  });

  const [amenities, setAmenities] = useState<Amenity[]>(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY}_amenities`);
    return saved ? JSON.parse(saved) : initialAmenities;
  });

  const [houseRules, setHouseRules] = useState<HouseRules>(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY}_houserules`);
    return saved ? JSON.parse(saved) : initialHouseRules;
  });

  const [gallery, setGallery] = useState<GalleryPhoto[]>(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY}_gallery`);
    return saved ? JSON.parse(saved) : initialGallery;
  });

  const [recommendations, setRecommendations] = useState<LocalRecommendation[]>(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY}_recommendations`);
    return saved ? JSON.parse(saved) : initialLocalRecommendations;
  });

  const [concierge, setConcierge] = useState<ConciergeSettings>(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY}_concierge`);
    return saved ? JSON.parse(saved) : initialConciergeSettings;
  });

  const [knowledgeBase, setKnowledgeBase] = useState<KnowledgeItem[]>(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY}_knowledge`);
    return saved ? JSON.parse(saved) : initialKnowledgeBase;
  });

  const [automations, setAutomations] = useState<Automation[]>(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY}_automations`);
    return saved ? JSON.parse(saved) : initialAutomations;
  });

  const [whatsAppStatus, setWhatsAppStatus] = useState<WhatsAppConnection>(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY}_whatsapp`);
    return saved ? JSON.parse(saved) : initialWhatsAppStatus;
  });

  const [stays, setStays] = useState<Stay[]>(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY}_stays`);
    return saved ? JSON.parse(saved) : initialStays;
  });

  const [blockedDates, setBlockedDates] = useState<BlockedDate[]>(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY}_blockedDates`);
    return saved ? JSON.parse(saved) : initialBlockedDates;
  });

  const [analytics] = useState<AnalyticsSummary>(initialAnalytics);

  // Persistence effects
  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY}_property`, JSON.stringify(property));
  }, [property]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY}_amenities`, JSON.stringify(amenities));
  }, [amenities]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY}_houserules`, JSON.stringify(houseRules));
  }, [houseRules]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY}_gallery`, JSON.stringify(gallery));
  }, [gallery]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY}_recommendations`, JSON.stringify(recommendations));
  }, [recommendations]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY}_concierge`, JSON.stringify(concierge));
  }, [concierge]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY}_knowledge`, JSON.stringify(knowledgeBase));
  }, [knowledgeBase]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY}_automations`, JSON.stringify(automations));
  }, [automations]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY}_whatsapp`, JSON.stringify(whatsAppStatus));
  }, [whatsAppStatus]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY}_stays`, JSON.stringify(stays));
  }, [stays]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY}_blockedDates`, JSON.stringify(blockedDates));
  }, [blockedDates]);

  // Sync Knowledge Base, Concierge Settings, Stays, and Automations with Supabase on mount
  useEffect(() => {
    let isMounted = true;
    async function fetchFromSupabase() {
      try {
        const [kbRes, concRes, staysRes, autoRes] = await Promise.all([
          fetch('/api/knowledge-base'),
          fetch('/api/concierge'),
          fetch('/api/stays'),
          fetch('/api/automations'),
        ]);

        if (kbRes.ok) {
          const kbData = await kbRes.json();
          if (Array.isArray(kbData) && kbData.length > 0 && isMounted) {
            setKnowledgeBase(kbData);
          }
        }

        if (concRes.ok) {
          const concData = await concRes.json();
          if (concData && isMounted) {
            setConcierge((prev) => ({
              ...prev,
              name: concData.name || prev.name,
              welcomeMessage: concData.welcome_message || prev.welcomeMessage,
              enabled: concData.enabled ?? prev.enabled,
              tone: concData.tone || prev.tone,
            }));
          }
        }

        if (staysRes.ok) {
          const staysData = await staysRes.json();
          if (Array.isArray(staysData) && staysData.length > 0 && isMounted) {
            setStays(staysData);
          }
        }

        if (autoRes.ok) {
          const autoData = await autoRes.json();
          if (Array.isArray(autoData) && autoData.length > 0 && isMounted) {
            setAutomations(autoData);
          }
        }
      } catch (err) {
        console.warn('Initial Supabase sync fetch error:', err);
      }
    }
    fetchFromSupabase();
    return () => {
      isMounted = false;
    };
  }, []);

  // Toast notifier
  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, type, message }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Actions
  const updateProperty = (data: Partial<PropertyInfo>) => {
    setProperty((prev) => ({ ...prev, ...data }));
    showToast('Informações da hospedagem atualizadas');
  };

  const toggleAmenity = (id: string) => {
    setAmenities((prev) =>
      prev.map((item) => (item.id === id ? { ...item, enabled: !item.enabled } : item))
    );
  };

  const updateHouseRules = (data: Partial<HouseRules>) => {
    setHouseRules((prev) => ({ ...prev, ...data }));
    showToast('Regras da casa atualizadas');
  };

  const addPhoto = (photo: Omit<GalleryPhoto, 'id' | 'order'>) => {
    const newPhoto: GalleryPhoto = {
      ...photo,
      id: `photo-${Date.now()}`,
      order: gallery.length + 1,
    };
    setGallery((prev) => [newPhoto, ...prev]);
    showToast('Foto adicionada à galeria');
  };

  const deletePhoto = (id: string) => {
    setGallery((prev) => prev.filter((p) => p.id !== id));
    showToast('Foto removida', 'info');
  };

  const setMainPhoto = (id: string) => {
    setGallery((prev) =>
      prev.map((p) => ({
        ...p,
        isMain: p.id === id,
      }))
    );
    showToast('Foto definida como capa principal');
  };

  const addRecommendation = (rec: Omit<LocalRecommendation, 'id'>) => {
    const newRec: LocalRecommendation = {
      ...rec,
      id: `rec-${Date.now()}`,
    };
    setRecommendations((prev) => [newRec, ...prev]);
    showToast('Recomendação local adicionada');
  };

  const deleteRecommendation = (id: string) => {
    setRecommendations((prev) => prev.filter((r) => r.id !== id));
    showToast('Recomendação removida', 'info');
  };

  const updateConcierge = async (data: Partial<ConciergeSettings>) => {
    const updated = { ...concierge, ...data };
    setConcierge(updated);
    try {
      await fetch('/api/concierge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          enabled: updated.enabled,
          name: updated.name,
          welcome_message: updated.welcomeMessage,
          tone: updated.tone,
        }),
      });
    } catch (err) {
      console.error('Erro ao salvar concierge no Supabase:', err);
    }
    showToast('Configurações do Concierge IA salvas');
  };

  const addKnowledgeItem = async (item: Omit<KnowledgeItem, 'id' | 'updatedAt'>) => {
    try {
      const res = await fetch('/api/knowledge-base', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.item) {
          setKnowledgeBase((prev) => [data.item, ...prev]);
          showToast('Registrado no Supabase e base de conhecimento!');
          return;
        }
      }
    } catch (err) {
      console.error('Erro ao registrar no Supabase:', err);
    }

    // Fallback if network or server error occurs
    const newItem: KnowledgeItem = {
      ...item,
      id: `kb-${Date.now()}`,
      updatedAt: new Date().toISOString(),
    };
    setKnowledgeBase((prev) => [newItem, ...prev]);
    showToast('Item adicionado à base de conhecimento');
  };

  const deleteKnowledgeItem = async (id: string) => {
    try {
      await fetch(`/api/knowledge-base/${id}`, { method: 'DELETE' });
    } catch (err) {
      console.error('Erro ao deletar do Supabase:', err);
    }
    setKnowledgeBase((prev) => prev.filter((k) => k.id !== id));
    showToast('Item removido da base de conhecimento', 'info');
  };

  const updateKnowledgeItem = async (id: string, updatedFields: Partial<KnowledgeItem>) => {
    const existing = knowledgeBase.find((k) => k.id === id);
    if (!existing) return;

    const updatedItem = {
      ...existing,
      ...updatedFields,
      updatedAt: new Date().toISOString(),
    };

    try {
      const res = await fetch('/api/knowledge-base', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedItem),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.item) {
          setKnowledgeBase((prev) =>
            prev.map((k) => (k.id === id ? data.item : k))
          );
          showToast('Conhecimento atualizado e salvo no Supabase!');
          return;
        }
      }
    } catch (err) {
      console.error('Erro ao atualizar no Supabase:', err);
    }

    setKnowledgeBase((prev) =>
      prev.map((k) => (k.id === id ? updatedItem : k))
    );
    showToast('Conhecimento atualizado');
  };

  const updateAutomation = async (id: string, data: Partial<Automation>) => {
    const existing = automations.find((a) => a.id === id);
    if (existing) {
      const merged = { ...existing, ...data };
      try {
        const res = await fetch('/api/automations', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(merged),
        });
        if (res.ok) {
          const resData = await res.json();
          if (resData.item) {
            setAutomations((prev) =>
              prev.map((a) => (a.id === id ? resData.item : a))
            );
            showToast('Automação salva no Supabase!');
            return;
          }
        }
      } catch (err) {
        console.error('Erro ao atualizar automação no Supabase:', err);
      }
    }

    setAutomations((prev) =>
      prev.map((a) => (a.id === id ? { ...a, ...data } : a))
    );
    showToast('Automação atualizada');
  };

  const updateWhatsAppStatus = (data: Partial<WhatsAppConnection>) => {
    setWhatsAppStatus((prev) => ({ ...prev, ...data }));
  };

  const addStay = async (stayData: Omit<Stay, 'id'>) => {
    try {
      const res = await fetch('/api/stays', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(stayData),
      });
      if (res.ok) {
        const data = await res.json();
        if (data.item) {
          setStays((prev) => [data.item, ...prev]);
          showToast('Hóspede cadastrado e salvo no Supabase!');
          return;
        }
      }
    } catch (err) {
      console.error('Erro ao salvar estadia no Supabase:', err);
    }

    const newStay: Stay = {
      ...stayData,
      id: `stay-${Date.now()}`,
    };
    setStays((prev) => [newStay, ...prev]);
    showToast('Hóspede cadastrado com sucesso.');
  };

  const updateStay = async (id: string, updatedFields: Partial<Stay>) => {
    const existing = stays.find((s) => s.id === id);
    if (existing) {
      const merged = { ...existing, ...updatedFields };
      try {
        const res = await fetch('/api/stays', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(merged),
        });
        if (res.ok) {
          const data = await res.json();
          if (data.item) {
            setStays((prev) => prev.map((s) => (s.id === id ? data.item : s)));
            showToast('Estadia atualizada no Supabase!');
            return;
          }
        }
      } catch (err) {
        console.error('Erro ao atualizar estadia no Supabase:', err);
      }
    }

    setStays((prev) => prev.map((s) => (s.id === id ? { ...s, ...updatedFields } : s)));
    showToast('Dados da estadia atualizados');
  };

  const deleteStay = async (id: string) => {
    try {
      await fetch(`/api/stays/${id}`, { method: 'DELETE' });
    } catch (err) {
      console.error('Erro ao deletar estadia no Supabase:', err);
    }
    setStays((prev) => prev.filter((s) => s.id !== id));
    showToast('Estadia removida do Supabase', 'info');
  };

  const addBlockedDate = (blocked: Omit<BlockedDate, 'id'>) => {
    const newBlocked: BlockedDate = {
      ...blocked,
      id: `block-${Date.now()}`,
    };
    setBlockedDates((prev) => [...prev, newBlocked]);
    showToast('Período bloqueado com sucesso');
  };

  const deleteBlockedDate = (id: string) => {
    setBlockedDates((prev) => prev.filter((b) => b.id !== id));
    showToast('Bloqueio de data removido', 'info');
  };

  return (
    <AppContext.Provider
      value={{
        activeView,
        setActiveView,
        property,
        updateProperty,
        amenities,
        toggleAmenity,
        houseRules,
        updateHouseRules,
        gallery,
        addPhoto,
        deletePhoto,
        setMainPhoto,
        recommendations,
        addRecommendation,
        deleteRecommendation,
        concierge,
        updateConcierge,
        knowledgeBase,
        addKnowledgeItem,
        updateKnowledgeItem,
        deleteKnowledgeItem,
        automations,
        updateAutomation,
        whatsAppStatus,
        updateWhatsAppStatus,
        stays,
        addStay,
        updateStay,
        deleteStay,
        blockedDates,
        addBlockedDate,
        deleteBlockedDate,
        analytics,
        isLandingModalOpen,
        setIsLandingModalOpen,
        toasts,
        showToast,
        removeToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
