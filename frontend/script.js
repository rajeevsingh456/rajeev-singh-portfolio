const API = 'https://rajeev-singh-portfolio.onrender.com';

const fallbackData = window.portfolioData || {
  name: 'Rajeev Singh',
  title: 'SDET / Software Test Engineer',
  location: 'Gurugram, India',
  experienceYears: '2+ years',
  summary: 'SDET / Software Test Engineer with 2+ years of experience in UI, API and mobile automation, CI/CD and software quality engineering.',
  education: [
    { degree: 'B.Tech in Computer ()', institute: 'Dr. A.P.J. Abdul Kalam Technical University, Lucknow, India', dates: 'Jul 2020 – Aug 2024' },
    { degree: 'Intermediate (Science Stream)', institute: 'SVM, Lucknow, India', dates: 'Jun 2018 – May 2020' }
  ],
  clients: [
    { name: 'Denso', relation: 'UI and mobile automation support' },
    { name: 'TG Minda', relation: 'Site and application support' },
    { name: 'Havells', relation: 'Client environment support' },
    { name: 'Jaguar', relation: 'Client environment support' }
  ],
  experience: [
    {
      company: 'Future Algorithm Pvt Ltd',
      role: 'SDET / Software Test Engineer',
      duration: '9 months',
      location: 'Gurugram',
      bullets: ['UI, API and mobile automation using Selenium, Appium, REST Assured, Java and TestNG.', 'Designed and maintained POM-based automation frameworks and CI/CD integration.', 'Functional, regression, cross-browser and API testing in Agile/Scrum environments.', 'JIRA-based defect tracking and collaboration with development teams.', 'Worked with Redis and MQTT for real-time data validation and messaging workflow testing.']
    },
    {
      company: 'ReacoiLife',
      role: 'SDET Trainee',
      duration: '6 months',
      location: 'Noida',
      bullets: ['Executed end-to-end manual, automation and API testing for web applications.', 'Developed Selenium WebDriver, Java, TestNG and Cucumber automation suites.', 'Built API automation with REST Assured and validated responses and schemas.', 'Integrated automated suites with Jenkins CI/CD for continuous testing.', 'Performed cross-browser and cross-device testing and supported regression coverage.']
    }
  ],
  skillGroups: [
    { title: 'Programming', items: ['Java', 'JavaScript', 'SQL', 'HTML', 'CSS'] },
    { title: 'Automation', items: ['Selenium WebDriver', 'TestNG', 'Cucumber BDD', 'Appium', 'REST Assured', 'Testim', 'POM'] },
    { title: 'Tools', items: ['Postman', 'JIRA', 'Zephyr', 'Bugzilla', 'Git', 'GitHub', 'Jenkins', 'Maven', 'VS Code', 'Eclipse', 'Android Studio'] },
    { title: 'Cloud / DevOps', items: ['AWS', 'Kubernetes'] },
    { title: 'Testing', items: ['Manual Testing', 'UI Automation', 'API Testing', 'Mobile Testing', 'Database Testing', 'Regression Testing', 'Cross-Browser Testing', 'Agile/Scrum'] }
  ],
  projects: [
    {
      title: 'Digimach — End-to-End Test Automation Framework',
      client: 'Digimach',
      role: 'Automation Framework Architect',
      type: 'End-to-End Automation | Web | Desktop | API | Messaging | Database',
      period: '12/2025 – Present',
      description: 'Designed a framework from scratch covering Web UI, Desktop UI, API, Messaging, Redis and PostgreSQL validation to support end-to-end automation and release confidence.',
      responsibilities: [
        'Built end-to-end automation across Web UI, Desktop UI, API and messaging layers.',
        'Automated web workflows using Java + Selenium and desktop workflows using Appium.',
        'Integrated REST Assured, MQTT and database validation to verify end-to-end data flow.',
        'Planned Jenkins CI/CD execution for scheduled regression and faster defect isolation.'
      ],
      stack: ['Java', 'Selenium', 'Appium', 'REST Assured', 'MQTT', 'Redis', 'PostgreSQL', 'Jenkins', 'TestNG', 'API Automation', 'Database Validation']
    },
    {
      title: 'PCR System — UI Automation Framework',
      client: 'Denso',
      role: 'Automation Engineer',
      type: 'UI Automation',
      period: '10/2025 – Present',
      description: 'Designed and developed a Selenium WebDriver automation framework with Java and TestNG, implementing BDD-based workflows for request creation, approval flows and validations.',
      responsibilities: [
        'Developed a reusable Selenium Java framework with TestNG structure.',
        'Implemented BDD using Cucumber for readable business-flow automation.',
        'Automated request creation, approval and validation scenarios.',
        'Applied Page Object Model for maintainability and reusability.',
        'Integrated Jenkins automation and executed suites in AWS environments.',
        'Generated logs and reports for defect analysis and debugging.'
      ],
      stack: ['Selenium', 'Java', 'TestNG', 'Cucumber', 'BDD', 'Page Object Model', 'Jenkins', 'AWS']
    },
    {
      title: 'Denso — API & Mobile Automation Framework',
      client: 'Denso',
      role: 'Automation Framework Developer',
      type: 'API Automation + Mobile Automation',
      period: 'Ongoing',
      description: 'Designed and maintained reusable API and mobile automation frameworks using Java, REST Assured, Appium and TestNG, with scalable architecture for efficient execution and validation.',
      responsibilities: [
        'Built reusable API automation frameworks for functional, negative and validation scenarios.',
        'Automated status-code, payload and business-rule validation checks.',
        'Developed Appium-based mobile automation for login workflows and end-to-end Android scenarios.',
        'Used Page Object Model patterns for maintainable mobile test design.',
        'Executed API and mobile validation with data-driven architecture and reusable test methods.'
      ],
      stack: ['REST Assured', 'Java', 'TestNG', 'API validation', 'Functional testing', 'Negative testing', 'Data-driven testing', 'Response validation', 'Business-rule validation', 'Appium', 'Android Studio', 'Page Object Model', 'Android devices/emulators', 'End-to-end mobile scenarios']
    }
  ],
  architecture: ['Frontend: responsive portfolio built with HTML, CSS and JavaScript', 'Backend: Node.js + Express API service', 'Database: PostgreSQL-ready schema support', 'Automation: Java, Selenium, Appium, REST Assured and POM', 'CI/CD: Jenkins-based automation execution']
};

function normalizeClient(client) {
  if (typeof client === 'string') {
    return { name: client, relation: 'Client environment' };
  }
  return { name: client?.name || 'Client', relation: client?.relation || 'Client environment' };
}

function buildProjectMarkup(project, index) {
  const stackHtml = (project.stack || []).map(tag => `<span class="tag">${tag}</span>`).join('');
  const titleText = project.title || 'Project';
  const featureName = titleText.toLowerCase();

  if (featureName.includes('digimach')) {
    return `
      <article class="project-card project-card--featured reveal" style="--delay:${index * 80}ms">
        <div class="project-card__eyebrow">Featured project</div>
        <div class="project-card__title-wrap">
          <h3>Digimach</h3>
          <p>End-to-End Test Automation Framework</p>
        </div>
        <div class="project-card__summary">Web UI → Desktop UI → API → Messaging → Redis → PostgreSQL → Jenkins</div>
        <div class="tag-list">${stackHtml}</div>
        <div class="digimach-architecture" aria-label="Digimach automation layers">
          <div class="arch-layer"><span>Web UI</span><small>Selenium</small></div>
          <div class="arch-layer"><span>Desktop UI</span><small>Appium</small></div>
          <div class="arch-layer"><span>API</span><small>REST Assured</small></div>
          <div class="arch-layer"><span>Messaging</span><small>MQTT</small></div>
          <div class="arch-layer"><span>Redis</span><small>Validation</small></div>
          <div class="arch-layer"><span>PostgreSQL</span><small>DB Checks</small></div>
          <div class="arch-layer"><span>Jenkins</span><small>CI/CD</small></div>
        </div>
        <div class="project-footer project-footer--featured">
          <span class="role-label">Client: ${project.client}</span>
          <span class="project-view-link">View Architecture</span>
        </div>
      </article>
    `;
  }

  if (featureName.includes('pcr')) {
    return `
      <article class="project-card reveal" style="--delay:${index * 80}ms">
        <div class="project-card__header">
          <div class="project-icon">PCR</div>
          <div>
            <span class="project-type">${project.type}</span>
            <h3>PCR System</h3>
          </div>
        </div>
        <div class="project-meta">
          <span class="badge">Denso</span>
          <span class="badge muted">${project.period}</span>
        </div>
        <p class="project-description">${project.description}</p>
        <div class="tag-list">${stackHtml}</div>
        <div class="project-footer">
          <span class="role-label">Client: Denso</span>
          <span class="project-view-link">View Project</span>
        </div>
      </article>
    `;
  }

  return `
    <article class="project-card reveal" style="--delay:${index * 80}ms">
      <div class="project-card__header">
        <div class="project-icon">D</div>
        <div>
          <span class="project-type">${project.type}</span>
          <h3>Denso</h3>
        </div>
      </div>
      <div class="project-meta">
        <span class="badge">Denso</span>
        <span class="badge muted">API + Mobile</span>
      </div>
      <p class="project-description">${project.description}</p>
      <div class="tag-list">${stackHtml}</div>
      <div class="project-footer">
        <span class="role-label">Framework Design</span>
        <span class="project-view-link">View Details</span>
      </div>
    </article>
  `;
}

function buildExperienceMarkup(data) {
  return (data.experience || []).map((item, index) => `
    <div class="timeline-item reveal" style="--delay:${index * 100}ms">
      <div class="timeline-node"></div>
      <article class="timeline-card">
        <div class="timeline-header">
          <div>
            <p class="eyebrow accent">${item.company}</p>
            <h3>${item.role}</h3>
          </div>
          <span class="timeline-duration">${item.duration}</span>
        </div>
        <p class="meta-line">${item.location}</p>
        <ul>
          ${(item.bullets || []).map(bullet => `<li>${bullet}</li>`).join('')}
        </ul>
      </article>
    </div>
  `).join('');
}

function buildSkillMarkup(data) {
  return (data.skillGroups || []).map((group, index) => `
    <article class="skill-card reveal" style="--delay:${index * 60}ms">
      <h3>${group.title}</h3>
      <div class="tag-list">
        ${(group.items || []).map(item => `<span class="tag">${item}</span>`).join('')}
      </div>
    </article>
  `).join('');
}

function normalizeEducation(item) {
  if (item && typeof item === 'object' && item.degree) {
    return {
      degree: item.degree || '',
      institute: item.institute || '',
      dates: item.dates || ''
    };
  }

  if (typeof item === 'string') {
    const separatorIndex = item.indexOf(' — ');
    const dateIndex = item.lastIndexOf(' (');
    const degree = separatorIndex >= 0 ? item.slice(0, separatorIndex).trim() : item.trim();
    const institute = separatorIndex >= 0
      ? (dateIndex >= 0 ? item.slice(separatorIndex + 3, dateIndex).trim() : item.slice(separatorIndex + 3).trim())
      : '';
    const dates = dateIndex >= 0 ? item.slice(dateIndex + 2, -1).trim() : '';

    return { degree, institute, dates };
  }

  return { degree: '', institute: '', dates: '' };
}

function buildEducationMarkup(data) {
  return (data.education || []).map(normalizeEducation).map((item, index) => `
    <article class="edu-card reveal" style="--delay:${index * 80}ms">
      <div class="edu-icon">🎓</div>
      <div>
        <h3>${item.degree}</h3>
        <p>${item.institute}</p>
        <span>${item.dates}</span>
      </div>
    </article>
  `).join('');
}

function buildClientsMarkup(data) {
  return (data.clients || []).map((client, index) => {
    const clientData = normalizeClient(client);
    return `
      <article class="client-card reveal" style="--delay:${index * 80}ms">
        <div class="client-logo">${clientData.name.slice(0, 2).toUpperCase()}</div>
        <h3>${clientData.name}</h3>
        <p>${clientData.relation}</p>
      </article>
    `;
  }).join('');
}

function renderContent(data) {
  const summaryText = document.getElementById('summary-text');
  const experienceStat = document.getElementById('experience-stat');
  const yearElement = document.getElementById('year');
  const experienceGrid = document.getElementById('experience-grid');
  const projectsGrid = document.getElementById('projects-grid');
  const clientsGrid = document.getElementById('clients-grid');
  const skillsGrid = document.getElementById('skills-grid');
  const educationGrid = document.getElementById('education-grid');
  const architectureList = document.getElementById('architecture-list');

  if (summaryText) summaryText.textContent = data.summary;
  if (experienceStat) experienceStat.textContent = data.experienceYears;
  if (experienceGrid) experienceGrid.innerHTML = buildExperienceMarkup(data);
  if (projectsGrid) projectsGrid.innerHTML = (data.projects || []).slice(0, 3).map(buildProjectMarkup).join('');
  if (clientsGrid) clientsGrid.innerHTML = buildClientsMarkup(data);
  if (skillsGrid) skillsGrid.innerHTML = buildSkillMarkup(data);
  if (educationGrid) educationGrid.innerHTML = buildEducationMarkup(data);
  if (architectureList) architectureList.innerHTML = (data.architecture || []).map(item => `<li>${item}</li>`).join('');
  if (yearElement) yearElement.textContent = new Date().getFullYear();
}

function setupProjectToggles() {
  document.querySelectorAll('.project-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.project-card');
      const details = card ? card.querySelector('.project-details') : null;
      if (!details) return;
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!isExpanded));
      button.textContent = isExpanded ? 'View Details' : 'Hide Details';
      details.classList.toggle('open', !isExpanded);
    });
  });
}

function setupRevealAnimations() {
  const elements = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    elements.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });

  elements.forEach(el => observer.observe(el));
}

async function loadPortfolioData() {
  const data = JSON.parse(JSON.stringify(fallbackData));

  try {
    const [profileResponse, skillsResponse, projectResponse] = await Promise.all([
      fetch(`${API}/api/profile`),
      fetch(`${API}/api/skills`),
      fetch(`${API}/api/projects`)
    ]);

    if (profileResponse.ok) {
      const profile = await profileResponse.json();
      data.name = profile.name || data.name;
      data.title = profile.title || data.title;
      data.location = profile.location || data.location;
      data.summary = profile.summary || data.summary;
      data.experienceYears = profile.experienceYears || data.experienceYears;
      data.education = Array.isArray(profile.education)
        ? profile.education.map(normalizeEducation)
        : (data.education || []);
      data.clients = Array.isArray(profile.clients)
        ? profile.clients.map(normalizeClient)
        : (data.clients || []);
    }

    if (skillsResponse.ok) {
      const skills = await skillsResponse.json();
      if (Array.isArray(skills) && skills.length) {
        const groups = [
          { title: 'Programming', items: ['Java', 'JavaScript', 'SQL', 'HTML', 'CSS'] },
          { title: 'Automation', items: ['Selenium WebDriver', 'TestNG', 'Cucumber BDD', 'Appium', 'REST Assured', 'Testim', 'POM'] },
          { title: 'Tools', items: ['Postman', 'JIRA', 'Zephyr', 'Bugzilla', 'Git', 'GitHub', 'Jenkins', 'Maven', 'VS Code', 'Eclipse', 'Android Studio'] },
          { title: 'Cloud / DevOps', items: ['AWS', 'Kubernetes'] },
          { title: 'Testing', items: ['Manual Testing', 'UI Automation', 'API Testing', 'Mobile Testing', 'Database Testing', 'Regression Testing', 'Cross-Browser Testing', 'Agile/Scrum'] }
        ];

        data.skillGroups = groups
          .map(group => ({
            title: group.title,
            items: group.items.filter(item =>
              skills.some(skill => {
                const skillName = typeof skill === 'string' ? skill : skill.name || '';
                return skillName.toLowerCase().includes(item.toLowerCase().split(' ')[0]);
              })
            )
          }))
          .filter(group => group.items.length > 0);
      }
    }

    if (projectResponse.ok) {
      const projects = await projectResponse.json();
      if (Array.isArray(projects) && projects.length) {
        data.projects = projects.map(project => ({
          title: project.title || 'Project',
          client: project.client || 'Client environment',
          role: project.role || 'SDET',
          type: project.type || 'Automation',
          period: project.period || 'Project timeline',
          description: project.description || 'Project summary',
          responsibilities: project.responsibilities || ['Developed testing workflows', 'Supported automation coverage', 'Validated application behavior'],
          stack: project.stack || []
        })).slice(0, 3);
      }
    }

    data.projects = (data.projects || []).slice(0, 3);
  } catch (error) {
    console.warn('API data unavailable; using local fallback data.', error);
  }

  return data;
}

function setProfileMeta(data) {
  const titleElement = document.getElementById('profile-title');
  const locationElement = document.getElementById('profile-location');
  if (titleElement) titleElement.textContent = data.title;
  if (locationElement) locationElement.textContent = `${data.location} · ${data.experienceYears}`;
}

function setupContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const status = document.getElementById('form-status');
    const formData = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch(`${API}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const json = await response.json();
      status.textContent = json.message || 'Message sent successfully.';
      status.classList.add('success');
      form.reset();
    } catch (error) {
      status.textContent = 'Backend is not reachable. Start the API on port 5000.';
      status.classList.add('error');
    }
  });
}

async function initPortfolio() {
  const data = await loadPortfolioData();
  renderContent(data);
  setProfileMeta(data);
  setupProjectToggles();
  setupRevealAnimations();
  setupContactForm();
}

document.addEventListener('DOMContentLoaded', initPortfolio);
