// Use modern JavaScript features and optimize performance
const getElement = (id) => document.getElementById(id);
const createElement = (type, className) => {
    const element = document.createElement(type);
    if (className) element.classList.add(className);
    return element;
};

// Data for Experience and Projects
const experienceData = [
    { title: "Web Developer", company: "Coding Samurai", year: "March-April, 2024", description: "Developing To-do List applications with Html, Css, and JavaScript." },
    { title: "Personal Learner", company: "Ownself", year: "2004-Present", description: "Learning what comes in life from setbacks, projects, and many more." },
    { title: "Content Creator", company: "Youtube", year: "2024-Present", description: "Creating vlogging content of my personal life." },
];

const projectData = [
    { name: "Python Games", description: "A collection of three fun games: a Dice Rolling Game, a Mad Libs Story Generator, and a Math Quiz, combining luck, creativity, and logic for an engaging experience! 🚀.", link: "https://github.com/laxmithapas/python-game" },
    { name: "Imdp-Movie-Rating", description: "A web-based task manager built using React and Firebase! 🎬.", link: "https://github.com/laxmithapas/Imdp-movie-rating" },
    { name: "Weather App", description: "A weather application to check the current weather conditions, it is built using HTML, CSS and JavaScript, and the OpenWeatherMap API! ⛅  .", link: "https://github.com/laxmithapas/weather" },
];

// Additional data
const skillsData = [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 75 },
    { name: "Python", level: 80 },
    { name: "UI/UX Design", level: 70 },
    { name: "Cybersecurity", level: 65 }
];

const testimonialData = [
    { name: "Alex Chen", role: "Project Manager", text: "Laxmi's attention to detail and problem-solving skills are exceptional." },
    { name: "Sarah Johnson", role: "Senior Developer", text: "A great team player with strong technical capabilities." },
    { name: "Mike Ross", role: "Client", text: "Delivered exactly what we needed, on time and with great quality." }
];

// Optimized render functions
const renderExperience = () => {
    const container = getElement('experience-list');
    if (!container) return;

    const fragment = document.createDocumentFragment();
    experienceData.forEach(item => {
        const el = createElement('div', 'experience-item');
        el.innerHTML = `
            <h3>${item.title}</h3>
            <span class="company-year">🏢 ${item.company} • 📅 ${item.year}</span>
            <p>${item.description}</p>
        `;
        fragment.appendChild(el);
    });
    container.appendChild(fragment);
};

const renderProjects = () => {
    const container = getElement('projects').querySelector('.project-grid');
    if (!container) return;

    const fragment = document.createDocumentFragment();
    projectData.forEach(item => {
        const el = createElement('div', 'project-item');
        el.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <button class="view-project-button" data-link="${item.link}">🔗 View Project</button>
        `;
        fragment.appendChild(el);
    });
    container.appendChild(fragment);

    // Add event listeners for project links
    container.addEventListener('click', (e) => {
        if (e.target.classList.contains('view-project-button')) {
            window.open(e.target.dataset.link, '_blank');
        }
    });
};

// Render Skills with animation
const renderSkills = () => {
    const container = getElement('skills').querySelector('.skills-container');
    if (!container) return;

    skillsData.forEach(skill => {
        const skillEl = createElement('div', 'skill-item');
        skillEl.innerHTML = `
            <h3>${skill.name}</h3>
            <div class="skill-progress">
                <div class="progress-bar" data-level="${skill.level}" style="width: 0%"></div>
            </div>
        `;
        container.appendChild(skillEl);
    });

    // Animate progress bars on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bars = entry.target.querySelectorAll('.progress-bar');
                bars.forEach(bar => {
                    const level = bar.dataset.level;
                    setTimeout(() => {
                        bar.style.width = `${level}%`;
                    }, 200);
                });
            }
        });
    });

    document.querySelectorAll('.skill-item').forEach(item => observer.observe(item));
};

// Render Testimonials with proper styling
const renderTestimonials = () => {
    const container = document.querySelector('#testimonials .testimonials');
    if (!container) return;

    testimonialData.forEach(item => {
        const testimonialEl = createElement('div', 'testimonial-card');
        testimonialEl.innerHTML = `
            <p class="testimonial-text">"${item.text}"</p>
            <div class="testimonial-author">
                <strong>${item.name}</strong>
                <span>${item.role}</span>
            </div>
        `;
        container.appendChild(testimonialEl);
    });
};

// Theme handling
const handleTheme = () => {
    const theme = localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
    document.body.classList.toggle('dark-mode', theme === 'dark');
    getElement('theme-toggle')?.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
};

// Initialize
window.addEventListener('load', () => {
    handleTheme();
    renderExperience();
    renderProjects();
    renderSkills();
    renderTestimonials();
});

// Add scroll animations
const animateSections = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    document.querySelectorAll('section').forEach(section => observer.observe(section));
};

animateSections();
