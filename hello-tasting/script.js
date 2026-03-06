// Theme Toggle Functionality
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const themeText = document.getElementById("themeText");
const body = document.body;

// Check for saved theme or default to light
let currentTheme = "light";

function updateTheme() {
  if (currentTheme === "dark") {
    body.setAttribute("data-theme", "dark");
    themeIcon.className = "fas fa-sun";
    themeText.textContent = "Light Mode";
  } else {
    body.removeAttribute("data-theme");
    themeIcon.className = "fas fa-moon";
    themeText.textContent = "Dark Mode";
  }
}

themeToggle.addEventListener("click", () => {
  currentTheme = currentTheme === "light" ? "dark" : "light";
  updateTheme();
});

// Page Loader
window.addEventListener("load", () => {
  const loader = document.getElementById("pageLoader");
  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }, 1000);
});

// Particle System
function createParticles() {
  const particlesContainer = document.getElementById("particles");

  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 15 + "s";
    particle.style.animationDuration = Math.random() * 10 + 10 + "s";
    particlesContainer.appendChild(particle);
  }
}

// Scroll Animations
function handleScrollAnimations() {
  const elements = document.querySelectorAll(".fade-in");

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add("visible");
    }
  });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Mouse Follow Effect for Hero
document.addEventListener("mousemove", (e) => {
  const hero = document.querySelector(".hero");
  if (hero) {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    hero.style.background = `
                    radial-gradient(circle at ${x * 100}% ${y * 100}%, 
                    rgba(99, 102, 241, 0.1) 0%, 
                    transparent 50%)
                `;
  }
});

// Enhanced Hover Effects
document.querySelectorAll(".interactive-element").forEach((element) => {
  element.addEventListener("mouseenter", function () {
    this.style.transform =
      this.style.transform.replace("translateY(0px)", "") + " translateY(-5px)";
  });

  element.addEventListener("mouseleave", function () {
    this.style.transform =
      this.style.transform.replace("translateY(-5px)", "") + " translateY(0px)";
  });
});

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  updateTheme();
  createParticles();
  handleScrollAnimations();

  // Add scroll listener
  window.addEventListener("scroll", handleScrollAnimations);

  // Add entrance animations with delays
  setTimeout(() => {
    document.querySelector(".hero-content").style.animation =
      "fadeInUp 1s ease-out";
  }, 1200);
});

// Performance optimization
let ticking = false;

function updateScrollAnimations() {
  handleScrollAnimations();
  ticking = false;
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(updateScrollAnimations);
    ticking = true;
  }
});
