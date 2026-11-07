import React, { useState } from 'react';
import {
  PhoneCall,
  Phone,
  PhoneOff,
  Clock,
  Calendar,
  CheckCircle2,
  AlertCircle,
  MapPin,
  Building2,
  MessageSquare,
  Volume2
} from 'lucide-react';
import { UPCOMING_FOLLOW_UPS } from '../data/mockData';

const DISPOSITIONS = [
  { id: 'site_visit', label: 'Site Visit Booked', color: '#10B981' },
  { id: 'follow_up', label: 'Call Back Later', color: '#F59E0B' },
  { id: 'ringing', label: 'Ringing / No Answer', color: '#F97316' },
  { id: 'cold', label: 'Cold / Uninterested', color: '#06B6D4' },
  { id: 'not_interested', label: 'Not Interested / Drop', color: '#EF4444' }
];

export default function TelecallerView() {
  const [activeCall, setActiveCall] = useState(null);
  const [callDuration, setCallDuration] = useState(0);
  const [callNotes, setCallNotes] = useState('');
  const [selectedDisposition, setSelectedDisposition] = useState('');
  const [callHistory, setCallHistory] = useState([
    { id: 'ch-1', client: 'Meera Nair', duration: '3m 42s', outcome: 'Site Visit Booked', date: 'Today, 11:20 AM', notes: 'Interested in 2 BHK high floor. Scheduled Sunday 11 AM.' },
    { id: 'ch-2', client: 'Sanjay Khan', duration: '1m 15s', outcome: 'Call Back Later', date: 'Today, 10:45 AM', notes: 'In office meeting. Asked to call after 5 PM.' },
    { id: 'ch-3', client: 'Arti Shaikh', duration: '4m 05s', outcome: 'Quotation Shared', date: 'Today, 09:30 AM', notes: 'Sent brochure and cost sheet via WhatsApp.' }
  ]);

  const startCall = (client) => {
    setActiveCall(client);
    setCallDuration(1);
    setSelectedDisposition('');
    setCallNotes('');
  };

  const endCall = () => {
    if (!activeCall) return;
    const newLog = {
      id: `ch-${Date.now()}`,
      client: activeCall.client,
      duration: `${Math.floor(callDuration / 60)}m ${callDuration % 60}s`,
      outcome: selectedDisposition || 'Completed',
      date: 'Just now',
      notes: callNotes || 'Call completed successfully.'
    };
    setCallHistory([newLog, ...callHistory]);
    setActiveCall(null);
    setCallDuration(0);
  };

  return (
    <div className="view-container">
      {/* Active Dialer Banner (if in call) */}
      {activeCall && (
        <div className="active-call-card card border-emerald-500">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="pulse-call-ico">
                <PhoneCall size={20} className="text-emerald-500" />
              </span>
              <div>
                <h3 className="card__title">Connected with {activeCall.client}</h3>
                <p className="card__sub">{activeCall.phone} · In Progress</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="call-timer font-mono text-lg font-bold text-emerald-500">
                02:14
              </span>
              <button
                type="button"
                className="btn btn--danger"
                onClick={endCall}
              >
                <PhoneOff size={15} />
                <span>End Call</span>
              </button>
            </div>
          </div>

          <div className="active-call-body mt-4">
            <div className="disposition-selector mb-3">
              <span className="text-xs font-semibold text-muted block mb-2">SELECT CALL DISPOSITION</span>
              <div className="flex flex-wrap gap-2">
                {DISPOSITIONS.map((disp) => (
                  <button
                    key={disp.id}
                    type="button"
                    className={`disposition-btn ${selectedDisposition === disp.label ? 'is-active' : ''}`}
                    style={{ '--disp-color': disp.color }}
                    onClick={() => setSelectedDisposition(disp.label)}
                  >
                    {disp.label}
                  </button>
                ))}
              </div>
            </div>

            <textarea
              className="call-notes-textarea"
              placeholder="Type client feedback, requirements, preferred configuration or follow-up date..."
              rows={2}
              value={callNotes}
              onChange={(e) => setCallNotes(e.target.value)}
            />
          </div>
        </div>
      )}

      {/* Main Grid: Telecaller Queue on Left, Recent Logs on Right */}
      <div className="telecaller-grid">
        <div className="card telecaller-queue-card">
          <div className="card__head">
            <div>
              <h3 className="card__title">Scheduled Calling Queue</h3>
              <p className="card__sub">41 leads assigned for follow-up today</p>
            </div>
            <span className="section-badge">Telecaller Desk</span>
          </div>

          <div className="telecaller-list">
            {UPCOMING_FOLLOW_UPS.map((item) => (
              <div key={item.id} className="telecaller-row">
                <div className="telecaller-info">
                  <div className="flex items-center gap-2">
                    <h4 className="telecaller-name">{item.client}</h4>
                    <span className="source-chip">Hot Lead</span>
                  </div>
                  <p className="telecaller-meta">
                    <Calendar size={12} />
                    <span>{item.date}</span> · <span>{item.time}</span> · <b>{item.status}</b>
                  </p>
                </div>

                <div className="telecaller-actions">
                  <button
                    type="button"
                    className="btn btn--primary btn--sm"
                    onClick={() => startCall(item)}
                  >
                    <Phone size={14} />
                    <span>Dial Now</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call Logs & Stats Column */}
        <div className="telecaller-sidebar">
          {/* Daily Quota Card */}
          <div className="card quota-card">
            <h3 className="card__title">Today's Call Target</h3>
            <div className="quota-metric mt-3">
              <span className="quota-big">34</span>
              <span className="quota-sub">/ 50 calls completed</span>
            </div>
            <div className="progress-track mt-2">
              <div className="progress-fill bg-emerald-500" style={{ width: '68%' }} />
            </div>
            <div className="quota-stats-grid mt-4">
              <div>
                <b>6</b>
                <small>Visits Booked</small>
              </div>
              <div>
                <b>18</b>
                <small>Follow-ups</small>
              </div>
              <div>
                <b>10</b>
                <small>Ringing</small>
              </div>
            </div>
          </div>

          {/* Recent History */}
          <div className="card history-card">
            <div className="card__head">
              <h3 className="card__title">Completed Calls</h3>
              <Clock size={15} className="text-muted" />
            </div>

            <div className="history-list">
              {callHistory.map((log) => (
                <div key={log.id} className="history-item">
                  <div className="history-item__top">
                    <b>{log.client}</b>
                    <span className="text-xs text-muted">{log.date}</span>
                  </div>
                  <div className="history-item__mid">
                    <span className="history-pill">{log.outcome}</span>
                    <span className="text-xs text-muted">Duration: {log.duration}</span>
                  </div>
                  <p className="history-notes">{log.notes}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

