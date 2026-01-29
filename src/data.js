export const niches = [
    "Pet Care", "Remote Work", "Personal Finance", "Sustainable Living",
    "Crypto & Web3", "Mental Health", "Home Gardening", "eSports Coaching",
    "Vintage Fashion", "Micro-SaaS", "Local Tourism", "Digital Art",
    "Meal Planning", "Language Learning", "Cybersecurity", "DIY Repairs"
];

export const audiences = [
    "College Students", "Stay-at-home Parents", "Digital Nomads", "Retirees",
    "Small Business Owners", "Developers", "Fitness Enthusiasts", "Gamers",
    "Introverts", "Eco-conscious Consumers", "Teachers", "Freelancers"
];

export const features = [
    "AI-powered recommendations", "Community-driven content", "Gamified progress tracking",
    "Real-time collaboration", "Blockchain verification", "Offline-first mode",
    "Voice interface", "Subscription box integration", "Augmented Reality view",
    "One-click automation", "Anonymous feedback", "Expert consultations"
];

export const revenueModels = [
    "Monthly Subscription", "Freemium with Pro features", "Ad-supported",
    "Marketplace Commission", "Affiliate Marketing", "Pay-per-use API",
    "Sponsorships", "Enterprise Licensing", "Digital Goods Sales"
];

export const prefixes = [
    "Uber for", "Tinder for", "Airbnb for", "Netflix for", "Spotify for",
    "A Wikipedia for", "A marketplace for", "A social network for"
];

// Component Generator Data

export const navStyles = [
    {
        label: "Minimalist sticky top",
        code: `<style>
.nav-minimal {
  position: sticky;
  top: 0;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
}
.nav-brand { font-weight: bold; font-size: 1.25rem; }
.nav-links a {
  color: #4b5563;
  text-decoration: none;
  margin-left: 1.5rem;
  transition: color 0.2s;
}
.nav-links a:hover { color: black; }
</style>

<nav class="nav-minimal">
  <div class="nav-brand">{{Idea}}</div>
  <div class="nav-links">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </div>
</nav>`
    },
    {
        label: "Sidebar hidden menu",
        code: `<style>
.sidebar {
  position: fixed;
  top: 0; left: 0; bottom: 0;
  width: 250px;
  background: #111827;
  color: white;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  padding: 2rem;
}
.sidebar.active { transform: translateX(0); }
.menu-btn {
  position: fixed;
  top: 1rem; left: 1rem;
  z-index: 100;
  background: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
}
.sidebar-links { list-style: none; padding: 0; margin-top: 2rem; }
.sidebar-links a {
  display: block;
  color: #9ca3af;
  text-decoration: none;
  padding: 0.5rem 0;
}
.sidebar-links a:hover { color: white; }
</style>

<button class="menu-btn" onclick="document.querySelector('.sidebar').classList.toggle('active')">☰</button>

<div class="sidebar">
  <h2>{{Idea}}</h2>
  <ul class="sidebar-links">
    <li><a href="#">Dashboard</a></li>
    <li><a href="#">Profile</a></li>
    <li><a href="#">Settings</a></li>
  </ul>
</div>`
    },
    {
        label: "Transparent glassmorphism",
        code: `<style>
.nav-glass {
  position: fixed;
  top: 0; width: 100%;
  padding: 1.5rem 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  z-index: 1000;
}
.nav-glass a {
  color: white;
  text-decoration: none;
  margin-left: 2rem;
  opacity: 0.8;
}
.nav-glass a:hover { opacity: 1; text-decoration: underline; }
</style>

<nav class="nav-glass">
  <div style="font-weight: bold; font-size: 1.2rem;">{{Idea}}</div>
  <div>
      <a href="#">Product</a>
      <a href="#">Login</a>
  </div>
</nav>`
    }
];

export const headerContent = [
    {
        label: "Hero image with bold typography",
        code: `<style>
.hero-bold {
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  background: url('https://source.unsplash.com/random/1920x1080/?business') center/cover no-repeat;
}
.hero-overlay {
  position: absolute; inset: 0;
  background: rgba(0,0,0,0.5);
}
.hero-content { position: relative; z-index: 1; padding: 1rem; }
.hero-title { font-size: 4rem; font-weight: 800; margin-bottom: 1rem; line-height: 1.1; }
.hero-btn {
  background: #2563eb;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1.1rem;
  cursor: pointer;
  margin-top: 1rem;
}
</style>

<section class="hero-bold">
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <h1 class="hero-title">Welcome to<br>{{Idea}}</h1>
    <p style="font-size: 1.25rem; opacity: 0.9;">The best solution for your needs.</p>
    <button class="hero-btn">Get Started</button>
  </div>
</section>`
    },
    {
        label: "Split screen (Image + Text)",
        code: `<style>
.split-hero {
  display: flex;
  min-height: 100vh;
}
.split-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem;
  background: white;
  color: #1f2937;
}
.split-image {
  flex: 1;
  background: url('https://source.unsplash.com/random/800x1200/?minimal') center/cover;
}
@media (max-width: 768px) { .split-hero { flex-direction: column; } }
</style>

<div class="split-hero">
  <div class="split-text">
    <h1 style="font-size: 3rem; margin-bottom: 1.5rem;">{{Idea}}</h1>
    <p style="font-size: 1.25rem; color: #4b5563; line-height: 1.6;">
      Reinventing the way you experience the web. Simple, fast, and effective.
    </p>
  </div>
  <div class="split-image"></div>
</div>`
    },
    {
        label: "Video background loop",
        code: `<style>
.video-hero {
  position: relative;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bg-video {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%; min-height: 100%;
  z-index: -1;
  object-fit: cover;
}
.video-content {
  color: white;
  z-index: 1;
  text-align: center;
  background: rgba(0,0,0,0.3);
  padding: 2rem;
  border-radius: 1rem;
  backdrop-filter: blur(5px);
}
</style>

<header class="video-hero">
  <!-- Replace src with your video -->
  <video autoplay loop muted class="bg-video">
    <source src="https://assets.mixkit.co/videos/preview/mixkit-stars-in-space-1610-large.mp4" type="video/mp4">
  </video>
  <div class="video-content">
    <h1 style="font-size: 3.5rem; margin: 0;">Experience {{Idea}}</h1>
  </div>
</header>`
    }
];

export const footerLayouts = [
    {
        label: "Simple single column",
        code: `<style>
.footer-simple {
  background: #f3f4f6;
  padding: 3rem 1rem;
  text-align: center;
  color: #4b5563;
}
.footer-links a {
  margin: 0 1rem;
  color: inherit;
  text-decoration: none;
}
.footer-links a:hover { color: black; }
</style>

<footer class="footer-simple">
  <h4 style="font-weight: bold; font-size: 1.25rem; margin-bottom: 1rem;">{{Idea}}</h4>
  <div class="footer-links" style="margin-bottom: 1.5rem;">
    <a href="#">Twitter</a>
    <a href="#">Instagram</a>
    <a href="#">LinkedIn</a>
  </div>
  <p>&copy; 2026 {{Idea}}. All rights reserved.</p>
</footer>`
    },
    {
        label: "Grid with social feed",
        code: `<style>
.footer-grid {
  background: #111827;
  color: white;
  padding: 4rem 2rem;
}
.grid-container-footer {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}
.footer-col h3 { margin-bottom: 1rem; font-size: 1.1rem; }
.footer-col ul { list-style: none; padding: 0; }
.footer-col a { color: #9ca3af; text-decoration: none; display: block; margin-bottom: 0.5rem; }
.footer-col a:hover { color: white; }
.social-preview { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.5rem; }
.social-box { background: #374151; aspect-ratio: 1; border-radius: 4px; }
</style>

<footer class="footer-grid">
  <div class="grid-container-footer">
    <div class="footer-col">
      <h3>{{Idea}}</h3>
      <p style="color: #9ca3af;">Making the world better, one click at a time.</p>
    </div>
    <div class="footer-col">
      <h3>Links</h3>
      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Blog</a></li>
      </ul>
    </div>
    <div class="footer-col" style="grid-column: span 2;">
      <h3>Latest Updates</h3>
      <div class="social-preview">
        <div class="social-box"></div>
        <div class="social-box"></div>
        <div class="social-box"></div>
        <div class="social-box"></div>
      </div>
    </div>
  </div>
</footer>`
    },
    {
        label: "Minimal copyright only",
        code: `<style>
.footer-minimal {
  border-top: 1px solid #e5e7eb;
  padding: 2rem;
  margin-top: auto;
}
.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  color: #6b7280;
  font-size: 0.875rem;
}
</style>

<footer class="footer-minimal">
  <div class="footer-content">
    <span>&copy; {{Idea}} Inc.</span>
    <div>
      <a href="#" style="color: inherit; text-decoration: none; margin-left: 1rem;">Privacy</a>
      <a href="#" style="color: inherit; text-decoration: none; margin-left: 1rem;">Terms</a>
    </div>
  </div>
</footer>`
    }
];
