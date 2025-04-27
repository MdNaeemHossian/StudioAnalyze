// Subscribe button functionality
function subscribe() {
    window.open('https://www.youtube.com/@StudioAnalyze', '_blank');
  }
  
  // Scroll Reveal Animations
  window.addEventListener('scroll', reveal);
  
  function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      }
    }
  }
  
  // Dark/Light Theme Toggle
  function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const themeButton = document.querySelector('.theme-toggle');
    if (document.body.classList.contains('light-mode')) {
      themeButton.textContent = "🌙";
    } else {
      themeButton.textContent = "☀️";
    }
  }
  // Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
  });
  
  // Animated Counters
let countersStarted = false;

function startCounters() {
  const counters = [
    { id: 'subs', target: 1200 },
    { id: 'videos', target: 250 },
    { id: 'views', target: 50000 }
  ];

  counters.forEach(counter => {
    let current = 0;
    const increment = Math.ceil(counter.target / 100);
    const updateCounter = () => {
      current += increment;
      if (current > counter.target) current = counter.target;
      document.getElementById(counter.id).innerText = current.toLocaleString();
      if (current < counter.target) {
        requestAnimationFrame(updateCounter);
      }
    };
    updateCounter();
  });
}

// Trigger when scroll down
window.addEventListener('scroll', () => {
  const statsSection = document.querySelector('.stats');
  const statsTop = statsSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (!countersStarted && statsTop < windowHeight - 100) {
    countersStarted = true;
    startCounters();
  }
});
// YouTube API - Latest Videos
const API_KEY = 'AIzaSyCJEebDf1ktP4C34uchwaC-9hqZrdXz2aoY';
const CHANNEL_ID = 'UCbmwqIe7pK10N0bIlIKcVbg';
const videoContainer = document.getElementById('videos');

fetch(`https://www.googleapis.com/youtube/v3/search?key=${AIzaSyCJEebDf1ktP4C34uchwaC-9hqZrdXz2ao}&channelId=${UCbmwqIe7pK10N0bIlIKcVbg}&part=snippet,id&order=date&maxResults=3`)
  .then(response => response.json())
  .then(data => {
    data.items.forEach(item => {
      const videoId = item.id.videoId;
      if (videoId) {
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        iframe.allowFullscreen = true;
        videoContainer.appendChild(iframe);
      }
    });
  });

// Particles Background
particlesJS('particles-js', {
    "particles": {
      "number": { "value": 80 },
      "color": { "value": "#cc0000" },
      "shape": { "type": "circle" },
      "opacity": { "value": 0.5 },
      "size": { "value": 3 },
      "move": { "enable": true, "speed": 2 }
    }
  });
  // Back to Top Button
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
// Multi-language
const translations = {
    en: {
      home: "Home",
      about: "About",
      videos: "Videos",
      contact: "Contact"
    },
    hi: {
      home: "होम",
      about: "हमारे बारे में",
      videos: "वीडियो",
      contact: "संपर्क करें"
    }
  };
  
  function setLanguage(lang) {
    document.querySelector('.navbar a[href="#home"]').innerText = translations[lang].home;
    document.querySelector('.navbar a[href="#about"]').innerText = translations[lang].about;
    document.querySelector('.navbar a[href="#videos"]').innerText = translations[lang].videos;
    document.querySelector('.navbar a[href="#contact"]').innerText = translations[lang].contact;
  }
  // Popup
function showPopup() {
    document.getElementById('popup').style.display = 'flex';
  }
  
  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }
  
  // Show popup after 10 seconds
  setTimeout(showPopup, 10000);
  