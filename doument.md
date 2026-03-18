Product Requirements Document: Gamified 2D Developer Portfolio
1. Product Vision & Goals
Objective: Create a highly interactive, 2D side-scrolling browser game that serves as a professional developer portfolio.

Target Audience: Recruiters, hiring managers, and fellow developers.

Core Philosophy: The game must be intuitive and frictionless. If the user doesn't want to play, the UI should still allow them to access standard portfolio information (fail-safe navigation).

2. Technical Architecture & Stack
Core Framework: Vite + React (ensures a lightning-fast Single Page Application with optimized asset bundling).

Game Engine: Kaboom.js (rendered on an HTML5 <canvas>).

UI/Styling: Standard HTML and vanilla CSS for rendering sleek, modern modals that contrast with the retro game aesthetics.

AI Assistance: Antigravity (for scaffolding the initial Vite setup, writing the core Kaboom.js physics logic, and generating the React component bridge).

Hosting & Deployment: Firebase Hosting or Vercel for fast, global content delivery.

3. Game Mechanics & Engine Requirements (The Canvas)
The Kaboom.js engine will handle the following logic:

Movement: The player character moves left/right using arrow keys or A/D. Jumping is mapped to the Spacebar or Up arrow.

Physics: Implement standard gravity. The player must accelerate when falling and halt immediately upon colliding with a "floor" or "wall" tile.

Camera System: The viewport camera must lock onto the player's X-axis, smoothly scrolling to the right as the player progresses through the level.

Collision Detection: * Solid blocks stop movement.

"Trigger" blocks (like a Question Mark block) fire an event when hit from the bottom.

"Collectible" items disappear upon overlap with the player.

4. The "Portfolio" Mapping (React Integration)
The level will be divided into distinct zones. When the game engine detects an interaction, it will pass a state change to React, which will render an HTML/CSS overlay.

Zone 1: The Spawn & "About Me"

In-Game: The player spawns next to an NPC (e.g., a wizard or a wise old toad) with a floating "Press E to talk" prompt.

React UI: Triggers the AboutModal.jsx component. Displays your professional headshot, a short bio, and links to your GitHub and LinkedIn.

Zone 2: The "Skills" Run

In-Game: The player runs across platforms, collecting floating coins or specific icons (HTML, CSS, JS shields).

React UI: A persistent top-bar HUD (Heads Up Display) updates in real-time. As you collect a skill icon, it fills in on the UI, showing the recruiter exactly what technologies you know.

Zone 3: The "Projects" Blocks

In-Game: A row of classic Mario "Question Mark" blocks. The player jumps to hit them from below.

React UI: Hitting a block triggers ProjectCard.jsx. The game pauses, the screen dims, and a modern modal appears showing:

Project Title & Screenshot.

A brief description of the problem solved.

The specific stack used.

"View Live" and "GitHub Repo" buttons.

Zone 4: The "Contact" Castle

In-Game: The end of the level features a classic flagpole or castle door. Touching it triggers a "Level Complete" sequence.

React UI: Triggers ContactForm.jsx. A clean HTML form appears allowing the user to send you a direct message or copy your email address.

5. Asset & Media Requirements
Spritesheets: * Player Character (Idle, Run Left, Run Right, Jump).

Environment Tiles (Grass, Dirt, Brick, Question Block, Empty Block).

Typography: A retro pixel font for the game canvas (e.g., "Press Start 2P" from Google Fonts), and a clean sans-serif (like Inter or Roboto) for the React UI modals.

Audio (Optional but recommended): Background chiptune track, a "jump" sound, a "coin collect" sound, and a "pause/menu open" sound.

6. Implementation Phases
Phase 1: Environment Setup: Initialize Vite + React. Install Kaboom.js. Render a blank canvas inside a React component.

Phase 2: Game Logic: Use your AI tools to build the physics loop, load the sprite assets, and get the character running and jumping across a basic floor.

Phase 3: Level Design: Map out the 2D array that dictates where blocks, coins, and NPCs are placed in the world.

Phase 4: The React Bridge: Create the custom JavaScript event listeners that allow Kaboom.js to tell React, "The player just hit block #2, show Project 2."

Phase 5: UI Development: Build and style the actual HTML/CSS modals that overlay the game.

Phase 6: Polish & Deploy: Add sound effects, ensure the canvas scales correctly on different monitor sizes, and deploy the build.



Architecture & Code Quality

Use a custom React hook like useKaboom to encapsulate all game engine logic, keeping your components clean and the canvas lifecycle manageable
Keep game state (which modal is open, current zone, skills collected) in a single context — PortfolioContext — so any component can react to game events without prop drilling
Use useRef for the canvas DOM element, never useState, to avoid triggering re-renders inside the game loop

Performance

Lazy-load each modal component (React.lazy + Suspense) so the initial bundle stays small — recruiters on mobile shouldn't wait for a heavy JS bundle
Preload spritesheets during a fake "Loading..." screen rather than mid-game, which avoids jank when entering new zones
Debounce the window resize handler when scaling the canvas to avoid thrashing

Accessibility & Fail-Safe Navigation (your PRD mentions this)

Add a fixed top nav bar outside the canvas that mirrors all four zones — About, Skills, Projects, Contact — so keyboard-only or mobile users can still access everything
Include a "Skip to Portfolio" button for users who just want the info fast (this also helps with recruiters using screen readers)

Mobile Handling

Render on-screen D-pad touch controls as a React component overlaid on the canvas for mobile users — Kaboom.js doesn't handle touch natively
Detect if the device is mobile on mount and optionally auto-show the standard modal layout instead of the game (give the user the choice)


