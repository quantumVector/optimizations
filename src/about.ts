// Типы данных
interface Technology {
    name: string;
    icon: string;
}

interface Feature {
    title: string;
    description: string;
}

interface Stats {
    linesOfCode: number;
    filesCount: number;
    buildTime: string;
}

// Данные
const technologies: Technology[] = [
    { name: 'TypeScript', icon: '📘' },
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'GitHub Pages', icon: '🚀' }
];

const features: Feature[] = [
    {
        title: 'Типизация',
        description: 'Строгая типизация TypeScript помогает избежать ошибок'
    },
    {
        title: 'Без фреймворков',
        description: 'Чистый код без зависимостей от React, Vue или Angular'
    },
    {
        title: 'Модульность',
        description: 'Код организован в классы и модули'
    },
    {
        title: 'Быстрая загрузка',
        description: 'Минимальный размер бандла и быстрая загрузка страниц'
    }
];

// Функции рендеринга
function renderTechnologies(techs: Technology[]): void {
    const techList = document.getElementById('tech-list');
    if (!techList) return;

    techs.forEach(tech => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="tech-icon">${tech.icon}</span> ${tech.name}`;
        techList.appendChild(li);
    });
}

function renderFeatures(features: Feature[]): void {
    const featuresContainer = document.getElementById('features');
    if (!featuresContainer) return;

    features.forEach(feature => {
        const featureCard = document.createElement('div');
        featureCard.className = 'feature-card';
        featureCard.innerHTML = `
            <h3>${feature.title}</h3>
            <p>${feature.description}</p>
        `;
        featuresContainer.appendChild(featureCard);
    });
}

function renderStats(): void {
    const statsContainer = document.getElementById('stats');
    if (!statsContainer) return;

    const stats: Stats = {
        linesOfCode: Math.floor(Math.random() * 500) + 200,
        filesCount: 5,
        buildTime: '< 1s'
    };

    statsContainer.innerHTML = `
        <div class="stat-item">
            <div class="stat-value">${stats.linesOfCode}</div>
            <div class="stat-label">Строк кода</div>
        </div>
        <div class="stat-item">
            <div class="stat-value">${stats.filesCount}</div>
            <div class="stat-label">Файлов</div>
        </div>
        <div class="stat-item">
            <div class="stat-value">${stats.buildTime}</div>
            <div class="stat-label">Время сборки</div>
        </div>
    `;
}

// Анимация появления секций
function animateSections(): void {
    const sections = document.querySelectorAll('.info-block');

    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('fade-in');
        }, index * 150);
    });
}

// Инициализация
function initAboutPage(): void {
    renderTechnologies(technologies);
    renderFeatures(features);
    renderStats();
    animateSections();

    console.log('✅ Страница "О проекте" загружена!');
}

// Запуск
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAboutPage);
} else {
    initAboutPage();
}