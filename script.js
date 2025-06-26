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

// Викликаємо функцію відображення часу одразу при завантаженні сторінки
// та оновлюємо кожну секунду (для демонстрації)
document.addEventListener('DOMContentLoaded', () => {
    displayCurrentTime();
    // setInterval(displayCurrentTime, 1000); // Можна розкоментувати для оновлення щосекунди
});