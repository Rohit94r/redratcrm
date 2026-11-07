import React from 'react';
import {
  RotateCcw,
  Bell,
  CheckSquare,
  Trash2,
  Cloud,
  Download,
  Plus,
  User,
  ArrowRightLeft,
  Moon,
  Sun,
  Search,
  Menu
} from 'lucide-react';

const ROUTE_META = {
  dashboard: { title: 'Dashboard', sub: 'Pipeline, revenue and team performance snapshot' },
  overview: { title: 'Dashboard', sub: 'Pipeline, revenue and team performance snapshot' },
  'my-dashboard': { title: 'My Dashboard', sub: 'Personal targets, active calls and deal pipeline' },
  pipeline: { title: 'Lead Pipeline', sub: 'Stage-wise deal movement, bookings and closures' },
  'assign-leads': { title: 'Assign Leads', sub: 'Distribute incoming portal leads to telecallers and sales' },
  telecaller: { title: 'Telecaller Desk', sub: 'Call logs, customer dispositions and follow-up schedules' },
  'sales-executive': { title: 'Sales Executive', sub: 'Site visits, client meetings, quotes and token collections' },
  bookings: { title: 'Bookings Register', sub: 'Units sold, agreement value, booking deposits and commission' },
  loans: { title: 'Loan Department', sub: 'Home loan logins, bank sanctions, document tracking and disbursement' },
  integrations: { title: 'Integrations & Webhooks', sub: 'Housing.com, Meta Ads, 99acres, MagicBricks, WhatsApp & CTI' },
  broker: { title: 'Broker Pool', sub: 'Channel partner network, CP deal tagging and brokerage commission' },
  tracking: { title: 'Employee Tracking', sub: 'Live rep check-ins, field visits and attendance logs' },
  employees: { title: 'Employees Directory', sub: 'Staff profiles, sales quotas, monthly conversion and rankings' },
  projects: { title: 'Our Projects', sub: 'Inventory list, unit pricing, floor plans and brochure downloads' },
  negative: { title: 'Not Interested Leads', sub: 'Dropped leads archive, reason analytics and re-engagement' }
};

export default function TopBar({
  currentRoute,
  theme,
  onToggleTheme,
  activeColorDot,
  onSelectColorDot,
  onOpenAddLead,
  onOpenSearch,
  onToggleMobileMenu,
  onRefresh,
  isRefreshing,
  notificationCount = 4,
  onToggleNotifications,
  currentRole = 'Administrator',
  onSwitchRole
}) {
  const meta = ROUTE_META[currentRoute] || { title: 'Nexus CRM', sub: 'Real Estate Desk' };

  const PALETTE_DOTS = [
    { id: 'slate', color: '#1E293B', label: 'Classic Slate' },
    { id: 'teal', color: '#0D9488', label: 'Emerald Teal' },
    { id: 'mint', color: '#10B981', label: 'Mint Green' },
    { id: 'blue', color: '#2563EB', label: 'Cobalt Blue' },
    { id: 'purple', color: '#8B5CF6', label: 'Vibrant Purple' }
  ];

  return (
    <header className="top" role="banner">
      <div className="top__left">
        <button
          className="ibtn top__menu"
          type="button"
          onClick={onToggleMobileMenu}
          aria-label="Open mobile menu"
        >
          <Menu size={20} />
        </button>

        <div className="top__title-block">
          <h1 className="top__heading">{meta.title}</h1>
          <p className="top__subheading">{meta.sub}</p>
        </div>
      </div>

      <div className="top__actions">
        {/* Search Bar Button */}
        <button
          className="top__search-btn"
          type="button"
          onClick={onOpenSearch}
          title="Search deals, clients, staff (Cmd+K)"
        >
          <Search size={15} />
          <span>Search CRM...</span>
          <kbd>⌘K</kbd>
        </button>

        {/* Action icons row from reference */}
        <div className="top__icon-group">
          <button
            className={`top__action-btn ${isRefreshing ? 'is-spinning' : ''}`}
            type="button"
            onClick={onRefresh}
            title="Refresh snapshot"
          >
            <RotateCcw size={16} />
          </button>

          <button
            className="top__action-btn relative"
            type="button"
            onClick={onToggleNotifications}
            title={`${notificationCount} Notifications`}
          >
            <Bell size={16} />
            {notificationCount > 0 && (
              <span className="top__badge-dot">{notificationCount}</span>
            )}
          </button>

          <button className="top__action-btn" type="button" title="Tasks Checklist">
            <CheckSquare size={16} />
          </button>

          <button className="top__action-btn" type="button" title="Clear / Clean Cache">
            <Trash2 size={16} />
          </button>

          <button className="top__action-btn" type="button" title="Cloud Sync: Live">
            <Cloud size={16} className="text-sky-500" />
          </button>

          <button className="top__action-btn" type="button" title="Export Reports">
            <Download size={16} />
          </button>

          <button
            className="top__action-btn top__action-btn--primary"
            type="button"
            onClick={onOpenAddLead}
            title="Add New Lead"
          >
            <Plus size={16} />
          </button>
        </div>

        {/* Role pills */}
        <div className="top__pill-group">
          <button className="top__pill" type="button" title="User Persona Mode">
            <User size={14} />
            <span>Act as Self</span>
          </button>

          <button
            className="top__pill top__pill--role"
            type="button"
            onClick={onSwitchRole}
            title="Switch Workspace View"
          >
            <ArrowRightLeft size={13} />
            <span>{currentRole}</span>
          </button>
        </div>

        {/* Theme mode toggle */}
        <div className="top__theme-toggle">
          <button
            type="button"
            className={`theme-opt ${theme === 'dark' ? 'active' : ''}`}
            onClick={() => onToggleTheme('dark')}
          >
            <Moon size={13} />
            <span>Dark</span>
          </button>
          <button
            type="button"
            className={`theme-opt ${theme === 'light' ? 'active' : ''}`}
            onClick={() => onToggleTheme('light')}
          >
            <Sun size={13} />
            <span>White</span>
          </button>
        </div>

        {/* Color accent dots */}
        <div className="top__color-dots" title="Accent palette">
          {PALETTE_DOTS.map((dot) => (
            <button
              key={dot.id}
              type="button"
              className={`color-dot ${activeColorDot === dot.id ? 'is-selected' : ''}`}
              style={{ backgroundColor: dot.color }}
              onClick={() => onSelectColorDot(dot.id)}
              title={dot.label}
              aria-label={dot.label}
            />
          ))}
        </div>
      </div>
    </header>
  );
}

