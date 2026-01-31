// Интерфейс для счётчика
interface Counter {
    value: number;
    increment(): void;
    decrement(): void;
    reset(): void;
}

// Класс счётчика
class CounterApp implements Counter {
    value: number = 0;
    private countElement: HTMLElement;

    constructor(countElementId: string) {
        const element = document.getElementById(countElementId);
        if (!element) throw new Error(`Element ${countElementId} not found`);
        this.countElement = element;
    }

    increment(): void {
        this.value++;
        this.updateDisplay();
    }

    decrement(): void {
        this.value--;
        this.updateDisplay();
    }

    reset(): void {
        this.value = 0;
        this.updateDisplay();
    }

    private updateDisplay(): void {
        this.countElement.textContent = this.value.toString();
    }
}

// Функция приветствия с типизацией
function greet(name: string): string {
    if (name.trim() === '') {
        return 'Введвввви своё имя!';
    }
    return `Привет, ${name}! Рад тебя видеть! 🎉`;
}

// Инициализация приложения
function initApp(): void {
    // Счётчик
    const counter = new CounterApp('count');

    const incrementBtn = document.getElementById('increment') as HTMLButtonElement;
    const decrementBtn = document.getElementById('decrement') as HTMLButtonElement;
    const resetBtn = document.getElementById('reset') as HTMLButtonElement;

    incrementBtn?.addEventListener('click', () => counter.increment());
    decrementBtn?.addEventListener('click', () => counter.decrement());
    resetBtn?.addEventListener('click', () => counter.reset());

    // Приветствие
    const nameInput = document.getElementById('nameInput') as HTMLInputElement;
    const greetBtn = document.getElementById('greetBtn') as HTMLButtonElement;
    const greetingText = document.getElementById('greetingText') as HTMLParagraphElement;

    greetBtn?.addEventListener('click', () => {
        const name = nameInput.value;
        greetingText.textContent = greet(name);
    });

    nameInput?.addEventListener('keypress', (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            greetBtn.click();
        }
    });

    console.log('✅ Приложение инициализировано!');
}

// Запуск после загрузки DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}