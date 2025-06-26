// script.js

// Функція для відображення привітання за ім'ям користувача
function greetUser() {
    let userName = prompt("Будь ласка, введіть ваше ім'я:"); // Запитуємо ім'я користувача
    if (userName) {
        alert("Привіт, " + userName + "! Ласкаво просимо до нашої книгарні!");
    } else {
        alert("Привіт! Ми раді бачити вас у нашій книгарні!");
    }
}

// Функція для зміни тексту елемента за його ID
function changeText() {
    const textElement = document.getElementById('dynamicText');
    if (textElement) {
        textElement.innerText = "Цей текст був змінений за допомогою JavaScript!";
        textElement.style.color = "blue"; // Змінюємо колір тексту
        textElement.style.fontWeight = "bold"; // Робимо текст жирним
    }
}

// Функція для демонстрації циклу та виведення в консоль
function demonstrateLoop() {
    console.log("Початок демонстрації циклу:");
    for (let i = 0; i < 5; i++) {
        console.log("Ітерація номер: " + (i + 1));
    }
    console.log("Кінець демонстрації циклу.");
    alert("Відкрийте консоль розробника (F12), щоб побачити результат циклу!");
}

// Функція для підтвердження дії користувачем
function confirmAction() {
    const userConfirmed = confirm("Ви впевнені, що хочете перейти на іншу сторінку?");
    if (userConfirmed) {
        // Якщо користувач підтвердив, перенаправляємо на google.com
        window.location.href = "https://www.google.com/";
    } else {
        alert("Дія скасована.");
    }
}

// Функція для відображення поточної дати та часу
function displayCurrentTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString('uk-UA'); // Форматуємо дату і час для України
    const timeElement = document.getElementById('currentTime');
    if (timeElement) {
        timeElement.innerText = "Поточна дата і час: " + dateTimeString;
    }
}

// Функція для відображення помилки валідації
function showError(element, message, errorElementId) {
    const errorDiv = document.getElementById(errorElementId);
    if (errorDiv) {
        errorDiv.innerText = message;
        element.classList.add('error'); // Додаємо клас error до поля вводу
    }
}

// Функція для приховування помилки валідації
function clearError(element, errorElementId) {
    const errorDiv = document.getElementById(errorElementId);
    if (errorDiv) {
        errorDiv.innerText = '';
        element.classList.remove('error'); // Видаляємо клас error з поля вводу
    }
}

// Функція для валідації форми
function validateForm(event) {
    event.preventDefault(); // Запобігаємо стандартній відправці форми

    let isValid = true;

    // Отримуємо елементи форми
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    // Валідація імені
    if (nameInput.value.trim() === '') {
        showError(nameInput, "Будь ласка, введіть ваше ім'я.", 'nameError');
        isValid = false;
    } else {
        clearError(nameInput, 'nameError');
    }

    // Валідація Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Простий регулярний вираз для перевірки Email
    if (emailInput.value.trim() === '') {
        showError(emailInput, "Будь ласка, введіть ваш Email.", 'emailError');
        isValid = false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
        showError(emailInput, "Будь ласка, введіть коректний Email.", 'emailError');
        isValid = false;
    } else {
        clearError(emailInput, 'emailError');
    }

    // Валідація пароля
    if (passwordInput.value.trim() === '') {
        showError(passwordInput, "Будь ласка, введіть ваш пароль.", 'passwordError');
        isValid = false;
    } else if (passwordInput.value.trim().length < 6) {
        showError(passwordInput, "Пароль має містити щонайменше 6 символів.", 'passwordError');
        isValid = false;
    } else {
        clearError(passwordInput, 'passwordError');
    }

    if (isValid) {
        alert("Форма успішно відправлена! (Дані у консолі)");
        console.log("Дані форми:");
        console.log("Ім'я: " + nameInput.value.trim());
        console.log("Email: " + emailInput.value.trim());
        console.log("Пароль: " + passwordInput.value.trim()); // У реальних додатках паролі не логують!
        // Тут можна було б відправити дані на сервер (наприклад, через fetch API)
        // event.target.submit(); // Якщо потрібно все ж таки відправити форму після успішної валідації
    }
}

// Викликаємо функцію відображення часу одразу при завантаженні сторінки
// та додаємо слухача подій для форми
document.addEventListener('DOMContentLoaded', () => {
    displayCurrentTime();
    // setInterval(displayCurrentTime, 1000); // Можна розкоментувати для оновлення щосекунди

    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', validateForm);
    }
});