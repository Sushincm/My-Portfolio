import React from 'react';
import { portfolioData } from '../data.js';

const { developer_info, cv_skills, currently_learning, projects_zone } = portfolioData;
const { name, title, bio, cv_approach, avatar_emoji, email, social_links, ai_tools } = developer_info;

export default function CVModal({ onClose }) {
  return (
    <div className="modal-backdrop cv-backdrop" onClick={onClose}>
      <div
        className="modal-content cv-modal"
        onClick={e => e.stopPropagation()}
      >
        {/* ── Top bar ── */}
        <div className="cv-topbar">
          <span className="cv-topbar-title">📄 CURRICULUM VITAE</span>
          <div className="cv-topbar-actions">
            <a
              href="/cv.html"
              target="_blank"
              rel="noreferrer"
              className="cv-action-btn cv-action-btn--open"
              title="Open full page"
            >
              ↗ OPEN
            </a>
            <button className="cv-action-btn cv-action-btn--close" onClick={onClose}>
              ✕
            </button>
          </div>
        </div>

        {/* ── Scrollable CV body ── */}
        <div className="cv-body">

          {/* HEADER */}
          <div className="cv-header">
            <div className="cv-avatar">{avatar_emoji}</div>
            <div className="cv-header-info">
              <h1 className="cv-name">{name}</h1>
              <p className="cv-subtitle">{title}</p>
              <div className="cv-contacts">
                <a href={`mailto:${email}`}>{email}</a>
                <a href={social_links.github}  target="_blank" rel="noreferrer">{social_links.github.replace('https://', '')}</a>
                <a href={social_links.linkedin} target="_blank" rel="noreferrer">{social_links.linkedin.replace('https://', '')}</a>
              </div>
            </div>
          </div>

          {/* ABOUT */}
          <section className="cv-section">
            <h2 className="cv-section-title">About</h2>
            <p className="cv-text">{bio}</p>
          </section>

          {/* TECHNICAL SKILLS */}
          <section className="cv-section">
            <h2 className="cv-section-title">Technical Skills</h2>
            <div className="cv-skills-grid">
              {cv_skills.map(skill => (
                <span
                  key={skill.name}
                  className={`cv-skill-tag${skill.category === 'ai' ? ' cv-skill-tag--ai' : ''}`}
                >
                  {skill.icon ? `${skill.icon} ` : ''}{skill.name}
                </span>
              ))}
            </div>
          </section>

          {/* PROJECTS */}
          <section className="cv-section">
            <h2 className="cv-section-title">Projects</h2>
            {projects_zone.map(proj => (
              <div key={proj.id} className="cv-entry">
                <div className="cv-entry-header">
                  <span className="cv-entry-title">{proj.title}</span>
                  <span className="cv-entry-date">{proj.date}</span>
                </div>
                <span className="cv-entry-sub">{proj.tech_stack.join(' · ')}</span>
                <ul className="cv-bullets">
                  {proj.cv_bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* CURRENTLY LEARNING */}
          <section className="cv-section">
            <h2 className="cv-section-title">Currently Learning</h2>
            <div className="cv-skills-grid">
              {currently_learning.map(item => (
                <span key={item} className="cv-skill-tag">{item}</span>
              ))}
            </div>
          </section>

          {/* DEVELOPMENT APPROACH */}
          <section className="cv-section">
            <h2 className="cv-section-title">Development Approach</h2>
            <p className="cv-text">{cv_approach}</p>
          </section>

        </div>{/* end cv-body */}

        {/* ── Bottom bar ── */}
        <div className="cv-footer">
          <a href="/cv.html" target="_blank" rel="noreferrer" className="cv-footer-btn cv-footer-btn--open">
            ↗ OPEN FULL PAGE
          </a>
          <button className="cv-footer-btn cv-footer-btn--close" onClick={onClose}>
            ✕ CLOSE
          </button>
        </div>

      </div>
    </div>
  );
}
