import React from 'react';
import { portfolioData } from '../data.js';

export default function ProjectCard({ project, onClose }) {
  const projects = portfolioData.projects_zone;

  // If no specific project given, show all three
  const singleMode = !!project;
  const list = singleMode ? [project] : projects;

  return (
    <div className="modal-backdrop">
      <div
        className={`modal-content project-modal ${singleMode ? '' : 'project-modal--grid'}`}
      >
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2 className="section-heading">🎮 {singleMode ? list[0].title : 'My Projects'}</h2>

        {list.map(proj => (
          <div key={proj.id} className="proj-card">
            <h3>{proj.title}</h3>
            <p className="short-desc">{proj.short_description}</p>
            <p className="long-desc">{proj.long_description}</p>
            <div className="tech-stack">
              {proj.tech_stack.map(t => <span key={t} className="tech-badge">{t}</span>)}
            </div>
            <div className="project-links">
              <a href={proj.links.live} target="_blank" rel="noreferrer" className="btn-primary">View Live ↗</a>
              <a href={proj.links.repo} target="_blank" rel="noreferrer" className="btn-secondary">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
