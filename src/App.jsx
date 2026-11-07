import React, { useState, useEffect, useCallback, useRef } from 'react';
import { gsap } from 'gsap';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import DashboardView from './views/DashboardView';
import PipelineView from './views/PipelineView';
import AssignLeadsView from './views/AssignLeadsView';
import TelecallerView from './views/TelecallerView';
import PlaceholderView from './views/PlaceholderView';

/* ——————————————————————————————————————————————————————
   Hash-based routing helper
   —————————————————————————————————————————————————————— */
function getRouteFromHash() {
  const hash = window.location.hash.replace('#/', '').split('?')[0];
  return hash || 'dashboard';
}

/* ——————————————————————————————————————————————————————
   View resolver
   —————————————————————————————————————————————————————— */
function ViewContent({ route, onNavigate, onOpenAddLead }) {
  switch (route) {
    case 'dashboard':
    case 'overview':
      return <DashboardView onNavigate={onNavigate} onOpenAddLead={onOpenAddLead} />;
    case 'pipeline':
      return <PipelineView />;
    case 'assign-leads':
      return <AssignLeadsView />;
    case 'telecaller':
      return <TelecallerView />;
    default:
      return <PlaceholderView route={route} onNavigate={onNavigate} />;
  }
}

/* ——————————————————————————————————————————————————————
   App shell
   —————————————————————————————————————————————————————— */
export default function App() {
  // ── state ──
  const [currentRoute, setCurrentRoute] = useState(getRouteFromHash);
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute('data-theme') || 'light'
  );
  const [isRail, setIsRail] = useState(
    () => document.documentElement.classList.contains('is-rail')
  );
  const [activeColorDot, setActiveColorDot] = useState('slate');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const mainRef = useRef(null);

  // ── hash change listener ──
  useEffect(() => {
    const handler = () => setCurrentRoute(getRouteFromHash());
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  // ── mark document ready (Selvar paint guard) ──
  useEffect(() => {
    document.documentElement.classList.add('is-ready');
    document.documentElement.classList.add('js');
  }, []);

  // ── GSAP entrance animation on route change ──
  useEffect(() => {
    if (mainRef.current) {
      gsap.fromTo(
        mainRef.current,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out', clearProps: 'all' }
      );
    }
  }, [currentRoute]);

  // ── navigation ──
  const navigate = useCallback((route) => {
    window.location.hash = `#/${route}`;
    setCurrentRoute(route);
    setShowMobileMenu(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // ── theme ──
  const handleToggleTheme = useCallback((mode) => {
    const next = mode || (theme === 'dark' ? 'light' : 'dark');
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('nexus-theme', next);
    setTheme(next);
  }, [theme]);

  // ── sidebar rail ──
  const handleToggleRail = useCallback(() => {
    const next = !isRail;
    if (next) {
      document.documentElement.classList.add('is-rail');
    } else {
      document.documentElement.classList.remove('is-rail');
    }
    localStorage.setItem('nexus-rail', String(next));
    setIsRail(next);
  }, [isRail]);

  // ── refresh animation ──
  const handleRefresh = useCallback(() => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1200);
  }, []);

  // ── add lead placeholder ──
  const handleOpenAddLead = useCallback(() => {
    alert('Add Lead modal — coming soon in the next sprint!');
  }, []);

  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar
        currentRoute={currentRoute}
        onNavigate={navigate}
        isRail={isRail}
        onToggleRail={handleToggleRail}
      />

      {/* Main content */}
      <div className="main">
        <TopBar
          currentRoute={currentRoute}
          theme={theme}
          onToggleTheme={handleToggleTheme}
          activeColorDot={activeColorDot}
          onSelectColorDot={setActiveColorDot}
          onOpenAddLead={handleOpenAddLead}
          onOpenSearch={() => {}}
          onToggleMobileMenu={() => setShowMobileMenu(!showMobileMenu)}
          onRefresh={handleRefresh}
          isRefreshing={isRefreshing}
          onToggleNotifications={() => {}}
          onSwitchRole={() => {}}
        />

        <div className="view" ref={mainRef}>
          <ViewContent
            route={currentRoute}
            onNavigate={navigate}
            onOpenAddLead={handleOpenAddLead}
          />
        </div>
      </div>
    </div>
  );
}

