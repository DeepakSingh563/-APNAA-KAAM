// === THEME TOGGLE ===
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
let isDark = true;
themeToggle.addEventListener("click", () => {
  isDark = !isDark;
  document.documentElement.setAttribute(
    "data-theme",
    isDark ? "dark" : "light",
  );
  themeIcon.className = isDark ? "fas fa-moon" : "fas fa-sun";
});

// === HAMBURGER ===
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
hamburger.addEventListener("click", () => mobileMenu.classList.toggle("open"));
mobileMenu
  .querySelectorAll("a")
  .forEach((a) =>
    a.addEventListener("click", () => mobileMenu.classList.remove("open")),
  );

// === SCROLL REVEAL ===
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  },
  { threshold: 0.12 },
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// === PARTICLES ===
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
let W = (canvas.width = window.innerWidth);
let H = (canvas.height = window.innerHeight);
window.addEventListener("resize", () => {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
});

const PARTICLE_COUNT = 80;
const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
  x: Math.random() * W,
  y: Math.random() * H,
  vx: (Math.random() - 0.5) * 0.4,
  vy: (Math.random() - 0.5) * 0.4,
  size: Math.random() * 1.5 + 0.5,
  alpha: Math.random() * 0.4 + 0.1,
  color:
    Math.random() > 0.6
      ? "#00d4ff"
      : Math.random() > 0.5
        ? "#7c3aed"
        : "#06ffa5",
}));

function drawParticles() {
  ctx.clearRect(0, 0, W, H);
  particles.forEach((p) => {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0) p.x = W;
    if (p.x > W) p.x = 0;
    if (p.y < 0) p.y = H;
    if (p.y > H) p.y = 0;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.globalAlpha = p.alpha;
    ctx.fill();
    ctx.globalAlpha = 1;
  });
  // draw connections
  particles.forEach((p, i) => {
    for (let j = i + 1; j < particles.length; j++) {
      const q = particles[j];
      const dist = Math.hypot(p.x - q.x, p.y - q.y);
      if (dist < 100) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(q.x, q.y);
        ctx.strokeStyle = "#00d4ff";
        ctx.globalAlpha = (1 - dist / 100) * 0.08;
        ctx.lineWidth = 0.5;
        ctx.stroke();
        ctx.globalAlpha = 1;
      }
    }
  });
  requestAnimationFrame(drawParticles);
}
drawParticles();

// === NAVBAR SCROLL EFFECT ===
window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  nav.style.boxShadow =
    window.scrollY > 50 ? "0 4px 30px rgba(0,0,0,0.4)" : "none";
});

