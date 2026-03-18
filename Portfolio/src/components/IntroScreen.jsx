import React from 'react';

export default function IntroScreen({ onPlay }) {
  return (
    <div className="intro-screen">
      <div className="intro-overlay"></div>
      <div className="intro-content">
        <h1 className="intro-title">Welcome to my Portfolio</h1>
        <p className="intro-subtitle">Play Mario to know about me</p>
        <button className="btn-play-now" onClick={onPlay}>
          PLAY NOW
        </button>
      </div>
    </div>
  );
}
