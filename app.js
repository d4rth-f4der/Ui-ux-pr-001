// ...existing code...

// Функция для переключения между "видами" (экранами)
function showView(viewId) {
    const views = document.querySelectorAll('.view');
    views.forEach(view => {
        view.classList.remove('active');
    });

    const targetView = document.getElementById(viewId);
    if (targetView) {
        targetView.classList.add('active');
    }
}

// Calculation

// Triangle perimeter
function calculateTriangle() {
    const side1 = parseFloat(document.getElementById('side1').value);
    const side2 = parseFloat(document.getElementById('side2').value);
    const side3 = parseFloat(document.getElementById('side3').value);
    const resultElement = document.getElementById('triangle-result');

    if (isNaN(side1) || isNaN(side2) || isNaN(side3) || side1 <= 0 || side2 <= 0 || side3 <= 0) {
        resultElement.textContent = "Будь ласка, введіть коректні значення.";
        return;
    }

    const perimeter = side1 + side2 + side3;
    resultElement.textContent = `P = ${perimeter}`;
}

// Rectangle perimeter
function calculateRectangle() {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const resultElement = document.getElementById('rectangle-result');

    if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
        resultElement.textContent = "Будь ласка, введіть коректні значення.";
        return;
    }

    const perimeter = 2 * (length + width);
    resultElement.textContent = `P = ${perimeter}`;
}

// Circle Length
function calculateCircle() {
    const radius = parseFloat(document.getElementById('radius').value);
    const resultElement = document.getElementById('circle-result');

    if (isNaN(radius) || radius <= 0) {
        resultElement.textContent = "Будь ласка, введіть коректне значення.";
        return;
    }

    const circumference = 2 * Math.PI * radius;
    resultElement.textContent = `L = ${circumference.toFixed(2)}`;
}

// Modals
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Закрытие модалки по клику вне её
window.addEventListener('click', (event) => {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// Инициализация обработчиков (централизованно)
function initializeEventListeners() {
    // menu buttons уже обрабатываются в DOMContentLoaded ниже

    // Triangle
    document.getElementById('calculate-triangle')?.addEventListener('click', calculateTriangle);
    document.getElementById('show-triangle-formula')?.addEventListener('click', () => showModal('triangle-modal'));
    document.getElementById('triangle-back')?.addEventListener('click', () => showView('main-menu'));

    // Rectangle
    document.getElementById('calculate-rectangle')?.addEventListener('click', calculateRectangle);
    document.getElementById('show-rectangle-formula')?.addEventListener('click', () => showModal('rectangle-modal'));
    document.getElementById('rectangle-back')?.addEventListener('click', () => showView('main-menu'));

    // Circle
    document.getElementById('calculate-circle')?.addEventListener('click', calculateCircle);
    document.getElementById('show-circle-formula')?.addEventListener('click', () => showModal('circle-modal'));
    document.getElementById('circle-back')?.addEventListener('click', () => showView('main-menu'));

    // About
    document.getElementById('about-back')?.addEventListener('click', () => showView('main-menu'));

    // Close buttons for modals
    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modalId = btn.dataset.modal || btn.closest('.modal')?.id;
            if (modalId) closeModal(modalId);
        });
    });
}

// Добавляем обработчики событий для кнопок меню и инициализируем прочие слушатели
document.addEventListener('DOMContentLoaded', () => {
    const menuButtons = document.querySelectorAll('.menu-btn');
    menuButtons.forEach(button => {
        button.addEventListener('click', () => {
            const viewId = button.getAttribute('data-view');
            showView(viewId + '-view');
        });
    });

    initializeEventListeners();
});

// ...existing code...