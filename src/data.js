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
        label: "Modern Brand Sticky",
        code: `<style>
.nav-modern {
  position: sticky; top: 0;
  background: white;
  padding: 1rem 2rem;
  display: flex; justify-content: space-between; align-items: center;
  border-bottom: 3px solid {{Primary}};
  font-family: {{Font}};
  z-index: 1000;
}
.nav-brand { 
  font-weight: 900; font-size: 1.5rem; 
  color: {{Primary}};
  text-transform: uppercase;
  letter-spacing: -1px;
}
.nav-links { display: flex; gap: 2rem; }
.nav-links a {
  color: #333; text-decoration: none; font-weight: 600;
  position: relative;
}
.nav-links a::after {
  content: ''; position: absolute; bottom: -5px; left: 0; width: 0; height: 2px;
  background: {{Secondary}}; transition: width 0.3s;
}
.nav-links a:hover::after { width: 100%; }
.cta-btn {
  background: {{Primary}}; color: white !important;
  padding: 0.5rem 1.5rem; border-radius: 100px;
  transition: transform 0.2s;
}
.cta-btn:hover { transform: scale(1.05); }
</style>
<nav class="nav-modern">
  <div class="nav-brand">{{Idea}}</div>
  <div class="nav-links">
    <a href="#">Features</a>
    <a href="#">Pricing</a>
    <a href="#" class="cta-btn">Get Started</a>
  </div>
</nav>`
    },
    {
        label: "Dark Mode Cyber",
        code: `<style>
.nav-cyber {
  background: {{BgDark}};
  padding: 1.5rem;
  display: flex; justify-content: space-between; align-items: center;
  font-family: 'Roboto Mono', monospace;
  border-bottom: 1px solid {{Accent}};
}
.cyber-logo {
  color: {{Accent}}; font-size: 1.2rem;
  text-shadow: 0 0 10px {{Accent}};
}
.cyber-links a {
  color: {{TextLight}}; margin-left: 2rem; text-decoration: none;
  text-transform: uppercase; font-size: 0.9rem;
}
.cyber-links a:hover { color: {{Accent}}; }
</style>
<nav class="nav-cyber">
  <div class="cyber-logo">[ {{Idea}} ]</div>
  <div class="cyber-links">
    <a href="#">//Home</a>
    <a href="#">//About</a>
    <a href="#">//Contact</a>
  </div>
</nav>`
    },
    {
        label: "Glassmorphism Float",
        code: `<style>
.nav-glass-float {
  position: fixed; top: 2rem; left: 50%; transform: translateX(-50%);
  width: 90%; max-width: 1000px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(16px);
  padding: 1rem 2rem;
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,0.3);
  display: flex; justify-content: space-between; align-items: center;
  font-family: {{Font}};
  color: white;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  z-index: 1000;
}
.glass-brand { font-weight: bold; letter-spacing: 1px; }
.glass-menu a {
  color: white; text-decoration: none; margin-left: 1.5rem; opacity: 0.8;
}
.glass-menu a:hover { opacity: 1; text-decoration: underline; }
</style>
<nav class="nav-glass-float">
  <div class="glass-brand">{{Idea}}</div>
  <div class="glass-menu">
    <a href="#">Work</a>
    <a href="#">Studio</a>
    <a href="#">Cart (0)</a>
  </div>
</nav>`
    },
    {
        label: "Minimalist Sidebar",
        code: `<style>
.sidebar-min {
  position: absolute; left: 0; top: 0; bottom: 0;
  width: 80px; background: white;
  border-right: 1px solid #eee;
  display: flex; flex-direction: column; align-items: center; padding: 2rem 0;
  height: 100vh;
  z-index: 100;
}
.icon-box {
  width: 40px; height: 40px; background: {{Primary}};
  border-radius: 8px; margin-bottom: 2rem;
}
.nav-icons { display: flex; flex-direction: column; gap: 1.5rem; }
.nav-icon {
  width: 24px; height: 24px; background: #eee; border-radius: 4px;
}
.nav-icon:hover { background: {{Secondary}}; }
</style>
<aside class="sidebar-min">
  <div class="icon-box" title="{{Idea}}"></div>
  <div class="nav-icons">
    <div class="nav-icon"></div>
    <div class="nav-icon"></div>
    <div class="nav-icon"></div>
  </div>
</aside>`
    },
    {
        label: "Floating Oval Menu",
        code: `<style>
.nav-oval-container {
    position: fixed; bottom: 2rem; left: 0; width: 100%;
    display: flex; justify-content: center; pointer-events: none;
    z-index: 9999;
}
.nav-oval {
    background: rgba(20,20,20,0.9); backdrop-filter: blur(12px);
    padding: 0.75rem 2rem; border-radius: 100px;
    display: flex; align-items: center; gap: 2rem; pointer-events: auto;
    border: 1px solid rgba(255,255,255,0.1);
    box-shadow: 0 15px 35px rgba(0,0,0,0.2);
}
.nav-oval-link {
    color: #888; text-decoration: none; font-weight: 500;
    transition: all 0.2s; font-size: 0.95rem;
}
.nav-oval-link:hover, .nav-oval-link.active {
    color: white; transform: translateY(-2px);
}
.nav-oval-sep { width: 1px; height: 1.5rem; background: rgba(255,255,255,0.2); }
.nav-oval-btn {
    background: {{Primary}}; color: white; border: none;
    padding: 0.5rem 1.25rem; border-radius: 50px; font-weight: bold;
    cursor: pointer;
}
</style>
<div class="nav-oval-container">
    <nav class="nav-oval">
        <a href="#" class="nav-oval-link active">Home</a>
        <a href="#" class="nav-oval-link">Work</a>
        <a href="#" class="nav-oval-link">Lab</a>
        <div class="nav-oval-sep"></div>
        <a href="#" class="nav-oval-link">{{Idea}}</a>
        <button class="nav-oval-btn">Connect</button>
    </nav>
</div>`
    },
    {
        label: "Fullscreen Overlay Menu",
        code: `<style>
.nav-fs-header {
    position: fixed; top: 0; left: 0; width: 100%;
    padding: 2rem; display: flex; justify-content: space-between; align-items: center;
    z-index: 10000; mix-blend-mode: difference; color: white;
}
.fs-toggle {
    cursor: pointer; font-size: 1.2rem; font-weight: bold; text-transform: uppercase;
    letter-spacing: 1px;
}
.fs-overlay {
    position: fixed; inset: 0; background: {{BgDark}};
    display: flex; flex-direction: column; justify-content: center; align-items: center;
    transform: translateY(-100%); transition: transform 0.6s cubic-bezier(0.7,0,0.3,1);
    z-index: 9999;
}
.fs-overlay.open { transform: translateY(0); }
.fs-link {
    font-size: 5rem; font-weight: 900; color: transparent;
    -webkit-text-stroke: 2px rgba(255,255,255,0.3);
    text-decoration: none; margin: 0.5rem 0; transition: 0.3s;
    font-family: {{Font}};
}
.fs-link:hover { color: {{Primary}}; -webkit-text-stroke: 0; transform: scale(1.05); }
</style>
<div class="nav-fs-header">
    <div style="font-weight:900;">{{Idea}}</div>
    <div class="fs-toggle" onclick="document.querySelector('.fs-overlay').classList.toggle('open')">Menu</div>
</div>
<div class="fs-overlay">
    <a href="#" class="fs-link">Projects</a>
    <a href="#" class="fs-link">Services</a>
    <a href="#" class="fs-link">About</a>
    <a href="#" class="fs-link">Contact</a>
</div>`
    },
    {
        label: "Neo-Brutalist Bold",
        code: `<style>
.nav-brut {
    border-bottom: 4px solid black; padding: 1.5rem 2rem;
    display: flex; justify-content: space-between; align-items: center;
    background: white; font-family: {{Font}};
}
.nb-brand {
    font-size: 2rem; font-weight: 900; letter-spacing: -1px;
    background: {{Primary}}; color: white; padding: 0.2rem 0.8rem;
    border: 3px solid black; box-shadow: 4px 4px 0 black;
}
.nb-links a {
    color: black; text-decoration: none; font-weight: 700; margin-left: 2rem;
    font-size: 1.1rem; text-transform: uppercase;
}
.nb-links a:hover {
    background: {{Secondary}}; color: black;
}
</style>
<nav class="nav-brut">
    <div class="nb-brand">{{Idea}}</div>
    <div class="nb-links">
        <a href="#">Work</a>
        <a href="#">Shop</a>
        <a href="#">Info</a>
    </div>
</nav>`
    },
    {
        label: "Bottom Mobile Dock",
        code: `<style>
.nav-dock-container {
    position: fixed; bottom: 1.5rem; left: 50%; transform: translateX(-50%);
    z-index: 9999;
}
.nav-dock {
    background: rgba(255,255,255,0.8); backdrop-filter: blur(20px);
    padding: 0.8rem; border-radius: 24px;
    display: flex; gap: 0.8rem;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    border: 1px solid rgba(255,255,255,0.5);
}
.dock-item {
    width: 3rem; height: 3rem; background: #f0f0f0; border-radius: 16px;
    display: flex; align-items: center; justify-content: center;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer; font-size: 1.2rem;
}
.dock-item:hover {
    transform: translateY(-8px) scale(1.1);
    background: {{Primary}}; color: white;
    margin: 0 0.4rem;
}
</style>
<div class="nav-dock-container">
    <nav class="nav-dock">
        <div class="dock-item" title="Home">🏠</div>
        <div class="dock-item" title="Search">🔍</div>
        <div class="dock-item" title="Add">➕</div>
        <div class="dock-item" title="Profile">👤</div>
    </nav>
</div>`
    }
];

export const headerContent = [
    {
        label: "Gradient Typography Hero",
        code: `<style>
.hero-gradient {
  min-height: 80vh;
  display: flex; flex-direction: column; justify-content: center; align-items: center;
  background: white; color: #111;
  text-align: center;
  padding: 2rem;
  font-family: {{Font}};
}
.big-text {
  font-size: 5rem; font-weight: 900; line-height: 1;
  background: linear-gradient(135deg, {{Primary}} 0%, {{Secondary}} 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 2rem;
}
.sub-text { font-size: 1.5rem; color: #666; max-width: 600px; margin-bottom: 3rem; }
.hero-cta {
  padding: 1rem 3rem; background: {{Primary}}; color: white;
  border: none; border-radius: 12px; font-size: 1.25rem; cursor: pointer;
  box-shadow: 0 10px 25px -5px {{Primary}};
}
</style>
<header class="hero-gradient">
  <h1 class="big-text">{{Idea}}</h1>
  <p class="sub-text">Revolutionizing the industry with AI-driven insights and premium design.</p>
  <button class="hero-cta">Get Started Now</button>
</header>`
    },
    {
        label: "Dark Mode SaaS Header",
        code: `<style>
.saas-dark {
  background: {{BgDark}};
  color: {{TextLight}};
  padding: 6rem 2rem;
  display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;
  font-family: 'Inter', sans-serif;
}
.tagline { color: {{Accent}}; font-weight: bold; margin-bottom: 1rem; display: block; }
.display-title { font-size: 3.5rem; line-height: 1.1; margin-bottom: 1.5rem; font-weight: 800; }
.mockup {
  background: linear-gradient(to bottom right, #333, #111);
  border-radius: 20px;
  height: 400px;
  border: 1px solid #444;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
}
@media(max-width: 800px) { .saas-dark { grid-template-columns: 1fr; } }
</style>
<header class="saas-dark">
  <div>
    <span class="tagline">v2.0 IS LIVE</span>
    <h1 class="display-title">Build your future with {{Idea}}</h1>
    <p style="color:#aaa; font-size: 1.2rem; margin-bottom: 2rem;">Stop wasting time on manual tasks. Automate everything.</p>
    <div style="display:flex; gap:1rem;">
      <button style="padding:1rem 2rem; background:{{TextLight}}; color:{{BgDark}}; border:none; border-radius:8px; font-weight:bold;">Start Free</button>
      <button style="padding:1rem 2rem; background:transparent; color:{{TextLight}}; border:1px solid #444; border-radius:8px;">Demo</button>
    </div>
  </div>
  <div class="mockup"></div>
</header>`
    },
    {
        label: "Visual Centerpiece",
        code: `<style>
.visual-hero {
  height: 100vh;
  position: relative;
  background: {{Primary}};
  display: flex; align-items: center; justify-content: center;
  overflow: hidden;
}
.circle-bg {
  position: absolute; width: 60rem; height: 60rem;
  background: {{Secondary}};
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.5;
}
.v-content {
  position: relative; z-index: 10;
  background: rgba(255,255,255,0.9);
  padding: 4rem;
  border-radius: 30px;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0,0,0,0.15);
  max-width: 600px;
}
.v-title { color: {{BgDark}}; font-size: 2.5rem; margin-bottom: 1rem; font-family: {{Font}};}
</style>
<section class="visual-hero">
  <div class="circle-bg"></div>
  <div class="v-content">
    <h1 class="v-title">{{Idea}}</h1>
    <p>Where creativity meets logic.</p>
  </div>
</section>`
    },
    {
        label: "Vertical Slider Concept",
        code: `<style>
.hero-v-slide {
    height: 100vh; display: grid; grid-template-columns: 1.5fr 1fr;
    background: {{BgDark}}; color: white; overflow: hidden;
}
.v-left {
    padding: 4rem; display: flex; flex-direction: column; justify-content: center;
    position: relative;
}
.v-right {
    background: url('https://source.unsplash.com/random/800x1200/?architecture') center/cover;
    position: relative;
}
.v-right::after {
    content: ''; position: absolute; inset: 0; background: rgba(0,0,0,0.2);
}
.v-big {
    font-size: 5rem; font-weight: 800; line-height: 0.95; margin-bottom: 2rem;
    position: relative; z-index: 1;
}
.v-detail {
    border-left: 2px solid {{Accent}}; padding-left: 2rem; 
    font-size: 1.1rem; color: #aaa; max-width: 400px;
}
.v-controls {
    position: absolute; bottom: 4rem; left: 4rem; display: flex; gap: 1rem;
}
.v-btn {
    width: 3rem; height: 3rem; border: 1px solid rgba(255,255,255,0.3);
    border-radius: 50%; display: flex; align-items: center; justify-content: center;
    color: white; cursor: pointer; transition: 0.2s;
}
.v-btn:hover { background: {{Primary}}; border-color: {{Primary}}; }
</style>
<header class="hero-v-slide">
    <div class="v-left">
        <h1 class="v-big">Design<br>Beyond<br>Limits.</h1>
        <div class="v-detail">
            {{Idea}} provides the ultimate toolkit for modern creators. 
            Experience freedom like never before.
        </div>
        <div class="v-controls">
            <div class="v-btn">←</div>
            <div class="v-btn">→</div>
        </div>
    </div>
    <div class="v-right"></div>
</header>`
    },
    {
        label: "Brutalist Big Typo",
        code: `<style>
.hero-brut {
    min-height: 100vh; background: {{Primary}}; color: black;
    padding: 2rem; display: flex; flex-direction: column; justify-content: space-between;
    border: 1rem solid white;
}
.brut-top {
    display: flex; justify-content: space-between; font-weight: bold;
    border-bottom: 2px solid black; padding-bottom: 1rem;
}
.brut-mid {
    font-size: 14vw; line-height: 0.85; font-weight: 900;
    text-transform: uppercase; word-break: break-all;
    mix-blend-mode: multiply;
}
.brut-bot {
    display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;
    border-top: 2px solid black; padding-top: 1rem;
}
.brut-cta {
    background: black; color: white; padding: 1.5rem 3rem;
    font-size: 1.5rem; font-weight: bold; border: none; cursor: pointer;
    align-self: flex-start; transition: transform 0.2s;
}
.brut-cta:hover { transform: translate(5px, 5px); }
</style>
<header class="hero-brut">
    <div class="brut-top">
        <span>● LIVE</span>
        <span>{{Idea}} ©2026</span>
    </div>
    <div class="brut-mid">
        MAKE IT<br>HAPPEN<br>NOW
    </div>
    <div class="brut-bot">
        <p style="font-size: 1.5rem; font-weight: 500;">
            The no-nonsense solution for serious players.
            Stop scrolling, start building.
        </p>
        <button class="brut-cta">START TRIAL ↗</button>
    </div>
</header>`
    },
    {
        label: "Isometric 3D Illustration",
        code: `<style>
.hero-iso {
    min-height: 90vh; background: #f4f4f4;
    display: flex; align-items: center; justify-content: center;
    perspective: 1000px; overflow: hidden;
}
.iso-card {
    background: white; padding: 4rem; border-radius: 40px;
    box-shadow: 20px 20px 60px rgba(0,0,0,0.1), -20px -20px 60px white;
    transform: rotateX(10deg) rotateY(-10deg);
    transition: transform 0.5s;
    text-align: center; border: 1px solid white;
}
.iso-card:hover { transform: rotateX(0deg) rotateY(0deg); }
.iso-title {
    font-size: 4rem; background: linear-gradient(to right, {{Primary}}, {{Secondary}});
    -webkit-background-clip: text; color: transparent; margin-bottom: 1rem;
}
</style>
<header class="hero-iso">
    <div class="iso-card">
        <h1 class="iso-title">{{Idea}}</h1>
        <p style="font-size: 1.2rem; color: #888;">Perspective changes everything.</p>
    </div>
</header>`
    },
    {
        label: "Glitch Cyberpunk",
        code: `<style>
.hero-glitch {
    background: #000; color: #0f0; min-height: 100vh;
    display: flex; flex-direction: column; justify-content: center; align-items: center;
    font-family: 'Courier New', monospace;
    position: relative; overflow: hidden;
}
.glitch-text {
    font-size: 6rem; font-weight: bold; position: relative;
    text-shadow: 2px 2px {{Accent}};
    animation: glitch 1s infinite;
}
@keyframes glitch {
    0% { transform: translate(0); }
    20% { transform: translate(-2px, 2px); }
    40% { transform: translate(-2px, -2px); }
    60% { transform: translate(2px, 2px); }
    80% { transform: translate(2px, -2px); }
    100% { transform: translate(0); }
}
.scanline {
    position: absolute; top: 0; left: 0; width: 100%; height: 5px;
    background: rgba(0, 255, 0, 0.1);
    animation: scan 3s linear infinite;
}
@keyframes scan { from { top: 0; } to { top: 100%; } }
</style>
<header class="hero-glitch">
    <div class="scanline"></div>
    <h1 class="glitch-text">{{Idea}}</h1>
    <p>SYSTEM.INIT_SEQUENCE_COMPLETE</p>
    <button style="margin-top: 2rem; background: transparent; border: 1px solid #0f0; color: #0f0; padding: 1rem 2rem; font-family: inherit; cursor: pointer;">ENTER MATRIX</button>
</header>`
    }
];

export const footerLayouts = [
    {
        label: "Corporate Multi-Column",
        code: `<style>
.footer-corp {
  background: {{BgDark}};
  color: #aaa;
  padding: 4rem 2rem;
  font-family: {{Font}};
}
.col-grid {
  display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 2rem;
  max-width: 1200px; margin: 0 auto;
}
.f-brand { color: white; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; display: block;}
.f-head { color: white; font-weight: 600; margin-bottom: 1rem; }
.f-link { display: block; color: inherit; text-decoration: none; margin-bottom: 0.5rem; }
.f-link:hover { color: {{Primary}}; }
</style>
<footer class="footer-corp">
  <div class="col-grid">
    <div>
      <span class="f-brand">{{Idea}}</span>
      <p>Building the future, one pixel at a time.</p>
    </div>
    <div>
      <div class="f-head">Product</div>
      <a href="#" class="f-link">Features</a>
      <a href="#" class="f-link">Enterprise</a>
    </div>
    <div>
      <div class="f-head">Company</div>
      <a href="#" class="f-link">About</a>
      <a href="#" class="f-link">Careers</a>
    </div>
    <div>
      <div class="f-head">Legal</div>
      <a href="#" class="f-link">Privacy</a>
      <a href="#" class="f-link">Terms</a>
    </div>
  </div>
</footer>`
    },
    {
        label: "Neon Social Bar",
        code: `<style>
.footer-neon {
  background: black;
  border-top: 4px solid {{Accent}};
  padding: 2rem;
  text-align: center;
  color: white;
}
.neon-btn {
  display: inline-block; width: 50px; height: 50px;
  background: #222; border-radius: 50%;
  margin: 0 0.5rem; line-height: 50px;
  transition: all 0.3s;
  color: {{Accent}}; font-weight: bold;
}
.neon-btn:hover {
  background: {{Accent}}; color: black;
  box-shadow: 0 0 20px {{Accent}};
  transform: translateY(-5px);
}
</style>
<footer class="footer-neon">
  <h2 style="margin-bottom: 2rem;">{{Idea}}</h2>
  <div>
    <a href="#" class="neon-btn">Tw</a>
    <a href="#" class="neon-btn">In</a>
    <a href="#" class="neon-btn">Fb</a>
    <a href="#" class="neon-btn">Yt</a>
  </div>
</footer>`
    },
    {
        label: "Creative Big Type",
        code: `<style>
.footer-big {
  background: {{Primary}};
  color: white;
  padding: 5vh 2rem;
  display: flex; flex-direction: column; align-items: center; text-align: center;
}
.giant-text {
  font-size: 15vw; font-weight: 900; line-height: 0.8; opacity: 0.2;
  user-select: none;
}
.footer-nav { margin-top: -5vw; z-index: 10; font-size: 1.5rem; font-weight: bold; }
.footer-nav a { color: white; margin: 0 1.5rem; text-decoration: none; }
.footer-nav a:hover { text-decoration: underline; }
</style>
<footer class="footer-big">
  <div class="giant-text">{{Idea}}</div>
  <nav class="footer-nav">
    <a href="#">Say Hello</a>
    <a href="#">Work</a>
    <a href="#">Services</a>
  </nav>
</footer>`
    },
    {
        label: "Newsletter Prominent",
        code: `<style>
.foot-news {
    background: {{BgDark}}; color: white;
    padding: 6rem 2rem; text-align: center;
}
.news-box {
    max-width: 600px; margin: 0 auto;
    background: rgba(255,255,255,0.05); padding: 3rem;
    border-radius: 20px; border: 1px solid rgba(255,255,255,0.1);
}
.news-input {
    width: 60%; padding: 1rem; border-radius: 8px 0 0 8px; border: none;
    font-size: 1rem; outline: none;
}
.news-btn {
    width: 30%; padding: 1rem; background: {{Primary}}; color: white;
    border: none; border-radius: 0 8px 8px 0; font-weight: bold; cursor: pointer;
}
.f-bottom { margin-top: 4rem; display: flex; justify-content: center; gap: 2rem; color: #666; font-size: 0.9rem; }
</style>
<footer class="foot-news">
    <div class="news-box">
        <h2 style="margin-bottom: 1rem;">Join the {{Idea}} Club</h2>
        <p style="margin-bottom: 2rem; color: #999;">Weekly insights, no spam. Unsubscribe anytime.</p>
        <div style="display:flex; justify-content:center;">
            <input type="email" placeholder="you@example.com" class="news-input">
            <button class="news-btn">Subscribe</button>
        </div>
    </div>
    <div class="f-bottom">
        <span>© 2026 {{Idea}}</span>
        <a href="#" style="color:inherit;">Twitter</a>
        <a href="#" style="color:inherit;">LinkedIn</a>
    </div>
</footer>`
    },
    {
        label: "Asymmetric Art Grid",
        code: `<style>
.foot-art {
    display: grid; grid-template-columns: 2fr 1fr 1.5fr;
    min-height: 400px;
    font-family: {{Font}}; color: white;
}
.fa-1 { background: #111; padding: 4rem; display: flex; flex-direction: column; justify-content: space-between; }
.fa-2 { background: {{Primary}}; padding: 4rem; color: white; }
.fa-3 { background: #222; padding: 4rem; }
.fa-big { font-size: 3rem; font-weight: 900; line-height: 1; }
.fa-link { display: block; font-size: 1.5rem; margin-bottom: 1rem; color: white; text-decoration: none; border-bottom: 1px solid rgba(255,255,255,0.2); padding-bottom: 0.5rem; }
.fa-link:hover { padding-left: 1rem; transition: 0.3s; border-color: white; }
</style>
<footer class="foot-art">
    <div class="fa-1">
        <div class="fa-big">{{Idea}}</div>
        <p>Designed in California.<br>Assembled in the Cloud.</p>
    </div>
    <div class="fa-2">
        <h4>Connect</h4>
        <br>
        <p>hello@{{Idea}}.com</p>
        <p>+1 (555) 0123-4567</p>
    </div>
    <div class="fa-3">
        <a href="#" class="fa-link">Work</a>
        <a href="#" class="fa-link">Studio</a>
        <a href="#" class="fa-link">Press</a>
        <a href="#" class="fa-link">Careers</a>
    </div>
</footer>`
    },
    {
        label: "Sitemap Directory",
        code: `<style>
.foot-dir {
    background: white; padding: 5rem 2rem;
    border-top: 10px solid {{Secondary}};
}
.dir-grid {
    display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 3rem; max-width: 1400px; margin: 0 auto;
}
.dir-col h4 {
    color: black; font-weight: 800; margin-bottom: 1.5rem;
    text-transform: uppercase; font-size: 0.8rem; letter-spacing: 1px;
}
.dir-col ul { list-style: none; padding: 0; }
.dir-col li { margin-bottom: 0.8rem; }
.dir-col a { color: #666; text-decoration: none; font-size: 0.95rem; }
.dir-col a:hover { color: {{Primary}}; text-decoration: underline; }
</style>
<footer class="foot-dir">
    <div class="dir-grid">
        <div class="dir-col">
            <h4>Platform</h4>
            <ul><li><a href="#">Overview</a></li><li><a href="#">Features</a></li><li><a href="#">Pricing</a></li><li><a href="#">Releases</a></li></ul>
        </div>
        <div class="dir-col">
            <h4>Company</h4>
            <ul><li><a href="#">About Us</a></li><li><a href="#">Careers</a></li><li><a href="#">News</a></li><li><a href="#">Contact</a></li></ul>
        </div>
        <div class="dir-col">
            <h4>Resources</h4>
            <ul><li><a href="#">Blog</a></li><li><a href="#">Newsletter</a></li><li><a href="#">Events</a></li><li><a href="#">Help Center</a></li></ul>
        </div>
        <div class="dir-col">
            <h4>Legal</h4>
            <ul><li><a href="#">Terms</a></li><li><a href="#">Privacy</a></li><li><a href="#">Cookies</a></li><li><a href="#">Licenses</a></li></ul>
        </div>
        <div class="dir-col">
            <h4>Social</h4>
            <ul><li><a href="#">Twitter</a></li><li><a href="#">LinkedIn</a></li><li><a href="#">Instagram</a></li><li><a href="#">GitHub</a></li></ul>
        </div>
    </div>
</footer>`
    },
    {
        label: "Interactive Map Footer",
        code: `<style>
.foot-map {
    position: relative; height: 500px;
    background: #e5e5e5; display: flex;
}
.map-overlay {
    background: {{BgDark}}; color: white; width: 400px; padding: 4rem;
    z-index: 10; display: flex; flex-direction: column; justify-content: center;
}
.map-bg {
    flex: 1; opacity: 0.6;
    background: url('https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-122.4194,37.7749,12,0/800x500?access_token=YOUR_TOKEN_HERE') center/cover;
    /* Note: Placeholder image used for map effect */
    background-color: #ddd; display: flex; align-items: center; justify-content: center; color: #555; font-weight: bold;
}
.fm-title { font-size: 2rem; margin-bottom: 2rem; }
.fm-row { display: flex; gap: 1rem; margin-bottom: 1.5rem; align-items: center; }
.fm-icon { 
    width: 2rem; height: 2rem; background: {{Primary}}; 
    border-radius: 50%; display: flex; align-items: center; justify-content: center;
}
</style>
<footer class="foot-map">
    <div class="map-overlay">
        <h3 class="fm-title">Visit {{Idea}}</h3>
        <div class="fm-row">
            <div class="fm-icon">📍</div>
            <div>123 Innovation Dr.<br>San Francisco, CA 94103</div>
        </div>
        <div class="fm-row">
            <div class="fm-icon">✉️</div>
            <div>contact@{{Idea}}.com</div>
        </div>
        <div class="fm-row">
            <div class="fm-icon">📞</div>
            <div>+1 (800) 555-0199</div>
        </div>
    </div>
    <div class="map-bg">MAP PREVIEW (Interactive API required)</div>
</footer>`
    },
    {
        label: "Minimal Centered Stack",
        code: `<style>
.foot-stack {
    padding: 6rem 2rem; background: white; text-align: center;
    display: flex; flex-direction: column; align-items: center; gap: 3rem;
}
.fs-logo {
    width: 60px; height: 60px; background: {{Primary}};
    border-radius: 12px; transform: rotate(10deg);
}
.fs-nav {
    display: flex; gap: 2rem;
}
.fs-nav a {
    text-decoration: none; color: #111; font-weight: 500; font-size: 1.1rem;
}
.fs-social { display: flex; gap: 1rem; }
.fs-s-icon { 
    width: 40px; height: 40px; border: 1px solid #eee; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    transition: 0.2s; color: #555; text-decoration: none;
}
.fs-s-icon:hover { background: black; color: white; border-color: black; }
</style>
<footer class="foot-stack">
    <div class="fs-logo"></div>
    <h3>{{Idea}}</h3>
    <nav class="fs-nav">
        <a href="#">About</a>
        <a href="#">Team</a>
        <a href="#">Manifesto</a>
        <a href="#">Contact</a>
    </nav>
    <div class="fs-social">
        <a href="#" class="fs-s-icon">Tw</a>
        <a href="#" class="fs-s-icon">Ig</a>
        <a href="#" class="fs-s-icon">Li</a>
    </div>
    <div style="color: #999; font-size: 0.9rem;">
        © 2026 {{Idea}} Inc. Built with love.
    </div>
</footer>`
    }
];
