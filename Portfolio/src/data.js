export const portfolioData = {
  "developer_info": {
    "name": "Sushin Babu CM",
    "title": "MERN Stack Developer & AI-Assisted Builder",
    "bio": "I build interactive, user-focused web experiences specializing in the MERN stack. Currently deepening my expertise in Node.js, Express, and MongoDB. I leverage modern AI tools like Antigravity and Claude to accelerate development, combining my knowledge with vibecoding workflows to ship premium, functional interfaces faster than ever.",
    "cv_approach": "I combine hands-on coding with modern AI-assisted development (\"vibecoding\") using Antigravity and Claude. This allows me to architect solutions quickly, iterate on UX ideas in real time, and deliver polished results while still maintaining full understanding and ownership of the codebase.",
    "avatar_emoji": "👨‍💻",
    "avatar_url": "https://api.dicebear.com/7.x/notionists/svg?seed=Sushin",
    "social_links": {
      "github": "https://github.com/Sushincm",
      "linkedin": "https://linkedin.com/in/sushin-cm"
    },
    "email": "sushinofficial@gmail.com",
    "ai_tools": [
      { "name": "Antigravity", "icon": "🤖", "desc": "AI coding agent for rapid full-stack development" },
      { "name": "Claude",      "icon": "🤖", "desc": "AI assistant for logic, planning & architecture" }
    ]
  },

  /* ── Skills shown in the game HUD coins ── */
  "skills_zone": [
    { "id": "html",    "name": "HTML5",      "icon_url": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",       "category": "Core" },
    { "id": "css",     "name": "CSS3",       "icon_url": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",         "category": "Core" },
    { "id": "js",      "name": "JavaScript", "icon_url": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg","category": "Core" },
    { "id": "react",   "name": "React",      "icon_url": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",        "category": "Framework" },
    { "id": "node",    "name": "Node.js",    "icon_url": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",      "category": "Backend" },
    { "id": "express", "name": "Express",    "icon_url": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",    "category": "Backend" },
    { "id": "mongodb", "name": "MongoDB",    "icon_url": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",    "category": "Database" }
  ],

  /* ── Full technical skills list (used in CV modal & cv.html) ── */
  "cv_skills": [
    { "name": "HTML5",               "category": "core" },
    { "name": "CSS3",                "category": "core" },
    { "name": "JavaScript (ES6+)",   "category": "core" },
    { "name": "React",               "category": "framework" },
    { "name": "Node.js",             "category": "backend" },
    { "name": "Express.js",          "category": "backend" },
    { "name": "MongoDB",             "category": "database" },
    { "name": "REST APIs",           "category": "backend" },
    { "name": "Vite",                "category": "tooling" },
    { "name": "Git / GitHub",        "category": "tooling" },
    { "name": "Responsive Design",   "category": "core" },
    { "name": "Kaboom.js",           "category": "framework" },
    { "name": "Antigravity AI",      "category": "ai", "icon": "🤖" },
    { "name": "Claude AI",           "category": "ai", "icon": "🤖" }
  ],

  /* ── Currently learning (CV section) ── */
  "currently_learning": [
    "Node.js (Backend)",
    "Express.js (REST APIs)",
    "MongoDB (Mongoose ODM)",
    "Full-Stack Deployment"
  ],

  /* ── Projects (game ? blocks + CV entries) ── */
  "projects_zone": [
    {
      "id": "proj_trading_assistant",
      "game_trigger_id": "block_1",
      "title": "Trading Assistance App",
      "date": "2024",
      "short_description": "A web application built to help forex traders manage risk and meet prop firm requirements.",
      "long_description": "Designed to assist my friends circle and fellow traders, this tool features a stop-loss/lot size calculator, a trade journal, analytics, and news alerts to avoid high-impact events.",
      "tech_stack": ["React", "JavaScript", "CSS"],
      "cv_bullets": [
        "Built a forex risk management tool for prop firm traders",
        "Features: stop-loss / lot-size calculator, trade journal, analytics & news alerts",
        "Used by a circle of traders to stay compliant with daily loss limits"
      ],
      "links": {
        "live": "https://your-trading-app.com",
        "repo": "https://github.com/yourusername/trading-app"
      }
    },
    {
      "id": "proj_carousel_gen",
      "game_trigger_id": "block_2",
      "title": "Social Media Carousel Generator",
      "date": "2024",
      "short_description": "A graphic design tool for generating highly-styled carousels.",
      "long_description": "Allows users to input text and generate cohesive, well-designed image carousels for social platforms using custom prompts and specific design styles.",
      "tech_stack": ["HTML", "CSS", "JavaScript"],
      "cv_bullets": [
        "Graphic design tool for generating cohesive image carousels for social platforms",
        "Custom prompt-based design system with multiple style presets"
      ],
      "links": {
        "live": "https://your-carousel-gen.com",
        "repo": "https://github.com/yourusername/carousel-generator"
      }
    },
    {
      "id": "proj_ai_sandbox",
      "game_trigger_id": "block_3",
      "title": "AI Development Sandbox",
      "date": "2024 – Present",
      "short_description": "Experimenting with AI workflows using modern agents.",
      "long_description": "A showcase of leveraging tools like Antigravity, Firebase Studio, and Stitch to rapidly prototype, build out front-end logic, and deploy functional web interfaces.",
      "tech_stack": ["Antigravity", "Claude", "React", "Firebase"],
      "cv_bullets": [
        "Rapid prototype and deployment of web interfaces using AI-assisted workflows",
        "Demonstrates capability to ship production-quality features with AI collaboration"
      ],
      "links": {
        "live": "https://your-ai-sandbox.com",
        "repo": "https://github.com/yourusername/ai-sandbox"
      }
    },
    {
      "id": "proj_portfolio_game",
      "game_trigger_id": "block_4",
      "title": "Mario-Style Portfolio Game",
      "date": "2025",
      "short_description": "Interactive pixel-art portfolio delivered as a playable browser game.",
      "long_description": "A fully playable Mario-inspired 2D side-scroller built with Kaboom.js and React. Players jump, collect coins, and hit ? blocks to discover the developer's story.",
      "tech_stack": ["React", "Kaboom.js", "Vite"],
      "cv_bullets": [
        "Interactive pixel-art portfolio delivered as a playable browser game",
        "Players collect coins to unlock About, Projects, Skills, and Contact info"
      ],
      "links": {
        "live": "",
        "repo": "https://github.com/Sushincm"
      }
    }
  ],

  "contact_zone": {
    "email": "sushinofficial@gmail.com",
    "message_prompt": "Let's build something cool. Drop a message below!"
  },

  "game_engine_config": {
    "gravity": 1600,
    "player_speed": 480,
    "jump_force": 700
  }
};
