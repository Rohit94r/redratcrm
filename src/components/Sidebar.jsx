import React from 'react';
import {
  LayoutDashboard,
  UserCheck,
  GitFork,
  UserPlus,
  PhoneCall,
  MapPin,
  FileText,
  Building2,
  Share2,
  Briefcase,
  Navigation,
  Users,
  Home,
  Ban,
  ChevronLeft,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

export const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, count: null },
  { id: 'my-dashboard', label: 'My Dashboard', icon: UserCheck, count: null },
  { id: 'pipeline', label: 'Lead Pipeline', icon: GitFork, count: 24 },
  { id: 'assign-leads', label: 'Assign Leads', icon: UserPlus, count: 24, badgeColor: '#EF4444' },
  { id: 'telecaller', label: 'Telecaller', icon: PhoneCall, count: 41, badgeColor: '#F59E0B' },
  { id: 'sales-executive', label: 'Sales Executive', icon: MapPin, count: 15 },
  { id: 'bookings', label: 'Bookings', icon: FileText, count: 6, badgeColor: '#10B981' },
  { id: 'loans', label: 'Loan Department', icon: Building2, count: 7 },
  { id: 'integrations', label: 'Integrations', icon: Share2, count: null },
  { id: 'broker', label: 'Broker Pool', icon: Briefcase, count: null },
  { id: 'tracking', label: 'Employee Tracking', icon: Navigation, count: null },
  { id: 'employees', label: 'Employees', icon: Users, count: 8 },
  { id: 'projects', label: 'Our Projects', icon: Home, count: 4 },
  { id: 'negative', label: 'Not Interested', icon: Ban, count: 10 }
];

export default function Sidebar({ currentRoute, onNavigate, isRail, onToggleRail, currentUser }) {
  return (
    <aside className={`side ${isRail ? 'side--rail' : 'side--panel'}`} aria-label="Sidebar">
      {/* Brand Header */}
      <div className="side__head">
        <a
          href="#/dashboard"
          className="side__brand"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('dashboard');
          }}
          aria-label="Nexus CRM - Real Estate CRM"
        >
          <span className="brand__mark nexus-badge">N</span>
          <span className="side__brand-text">
            <b>Nexus CRM</b>
            <small>Real Estate CRM</small>
          </span>
        </a>

        <button
          className="side__rail"
          type="button"
          onClick={onToggleRail}
          aria-label={isRail ? 'Expand sidebar' : 'Collapse sidebar'}
          title={isRail ? 'Expand sidebar [' : 'Collapse sidebar ['}
        >
          {isRail ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>

      {/* Navigation List */}
      <nav className="side__nav" aria-label="Main Navigation">
        <div className="side__group-label">WORKSPACE</div>
        <ul className="side__list">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = currentRoute === item.id || (currentRoute === 'overview' && item.id === 'dashboard');

            return (
              <li key={item.id}>
                <a
                  href={`#/${item.id}`}
                  className={`nav__item ${isActive ? 'is-active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(item.id);
                  }}
                  title={item.label}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className="nav__ico">
                    <Icon size={18} strokeWidth={2} />
                  </span>
                  <span className="nav__label">{item.label}</span>
                  {item.count != null && (
                    <span
                      className="nav__count"
                      style={item.badgeColor ? { backgroundColor: item.badgeColor, color: '#fff' } : {}}
                    >
                      {item.count}
                    </span>
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Profile Footer */}
      <div className="side__foot">
        <div className="side__me">
          <div className="side__avatar">
            <span>R</span>
          </div>
          <div className="side__me-text">
            <b>{currentUser?.name || 'Rajesh Sharma'}</b>
            <small>{currentUser?.role || 'Administrator'}</small>
          </div>
          <div className="side__me-badge" title="Verified Administrator">
            <ShieldCheck size={14} className="text-emerald-400" />
          </div>
        </div>
      </div>
    </aside>
  );
}

