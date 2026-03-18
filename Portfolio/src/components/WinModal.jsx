import React from 'react';

export default function WinModal({ onClose, onRestart }) {
  return (
    <div className="modal-backdrop">
      <div className="modal-content win-modal">

        {/* pixel confetti rows */}
        <div className="confetti-row">
          {['#ff0','#f0f','#0ff','#0f0','#f80','#f00','#88f'].map((c,i) => (
            <span key={i} className="confetti-dot" style={{ background: c, animationDelay: `${i * 0.1}s` }} />
          ))}
        </div>

        <h2 className="win-title">🏆 YOU WIN!</h2>
        <p className="win-sub">Thanks for playing my portfolio!</p>

        <div className="win-score">
          <span className="score-label">STAGE</span>
          <span className="score-val">1-1</span>
          <span className="score-label">CLEAR!</span>
        </div>

        <p className="win-msg">
          You've explored all my work — About Me, Projects, Skills &amp; Contact.
          Feel free to reach out anytime!
        </p>

        <div className="win-actions">
          <button
            className="btn-primary win-btn"
            onClick={onRestart}
          >
            ▶ PLAY AGAIN
          </button>
          <a
            href="mailto:sushinofficial@gmail.com"
            className="btn-secondary win-btn"
            target="_blank"
            rel="noreferrer"
          >
            ✉ HIRE ME
          </a>
        </div>

        <div className="confetti-row">
          {['#0f0','#ff0','#f0f','#0ff','#f80','#f00','#88f'].map((c,i) => (
            <span key={i} className="confetti-dot" style={{ background: c, animationDelay: `${i * 0.12 + 0.3}s` }} />
          ))}
        </div>
      </div>
    </div>
  );
}
