import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { ToastContainer } from './components/Toast';
import { DashboardView } from './components/views/DashboardView';
import { CalendarView } from './components/views/CalendarView';
import { GuestsView } from './components/views/GuestsView';
import { PropertyView } from './components/views/PropertyView';
import { GalleryView } from './components/views/GalleryView';
import { LocalGuideView } from './components/views/LocalGuideView';
import { ConciergeView } from './components/views/ConciergeView';
import { AutomationsView } from './components/views/AutomationsView';
import { AnalyticsView } from './components/views/AnalyticsView';
import { SettingsView } from './components/views/SettingsView';
import { GuestLandingPageModal } from './components/modals/GuestLandingPageModal';

const MainContent: React.FC = () => {
  const { activeView } = useApp();
  const [mobileOpen, setMobileOpen] = useState(false);

  const renderCurrentView = () => {
    switch (activeView) {
      case 'dashboard':
        return <DashboardView />;
      case 'calendar':
        return <CalendarView />;
      case 'guests':
        return <GuestsView />;
      case 'property':
        return <PropertyView />;
      case 'gallery':
        return <GalleryView />;
      case 'guide':
        return <LocalGuideView />;
      case 'concierge':
        return <ConciergeView />;
      case 'automations':
        return <AutomationsView />;
      case 'analytics':
        return <AnalyticsView />;
      case 'settings':
        return <SettingsView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50/70 text-zinc-900 font-sans antialiased flex flex-col">
      {/* Sidebar */}
      <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      {/* Main Content Area */}
      <div className="lg:pl-64 flex-1 flex flex-col min-w-0">
        <Header setMobileOpen={setMobileOpen} />

        <main className="flex-1 p-4 sm:p-8 max-w-7xl w-full mx-auto">
          {renderCurrentView()}
        </main>
      </div>

      {/* Modals & Toasts */}
      <GuestLandingPageModal />
      <ToastContainer />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
