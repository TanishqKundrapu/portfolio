function initContactForm() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  const submitBtn = form ? form.querySelector('.btn-submit') : null;

  if (!form || !status || !submitBtn) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      status.textContent = 'Please fill in all fields correctly.';
      form.reportValidity();
      return;
    }

    submitBtn.classList.add('is-loading');
    submitBtn.disabled = true;
    status.textContent = '';

    const name = form.name.value.trim();

    setTimeout(() => {
      submitBtn.classList.remove('is-loading');
      submitBtn.disabled = false;
      status.textContent = `Thanks, ${name}! Your message has been noted — I'll get back to you soon.`;
      form.reset();
    }, 1300);
  });
}
