export const FEATURED_PROJECTS = [
  {
    id: 1,
    title: "Ethereal Skies",
    imageUrl: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=2574&auto=format&fit=crop",
    description: "An atmospheric exploration game set in a procedurally generated world of floating islands. Players navigate using a unique physics-based glider system.",
    badges: ["Featured", "PC / Console"],
    tags: ["Unity", "C#", "Procedural Generation", "Physics"],
    links: [
      { type: 'youtube', label: 'Trailer', url: '#' },
      { type: 'steam', label: 'Steam', url: '#' }
    ]
  },
  {
    id: 2,
    title: "Neon Rivals",
    imageUrl: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2670&auto=format&fit=crop",
    description: "A fast-paced multiplayer arena shooter with cyberpunk aesthetics. Features rollback netcode and cross-platform play.",
    badges: ["Multiplayer", "Released"],
    tags: ["Unreal Engine 5", "C++", "Networking", "VFX"],
    links: [
      { type: 'youtube', label: 'Gameplay', url: '#' },
      { type: 'web', label: 'Website', url: '#' }
    ]
  }
];

export const EXPERIENCE_DATA = [
  {
    id: 1,
    period: "2022 - Present",
    title: "Senior Gameplay Engineer",
    companyOrType: "Stellar Games Studio",
    description: "Leading a team of 5 developers for an unannounced RPG. Architected the ability system and quest framework.",
    tags: ["Unity", "Team Lead", "Architecture"]
  },
  {
    id: 2,
    period: "2019 - 2022",
    title: "Game Developer",
    companyOrType: "Indie Co.",
    description: "Shipped 2 mobile titles with over 500k downloads. Responsible for gameplay mechanics, UI implementation, and optimization.",
    tags: ["Mobile", "Optimization", "C#"]
  },
  {
    id: 3,
    period: "2017 - 2019",
    title: "Junior Developer",
    companyOrType: "Tech Solutions",
    description: "Worked on interactive simulations and serious games for educational purposes.",
    tags: ["Simulation", "VR/AR", "Education"]
  }
];

export const EXPERIMENTS_DATA = [
  {
    id: 1,
    title: "Fluid Sim",
    imageUrl: "https://images.unsplash.com/photo-1618113226061-0e625a6eb88d?q=80&w=2574&auto=format&fit=crop",
    badge: "Tech Demo",
    description: "Real-time 2D fluid simulation using compute shaders.",
    tags: ["Shaders", "Compute", "Physics"],
    link: { label: 'Watch', url: '#' }
  },
  {
    id: 2,
    title: "Voxel Terrain",
    imageUrl: "https://images.unsplash.com/photo-1516937941348-c09e554b96d8?q=80&w=2670&auto=format&fit=crop",
    badge: "Engine",
    description: "Custom C++ voxel engine with destructible terrain.",
    tags: ["C++", "OpenGL", "Algorithms"],
    link: { label: 'GitHub', url: '#' }
  },
  {
    id: 3,
    title: "AI Behavior Trees",
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2670&auto=format&fit=crop",
    badge: "AI",
    description: "Visual editor for constructing complex AI behaviors.",
    tags: ["Tooling", "AI", "Editor Scripting"],
    link: null
  }
];