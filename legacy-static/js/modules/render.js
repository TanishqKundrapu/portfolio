
function el(tag, className, html) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html !== undefined) node.innerHTML = html;
  return node;
}

function renderSkills() {
  const grid = document.getElementById('skills-grid');
  if (!grid) return;

  skillCategories.forEach((category) => {
    const card = el('div', 'skill-category reveal');
    const title = el('h3', 'skill-category-title', `<span class="cat-icon">${category.icon}</span> ${category.title}`);
    card.appendChild(title);

    category.skills.forEach((skill) => {
      const item = el('div', 'skill-item');
      item.innerHTML = `
        <div class="skill-item-head">
          <span class="skill-item-name">${skill.name}</span>
          <span class="skill-item-percent">${skill.level}%</span>
        </div>
        <div class="skill-bar-track">
          <div class="skill-bar-fill" data-level="${skill.level}"></div>
        </div>
      `;
      card.appendChild(item);
    });

    grid.appendChild(card);
  });

  animateSkillBars(grid);
}

function animateSkillBars(grid) {
  const bars = grid.querySelectorAll('.skill-bar-fill');
  if (!('IntersectionObserver' in window)) {
    bars.forEach((bar) => (bar.style.width = `${bar.dataset.level}%`));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const card = entry.target;
          card.querySelectorAll('.skill-bar-fill').forEach((bar) => {
            bar.style.width = `${bar.dataset.level}%`;
          });
          observer.unobserve(card);
        }
      });
    },
    { threshold: 0.3 }
  );

  grid.querySelectorAll('.skill-category').forEach((card) => observer.observe(card));
}

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  projects.forEach((project, i) => {
    const card = el('article', 'project-card reveal');
    card.style.setProperty('--delay', `${(i % 2) * 0.1}s`);

    const initials = project.name
      .split(' ')
      .map((w) => w[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();

    card.innerHTML = `
      <div class="project-media"><span>${initials}</span></div>
      <div class="project-body">
        <h3 class="project-title">${project.name}</h3>
        <p class="project-desc">${project.description}</p>
        <div class="project-badges">
          ${project.tech.map((t) => `<span class="badge">${t}</span>`).join('')}
        </div>
        <div class="project-actions">
          <a href="${project.github}" class="btn btn-secondary btn-sm magnetic" target="_blank" rel="noopener noreferrer">
            <span>GitHub</span>
          </a>
          <a href="${project.demo}" class="btn btn-primary btn-sm magnetic" target="_blank" rel="noopener noreferrer">
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function renderExperience() {
  const timeline = document.getElementById('timeline');
  if (!timeline) return;

  experience.forEach((item, i) => {
    const node = el('div', 'timeline-item reveal');
    node.style.setProperty('--delay', `${i * 0.08}s`);
    node.innerHTML = `
      <span class="timeline-dot" aria-hidden="true"></span>
      <div class="timeline-card">
        <span class="timeline-period">${item.period}</span>
        <h3 class="timeline-role">${item.role}</h3>
        <p class="timeline-org">${item.org}</p>
        <p class="timeline-desc">${item.desc}</p>
      </div>
    `;
    timeline.appendChild(node);
  });
}

function renderAchievements() {
  const grid = document.getElementById('achievements-grid');
  if (!grid) return;

  achievements.forEach((item, i) => {
    const card = el('div', 'achievement-card reveal');
    card.style.setProperty('--delay', `${(i % 3) * 0.1}s`);
    card.innerHTML = `
      <div class="achievement-icon" aria-hidden="true">${item.icon}</div>
      <h3 class="achievement-title">${item.title}</h3>
      <p class="achievement-desc">${item.desc}</p>
    `;
    grid.appendChild(card);
  });
}
