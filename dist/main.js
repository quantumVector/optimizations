"use strict";
// Класс счётчика
class CounterApp {
    constructor(countElementId) {
        this.value = 0;
        const element = document.getElementById(countElementId);
        if (!element)
            throw new Error(`Element ${countElementId} not found`);
        this.countElement = element;
    }
    increment() {
        this.value++;
        this.updateDisplay();
    }
    decrement() {
        this.value--;
        this.updateDisplay();
    }
    reset() {
        this.value = 0;
        this.updateDisplay();
    }
    updateDisplay() {
        this.countElement.textContent = this.value.toString();
    }
}
// Функция приветствия с типизацией
function greet(name) {
    if (name.trim() === '') {
        return 'Введвввви своё имя!';
    }
    return `Привет, ${name}! Рад тебя видеть! 🎉`;
}
// Инициализация приложения
function initApp() {
    // Счётчик
    const counter = new CounterApp('count');
    const incrementBtn = document.getElementById('increment');
    const decrementBtn = document.getElementById('decrement');
    const resetBtn = document.getElementById('reset');
    incrementBtn?.addEventListener('click', () => counter.increment());
    decrementBtn?.addEventListener('click', () => counter.decrement());
    resetBtn?.addEventListener('click', () => counter.reset());
    // Приветствие
    const nameInput = document.getElementById('nameInput');
    const greetBtn = document.getElementById('greetBtn');
    const greetingText = document.getElementById('greetingText');
    greetBtn?.addEventListener('click', () => {
        const name = nameInput.value;
        greetingText.textContent = greet(name);
    });
    nameInput?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            greetBtn.click();
        }
    });
    console.log('✅ Приложение инициализировано!');
}
// Запуск после загрузки DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
}
else {
    initApp();
}
