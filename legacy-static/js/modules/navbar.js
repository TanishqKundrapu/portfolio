function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  const links = document.querySelectorAll('.nav-link');
  const panels = document.querySelectorAll('main .tab-panel');
  const panelMap = new Map();
  panels.forEach((panel) => panelMap.set(panel.id, panel));

  if (!navbar) return;

  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  const setActiveLink = (id) => {
    links.forEach((link) => {
      link.classList.toggle('active-link', link.dataset.section === id);
    });
  };

  const closeMobileMenu = () => {
    if (navLinks && navToggle) {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  };

  let activeId = null;

  const switchTab = (id, { updateHash = true } = {}) => {
    const nextPanel = panelMap.get(id);
    if (!nextPanel || id === activeId) return;

    const prevPanel = activeId ? panelMap.get(activeId) : null;
    activeId = id;
    setActiveLink(id);
    closeMobileMenu();
    if (updateHash) {
      history.pushState(null, '', `#${id}`);
    }

    const showNext = () => {
      nextPanel.classList.add('active', 'tab-entering');
      window.scrollTo({ top: 0, behavior: 'auto' });
      nextPanel.addEventListener(
        'animationend',
        () => nextPanel.classList.remove('tab-entering'),
        { once: true }
      );
    };

    if (prevPanel && prevPanel !== nextPanel) {
      prevPanel.classList.add('tab-leaving');
      prevPanel.addEventListener(
        'animationend',
        () => {
          prevPanel.classList.remove('active', 'tab-leaving');
          showNext();
        },
        { once: true }
      );
    } else {
      showNext();
    }
  };

  document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;
    const id = anchor.getAttribute('href').slice(1);
    if (!panelMap.has(id)) return;
    e.preventDefault();
    switchTab(id);
  });

  window.addEventListener('popstate', () => {
    const id = location.hash.replace('#', '') || 'home';
    switchTab(id, { updateHash: false });
  });

  const initialId = location.hash.replace('#', '') || 'home';
  activeId = panelMap.has(initialId) ? initialId : 'home';
  if (activeId !== 'home') {
    panelMap.get('home').classList.remove('active');
    panelMap.get(activeId).classList.add('active');
  }
  setActiveLink(activeId);
}
