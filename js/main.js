/* ============================================
   AXOMIYA ENGINEER - Main JavaScript
   ============================================ */

// --- Particle Background ---
class ParticleSystem {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.connections = [];
    this.mouse = { x: null, y: null, radius: 150 };
    this.resize();
    this.init();
    this.bindEvents();
    this.animate();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  init() {
    const count = Math.min(80, Math.floor((this.canvas.width * this.canvas.height) / 15000));
    this.particles = [];
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1
      });
    }
  }

  bindEvents() {
    window.addEventListener('resize', () => { this.resize(); this.init(); });
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });
    window.addEventListener('mouseout', () => {
      this.mouse.x = null;
      this.mouse.y = null;
    });
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.particles.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > this.canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > this.canvas.height) p.vy *= -1;

      // Mouse interaction
      if (this.mouse.x !== null) {
        const dx = p.x - this.mouse.x;
        const dy = p.y - this.mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < this.mouse.radius) {
          const force = (this.mouse.radius - dist) / this.mouse.radius;
          p.x += dx * force * 0.02;
          p.y += dy * force * 0.02;
        }
      }

      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      const pColor = isLight ? '0, 100, 160' : '0, 212, 255';

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(${pColor}, ${p.opacity})`;
      this.ctx.fill();

      // Connections
      for (let j = i + 1; j < this.particles.length; j++) {
        const p2 = this.particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.strokeStyle = `rgba(${pColor}, ${0.08 * (1 - dist / 120)})`;
          this.ctx.lineWidth = 0.5;
          this.ctx.stroke();
        }
      }
    });

    requestAnimationFrame(() => this.animate());
  }
}

// --- Navbar Scroll ---
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

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

// --- Initialize Everything ---
document.addEventListener('DOMContentLoaded', () => {
  // Particles — delay init if splash is playing
  const canvas = document.getElementById('particles-canvas');
  if (canvas) {
    const splashEl = document.getElementById('splash');
    if (splashEl && splashEl.style.display !== 'none') {
      setTimeout(() => new ParticleSystem(canvas), 2800);
    } else {
      new ParticleSystem(canvas);
    }
  }

  initNavbar();
  initScrollReveal();
  initGradeTabs();
  initSmoothScroll();
  animateCounters();
  initChapterSidebar();
});
