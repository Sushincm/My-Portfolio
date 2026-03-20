import { useEffect, useRef, useState } from 'react';
import kaboom from 'kaboom';
import { portfolioData } from './data.js';

export default function GameApp({ setModal, onCollectSkill, setEngineReady, restartRef }) {
  const containerRef    = useRef(null);
  const initialized     = useRef(false);
  const setModalRef     = useRef(setModal);
  const collectSkillRef = useRef(onCollectSkill);
  const inputRef        = useRef({ left: false, right: false, jump: false });
  const [ctrlVisible, setCtrlVisible] = useState(false);

  useEffect(() => { setModalRef.current    = setModal;       }, [setModal]);
  useEffect(() => { collectSkillRef.current = onCollectSkill; }, [onCollectSkill]);

  /* ── Touch button helpers (write to shared inputRef) ── */
  const btnDown = (key) => (e) => { e.preventDefault(); inputRef.current[key] = true; };
  const btnUp   = (key) => (e) => { e.preventDefault(); inputRef.current[key] = false; };
  const btnLeave= (key) => ()  => { inputRef.current[key] = false; };

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const input = inputRef.current;

    /* ── Canvas setup ── */
    const canvas = document.createElement('canvas');
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.tabIndex = 0;
    canvas.style.cssText = 'display:block;width:100%;height:100%;image-rendering:pixelated;outline:none;';
    containerRef.current.appendChild(canvas);

    const k = kaboom({ global: false, canvas, background: [92, 148, 252], pixelDensity: 1, maxFPS: 60 });
    setEngineReady(true);
    setCtrlVisible(true);

    const GRAVITY    = portfolioData.game_engine_config.gravity    || 1600;
    const JUMP_FORCE = portfolioData.game_engine_config.jump_force || 800;
    const SPEED      = 220;

    k.setGravity(GRAVITY);

    /* ── Sprites ── */
    const sprC = document.createElement('canvas');
    sprC.width = sprC.height = 16;
    const sc = sprC.getContext('2d');
    const R='#ff0000', B='#924900', S='#ffc0a0', Y='#f8d878', _= null;
    const MX=[
      [_,_,_,R,R,R,R,R,_,_,_,_,_,_,_,_],[_,_,R,R,R,R,R,R,R,R,R,R,_,_,_,_],
      [_,_,B,B,B,S,S,B,S,_,_,_,_,_,_,_],[_,B,S,B,S,S,S,B,S,S,S,_,_,_,_,_],
      [_,B,S,B,B,S,S,S,B,S,S,S,_,_,_,_],[_,B,B,S,S,S,S,B,B,B,B,_,_,_,_,_],
      [_,_,_,S,S,S,S,S,S,S,_,_,_,_,_,_],[_,_,B,B,R,B,B,B,_,_,_,_,_,_,_,_],
      [_,B,B,B,R,B,B,R,B,B,B,_,_,_,_,_],[B,B,B,B,R,R,R,R,B,B,B,B,_,_,_,_],
      [S,S,B,R,Y,R,R,Y,R,B,S,S,_,_,_,_],[S,S,S,R,R,R,R,R,R,S,S,S,_,_,_,_],
      [S,S,R,R,R,_,_,R,R,R,S,_,_,_,_,_],[_,_,B,B,_,_,_,_,B,B,_,_,_,_,_,_],
      [_,B,B,B,_,_,_,_,B,B,B,_,_,_,_,_],[B,B,B,_,_,_,_,_,_,B,B,B,_,_,_,_],
    ];
    MX.forEach((row,y) => row.forEach((c,x) => { if(c){ sc.fillStyle=c; sc.fillRect(x,y,1,1); } }));
    k.loadSprite('mario', sprC.toDataURL());

    const coinC = document.createElement('canvas');
    coinC.width = coinC.height = 8;
    const cc = coinC.getContext('2d');
    const C1='#f8d030', C2='#f0a000', C3='#ffeea0', CE='#ffffc8';
    const CM=[
      [_,_,C2,C1,C1,C2,_,_],[_,C2,C3,CE,C1,C1,C2,_],
      [C2,C3,CE,C1,C1,C1,C1,C2],[C2,CE,C1,C1,C1,C1,C1,C2],
      [C2,C1,C1,C1,C1,C1,C2,C2],[C2,C1,C1,C1,C1,C2,C2,_],
      [_,C2,C1,C1,C2,C2,_,_],[_,_,C2,C2,_,_,_,_],
    ];
    CM.forEach((row,y) => row.forEach((c,x) => { if(c){ cc.fillStyle=c; cc.fillRect(x,y,1,1); } }));
    k.loadSprite('coin', coinC.toDataURL());

    /* ── KEYBOARD: raw document-level listeners (bypasses Kaboom key API) ── */
    const onKeyDown = (e) => {
      const tag = document.activeElement?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;
      if (e.key === 'ArrowLeft'  || e.key === 'a' || e.key === 'A') { input.left  = true;  e.preventDefault(); }
      if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') { input.right = true;  e.preventDefault(); }
      if (e.key === 'ArrowUp'    || e.key === ' ' || e.key === 'w' || e.key === 'W') { input.jump = true; e.preventDefault(); }
    };
    const onKeyUp = (e) => {
      if (e.key === 'ArrowLeft'  || e.key === 'a' || e.key === 'A') input.left  = false;
      if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') input.right = false;
      if (e.key === 'ArrowUp'    || e.key === ' ' || e.key === 'w' || e.key === 'W') input.jump = false;
    };
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup',   onKeyUp);

    /* ── SCENE ── */
    k.scene('game', () => {
      const H  = k.height();
      const GY = H - 64;

      k.add([k.rect(k.width()*7, 200), k.pos(0,GY), k.color(k.rgb(196,100,12)), k.area(), k.body({isStatic:true}), k.outline(2,k.rgb(80,30,0))]);
      for(let gx=0; gx<k.width()*7; gx+=32) {
        k.add([k.rect(30,5), k.pos(gx+1,GY+8),  k.color(k.rgb(220,110,20))]);
        k.add([k.rect(30,5), k.pos(gx+1,GY+28), k.color(k.rgb(220,110,20))]);
      }

      const plat  = (x,y,w) => k.add([k.rect(w,22),k.pos(x,y),k.color(k.rgb(40,160,40)),k.area(),k.body({isStatic:true}),k.outline(2,k.rgb(20,90,20))]);
      const brick = (x,y)   => k.add([k.rect(32,24),k.pos(x,y),k.color(k.rgb(185,90,30)),k.area(),k.body({isStatic:true}),k.outline(2,k.rgb(100,40,10))]);
      const cloud = (x,y)   => {
        k.add([k.rect(60,20,{radius:6}),k.pos(x,  y+14),k.color(k.rgb(255,255,255))]);
        k.add([k.rect(40,24,{radius:6}),k.pos(x+8,y),   k.color(k.rgb(255,255,255))]);
        k.add([k.rect(30,20,{radius:6}),k.pos(x+36,y+8),k.color(k.rgb(255,255,255))]);
      };
      const pipe = (x,h) => {
        k.add([k.rect(48,h),k.pos(x,GY-h),k.color(k.rgb(0,168,0)),k.area(),k.body({isStatic:true}),k.outline(2,k.rgb(0,80,0))]);
        k.add([k.rect(56,20),k.pos(x-4,GY-h-16),k.color(k.rgb(0,188,0)),k.area(),k.body({isStatic:true}),k.outline(2,k.rgb(0,80,0))]);
      };
      const qblock = (x,y,onHit) => {
        const b = k.add([k.rect(32,32),k.pos(x,y),k.color(k.rgb(255,200,0)),k.area(),k.body({isStatic:true}),k.outline(3,k.rgb(0,0,0)),'qblock',{bumped:false,onHit}]);
        k.add([k.text('?',{size:20}),k.pos(x+8,y+6),k.color(k.rgb(255,255,255))]);
        return b;
      };
      const label = (x,y,txt,clr=k.rgb(255,255,150)) => {
        const W = txt.length*10.5+20, H2=30;
        k.add([k.rect(W+4,H2+4),k.pos(x-W/2-2,y-H2/2-2),k.color(k.rgb(255,180,0)),k.opacity(1)]);
        k.add([k.rect(W,H2),k.pos(x-W/2,y-H2/2),k.color(k.rgb(0,0,0)),k.opacity(1)]);
        k.add([k.text(txt,{size:15}),k.pos(x-W/2+10,y-H2/2+8),k.color(clr)]);
      };
      const pcoin = (x,y,_l,fn) => k.add([k.sprite('coin'),k.pos(x,y),k.scale(4),k.area({shape:new k.Rect(k.vec2(0),8,8)}),'pcoin',{action:fn}]);
      const scoin = (x,y,sid)   => k.add([k.sprite('coin'),k.pos(x,y),k.scale(2.5),k.area({shape:new k.Rect(k.vec2(0),8,8)}),'scoin',{sid}]);

      cloud(120,70); cloud(420,45); cloud(720,75); cloud(1050,55); cloud(1380,80); cloud(1700,50); cloud(2000,75);
      pipe(580,90); pipe(1120,120);

      plat(300,GY-110,110);
      qblock(430,GY-180,() => setModalRef.current({type:'ABOUT'}));
      pcoin(320,GY-160,'',() => setModalRef.current({type:'ABOUT'}));
      label(348,GY-195,'ABOUT ME');
      scoin(310,GY-240,'html'); scoin(360,GY-270,'css');

      plat(720,GY-130,80); plat(850,GY-170,80); plat(980,GY-130,80);
      const proj = portfolioData.projects_zone;
      qblock(730,GY-260,() => setModalRef.current({type:'PROJECT',data:proj[0]}));
      qblock(790,GY-260,() => setModalRef.current({type:'PROJECT',data:proj[1]}));
      qblock(850,GY-260,() => setModalRef.current({type:'PROJECT',data:proj[2]}));
      label(800,GY-297,'PROJECTS');
      brick(930,GY-260); brick(966,GY-260);
      scoin(778,GY-220,'js');

      plat(1240,GY-100,100); plat(1390,GY-160,100);
      pcoin(1270,GY-150,'',() => setModalRef.current({type:'ABOUT'}));
      label(1295,GY-185,'SKILLS');
      scoin(1420,GY-230,'react'); scoin(1460,GY-260,'node');

      plat(1580,GY-120,100);
      pcoin(1610,GY-175,'',() => setModalRef.current({type:'CONTACT'}));
      label(1645,GY-210,'CONTACT');

      const flagX = 1850;
      k.add([k.rect(6,200),k.pos(flagX,GY-200),k.color(k.rgb(220,220,220)),k.area(),k.body({isStatic:true})]);
      k.add([k.rect(28,20),k.pos(flagX-24,GY-204),k.color(k.rgb(0,200,60))]);
      pcoin(flagX-120,GY-100,'',() => { setModalRef.current({type:'CV'}); });
      label(flagX-90,GY-130,'DOWNLOAD CV');
      k.add([k.rect(80,GY),k.pos(flagX-20,0),k.color(k.rgb(0,0,0)),k.opacity(0),k.area(),'wintrigger']);

      const SPAWN_X = 80, SPAWN_Y = GY - 50;
      const player = k.add([k.sprite('mario'),k.pos(SPAWN_X,SPAWN_Y),k.scale(3),k.area({shape:new k.Rect(k.vec2(0),16,16)}),k.body(),'player']);

      const gX=40, gY=40, gW=340, gH=170;
      k.add([k.rect(gW+8,gH+8,{radius:6}),k.pos(gX-4,gY-4),k.color(k.rgb(255,180,0)),'guide']);
      const guideBg = k.add([k.rect(gW,gH,{radius:4}),k.pos(gX,gY),k.color(k.rgb(0,0,0)),'guide']);
      const guideLines = [
        k.add([k.text('HOW  TO  PLAY',       {size:14}),k.pos(gX+20,gY+14), k.color(k.rgb(255,215,0)),  'guide']),
        k.add([k.text('LEFT/RIGHT arrows',   {size:12}),k.pos(gX+16,gY+44), k.color(k.rgb(255,255,255)),'guide']),
        k.add([k.text('or  A / D   =  MOVE', {size:12}),k.pos(gX+16,gY+62), k.color(k.rgb(255,255,255)),'guide']),
        k.add([k.text('SPACE / UP  =  JUMP', {size:12}),k.pos(gX+16,gY+90), k.color(k.rgb(255,255,255)),'guide']),
        k.add([k.text('TOUCH COINS - EXPLORE',{size:12}),k.pos(gX+16,gY+118),k.color(k.rgb(130,255,170)),'guide']),
        k.add([k.text('HIT ? BLOCKS - PROJ', {size:12}),k.pos(gX+16,gY+140),k.color(k.rgb(255,215,0)),  'guide']),
      ];
      const arrow = k.add([k.text('▶',{size:22}),k.pos(SPAWN_X+56,SPAWN_Y-10),k.color(k.rgb(255,215,0)),'guide']);
      let aT=0; arrow.onUpdate(()=>{ aT+=k.dt()*4; arrow.pos.x=SPAWN_X+56+Math.sin(aT)*6; });
      let gTimer=0, gVis=true;
      k.onUpdate(()=>{
        if(!gVis) return; gTimer+=k.dt();
        if(gTimer>6){ const f=Math.max(0,1-(gTimer-6)); [...guideLines,arrow,guideBg].forEach(g=>{if(g)g.opacity=f;}); if(f<=0){gVis=false;k.get('guide').forEach(g=>k.destroy(g));} }
      });

      k.onUpdate(()=>{
        const dt = Math.min(k.dt(), 0.05); // cap dt to prevent huge jumps causing crashes/tunneling
        if(input.left)  { player.move(-SPEED,0); player.flipX = true;  }
        if(input.right) { player.move(SPEED,0);  player.flipX = false; }
        if(input.jump && player.isGrounded()){ player.jump(JUMP_FORCE); input.jump=false; }
        
        // mario character is left center: focus camera so player is at ~25% from left
        const camX = player.pos.x + (k.width() * 0.25);
        k.camPos(camX, H/2);
        
        if(player.pos.y>H+200) player.pos=k.vec2(SPAWN_X,SPAWN_Y);
      });

      const spawnCoinAnim = (pos) => {
        const fly = k.add([k.sprite('coin'), k.pos(pos.x, pos.y), k.scale(3), k.opacity(1), k.z(100)]);
        let ft = 0;
        fly.onUpdate(() => {
          ft += k.dt();
          fly.pos.y -= 140 * k.dt();
          fly.opacity = Math.max(0, 1 - ft * 1.4);
          if (fly.opacity <= 0) k.destroy(fly);
        });
      };

      player.onHeadbutt(obj=>{
        if(!obj.is('qblock')||obj.bumped) return;
        obj.bumped=true; obj.color=k.rgb(140,140,140);
        const oy=obj.pos.y; let t=0;
        const ev=obj.onUpdate(()=>{ t+=k.dt()*9; obj.pos.y=oy-Math.sin(t)*12; if(t>Math.PI){obj.pos.y=oy;ev.cancel();} });
        obj.onHit();
      });
      player.onCollide('pcoin', c=>{
        const pos = c.pos.clone();
        k.destroy(c);
        spawnCoinAnim(pos);
        collectSkillRef.current();
        c.action();
      });
      player.onCollide('scoin', s=>{
        const pos = s.pos.clone();
        k.destroy(s);
        spawnCoinAnim(pos);
        collectSkillRef.current();
      });
      player.onCollide('wintrigger', ()=>{ setModalRef.current({type:'WIN'}); });

      k.add([k.rect(310,22), k.pos(0,0), k.color(k.rgb(0,0,0)), k.opacity(0.55), k.fixed(), k.z(100)]);
      k.add([k.text('← → MOVE   SPACE JUMP',{size:11}), k.pos(8,5), k.color(k.rgb(255,255,255)), k.fixed(), k.z(101)]);
    });

    k.go('game');

    if (restartRef) {
      restartRef.current = () => { k.go('game'); };
    }

    /* ── RESIZE: keep canvas filling viewport, optimized for mobile url bars ── */
    let lastW = window.innerWidth, lastH = window.innerHeight;
    let resizeTimer;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const dW = Math.abs(window.innerWidth - lastW);
        const dH = Math.abs(window.innerHeight - lastH);
        // Only resize if width changes (rotation) or height changes > 150px
        if (dW > 0 || dH > 150) {
          canvas.width  = window.innerWidth;
          canvas.height = window.innerHeight;
          lastW = window.innerWidth; lastH = window.innerHeight;
        }
      }, 250);
    };
    window.addEventListener('resize', onResize);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('keyup',   onKeyUp);
      window.removeEventListener('resize', onResize);
      k.quit(); canvas.remove(); initialized.current = false;
      setCtrlVisible(false);
    };
  }, []);

  return (
    <>
      {/* Game canvas container */}
      <div ref={containerRef} style={{ position:'fixed', inset:0, zIndex:0, overflow:'hidden' }} />

      {/* ── Responsive touch / navigation controls ── */}
      {ctrlVisible && (
        <div className="game-controls" aria-label="Game navigation controls">
          {/* D-pad: left + right */}
          <div className="ctrl-dpad">
            <button
              id="ctrl-left"
              className="ctrl-btn ctrl-btn--arrow"
              aria-label="Move left"
              onPointerDown={btnDown('left')}
              onPointerUp={btnUp('left')}
              onPointerLeave={btnLeave('left')}
              onContextMenu={e => e.preventDefault()}
            >◀</button>
            <button
              id="ctrl-right"
              className="ctrl-btn ctrl-btn--arrow"
              aria-label="Move right"
              onPointerDown={btnDown('right')}
              onPointerUp={btnUp('right')}
              onPointerLeave={btnLeave('right')}
              onContextMenu={e => e.preventDefault()}
            >▶</button>
          </div>

          {/* Jump button */}
          <button
            id="ctrl-jump"
            className="ctrl-btn ctrl-btn--jump"
            aria-label="Jump"
            onPointerDown={btnDown('jump')}
            onPointerUp={btnUp('jump')}
            onPointerLeave={btnLeave('jump')}
            onContextMenu={e => e.preventDefault()}
          >JUMP</button>
        </div>
      )}
    </>
  );
}
