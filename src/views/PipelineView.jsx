import React, { useState } from 'react';
import {
  Search,
  Filter,
  Plus,
  MapPin,
  IndianRupee,
  Phone,
  Calendar,
  CheckCircle2,
  ChevronRight,
  User,
  Building2,
  ArrowRight
} from 'lucide-react';
import { PIPELINE_COLUMNS } from '../data/mockData';

export default function PipelineView({ onOpenAddLead }) {
  const [columns, setColumns] = useState(PIPELINE_COLUMNS);
  const [search, setSearch] = useState('');
  const [selectedDeal, setSelectedDeal] = useState(null);
  const [filterSource, setFilterSource] = useState('ALL');

  // Move deal to next stage
  const moveDeal = (dealId, currentColId, direction) => {
    const colIndex = columns.findIndex((c) => c.id === currentColId);
    const targetIndex = colIndex + direction;
    if (targetIndex < 0 || targetIndex >= columns.length) return;

    const sourceCol = columns[colIndex];
    const targetCol = columns[targetIndex];
    const deal = sourceCol.leads.find((l) => l.id === dealId);
    if (!deal) return;

    setColumns((prev) =>
      prev.map((c, idx) => {
        if (idx === colIndex) {
          return { ...c, count: c.count - 1, leads: c.leads.filter((l) => l.id !== dealId) };
        }
        if (idx === targetIndex) {
          return { ...c, count: c.count + 1, leads: [deal, ...c.leads] };
        }
        return c;
      })
    );
  };

  return (
    <div className="view-container">
      {/* Action Header */}
      <div className="view-header">
        <div className="view-header__left">
          <div className="search-field">
            <Search size={16} />
            <input
              type="text"
              placeholder="Search deals by client, BHK or location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="filter-pills">
            {['ALL', 'Housing.com', 'Meta Ads', 'Database'].map((src) => (
              <button
                key={src}
                type="button"
                className={`filter-pill ${filterSource === src ? 'is-active' : ''}`}
                onClick={() => setFilterSource(src)}
              >
                {src}
              </button>
            ))}
          </div>
        </div>

        <button className="btn btn--primary" type="button" onClick={onOpenAddLead}>
          <Plus size={16} />
          <span>Add Deal</span>
        </button>
      </div>

      {/* Kanban Board Container */}
      <div className="kanban-board-wrap">
        <div className="kanban-board">
          {columns.map((col) => {
            const filteredLeads = col.leads.filter((l) => {
              const matchesSearch =
                l.name.toLowerCase().includes(search.toLowerCase()) ||
                l.location.toLowerCase().includes(search.toLowerCase()) ||
                l.config.toLowerCase().includes(search.toLowerCase());
              const matchesSource = filterSource === 'ALL' || l.source === filterSource;
              return matchesSearch && matchesSource;
            });

            return (
              <div key={col.id} className="kanban-col">
                <div className="kanban-col__head" style={{ borderTop: `3px solid ${col.color}` }}>
                  <div className="kanban-col__title-row">
                    <span className="col-indicator" style={{ backgroundColor: col.color }} />
                    <h3 className="kanban-col__title">{col.title}</h3>
                  </div>
                  <span className="kanban-col__badge">{col.count}</span>
                </div>

                <div className="kanban-cards-stack">
                  {filteredLeads.map((deal) => (
                    <div
                      key={deal.id}
                      className="kanban-card card"
                      onClick={() => setSelectedDeal({ ...deal, colId: col.id })}
                    >
                      <div className="kanban-card__top">
                        <h4 className="deal-title">{deal.name}</h4>
                        <span className="deal-source-tag">{deal.source}</span>
                      </div>

                      <div className="deal-spec-pill">
                        <Building2 size={12} />
                        <span>{deal.config}</span>
                      </div>

                      <div className="deal-location-row">
                        <MapPin size={12} />
                        <span>{deal.location}</span>
                      </div>

                      <div className="kanban-card__foot">
                        <span className="deal-price">{deal.budget}</span>
                        <div className="deal-stage-controls" onClick={(e) => e.stopPropagation()}>
                          <button
                            type="button"
                            className="btn-arrow"
                            title="Move to Next Stage"
                            onClick={() => moveDeal(deal.id, col.id, 1)}
                          >
                            <ArrowRight size={13} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}

                  {filteredLeads.length === 0 && (
                    <div className="kanban-empty">No deals in this stage</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Deal Detail Modal */}
      {selectedDeal && (
        <div className="modal-backdrop" onClick={() => setSelectedDeal(null)}>
          <div className="deal-modal card" onClick={(e) => e.stopPropagation()}>
            <div className="card__head">
              <div>
                <h3 className="card__title">{selectedDeal.name}</h3>
                <p className="card__sub">
                  {selectedDeal.config} · {selectedDeal.location}
                </p>
              </div>
              <button
                type="button"
                className="btn btn--subtle"
                onClick={() => setSelectedDeal(null)}
              >
                Close
              </button>
            </div>

            <div className="deal-details-grid">
              <div className="detail-item">
                <span className="detail-label">Client Phone</span>
                <span className="detail-val flex items-center gap-2">
                  <Phone size={13} className="text-emerald-500" />
                  {selectedDeal.phone}
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Budget</span>
                <span className="detail-val text-primary font-bold">{selectedDeal.budget}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Lead Source</span>
                <span className="detail-val">{selectedDeal.source}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Last Interaction</span>
                <span className="detail-val">{selectedDeal.time}</span>
              </div>
            </div>

            <div className="modal-actions-row">
              <a href={`tel:${selectedDeal.phone}`} className="btn btn--primary flex-1">
                <Phone size={15} />
                <span>Call Client</span>
              </a>
              <button
                type="button"
                className="btn btn--secondary flex-1"
                onClick={() => {
                  moveDeal(selectedDeal.id, selectedDeal.colId, 1);
                  setSelectedDeal(null);
                }}
              >
                <span>Advance to Next Stage</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

