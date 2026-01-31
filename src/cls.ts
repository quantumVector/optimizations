function initApp(): void {
    const element = document.querySelector('#elem-2 img') as HTMLImageElement;

    setTimeout(() => {
        if (element) {
            // Создаём новое изображение в памяти
            const newImg = new Image();
            newImg.onload = () => {
                // Когда загрузилось - меняем src
                element.src = './dist/assets/test2.jpg';
            };
            newImg.src = './dist/assets/test2.jpg';
        }
    }, 1500);
}


if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}