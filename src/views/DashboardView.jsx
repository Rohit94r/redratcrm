import React, { useState } from 'react';
import {
  Gauge,
  Banknote,
  Users,
  Zap,
  Inbox,
  AlertCircle,
  TrendingUp,
  Snowflake,
  PhoneCall,
  MinusCircle,
  MapPin,
  Calendar,
  FileText,
  Award,
  Folder,
  CheckCheck,
  BadgeDollarSign,
  Receipt,
  Wallet,
  Phone,
  ArrowRight,
  ChevronRight,
  Clock,
  Sparkles,
  Search,
  Plus
} from 'lucide-react';
import {
  INITIAL_LEADS_OVERVIEW,
  INITIAL_BOOKING_OVERVIEW,
  UPCOMING_FOLLOW_UPS,
  EMPLOYEES_DATA,
  PIPELINE_COLUMNS,
  MONTHLY_SOURCE_DATA
} from '../data/mockData';

const ICON_MAP = {
  Users,
  Zap,
  Inbox,
  AlertCircle,
  TrendingUp,
  Snowflake,
  PhoneCall,
  MinusCircle,
  MapPin,
  Calendar,
  FileText,
  Award,
  Folder,
  CheckCheck,
  BadgeDollarSign,
  Receipt,
  Wallet
};

export default function DashboardView({ onNavigate, onOpenAddLead }) {
  const [selectedKpi, setSelectedKpi] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Performance Score gauge calculation
  const scorePercent = 48;
  const radius = 64;
  const stroke = 12;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * Math.PI; // Semicircle
  const strokeDashoffset = circumference - (scorePercent / 100) * circumference;

  return (
    <div className="dash-view">
      {/* =========================================================================
          TOP ROW: PERFORMANCE SCORE & TOTAL BROKERAGE (Screenshot Match)
      ========================================================================= */}
      <div className="dash-top-grid">
        {/* Performance Score Card */}
        <div className="card performance-card">
          <div className="card__head">
            <div>
              <h2 className="card__title">Performance Score</h2>
              <p className="card__sub">Hot lead conversion health</p>
            </div>
            <span className="card__ico-badge text-sky-500">
              <Gauge size={20} />
            </span>
          </div>

          <div className="gauge-container">
            <div className="gauge-wrapper">
              <svg height="120" width="220" viewBox="0 0 160 90">
                {/* Background arc */}
                <path
                  d="M 16 80 A 64 64 0 0 1 144 80"
                  fill="none"
                  stroke="var(--line-2)"
                  strokeWidth="14"
                  strokeLinecap="round"
                />
                {/* Animated value arc */}
                <path
                  d="M 16 80 A 64 64 0 0 1 144 80"
                  fill="none"
                  stroke="#0284C7"
                  strokeWidth="14"
                  strokeLinecap="round"
                  strokeDasharray={`${circumference}`}
                  strokeDashoffset={`${strokeDashoffset}`}
                  className="gauge-arc-anim"
                />
              </svg>
              <div className="gauge-value">
                <span className="gauge-number">{scorePercent}%</span>
                <span className="gauge-label">score</span>
              </div>
            </div>

            <div className="gauge-legend">
              <div className="legend-item">
                <span className="legend-dot bg-rose-500" />
                <span className="legend-text"><b>61</b> Hot</span>
              </div>
              <div className="legend-item">
                <span className="legend-dot bg-blue-500" />
                <span className="legend-text"><b>24</b> Cold</span>
              </div>
            </div>
          </div>
        </div>

        {/* Total Brokerage Card */}
        <div className="card brokerage-card">
          <div className="card__head">
            <div>
              <h2 className="card__title">Total Brokerage</h2>
              <p className="card__sub">Sum of brokerage entered on all bookings</p>
            </div>
            <span className="card__ico-badge text-amber-500">
              <Banknote size={20} />
            </span>
          </div>

          <div className="brokerage-body">
            <div className="brokerage-primary">
              <span className="brokerage-amount">₹11.90 L</span>
            </div>

            <div className="brokerage-split">
              <div className="split-item text-emerald-600 dark:text-emerald-400">
                <span className="split-dot bg-emerald-500" />
                <div>
                  <span className="split-val">₹4.10 L</span>
                  <span className="split-lbl">Received</span>
                </div>
              </div>

              <div className="split-item text-amber-600 dark:text-amber-400">
                <span className="split-dot bg-amber-500" />
                <div>
                  <span className="split-val">₹7.80 L</span>
                  <span className="split-lbl">Pending</span>
                </div>
              </div>
            </div>

            <div className="brokerage-counts">
              <span className="count-pill">
                <span className="pill-dot bg-amber-500" />
                <b>6</b> Bookings
              </span>
              <span className="count-pill">
                <span className="pill-dot bg-emerald-500" />
                <b>3</b> Confirmed
              </span>
              <span className="count-pill">
                <span className="pill-dot bg-purple-500" />
                <b>2</b> Disbursed Loans
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          LEAD OVERVIEW (10 Interactive KPI Cards)
      ========================================================================= */}
      <section className="dash-section">
        <div className="section-header">
          <h3 className="section-title">LEAD OVERVIEW</h3>
          <span className="section-badge">128 Total Live Leads</span>
        </div>

        <div className="kpi-grid">
          {INITIAL_LEADS_OVERVIEW.map((kpi) => {
            const Icon = ICON_MAP[kpi.icon] || Users;
            const isSelected = selectedKpi === kpi.id;

            return (
              <div
                key={kpi.id}
                className={`kpi-card ${isSelected ? 'is-selected' : ''}`}
                onClick={() => setSelectedKpi(isSelected ? null : kpi.id)}
                style={{ '--accent-color': kpi.color }}
              >
                <div className="kpi-card__top">
                  <span className="kpi-card__ico" style={{ backgroundColor: kpi.bg, color: kpi.color }}>
                    <Icon size={18} />
                  </span>
                  <span className="kpi-card__label">{kpi.label}</span>
                </div>
                <div className="kpi-card__body">
                  <span className="kpi-card__count">{kpi.count}</span>
                  <p className="kpi-card__sub" title={kpi.sub}>{kpi.sub}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          BOOKING OVERVIEW (7 Interactive KPI Cards)
      ========================================================================= */}
      <section className="dash-section">
        <div className="section-header">
          <h3 className="section-title">BOOKING OVERVIEW</h3>
          <span className="section-badge">6 Active Bookings</span>
        </div>

        <div className="kpi-grid kpi-grid--booking">
          {INITIAL_BOOKING_OVERVIEW.map((kpi) => {
            const Icon = ICON_MAP[kpi.icon] || FileText;
            const isSelected = selectedKpi === kpi.id;

            return (
              <div
                key={kpi.id}
                className={`kpi-card ${isSelected ? 'is-selected' : ''}`}
                onClick={() => onNavigate('bookings')}
                style={{ '--accent-color': kpi.color }}
              >
                <div className="kpi-card__top">
                  <span className="kpi-card__ico" style={{ backgroundColor: kpi.bg, color: kpi.color }}>
                    <Icon size={18} />
                  </span>
                  <span className="kpi-card__label">{kpi.label}</span>
                </div>
                <div className="kpi-card__body">
                  <span className="kpi-card__count">{kpi.count}</span>
                  <p className="kpi-card__sub" title={kpi.sub}>{kpi.sub}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          MIDDLE ROW: UPCOMING FOLLOW UPS & ASSIGN LEADS SNAPSHOT
      ========================================================================= */}
      <div className="dash-mid-grid">
        {/* Upcoming Follow Ups */}
        <div className="card followups-card">
          <div className="card__head">
            <div>
              <h3 className="card__title">Upcoming Follow Ups</h3>
              <p className="card__sub">41 pending · 41 scheduled · tap for full list</p>
            </div>
            <button
              className="btn btn--subtle"
              type="button"
              onClick={() => onNavigate('telecaller')}
            >
              <span>View All</span>
              <ChevronRight size={14} />
            </button>
          </div>

          <div className="followups-list">
            {UPCOMING_FOLLOW_UPS.slice(0, 5).map((item) => (
              <div key={item.id} className="followup-row">
                <div className="followup-left">
                  <div className="followup-date-badge">
                    <Calendar size={13} />
                    <span>{item.date}</span>
                  </div>
                  <div>
                    <h4 className="followup-client">{item.client}</h4>
                    <p className="followup-meta">
                      <span>{item.agent}</span> · <span className="text-muted">{item.time}</span>
                    </p>
                  </div>
                </div>

                <div className="followup-actions">
                  <span className="stage-pill">{item.status}</span>
                  <a
                    href={`tel:${item.phone}`}
                    className="call-btn"
                    title={`Call ${item.client}`}
                  >
                    <Phone size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="followups-foot">
            <button
              type="button"
              className="btn btn--subtle w-full text-center"
              onClick={() => onNavigate('telecaller')}
            >
              +36 more follow-ups pending in queue
            </button>
          </div>
        </div>

        {/* Assign Leads Quick Panel */}
        <div className="card assign-snapshot-card">
          <div className="card__head">
            <div>
              <h3 className="card__title">Assign Leads</h3>
              <p className="card__sub">Team assignment snapshot · 24 unassigned waiting</p>
            </div>
            <button
              className="btn btn--primary"
              type="button"
              onClick={() => onNavigate('assign-leads')}
            >
              <span>Open Assign Leads</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="assign-team-list">
            {EMPLOYEES_DATA.slice(1, 6).map((emp) => (
              <div key={emp.id} className="assign-team-item">
                <div className="assign-team-profile">
                  <span className="emp-avatar">{emp.avatar}</span>
                  <div>
                    <h4 className="emp-name">{emp.name}</h4>
                    <span className="emp-role-tag">{emp.role}</span>
                  </div>
                </div>

                <div className="assign-stats">
                  <span className="queue-badge" title="Active Queue">
                    <b>{emp.totalLeads}</b> queue
                  </span>
                  <span className="followup-badge" title="Pending Follow-ups">
                    <b>{emp.metrics.followUp || 0}</b> follow-up
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="assign-snapshot-foot">
            <p>24 fresh leads waiting — assign one-by-one or auto round-robin</p>
          </div>
        </div>
      </div>

      {/* =========================================================================
          EMPLOYEE PERFORMANCE CARDS (Full Team Grid)
      ========================================================================= */}
      <section className="dash-section">
        <div className="section-header">
          <div>
            <h3 className="section-title">Employee Performance</h3>
            <p className="section-sub">Telecaller = lead workflow · Booking = 6 pipeline tasks</p>
          </div>
          <span className="section-badge">{EMPLOYEES_DATA.length} Active Staff</span>
        </div>

        <div className="emp-grid">
          {EMPLOYEES_DATA.map((emp) => (
            <div key={emp.id} className="emp-card card">
              <div className="emp-card__head">
                <div className="emp-card__info">
                  <span className="emp-avatar">{emp.avatar}</span>
                  <div>
                    <div className="emp-name-row">
                      <h4 className="emp-card__name">{emp.name}</h4>
                      <span className="emp-rank">{emp.rank}</span>
                    </div>
                    <span className="emp-role-pill">{emp.role}</span>
                  </div>
                </div>

                <div className="emp-card__summary">
                  <span className="emp-total-num">{emp.totalLeads}</span>
                  <span className="emp-total-lbl">TOTAL LEADS</span>
                </div>
              </div>

              <div className="emp-active-time">
                <Clock size={12} />
                <span>Last active: {emp.lastActive}</span>
              </div>

              {/* Status matrix boxes */}
              {!emp.isBooking ? (
                <div className="emp-matrix">
                  <div className="matrix-box">
                    <span className="matrix-lbl">MISSED</span>
                    <span className="matrix-val text-rose-500">{emp.metrics.missed}</span>
                  </div>
                  <div className="matrix-box">
                    <span className="matrix-lbl">HOT</span>
                    <span className="matrix-val text-emerald-500">{emp.metrics.hot}</span>
                  </div>
                  <div className="matrix-box">
                    <span className="matrix-lbl">COLD</span>
                    <span className="matrix-val text-sky-500">{emp.metrics.cold}</span>
                  </div>
                  <div className="matrix-box">
                    <span className="matrix-lbl">VISITED</span>
                    <span className="matrix-val text-teal-500">{emp.metrics.visited}</span>
                  </div>
                  <div className="matrix-box">
                    <span className="matrix-lbl">FOLLOW UP</span>
                    <span className="matrix-val text-amber-500">{emp.metrics.followUp}</span>
                  </div>
                  <div className="matrix-box">
                    <span className="matrix-lbl">TODAY ACTIVITY</span>
                    <span className="matrix-val text-purple-500">{emp.metrics.todayActivity}</span>
                  </div>
                </div>
              ) : (
                <div className="emp-matrix">
                  <div className="matrix-box">
                    <span className="matrix-lbl">LOGIN FILE</span>
                    <span className="matrix-val text-blue-500">{emp.metrics.loginFile}</span>
                  </div>
                  <div className="matrix-box">
                    <span className="matrix-lbl">SANCTIONED</span>
                    <span className="matrix-val text-emerald-500">{emp.metrics.sanctioned}</span>
                  </div>
                  <div className="matrix-box">
                    <span className="matrix-lbl">REGISTRATION</span>
                    <span className="matrix-val text-cyan-500">{emp.metrics.registration}</span>
                  </div>
                  <div className="matrix-box">
                    <span className="matrix-lbl">DISBURSEMENT</span>
                    <span className="matrix-val text-emerald-600">{emp.metrics.disbursement}</span>
                  </div>
                  <div className="matrix-box">
                    <span className="matrix-lbl">BILL SUBMITTED</span>
                    <span className="matrix-val text-amber-600">{emp.metrics.billSubmitted}</span>
                  </div>
                  <div className="matrix-box">
                    <span className="matrix-lbl">AMT RECEIVED</span>
                    <span className="matrix-val text-teal-600">{emp.metrics.amtReceived}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          PIPELINE BOARD PREVIEW (Real Estate Stages & Deals)
      ========================================================================= */}
      <section className="dash-section">
        <div className="section-header">
          <div>
            <h3 className="section-title">Lead Pipeline</h3>
            <p className="section-sub">Stage-wise leads with quick open actions</p>
          </div>
          <button
            className="btn btn--primary"
            type="button"
            onClick={() => onNavigate('pipeline')}
          >
            <span>Open Kanban Board</span>
            <ArrowRight size={14} />
          </button>
        </div>

        <div className="pipeline-scroll-container">
          <div className="pipeline-columns-strip">
            {PIPELINE_COLUMNS.map((col) => (
              <div key={col.id} className="pipeline-col-card">
                <div className="col-header" style={{ borderTopColor: col.color }}>
                  <div className="col-title-group">
                    <span className="col-dot" style={{ backgroundColor: col.color }} />
                    <h4 className="col-title">{col.title}</h4>
                  </div>
                  <span className="col-count">{col.count}</span>
                </div>

                <div className="col-leads-list">
                  {col.leads.map((deal) => (
                    <div
                      key={deal.id}
                      className="deal-item-card"
                      onClick={() => onNavigate('pipeline')}
                    >
                      <h5 className="deal-client-name">{deal.name}</h5>
                      <span className="deal-config-tag">{deal.config}</span>
                      <div className="deal-footer">
                        <span className="deal-location">
                          <MapPin size={11} />
                          {deal.location}
                        </span>
                        <span className="deal-budget">{deal.budget}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          LEADS BY SOURCE (12-Month Stacked Bar Chart)
      ========================================================================= */}
      <section className="dash-section">
        <div className="card source-chart-card">
          <div className="card__head">
            <div>
              <h3 className="card__title">Leads by Source</h3>
              <p className="card__sub">
                Size, by platform — last 12 months (Housing.com · Meta · Database)
              </p>
            </div>
            <div className="chart-legend">
              <span className="chart-legend-item">
                <span className="legend-chip bg-[#1B3A5C]" /> Housing.com
              </span>
              <span className="chart-legend-item">
                <span className="legend-chip bg-[#2563EB]" /> Meta (Facebook)
              </span>
              <span className="chart-legend-item">
                <span className="legend-chip bg-[#93C5FD]" /> Database
              </span>
            </div>
          </div>

          <div className="chart-bars-wrap">
            <div className="chart-bars-grid">
              {MONTHLY_SOURCE_DATA.map((item, idx) => {
                const maxVal = 20; // scale reference
                const hHeight = (item.housing / maxVal) * 160;
                const mHeight = (item.meta / maxVal) * 160;
                const dHeight = (item.database / maxVal) * 160;

                return (
                  <div key={idx} className="chart-col">
                    <span className="chart-total-label">{item.total}</span>
                    <div className="stacked-bar">
                      <div
                        className="bar-seg bg-[#1B3A5C]"
                        style={{ height: `${hHeight}px` }}
                        title={`${item.month} · Housing.com: ${item.housing}`}
                      />
                      <div
                        className="bar-seg bg-[#2563EB]"
                        style={{ height: `${mHeight}px` }}
                        title={`${item.month} · Meta: ${item.meta}`}
                      />
                      <div
                        className="bar-seg bg-[#93C5FD]"
                        style={{ height: `${dHeight}px` }}
                        title={`${item.month} · Database: ${item.database}`}
                      />
                    </div>
                    <span className="chart-month-lbl">{item.month}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

