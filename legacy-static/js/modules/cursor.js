function initCursor() {
  if (window.matchMedia('(hover: none)').matches) return;

  const glow = document.querySelector('.cursor-glow');
  const dot = document.querySelector('.cursor-dot');
  if (!glow || !dot) return;

  let glowX = 0, glowY = 0, targetX = 0, targetY = 0;

  window.addEventListener('mousemove', (e) => {
    document.body.classList.add('cursor-ready');
    targetX = e.clientX;
    targetY = e.clientY;
    dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
  });

  function animateGlow() {
    glowX += (targetX - glowX) * 0.12;
    glowY += (targetY - glowY) * 0.12;
    glow.style.transform = `translate(${glowX}px, ${glowY}px) translate(-50%, -50%)`;
    requestAnimationFrame(animateGlow);
  }
  animateGlow();

  const hoverTargets = 'a, button, .project-card, .skill-category, .stat-card, .achievement-card, input, textarea';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(hoverTargets)) {
      dot.classList.add('cursor-hover');
    }
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(hoverTargets)) {
      dot.classList.remove('cursor-hover');
    }
  });
}
