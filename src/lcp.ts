function initApp(): void {
    const elements = [
        document.getElementById('elem-1'),
        document.getElementById('elem-3'),
        document.getElementById('elem-4'),
        document.getElementById('elem-2')
    ];

    let currentIndex = 0;

    const interval = setInterval(() => {
        if (currentIndex < elements.length) {
            const elem = elements[currentIndex];
            if (elem) {
                elem.style.display = 'block';
            }
            currentIndex++;
        } else {
            clearInterval(interval);
        }
    }, 500);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}