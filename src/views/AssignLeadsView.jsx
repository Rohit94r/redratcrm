import React, { useState } from 'react';
import {
  UserPlus,
  Users,
  Search,
  CheckCircle,
  Building2,
  MapPin,
  Clock,
  Sparkles,
  RefreshCw,
  Phone
} from 'lucide-react';
import { EMPLOYEES_DATA } from '../data/mockData';

const UNASSIGNED_LEADS = [
  { id: 'ul-1', name: 'Rohan Deshmukh', phone: '+91 98201 55431', project: 'Lodha Woods', config: '2 BHK', budget: '₹1.50 Cr', location: 'Kandivali East', source: 'Housing.com', received: '10m ago' },
  { id: 'ul-2', name: 'Swati Khandelwal', phone: '+91 98192 66320', project: 'Godrej Horizon', config: '3 BHK', budget: '₹2.80 Cr', location: 'Wadala', source: 'Meta Ads', received: '24m ago' },
  { id: 'ul-3', name: 'Tanmay Saxena', phone: '+91 97690 11984', project: 'Oberoi Sky City', config: '3 BHK', budget: '₹3.40 Cr', location: 'Borivali East', source: 'Database', received: '45m ago' },
  { id: 'ul-4', name: 'Ankita Bhatt', phone: '+91 98212 88472', project: 'Rustomjee Crown', config: '4 BHK', budget: '₹7.20 Cr', location: 'Prabhadevi', source: 'Housing.com', received: '1h ago' },
  { id: 'ul-5', name: 'Kavita Chawla', phone: '+91 98334 22091', project: 'Lodha Woods', config: '2 BHK', budget: '₹1.65 Cr', location: 'Kandivali East', source: '99acres', received: '1h 30m ago' },
  { id: 'ul-6', name: 'Deepak Varma', phone: '+91 99205 33819', project: 'Godrej Horizon', config: '2 BHK', budget: '₹2.20 Cr', location: 'Wadala', source: 'Meta Ads', received: '2h ago' }
];

export default function AssignLeadsView() {
  const [leads, setLeads] = useState(UNASSIGNED_LEADS);
  const [selectedLeads, setSelectedLeads] = useState([]);
  const [roundRobin, setRoundRobin] = useState(true);
  const [assignedSuccess, setAssignedSuccess] = useState('');

  const telecallers = EMPLOYEES_DATA.filter((e) => e.role === 'TELECALLER' || e.role === 'SALES EXECUTIVE');

  const toggleSelect = (id) => {
    setSelectedLeads((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectAll = () => {
    if (selectedLeads.length === leads.length) {
      setSelectedLeads([]);
    } else {
      setSelectedLeads(leads.map((l) => l.id));
    }
  };

  const assignTo = (staffName) => {
    if (selectedLeads.length === 0) return;
    setAssignedSuccess(`Successfully assigned ${selectedLeads.length} lead(s) to ${staffName}`);
    setLeads((prev) => prev.filter((l) => !selectedLeads.includes(l.id)));
    setSelectedLeads([]);
    setTimeout(() => setAssignedSuccess(''), 4000);
  };

  return (
    <div className="view-container">
      {/* Top Banner / Controls */}
      <div className="assign-banner card">
        <div className="assign-banner__text">
          <h2 className="card__title">Lead Assignment Desk</h2>
          <p className="card__sub">
            {leads.length} unassigned portal leads waiting for distribution. Telecallers receive leads instantly.
          </p>
        </div>

        <div className="assign-banner__controls">
          <div className="round-robin-toggle" onClick={() => setRoundRobin(!roundRobin)}>
            <div className={`switch-pill ${roundRobin ? 'is-on' : ''}`}>
              <span className="switch-thumb" />
            </div>
            <span>Auto Round-Robin Distribution</span>
          </div>

          <button
            type="button"
            className="btn btn--secondary"
            onClick={() => setLeads(UNASSIGNED_LEADS)}
          >
            <RefreshCw size={14} />
            <span>Reset Demo Queue</span>
          </button>
        </div>
      </div>

      {assignedSuccess && (
        <div className="toast-success">
          <CheckCircle size={16} />
          <span>{assignedSuccess}</span>
        </div>
      )}

      {/* Grid Layout: Unassigned Table on Left, Staff Capacity on Right */}
      <div className="assign-grid">
        {/* Table of Leads */}
        <div className="card assign-table-card">
          <div className="card__head">
            <div className="flex items-center gap-3">
              <button
                type="button"
                className={`checkbox-custom ${selectedLeads.length === leads.length && leads.length > 0 ? 'is-checked' : ''}`}
                onClick={selectAll}
                title="Select all"
              >
                {selectedLeads.length === leads.length && leads.length > 0 && <CheckCircle size={14} />}
              </button>
              <h3 className="card__title">Unassigned Leads Queue ({leads.length})</h3>
            </div>

            {selectedLeads.length > 0 && (
              <span className="selected-badge">{selectedLeads.length} selected</span>
            )}
          </div>

          <div className="tablewrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th style={{ width: 36 }}></th>
                  <th>Client</th>
                  <th>Project & Config</th>
                  <th>Budget</th>
                  <th>Source</th>
                  <th>Received</th>
                  <th>Quick Action</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => {
                  const isChecked = selectedLeads.includes(lead.id);

                  return (
                    <tr key={lead.id} className={isChecked ? 'row-selected' : ''}>
                      <td>
                        <button
                          type="button"
                          className={`checkbox-custom ${isChecked ? 'is-checked' : ''}`}
                          onClick={() => toggleSelect(lead.id)}
                        >
                          {isChecked && <CheckCircle size={14} />}
                        </button>
                      </td>
                      <td>
                        <b>{lead.name}</b>
                        <small className="block text-muted">{lead.phone}</small>
                      </td>
                      <td>
                        <span>{lead.project}</span>
                        <small className="block text-muted">{lead.config} · {lead.location}</small>
                      </td>
                      <td>
                        <b className="text-primary">{lead.budget}</b>
                      </td>
                      <td>
                        <span className="source-chip">{lead.source}</span>
                      </td>
                      <td>
                        <small>{lead.received}</small>
                      </td>
                      <td>
                        <select
                          className="table-select"
                          onChange={(e) => {
                            if (e.target.value) {
                              assignTo(e.target.value);
                              e.target.value = '';
                            }
                          }}
                          defaultValue=""
                        >
                          <option value="" disabled>Assign to...</option>
                          {telecallers.map((t) => (
                            <option key={t.id} value={t.name}>{t.name} ({t.role})</option>
                          ))}
                        </select>
                      </td>
                    </tr>
                  );
                })}

                {leads.length === 0 && (
                  <tr>
                    <td colSpan={7} className="text-center py-8 text-muted">
                      All leads have been successfully assigned to staff!
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Staff Capacity Column */}
        <div className="card staff-capacity-card">
          <div className="card__head">
            <h3 className="card__title">Team Workload Capacity</h3>
            <span className="section-badge">{telecallers.length} Agents</span>
          </div>

          <div className="staff-capacity-list">
            {telecallers.map((staff) => (
              <div key={staff.id} className="staff-cap-item">
                <div className="staff-cap-top">
                  <div className="flex items-center gap-2">
                    <span className="emp-avatar emp-avatar--sm">{staff.avatar}</span>
                    <div>
                      <h4 className="staff-cap-name">{staff.name}</h4>
                      <small className="text-muted">{staff.role}</small>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="btn btn--subtle btn--sm"
                    disabled={selectedLeads.length === 0}
                    onClick={() => assignTo(staff.name)}
                  >
                    Assign {selectedLeads.length > 0 ? `(${selectedLeads.length})` : ''}
                  </button>
                </div>

                <div className="staff-cap-bar-wrap">
                  <div className="flex justify-between text-xs text-muted mb-1">
                    <span>Queue: {staff.totalLeads} / 60</span>
                    <span>{Math.round((staff.totalLeads / 60) * 100)}% load</span>
                  </div>
                  <div className="progress-track">
                    <div
                      className="progress-fill"
                      style={{
                        width: `${Math.min(100, (staff.totalLeads / 60) * 100)}%`,
                        backgroundColor: staff.totalLeads > 45 ? '#EF4444' : '#10B981'
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

