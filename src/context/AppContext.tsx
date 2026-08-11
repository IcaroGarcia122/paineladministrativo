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

const STORAGE_KEY = 'villa_do_poente_saas_v1';

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

  const updateConcierge = (data: Partial<ConciergeSettings>) => {
    setConcierge((prev) => ({ ...prev, ...data }));
    showToast('Configurações do Concierge IA salvas');
  };

  const addKnowledgeItem = (item: Omit<KnowledgeItem, 'id' | 'updatedAt'>) => {
    const newItem: KnowledgeItem = {
      ...item,
      id: `kb-${Date.now()}`,
      updatedAt: new Date().toISOString().split('T')[0],
    };
    setKnowledgeBase((prev) => [newItem, ...prev]);
    showToast('Item adicionado à base de conhecimento');
  };

  const deleteKnowledgeItem = (id: string) => {
    setKnowledgeBase((prev) => prev.filter((k) => k.id !== id));
    showToast('Item removido da base de conhecimento', 'info');
  };

  const updateAutomation = (id: string, data: Partial<Automation>) => {
    setAutomations((prev) =>
      prev.map((a) => (a.id === id ? { ...a, ...data } : a))
    );
    showToast('Automação atualizada com sucesso');
  };

  const updateWhatsAppStatus = (data: Partial<WhatsAppConnection>) => {
    setWhatsAppStatus((prev) => ({ ...prev, ...data }));
  };

  const addStay = (stayData: Omit<Stay, 'id'>) => {
    const newStay: Stay = {
      ...stayData,
      id: `stay-${Date.now()}`,
    };
    setStays((prev) => [newStay, ...prev]);
    showToast('Hóspede cadastrado com sucesso.');
  };

  const updateStay = (id: string, data: Partial<Stay>) => {
    setStays((prev) => prev.map((s) => (s.id === id ? { ...s, ...data } : s)));
    showToast('Dados da estadia atualizados');
  };

  const deleteStay = (id: string) => {
    setStays((prev) => prev.filter((s) => s.id !== id));
    showToast('Estadia removida', 'info');
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
