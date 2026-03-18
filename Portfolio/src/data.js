export const portfolioData = {
  "developer_info": {
    "name": "Sushin Babu CM",
    "title": "Full Stack Developer",
    "bio": "I build fast, conversion-focused web applications for businesses in Kerala and the GCC region. Specialising in React and the MERN stack, I take projects from Figma wireframe to live deployment — combining hands-on coding with AI-assisted tools like Antigravity and Claude Code to ship polished, production-ready products faster without cutting corners.",
    "cv_approach": "I combine hands-on coding with modern AI-assisted development using Antigravity and Claude Code. This lets me design in Figma, architect in React, accelerate logic with AI, and deploy on Vercel or Netlify — owning every decision in the process while shipping significantly faster as a solo developer.",
    "avatar_emoji": "👨‍💻",
    "avatar_url": "https://api.dicebear.com/7.x/notionists/svg?seed=Sushin",
    "social_links": {
      "github": "https://github.com/Sushincm",
      "linkedin": "https://www.linkedin.com/in/sushin-cm-411385200/"
    },
    "email": "sushinofficial@gmail.com",
    "portfolio": "https://my-portfolio-sushin.vercel.app",
    "ai_tools": [
      { "name": "Antigravity", "icon": "🤖", "desc": "AI website builder for rapid full-stack scaffolding and delivery" },
      { "name": "Claude Code",  "icon": "🤖", "desc": "AI coding assistant for logic, planning, architecture and debugging" }
    ]
  },

  /* ── Skills shown in the game HUD coins ── */
  "skills_zone": [
    { "id": "html",    "name": "HTML5",      "icon_url": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",        "category": "Core" },
    { "id": "css",     "name": "CSS3",       "icon_url": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",          "category": "Core" },
    { "id": "js",      "name": "JavaScript", "icon_url": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg","category": "Core" },
    { "id": "react",   "name": "React",      "icon_url": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",         "category": "Framework" },
    { "id": "node",    "name": "Node.js",    "icon_url": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",       "category": "Backend" },
    { "id": "express", "name": "Express",    "icon_url": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",     "category": "Backend" },
    { "id": "mongodb", "name": "MongoDB",    "icon_url": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",     "category": "Database" },
    { "id": "firebase","name": "Firebase",   "icon_url": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",      "category": "Database" },
    { "id": "figma",   "name": "Figma",      "icon_url": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",         "category": "Design" }
  ],

  /* ── Full technical skills list (used in CV modal & cv.html) ── */
  "cv_skills": [
    { "name": "HTML5",                "category": "core" },
    { "name": "CSS3",                 "category": "core" },
    { "name": "JavaScript (ES6+)",    "category": "core" },
    { "name": "React",                "category": "framework" },
    { "name": "Bootstrap",            "category": "framework" },
    { "name": "Node.js",              "category": "backend" },
    { "name": "Express.js",           "category": "backend" },
    { "name": "MongoDB",              "category": "database" },
    { "name": "Firebase (Firestore, Auth, Realtime DB)", "category": "database" },
    { "name": "REST APIs",            "category": "backend" },
    { "name": "Vite",                 "category": "tooling" },
    { "name": "Git / GitHub",         "category": "tooling" },
    { "name": "Vercel / Netlify",     "category": "tooling" },
    { "name": "WordPress",            "category": "tooling" },
    { "name": "Figma",                "category": "design" },
    { "name": "Adobe Photoshop",      "category": "design" },
    { "name": "Responsive Design",    "category": "core" },
    { "name": "GSAP",                 "category": "framework" },
    { "name": "Kaboom.js",            "category": "framework" },
    { "name": "Antigravity AI",       "category": "ai", "icon": "🤖" },
    { "name": "Claude Code",          "category": "ai", "icon": "🤖" }
  ],

  /* ── Currently learning ── */
  "currently_learning": [
    "Node.js (Backend Development)",
    "Express.js (REST API Design)",
    "MongoDB (Mongoose ODM)",
    "Full-Stack Architecture & Deployment",
    "Firebase (Firestore, Auth, Realtime DB)"
  ],

  /* ── Projects (game ? blocks + CV entries) ── */
  "projects_zone": [
    {
      "id": "proj_portfolio",
      "game_trigger_id": "block_1",
      "title": "Personal Developer Portfolio",
      "date": "2025",
      "short_description": "Animated personal portfolio built in React with GSAP — the site you're playing right now.",
      "long_description": "Designed and built from scratch in Figma and React. Features advanced GSAP animations: scroll-triggered section reveals, a magnetic custom cursor (dot + trailing ring), letter-by-letter heading entrance, and per-card 3D tilt-on-hover. Dark editorial aesthetic with Bebas Neue display font and electric lime accent system. AI-assisted scaffolding via Antigravity and Claude Code.",
      "tech_stack": ["React", "GSAP", "Vite", "CSS3", "Antigravity", "Claude Code"],
      "cv_bullets": [
        "Built with advanced GSAP animations: scroll-triggered reveals, magnetic cursor, letter-by-letter heading entrance, 3D card tilt-on-hover",
        "Entire UI designed from scratch in Figma — dark editorial aesthetic, Bebas Neue font, electric lime accent, noise overlay",
        "Used Antigravity + Claude Code to accelerate scaffolding while owning all animation and design decisions personally"
      ],
      "links": {
        "live": "https://my-portfolio-sushin.vercel.app",
        "repo": "https://github.com/Sushincm"
      },
      "status": "live"
    },
    {
      "id": "proj_acadome",
      "game_trigger_id": "block_2",
      "title": "Acadome — Finance Training Institute",
      "date": "2025",
      "short_description": "Full website for a professional accounting & finance training institute targeting India and GCC markets.",
      "long_description": "Designing and building a full client website for Acadome — a professional accounting and finance training institute. Covers programs, internship pathways, workshops, seminars, and a live application flow. Iterative workflow: design in Figma, build with React, accelerate with Antigravity and Claude Code, deploy incrementally on Vercel. Focused on professional credibility and conversion-led design.",
      "tech_stack": ["React", "HTML5", "CSS3", "Figma", "Antigravity", "Claude Code", "Vercel"],
      "cv_bullets": [
        "Building full website covering programs, internship pathways, workshops, seminars and application flows for India & GCC markets",
        "Iterative AI-assisted workflow: Figma design → React build → Antigravity/Claude Code acceleration → incremental Vercel deployment",
        "Focused on professional credibility, clear content hierarchy, and conversion-led design to turn visitors into applicants"
      ],
      "links": {
        "live": "https://acadome.vercel.app",
        "repo": "https://github.com/Sushincm/acadome"
      },
      "status": "in-progress"
    },
    {
      "id": "proj_propfirm",
      "game_trigger_id": "block_3",
      "title": "PropFirm Guard — Trading Protection App",
      "date": "2024 – Present",
      "short_description": "Full-stack web app for prop trading firm protection using React and Firebase.",
      "long_description": "Building a full-stack web application for prop trading firm protection and compliance. React frontend with Firebase powering real-time database, user authentication (Firestore + Auth), and live data feeds. First major full-stack project applying MERN-adjacent skills — component-driven React UI, Firebase BaaS, real-time state management, and protected account flows.",
      "tech_stack": ["React", "Node.js", "Firebase", "Firestore", "Netlify"],
      "cv_bullets": [
        "Full-stack app: React frontend + Firebase backend (Firestore, Auth, Realtime DB) for prop trading compliance",
        "Features real-time data management, protected user account flows, and live state management",
        "First major full-stack project applying MERN-adjacent skills beyond tutorials in a live deployed product"
      ],
      "links": {
        "live": "https://propfirm-guard.netlify.app",
        "repo": "https://github.com/Sushincm/Popfirm-Guard"
      },
      "status": "in-progress"
    },
    {
      "id": "proj_zinkly",
      "game_trigger_id": "block_4",
      "title": "Zinkly — HR Ecosystem Platform",
      "date": "2024",
      "short_description": "Full multi-page HR and recruitment platform for India and GCC markets.",
      "long_description": "Designed and built a complete HR ecosystem with three service sections: Zinkly Ready (job preparation), Zinkly Edge (workforce management), and Zinkly Connect (referral hiring). Includes job application forms, FAQ, partner programme, and newsletter integration. Built using AI-assisted tools — Antigravity and Claude Code — deployed on Netlify.",
      "tech_stack": ["HTML5", "CSS3", "JavaScript", "Figma", "Antigravity", "Claude Code"],
      "cv_bullets": [
        "Full multi-page HR platform — Zinkly Ready (job prep), Edge (workforce management), Connect (referral hiring)",
        "Covers smart screening, future-ready hiring, and human-first recruitment for India and GCC markets",
        "Includes job application forms, FAQ, partner programme, newsletter integration — deployed on Netlify"
      ],
      "links": {
        "live": "https://zinkly.netlify.app",
        "repo": null
      },
      "status": "live"
    },
    {
      "id": "proj_knowbest",
      "game_trigger_id": "block_5",
      "title": "Knowbest Global — Study Abroad Consultancy",
      "date": "2024",
      "short_description": "Client website in React for a study abroad and job consultancy targeting Kerala and GCC audiences.",
      "long_description": "Built a full client website in React for Knowbest Global — a study abroad and job consultancy. Lead-generation-first UX with strategic CTAs, enquiry forms, and trust-building content sections. Mobile-first, fully responsive design aligned with client brand guidelines. Deployed on Vercel.",
      "tech_stack": ["React", "CSS3", "JavaScript", "Figma", "Antigravity"],
      "cv_bullets": [
        "Full React client website for a study abroad and job consultancy targeting Kerala and GCC markets",
        "Lead-generation UX: strategic CTAs, enquiry forms, trust-building content — measurably increased inbound enquiries",
        "Mobile-first responsive design; deployed on Vercel"
      ],
      "links": {
        "live": "https://knowbest-global.vercel.app",
        "repo": "https://github.com/Sushincm/knowbest-global"
      },
      "status": "live"
    },
    {
      "id": "proj_bossify",
      "game_trigger_id": "block_6",
      "title": "Bossify — E-Commerce Platform",
      "date": "2024",
      "short_description": "Full multi-page e-commerce platform with cart, login, product listing and address management.",
      "long_description": "Built a complete multi-page e-commerce web application including product listing, product detail, cart, login/signup, address management, and contact pages. Implemented dynamic cart interactions and responsive navigation using vanilla JavaScript. Deployed on Netlify.",
      "tech_stack": ["HTML5", "CSS3", "JavaScript"],
      "cv_bullets": [
        "Full multi-page e-commerce platform: product listing, cart, login/signup, address management",
        "Dynamic cart interactions and responsive navigation via vanilla JavaScript",
        "Deployed live on Netlify"
      ],
      "links": {
        "live": "https://bossify-ecom.netlify.app",
        "repo": "https://github.com/Sushincm/Bossify"
      },
      "status": "live"
    },
    {
      "id": "proj_thamburatti",
      "game_trigger_id": "block_7",
      "title": "Thamburatti — E-Commerce Website",
      "date": "2024",
      "short_description": "Clean e-commerce frontend with product pages, login/signup, and seamless responsive layout.",
      "long_description": "Built a complete e-commerce frontend with product pages, login/signup flows, and a fully responsive layout from scratch. Focused on clean UI design and smooth user flows to deliver a seamless shopping experience. Deployed on Netlify.",
      "tech_stack": ["HTML5", "CSS3", "JavaScript"],
      "cv_bullets": [
        "Complete e-commerce frontend: product pages, login/signup flows, responsive layout",
        "Focused on clean UI and smooth user flows for a seamless shopping experience",
        "Deployed live on Netlify"
      ],
      "links": {
        "live": "https://thamburatti-ecom.netlify.app",
        "repo": "https://github.com/Sushincm/Thamburatti---Ecommerce"
      },
      "status": "live"
    }
  ],

  /* ── Work Experience (for CV modal) ── */
  "experience": [
    {
      "role": "Freelance Full Stack Developer",
      "company": "Self-Employed",
      "period": "2024 – Present",
      "location": "Remote  |  Kerala, India & GCC Clients",
      "bullets": [
        "Designing and developing client websites and full-stack web apps independently — end-to-end from discovery, Figma design, and React build through to Vercel/Netlify deployment",
        "Delivered production projects: Zinkly (HR platform), Knowbest Global (consultancy), Acadome (training portal), Zinkly (HR ecosystem)",
        "Using Antigravity and Claude Code to accelerate delivery as a solo developer without compromising code quality",
        "Building first full-stack app (PropFirm Guard) with React + Firebase, applying MERN skills in a live project"
      ]
    },
    {
      "role": "Frontend Developer",
      "company": "Tedsys Technologies Pvt. Ltd.",
      "period": "2022 – 2024",
      "location": "Kochi, Kerala, India",
      "bullets": [
        "Built and maintained responsive, cross-browser-compatible web interfaces using HTML5, CSS3, Bootstrap, and JavaScript",
        "Collaborated with design and backend teams to translate Figma wireframes into pixel-perfect production pages",
        "Optimised page performance, load speeds, and mobile responsiveness across all client projects",
        "Contributed across the full project lifecycle from prototyping through to QA and deployment"
      ]
    },
    {
      "role": "Frontend Developer",
      "company": "The Chandraz",
      "period": "2021 – 2022",
      "location": "Kondotty, Kerala, India",
      "bullets": [
        "Designed and developed the company website with a fully responsive layout across desktop and mobile",
        "Implemented UI components in HTML, CSS, and JavaScript, improving user engagement",
        "Gathered requirements directly from the client and iterated rapidly on design feedback"
      ]
    }
  ],

  "contact_zone": {
    "email": "sushinofficial@gmail.com",
    "message_prompt": "Have a project? Let's build it.",
    "location": "Malappuram, Kerala, India",
    "availability": "Open to freelance, contract, and full-time opportunities"
  },

  "game_engine_config": {
    "gravity": 1600,
    "player_speed": 480,
    "jump_force": 700
  }
};