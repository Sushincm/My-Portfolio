import React from 'react';
import { portfolioData } from '../data.js';

export default function AboutModal({ onClose }) {
  const dev = portfolioData.developer_info;
  return (
    <div className="modal-backdrop">
      <div className="modal-content about-modal">
        <button className="close-btn" onClick={onClose}>&times;</button>

        <div className="about-header">
          <img src={dev.avatar_url} alt="Avatar" className="avatar" />
          <div>
            <h2>{dev.name}</h2>
            <p className="title-tag">{dev.title}</p>
          </div>
        </div>

        <p className="about-bio">{dev.bio}</p>

        {/* Skills */}
        <h3 className="section-label">⚡ Tech Stack</h3>
        <div className="skill-chips">
          {portfolioData.skills_zone.map(s => (
            <span key={s.id} className="skill-chip">
              <img src={s.icon_url} alt={s.name} />
              {s.name}
            </span>
          ))}
        </div>

        {/* AI Tools */}
        {dev.ai_tools && (
          <>
            <h3 className="section-label">🤖 AI-Powered Development</h3>
            <p style={{ fontSize: '0.78rem', color: '#aac', marginBottom: '8px', lineHeight: 1.6 }}>
              I combine my coding knowledge with AI tools to build faster, smarter, and ship higher-quality products.
            </p>
            <div className="skill-chips">
              {dev.ai_tools.map(t => (
                <span key={t.name} className="skill-chip ai-chip" title={t.desc}>
                  🤖 {t.name}
                </span>
              ))}
            </div>
          </>
        )}

        <div className="social-links">
          <a href={dev.social_links.github}   target="_blank" rel="noreferrer" className="btn-social">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.17c-3.34.72-4.04-1.6-4.04-1.6-.54-1.37-1.33-1.74-1.33-1.74-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.48 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.3-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
            GitHub
          </a>
          <a href={dev.social_links.linkedin} target="_blank" rel="noreferrer" className="btn-social btn-linkedin">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zm-15.1-12.88a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM3.58 20.45H7.14V9H3.58v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>
            LinkedIn
          </a>
          <a href="/cv.html" target="_blank" rel="noreferrer" className="btn-social" style={{background:'rgba(0,180,80,0.18)',borderColor:'#00c853'}}>
            📄 Download CV
          </a>
        </div>
      </div>
    </div>
  );
}
