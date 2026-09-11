function initLoader() {
  const loader = document.getElementById('loader');
  const progress = document.querySelector('.loader-progress');
  if (!loader || !progress) return;

  const MIN_DISPLAY_MS = 1400;
  const PROGRESS_DURATION_MS = 1100;
  const start = performance.now();

  function animateProgress(now) {
    const elapsed = now - start;
    const pct = Math.min((elapsed / PROGRESS_DURATION_MS) * 100, 100);
    progress.style.width = `${pct}%`;
    if (pct < 100) {
      requestAnimationFrame(animateProgress);
    }
  }
  requestAnimationFrame(animateProgress);

  function hideLoader() {
    const elapsed = performance.now() - start;
    const remaining = Math.max(MIN_DISPLAY_MS - elapsed, 0);
    setTimeout(() => {
      progress.style.width = '100%';
      loader.classList.add('loaded');
    }, remaining);
  }

  if (document.readyState === 'complete') {
    hideLoader();
  } else {
    window.addEventListener('load', hideLoader);
  }
}
