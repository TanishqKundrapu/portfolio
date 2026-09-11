document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();

  initLoader();
  initCursor();
  initNavbar();
  initTyping(typedPhrases);
  initParticles();
  initScrollTop();
  initContactForm();

  renderSkills();
  renderProjects();
  renderExperience();
  renderAchievements();

  // Reveal + magnetic buttons run after dynamic content is in the DOM
  initReveal();
  initCounters();
  initMagneticButtons();
});
