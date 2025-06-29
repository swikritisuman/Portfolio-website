// ---------- Typing Animation for Home Section ----------
const roles = ["web developer", "frontend designer", "UI/UX enthusiast"];
let idx = 0, char = 0, current = '', isDeleting = false;
const target = document.querySelector('.home-content h3:nth-of-type(2)');

function type() {
  const full = roles[idx];
  current = isDeleting ? full.substring(0, char--) : full.substring(0, char++);
  if (target) target.textContent = current;

  if (!isDeleting && char === full.length) {
    isDeleting = true;
    setTimeout(type, 1000); // pause before delete
  } else if (isDeleting && char === 0) {
    isDeleting = false;
    idx = (idx + 1) % roles.length;
    setTimeout(type, 300);
  } else {
    setTimeout(type, isDeleting ? 80 : 120);
  }
}
if (target) type();

// ---------- Fade-in Animation for About Section ----------
document.addEventListener("DOMContentLoaded", () => {
  console.log("About Me section loaded");
  const fades = document.querySelectorAll(".fade-in");
  fades.forEach(el => {
    el.style.opacity = 1;
  });
});

// ---------- Skills Section JS (optional log or future enhancement) ----------
console.log("Skills section loaded!");

// ---------- Projects Section JS (optional log or future enhancement) ----------
console.log("Projects section loaded!");

// ---------- Contact Form Submit ----------
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", () => {
    alert("Thank you! Your message was submitted.");
  });
}

// Sparkling falling stars with stronger glow and higher frequency
const starsWrapper = document.querySelector('.stars-wrapper');

function createStar() {
  const star = document.createElement('div');
  star.classList.add('star');

  // Random horizontal position
  star.style.left = `${Math.random() * 100}vw`;

  // Random size
  const size = Math.random() * 10 + 10; // now size ranges from 10px to 20px
star.style.width = `${size}px`;
star.style.height = `${size}px`;


  // Random animation duration
  const duration = Math.random() * 2 + 2; // 2–4 seconds
  star.style.animationDuration = `${duration}s`;

  // Glow brightness color randomization
  const glowColors = ['#ffffff', '#b6e0ff', '#ffd6f6', '#aaffff'];
  const glowColor = glowColors[Math.floor(Math.random() * glowColors.length)];
  star.style.background = glowColor;
  star.style.boxShadow = `0 0 10px 5px ${glowColor}, 0 0 20px 8px ${glowColor}`;

  starsWrapper.appendChild(star);

  // Remove star after animation
  setTimeout(() => {
    star.remove();
  }, duration * 1000);
}

// Generate multiple stars per second
setInterval(() => {
  for (let i = 0; i < 5; i++) { // 5 stars per second
    createStar();
  }
}, 1000);



// Voice Welcome Message
let speechActive = true;

function speakMessage(message) {
  if ('speechSynthesis' in window && speechActive) {
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.pitch = 1;
    utterance.rate = 1;
    utterance.volume = 0.9;
    utterance.voice = speechSynthesis.getVoices().find(voice =>
      voice.lang.startsWith('en') && voice.name.includes("Female")
    ) || speechSynthesis.getVoices()[0];
    speechSynthesis.speak(utterance);
  }
}

// Trigger welcome voice after DOM loads
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    speakMessage("Hi! I’m Swikriti. Welcome to my portfolio.");
  }, 1000);
});

// Mute/Unmute control
document.querySelector("#mute-btn")?.addEventListener("click", () => {
  speechActive = !speechActive;
  if (!speechActive) speechSynthesis.cancel();

  document.querySelector("#mute-btn").innerText = speechActive ? "🔊 " : "🔇";
});

