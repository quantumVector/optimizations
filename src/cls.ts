function initApp(): void {
    const element = document.querySelector('#elem-2 img') as HTMLImageElement;

    setTimeout(() => {
        if (element) {
            const newImg = new Image();
            newImg.onload = () => {
                element.src = './dist/assets/test2.jpg';
            };
            newImg.src = './dist/assets/test2.jpg';
        }
    }, 1500);
}

function loadGoogleFont(): void {
    setTimeout(() => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://fonts.googleapis.com/css2?family=Asset&display=swap';

        link.onload = () => {
            document.body.classList.add('fonts-loaded');
            console.log('✅ Google Font загружен');
        };

        document.head.appendChild(link);
        console.log('⏳ Начата загрузка Google Font через 3 секунды');
    }, 1500); // Задержка 3 секунды
}

// Запуск
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadGoogleFont);
} else {
    loadGoogleFont();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}