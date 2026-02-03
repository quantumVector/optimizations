// Симуляция тяжёлых вычислений
console.log('⏳ Начинаем блокировать рендеринг...');
//@ts-ignore
const startTime = Date.now();

// Блокируем главный поток на 2 секунды
function blockMainThread(ms: number): void {
    const end = Date.now() + ms;
    while (Date.now() < end) {
        // Пустой цикл, блокирует поток
        Math.sqrt(Math.random());
    }
}

// Блокируем на 2000ms
blockMainThread(2000);

console.log(`✅ Разблокировали через ${Date.now() - startTime}ms`);

// Манипуляции с DOM (тоже блокируют)
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM загружен');
});
