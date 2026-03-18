import { useState, useCallback, useEffect, useRef } from 'react';
import GameApp from './GameApp';
import HUD from './components/HUD';
import AboutModal from './components/AboutModal';
import ProjectCard from './components/ProjectCard';
import ContactForm from './components/ContactForm';
import WinModal from './components/WinModal';
import './index.css';

function App() {
  const [modal, setModal] = useState(null);
  const [coinCount, setCoinCount] = useState(0);
  const [engineReady, setEngineReady] = useState(false);
  const restartRef = useRef(null); // filled by GameApp via prop

  const handleCollectSkill = useCallback(() => {
    setCoinCount(prev => prev + 1);
  }, []);

  // Re-focus canvas after modal close so Kaboom gets keyboard events back
  const closeModal = useCallback(() => {
    setModal(null);
    setTimeout(() => {
      const canvas = document.querySelector('canvas');
      if (canvas) canvas.focus({ preventScroll: true });
    }, 50);
  }, []);

  // Re-focus also on any click outside a modal
  useEffect(() => {
    const refocus = () => {
      if (!document.querySelector('.modal-backdrop')) {
        document.querySelector('canvas')?.focus({ preventScroll: true });
      }
    };
    window.addEventListener('click', refocus);
    return () => window.removeEventListener('click', refocus);
  }, []);

  const projectData = modal?.type === 'PROJECT' ? modal.data : null;

  return (
    <div className="app-container">
      <GameApp
        setModal={setModal}
        onCollectSkill={handleCollectSkill}
        setEngineReady={setEngineReady}
        restartRef={restartRef}
      />

      {engineReady && <HUD coinCount={coinCount} />}

      {modal?.type === 'ABOUT'   && <AboutModal   onClose={closeModal} />}
      {modal?.type === 'PROJECT' && <ProjectCard  project={projectData} onClose={closeModal} />}
      {modal?.type === 'CONTACT' && <ContactForm  onClose={closeModal} />}
      {modal?.type === 'WIN' && <WinModal onClose={closeModal} onRestart={() => { restartRef.current?.(); setCoinCount(0); closeModal(); }} />}
    </div>
  );
}

export default App;
