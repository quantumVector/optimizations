async function blockMainThreadNonBlocking(totalMs: number): Promise<void> {
    const chunkSize = 50; // Каждый чанк <50ms
    let remaining = totalMs;

    while (remaining > 0) {
        const start = Date.now();
        const end = start + Math.min(chunkSize, remaining);

        // Работаем 50ms
        while (Date.now() < end) {
            Math.sqrt(Math.random());
        }

        remaining -= chunkSize;

        // Отдаём контроль браузеру
        await new Promise(resolve => setTimeout(resolve, 0));
    }
}

// Использование
console.log('⏳ Начинаем работу без блокировки...');
const startTime = Date.now();

blockMainThreadNonBlocking(2000).then(() => {
    console.log(`✅ Завершили через ${Date.now() - startTime}ms`);
});