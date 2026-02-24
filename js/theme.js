/* ============================================
   PHYSICS FOR NOOBS - Theme Toggle
   Loaded in <head> to prevent flash of wrong theme
   ============================================ */
(function() {
  var saved = localStorage.getItem('ae-theme');
  if (!saved) {
    saved = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
  document.documentElement.setAttribute('data-theme', saved);

  document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;

    function updateIcon() {
      var current = document.documentElement.getAttribute('data-theme');
      btn.textContent = current === 'dark' ? 'Light' : 'Dark';
      btn.setAttribute('aria-label', current === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }

    updateIcon();

    btn.addEventListener('click', function() {
      var current = document.documentElement.getAttribute('data-theme');
      var next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('ae-theme', next);
      updateIcon();
    });
  });
})();
