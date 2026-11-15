// server.ts
import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
var __dirname = path.dirname(fileURLToPath(import.meta.url));
var DATA_DIR = path.join(__dirname, "data");
var DB_FILE = path.join(DATA_DIR, "database.json");
try {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  fs.accessSync(DATA_DIR, fs.constants.W_OK);
} catch (e) {
  DATA_DIR = path.join("/tmp", "anish_studio_data");
  DB_FILE = path.join(DATA_DIR, "database.json");
  if (!fs.existsSync(DATA_DIR)) {
    try {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    } catch (err) {
    }
  }
}
var initialData = {
  settings: {
    businessName: "ANISH DIGITAL STUDIO",
    founder: "Anish Kumar Singh",
    tagline: "Turning Ideas Into Digital Experiences.",
    subTagline: "Creative Design. Powerful Websites. Smart Digital Solutions.",
    email: "anishkumarsingh2026@gmail.com",
    whatsapp: "+919903043322",
    location: "West Bengal, India",
    instagram: "https://instagram.com/creadix.anish",
    github: "https://github.com/Anish-maker-ai",
    linkedin: "https://linkedin.com/in/anishkumarsingh",
    youtube: "https://youtube.com/@anishdigitalstudio"
  },
  services: [
    {
      id: "web-dev",
      title: "Website Development",
      description: "Custom, high-performance, responsive websites built with React, TypeScript, Tailwind, and modern full-stack architectures.",
      icon: "Code",
      sampleWork: "E-commerce platforms, SaaS dashboards, portfolio sites, and landing pages.",
      category: "Development"
    },
    {
      id: "video-editing",
      title: "Video Editing",
      description: "Cinematic cuts, engaging YouTube videos, reels, shorts, and corporate promos with advanced color grading and sound design.",
      icon: "Video",
      sampleWork: "Creator channels, promotional trailers, event highlights, and social media reels.",
      category: "Media"
    },
    {
      id: "graphic-design",
      title: "Graphic Designing",
      description: "Stunning visual assets, social media banners, marketing flyers, thumbnails, and brand identity kits.",
      icon: "Palette",
      sampleWork: "YouTube thumbnails, Instagram carousels, brand guidelines, and ad creatives.",
      category: "Design"
    },
    {
      id: "logo-design",
      title: "Logo Designing",
      description: "Memorable, futuristic, and unique 3D/2D vector logos that give your brand an instant international identity.",
      icon: "Sparkles",
      sampleWork: "Minimalist marks, 3D metallic emblems, typographic logos, and brand badges.",
      category: "Design"
    },
    {
      id: "motion-graphics",
      title: "Motion Graphics",
      description: "Dynamic logo reveals, explainer animations, kinetic typography, and fluid visual effects.",
      icon: "Film",
      sampleWork: "Intro/outro animations, UI motion mockups, and dynamic social media promos.",
      category: "Media"
    },
    {
      id: "ai-solutions",
      title: "AI-Assisted Creative Solutions",
      description: "Leveraging cutting-edge generative AI, custom prompt workflows, and automated workflows for creative production.",
      icon: "Cpu",
      sampleWork: "AI art direction, content generation pipelines, and smart assistant prototypes.",
      category: "Technology"
    },
    {
      id: "python-dev",
      title: "Python Application Development",
      description: "Robust scripts, automation bots, web scrapers, data analysis tools, and backend APIs built with Python.",
      icon: "Terminal",
      sampleWork: "Automation scripts, data dashboards, API backends, and utility bots.",
      category: "Development"
    },
    {
      id: "powerpoint-design",
      title: "PowerPoint Presentation Design",
      description: "High-impact, pitch-ready presentation decks that captivate investors, clients, and audiences.",
      icon: "Presentation",
      sampleWork: "Startup pitch decks, corporate reports, webinar slides, and keynote visuals.",
      category: "Design"
    },
    {
      id: "social-media",
      title: "Social Media Content Design",
      description: "End-to-end social media content strategies, templates, and scheduled post graphics to grow your online presence.",
      icon: "Share2",
      sampleWork: "Instagram feeds, LinkedIn carousels, Twitter/X banners, and TikTok graphics.",
      category: "Marketing"
    }
  ],
  portfolio: [
    {
      id: "proj-1",
      title: "Nexus 3D E-Commerce Hub",
      category: "Websites",
      description: "Futuristic high-performance e-commerce platform with immersive 3D product preview and lightning-fast checkout.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
      tags: ["React", "Tailwind", "Three.js", "Node.js"],
      featured: true,
      demoUrl: "#"
    },
    {
      id: "proj-2",
      title: "CyberPulse Cinematic Reel",
      category: "Video Editing",
      description: "High-energy cyberpunk motion trailer with custom sound design, color grading, and dynamic speed ramps.",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop",
      tags: ["Premiere Pro", "After Effects", "Sound Design"],
      featured: true,
      demoUrl: "#"
    },
    {
      id: "proj-3",
      title: "Quantum Brand Identity Kit",
      category: "Graphic Design",
      description: "Complete visual identity system featuring metallic gradients, minimalist typography, and futuristic iconography.",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200&auto=format&fit=crop",
      tags: ["Illustrator", "Photoshop", "Branding"],
      featured: true,
      demoUrl: "#"
    },
    {
      id: "proj-4",
      title: "Stellar 3D Logo Animation",
      category: "Motion Graphics",
      description: "Sleek metallic 3D logo reveal with reflective lighting and particle shockwave effects.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
      tags: ["Blender", "After Effects", "Motion"],
      featured: true,
      demoUrl: "#"
    },
    {
      id: "proj-5",
      title: "Venture Capital Pitch Deck",
      category: "Presentations",
      description: "SaaS seed funding presentation deck with custom vector infographics and compelling narrative design.",
      image: "https://images.unsplash.com/photo-1542744094-3a31243364d0?q=80&w=1200&auto=format&fit=crop",
      tags: ["PowerPoint", "Keynote", "Infographics"],
      featured: false,
      demoUrl: "#"
    },
    {
      id: "proj-6",
      title: "AI Smart Web Scraper Bot",
      category: "Python Projects",
      description: "Automated asynchronous Python scraper with AI-powered sentiment analysis and real-time database sync.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
      tags: ["Python", "BeautifulSoup", "FastAPI", "SQLite"],
      featured: false,
      demoUrl: "#"
    }
  ],
  packages: [
    {
      id: "starter",
      name: "STARTER",
      subtitle: "Ideal for individuals and small startups starting their digital journey.",
      features: [
        "Basic graphic design (banners & thumbnails)",
        "Simple video editing (reels/shorts)",
        "Basic responsive website design (1-3 pages)",
        "Standard support & revisions",
        "Source files included"
      ],
      popular: false
    },
    {
      id: "standard",
      name: "STANDARD",
      subtitle: "Perfect for growing creators and businesses scaling up their online presence.",
      features: [
        "Multi-page custom website (React/Tailwind)",
        "Professional video editing (YouTube & promos)",
        "Social media creative design pack (15 posts)",
        "Logo styling & brand guidelines",
        "Priority support & fast turnaround"
      ],
      popular: true
    },
    {
      id: "premium",
      name: "PREMIUM",
      subtitle: "Enterprise-grade complete digital transformation and full creative suite.",
      features: [
        "Advanced full-stack website with custom features",
        "Motion graphics & cinematic 3D elements",
        "Complete creative package & brand identity",
        "Python automation / AI solution integration",
        "Dedicated 1-on-1 priority support & maintenance"
      ],
      popular: false
    }
  ],
  inquiries: [
    {
      id: "inq-1",
      name: "Rahul Sharma",
      email: "rahul@example.com",
      service: "Website Development",
      description: "Need an e-commerce website for my clothing brand in Delhi.",
      budget: "$500 - $1000",
      createdAt: new Date(Date.now() - 864e5 * 2).toISOString(),
      status: "New"
    },
    {
      id: "inq-2",
      name: "Priya Patel",
      email: "priya@creator.com",
      service: "Video Editing",
      description: "Looking for cinematic editing for my weekly YouTube tech vlogs.",
      budget: "$200 - $500",
      createdAt: new Date(Date.now() - 864e5).toISOString(),
      status: "Contacted"
    }
  ]
};
var cachedDB = null;
function getDB() {
  if (cachedDB) return cachedDB;
  if (!fs.existsSync(DB_FILE)) {
    try {
      if (!fs.existsSync(path.dirname(DB_FILE))) {
        fs.mkdirSync(path.dirname(DB_FILE), { recursive: true });
      }
      fs.writeFileSync(DB_FILE, JSON.stringify(initialData, null, 2));
    } catch (e) {
      cachedDB = initialData;
      return initialData;
    }
    cachedDB = initialData;
    return initialData;
  }
  try {
    const data = fs.readFileSync(DB_FILE, "utf-8");
    cachedDB = JSON.parse(data);
    return cachedDB;
  } catch (e) {
    cachedDB = initialData;
    return initialData;
  }
}
function saveDB(data) {
  cachedDB = data;
  try {
    if (!fs.existsSync(path.dirname(DB_FILE))) {
      fs.mkdirSync(path.dirname(DB_FILE), { recursive: true });
    }
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
  } catch (e) {
  }
}
async function startServer() {
  const app = express();
  const PORT = 3e3;
  app.use(express.json({ limit: "10mb" }));
  app.get("/api/settings", (req, res) => {
    const db = getDB();
    res.json(db.settings);
  });
  app.put("/api/settings", (req, res) => {
    const db = getDB();
    db.settings = { ...db.settings, ...req.body };
    saveDB(db);
    res.json({ success: true, settings: db.settings });
  });
  app.get("/api/services", (req, res) => {
    const db = getDB();
    res.json(db.services);
  });
  app.put("/api/services/:id", (req, res) => {
    const db = getDB();
    const index = db.services.findIndex((s) => s.id === req.params.id);
    if (index === -1) {
      return res.status(404).json({ error: "Service not found" });
    }
    db.services[index] = { ...db.services[index], ...req.body };
    saveDB(db);
    res.json({ success: true, service: db.services[index] });
  });
  app.get("/api/portfolio", (req, res) => {
    const db = getDB();
    res.json(db.portfolio);
  });
  app.post("/api/portfolio", (req, res) => {
    const db = getDB();
    const newProj = {
      id: "proj-" + Date.now(),
      title: req.body.title || "Untitled Project",
      category: req.body.category || "Websites",
      description: req.body.description || "",
      image: req.body.image || "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
      tags: req.body.tags || ["React"],
      featured: !!req.body.featured,
      demoUrl: req.body.demoUrl || "#"
    };
    db.portfolio.unshift(newProj);
    saveDB(db);
    res.json({ success: true, project: newProj });
  });
  app.put("/api/portfolio/:id", (req, res) => {
    const db = getDB();
    const index = db.portfolio.findIndex((p) => p.id === req.params.id);
    if (index === -1) {
      return res.status(404).json({ error: "Project not found" });
    }
    db.portfolio[index] = { ...db.portfolio[index], ...req.body };
    saveDB(db);
    res.json({ success: true, project: db.portfolio[index] });
  });
  app.delete("/api/portfolio/:id", (req, res) => {
    const db = getDB();
    db.portfolio = db.portfolio.filter((p) => p.id !== req.params.id);
    saveDB(db);
    res.json({ success: true });
  });
  app.get("/api/packages", (req, res) => {
    const db = getDB();
    res.json(db.packages);
  });
  app.put("/api/packages/:id", (req, res) => {
    const db = getDB();
    const index = db.packages.findIndex((p) => p.id === req.params.id);
    if (index === -1) {
      return res.status(404).json({ error: "Package not found" });
    }
    db.packages[index] = { ...db.packages[index], ...req.body };
    saveDB(db);
    res.json({ success: true, package: db.packages[index] });
  });
  app.get("/api/inquiries", (req, res) => {
    const db = getDB();
    res.json(db.inquiries);
  });
  app.post("/api/inquiries", (req, res) => {
    const { name, email, service, description, budget } = req.body;
    if (!name || !email || !service || !description) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const db = getDB();
    const newInquiry = {
      id: "inq-" + Date.now(),
      name,
      email,
      service,
      description,
      budget: budget || "Not specified",
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      status: "New"
    };
    db.inquiries.unshift(newInquiry);
    saveDB(db);
    res.json({ success: true, inquiry: newInquiry });
  });
  app.put("/api/inquiries/:id", (req, res) => {
    const db = getDB();
    const index = db.inquiries.findIndex((i) => i.id === req.params.id);
    if (index === -1) {
      return res.status(404).json({ error: "Inquiry not found" });
    }
    db.inquiries[index] = { ...db.inquiries[index], ...req.body };
    saveDB(db);
    res.json({ success: true, inquiry: db.inquiries[index] });
  });
  app.delete("/api/inquiries/:id", (req, res) => {
    const db = getDB();
    db.inquiries = db.inquiries.filter((i) => i.id !== req.params.id);
    saveDB(db);
    res.json({ success: true });
  });
  app.post("/api/admin/login", (req, res) => {
    const { password } = req.body;
    const adminPassword = process.env.ADMIN_PASSWORD || "Anish@2013";
    if (password === adminPassword) {
      res.json({ success: true, token: "admin-auth-token-secure-999" });
    } else {
      res.status(401).json({ error: "Invalid admin password" });
    }
  });
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const DIST_DIR = path.join(__dirname, "dist");
    app.use(express.static(DIST_DIR));
    app.get("*", (req, res) => {
      res.sendFile(path.join(DIST_DIR, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}
startServer();
