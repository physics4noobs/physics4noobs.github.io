/* ============================================
   PHYSICS FOR NOOBS - Main JavaScript
   ============================================ */

// --- Navbar Scroll ---
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  // Start pendulum animation (skip if splash is handling it)
  const splash = document.getElementById('splash');
  const splashActive = splash && splash.style.display !== 'none';
  const navArm = document.querySelector('.pendulum-arm');
  if (navArm && !splashActive) {
    navArm.style.animation = 'pendulumSwing 2s cubic-bezier(0.4,0,0.6,1) infinite alternate';
  }

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Mobile toggle
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('active');
      toggle.classList.toggle('open');
    });

    // Close menu when tapping outside
    document.addEventListener('click', (e) => {
      if (links.classList.contains('active') && !links.contains(e.target) && !toggle.contains(e.target)) {
        links.classList.remove('active');
        toggle.classList.remove('open');
      }
    });

    // Mobile dropdown toggle
    document.querySelectorAll('.nav-item').forEach(item => {
      const link = item.querySelector('.nav-link');
      if (item.querySelector('.dropdown') && link) {
        link.addEventListener('click', (e) => {
          if (window.innerWidth <= 768) {
            e.preventDefault();
            item.classList.toggle('open');
          }
        });
      }
    });
  }
}

// --- Scroll Reveal ---
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  reveals.forEach(el => observer.observe(el));
}

// --- Grade Tabs ---
function initGradeTabs() {
  const tabs = document.querySelectorAll('.grade-tab');
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.grade;

      // Save preference: extract 'xi' or 'xii' from data-grade
      const grade = target.indexOf('-xii-') !== -1 ? 'xii' : 'xi';
      localStorage.setItem('ae-grade-pref', grade);

      tabs.forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.grade-content').forEach(c => c.classList.remove('active'));

      tab.classList.add('active');
      document.getElementById(target)?.classList.add('active');
    });
  });

  // Restore saved preference (click the matching tab so page-specific listeners fire too)
  const saved = localStorage.getItem('ae-grade-pref');
  if (saved) {
    const pattern = '-' + saved + '-';
    const match = Array.from(tabs).find(t => t.dataset.grade && t.dataset.grade.indexOf(pattern) !== -1);
    if (match && !match.classList.contains('active')) {
      match.click();
    }
  }
}

// --- Smooth scroll for anchor links ---
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// --- Typing Effect ---
function typeWriter(element, text, speed = 50) {
  let i = 0;
  element.textContent = '';
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// --- Counter Animation ---
function animateCounters() {
  document.querySelectorAll('.stat-num').forEach(counter => {
    if (counter.hasAttribute('data-nocount')) return;
    const target = parseInt(counter.dataset.count || counter.textContent);
    const suffix = counter.dataset.suffix || '';
    let current = 0;
    const increment = target / 60;

    function update() {
      current += increment;
      if (current < target) {
        counter.textContent = Math.floor(current) + suffix;
        requestAnimationFrame(update);
      } else {
        counter.textContent = target + suffix;
      }
    }

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        update();
        observer.disconnect();
      }
    });
    observer.observe(counter);
  });
}

// --- Chapter Sidebar ---
function initChapterSidebar() {
  var detail = document.querySelector('.chapter-detail');
  if (!detail) return;

  var chapters = [
    { label: 'Grade XI', items: [
      { num: '01', name: 'Kinematics', file: 'kinematics' },
      { num: '02', name: "Newton's Laws", file: 'newtons-laws' },
      { num: '03', name: 'Work, Power & Energy', file: 'work-power-energy' },
      { num: '04', name: 'Rotational Motion', file: 'rotational-motion' },
      { num: '05', name: 'Gravitation', file: 'gravitation' },
      { num: '06', name: 'Mechanical Properties', file: 'mechanical-properties' },
      { num: '07', name: 'Fluid Mechanics', file: 'fluid-mechanics' },
      { num: '08', name: 'KTG & Thermodynamics', file: 'thermodynamics' },
      { num: '09', name: 'SHM', file: 'shm' },
      { num: '10', name: 'Waves', file: 'waves' }
    ]},
    { label: 'Grade XII', items: [
      { num: '01', name: 'Electrostatics', file: 'electrostatics' },
      { num: '02', name: 'Current Electricity', file: 'current-electricity' },
      { num: '03', name: 'Magnetism', file: 'magnetism' },
      { num: '04', name: 'EMI', file: 'emi' },
      { num: '05', name: 'AC Circuits', file: 'ac-circuits' },
      { num: '06', name: 'EM Waves', file: 'em-waves' },
      { num: '07', name: 'Ray Optics', file: 'ray-optics' },
      { num: '08', name: 'Wave Optics', file: 'wave-optics' },
      { num: '09', name: 'Modern Physics', file: 'modern-physics' }
    ]}
  ];

  // Detect current chapter from URL
  var path = window.location.pathname;
  var current = '';
  chapters.forEach(function (g) {
    g.items.forEach(function (ch) {
      if (path.indexOf(ch.file + '.html') !== -1) current = ch.file;
    });
  });

  // Build sidebar HTML
  var html = '<div class="chd-sidebar-header">Chapters</div>';
  chapters.forEach(function (g) {
    html += '<div class="chd-sidebar-group">';
    html += '<div class="chd-sidebar-label">' + g.label + '</div>';
    g.items.forEach(function (ch) {
      var active = ch.file === current ? ' chd-sidebar-active' : '';
      html += '<a href="' + ch.file + '.html" class="chd-sidebar-item' + active + '">';
      html += '<span class="chd-sidebar-num">' + ch.num + '</span> ' + ch.name + '</a>';
    });
    html += '</div>';
  });

  // Wrap existing content and inject sidebar
  var wrapper = document.createElement('div');
  wrapper.className = 'chd-content';
  while (detail.firstChild) {
    wrapper.appendChild(detail.firstChild);
  }

  // Pull h1 out to span full grid width; keep ch-nav inside chd-content
  var hero = wrapper.querySelector('.ch-hero');
  var heading = hero ? hero.querySelector('h1') : null;
  var chNav = hero ? hero.querySelector('.ch-nav') : null;

  var sidebar = document.createElement('nav');
  sidebar.className = 'chd-sidebar';
  sidebar.innerHTML = html;

  // Place h1 as full-span grid child
  if (heading) {
    heading.className = 'ch-title-full';
    detail.appendChild(heading);
  }
  // Move ch-nav to the start of chd-content (before theory sections)
  if (chNav && wrapper.firstChild) {
    wrapper.insertBefore(chNav, wrapper.firstChild);
  }
  // Remove the now-empty ch-hero
  if (hero && hero.parentNode) {
    hero.parentNode.removeChild(hero);
  }

  detail.appendChild(wrapper);
  detail.appendChild(sidebar);
  detail.classList.add('chd-layout');
}

// --- Testimonial Carousel ---
function initTestiCarousel() {
  var carousel = document.querySelector('.testi-carousel');
  if (!carousel) return;

  var track = carousel.querySelector('.testi-track');
  var cards = track.querySelectorAll('.testimonial-card');
  var dotsContainer = carousel.querySelector('.testi-dots');
  var counter = document.getElementById('testi-counter');
  var prevBtn = document.getElementById('testi-prev');
  var nextBtn = document.getElementById('testi-next');
  var current = 0;
  var total = cards.length;
  var interval;

  if (!total) return;

  // Build dots
  for (var i = 0; i < total; i++) {
    var dot = document.createElement('span');
    dot.className = 'testi-dot' + (i === 0 ? ' active' : '');
    dot.dataset.index = i;
    dot.addEventListener('click', function () {
      goTo(parseInt(this.dataset.index));
      resetAuto();
    });
    dotsContainer.appendChild(dot);
  }

  function goTo(index) {
    current = ((index % total) + total) % total;
    track.style.transform = 'translateX(-' + (current * 100) + '%)';
    var dots = dotsContainer.querySelectorAll('.testi-dot');
    dots.forEach(function (d, j) { d.classList.toggle('active', j === current); });
    if (counter) counter.textContent = (current + 1) + ' / ' + total;
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function resetAuto() {
    clearInterval(interval);
    interval = setInterval(next, 7000);
  }

  // Arrow buttons
  if (prevBtn) prevBtn.addEventListener('click', function () { prev(); resetAuto(); });
  if (nextBtn) nextBtn.addEventListener('click', function () { next(); resetAuto(); });

  // Touch/swipe support
  var startX = 0;
  track.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', function (e) {
    var diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
      resetAuto();
    }
  });

  // Keyboard support
  carousel.setAttribute('tabindex', '0');
  carousel.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') { next(); resetAuto(); }
    if (e.key === 'ArrowLeft') { prev(); resetAuto(); }
  });

  // Initialize
  goTo(0);
  interval = setInterval(next, 7000);
}

// --- Initialize Everything ---
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollReveal();
  initGradeTabs();
  initSmoothScroll();
  animateCounters();
  initChapterSidebar();
  initTestiCarousel();
});
