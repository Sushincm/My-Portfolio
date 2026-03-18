import React from 'react';

export default function HUD({ coinCount = 0 }) {
  const display = String(coinCount).padStart(2, '0');
  return (
    <div className="hud-container">
      <span className="hud-coin-icon">🪙</span>
      <span className="hud-x">×</span>
      <span className="hud-coin-count">{display}</span>
    </div>
  );
}
