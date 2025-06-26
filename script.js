// script.js

// Функції з ЛР4 (попередні та оновлені)
function greetUser() {
    let userName = prompt("Будь ласка, введіть ваше ім'я:");
    if (userName) {
        alert("Привіт, " + userName + "! Ласкаво просимо до нашої книгарні!");
        // Додамо цикл для демонстрації (якщо не було в greetUser раніше)
        for (let i = 0; i < 3; i++) {
            console.log("Привітання " + (i + 1) + " раз для " + userName);
        }
    } else {
        alert("Привіт! Ми раді бачити вас у нашій книгарні!");
    }
}

function changeText() {
    const textElement = document.getElementById('dynamicText');
    if (textElement) {
        textElement.innerText = "Цей текст був змінений за допомогою JavaScript (innerText)!";
        textElement.style.color = "blue";
        textElement.style.fontWeight = "bold";
    }
}

function demonstrateLoop() {
    console.log("Початок демонстрації циклу:");
    let counter = 0;
    while (counter < 4) {
        console.log("While цикл: Ітерація номер: " + (counter + 1));
        counter++;
    }
    console.log("Кінець демонстрації циклу.");
    alert("Відкрийте консоль розробника (F12), щоб побачити результат циклу (while)!");
}

function confirmAction() {
    const userConfirmed = confirm("Ви впевнені, що хочете перейти на Google?");
    if (userConfirmed) {
        window.location.href = "https://www.google.com/"; // Використання об'єкта location
    } else {
        alert("Перенаправлення скасовано.");
    }
}

// Нова функція для виводу інформації про розробника (вимога ЛР4)
function displayDeveloperInfo(lastName, firstName, position = 'Розробник') {
    alert(`Інформація про розробника:\nПрізвище: ${lastName}\nІм'я: ${firstName}\nПосада: ${position}`);
}

// Нова функція для порівняння рядків (вимога ЛР4)
function compareStringsWrapper() {
    let str1 = prompt("Введіть перший рядок:");
    let str2 = prompt("Введіть другий рядок:");

    if (str1 === null || str2 === null) {
        alert("Введення скасовано.");
        return;
    }

    if (str1.length > str2.length) {
        alert(`Рядок "${str1}" довший за рядок "${str2}".`);
    } else if (str2.length > str1.length) {
        alert(`Рядок "${str2}" довший за рядок "${str1}".`);
    } else {
        alert(`Рядки "${str1}" та "${str2}" мають однакову довжину.`);
    }
}

// Функція для зміни фону на 30 секунд (вимога ЛР4)
function changeBackgroundTemporarily() {
    const originalColor = document.body.style.backgroundColor;
    document.body.style.backgroundColor = '#d4edda'; // Змінюємо на світло-зелений

    setTimeout(() => {
        document.body.style.backgroundColor = originalColor; // Повертаємо початковий колір
        alert("Фон повернувся до початкового!");
    }, 30000); // 30 секунд
    alert("Фон сторінки змінився на 30 секунд!");
}

// Функція для демонстрації querySelectorAll, nodeValue/data (вимога ЛР4)
function demonstrateQuerySelectorAll() {
    const queryItems = document.querySelectorAll('.query-item');
    console.log("Елементи, знайдені за допомогою querySelectorAll('.query-item'):", queryItems);

    let textNodeTarget = document.getElementById('textNodeTarget');
    if (textNodeTarget && textNodeTarget.firstChild && textNodeTarget.firstChild.nodeType === Node.TEXT_NODE) {
        console.log("Початкове nodeValue/data текстового вузла:", textNodeTarget.firstChild.nodeValue);
        textNodeTarget.firstChild.nodeValue = "Текст змінено через nodeValue/data!";
        console.log("Нове nodeValue/data текстового вузла:", textNodeTarget.firstChild.nodeValue);
    } else {
        console.log("Елемент #textNodeTarget не знайдено або не містить текстового вузла.");
    }
    alert("Результати querySelectorAll та nodeValue/data дивіться в консолі та на сторінці.");
}

// Функція для демонстрації innerHTML, outerHTML, textContent (вимога ЛР4)
function demonstrateDOMNodeProperties() {
    const domTarget = document.getElementById('domTarget');
    const firstP = document.getElementById('firstParagraph');

    if (domTarget && firstP) {
        alert("innerHTML domTarget: " + domTarget.innerHTML);
        alert("textContent domTarget: " + domTarget.textContent);
        alert("innerText firstParagraph: " + firstP.innerText);

        // Зміна innerHTML
        domTarget.innerHTML += "<p><em>Це новий абзац, доданий через innerHTML.</em></p>";
        alert("innerHTML domTarget змінено!");
    }
}

// Функція для демонстрації outerHTML (вимога ЛР4)
function demonstrateOuterHTML() {
    const outerHtmlTarget = document.getElementById('outerHtmlTarget');
    if (outerHtmlTarget) {
        alert("Поточний outerHTML: " + outerHtmlTarget.outerHTML);
        // Заміна елемента через outerHTML
        outerHtmlTarget.outerHTML = '<div id="outerHtmlTarget" style="background-color: #ffe6e6; padding: 10px;">' +
                                      '<p>Цей блок був повністю замінений через <strong>outerHTML</strong>.</p>' +
                                      '</div>';
        alert("Блок замінений через outerHTML!");
    }
}

// Функція для демонстрації document.createElement, createTextNode, append, prepend, after, replaceWith, remove (вимога ЛР4)
function demonstrateNodeInsertionAndRemoval() {
    const domTarget = document.getElementById('domTarget');
    const secondParagraph = document.getElementById('secondParagraph');
    const removableParagraph = document.getElementById('removableParagraph');

    if (domTarget && secondParagraph && removableParagraph) {
        // document.createElement and createTextNode
        const newDiv = document.createElement('div');
        const newTextNode = document.createTextNode('Це текстовий вузол.');
        newDiv.appendChild(newTextNode);
        newDiv.style.border = '1px solid green';
        newDiv.style.padding = '5px';
        newDiv.innerText += " (додано через createElement і createTextNode)";

        // append: додає в кінець батьківського елемента
        domTarget.append(newDiv);
        alert("Додано новий div через append.");

        // prepend: додає на початок батьківського елемента
        const firstP = document.getElementById('firstParagraph');
        const prependedSpan = document.createElement('span');
        prependedSpan.innerText = "(Prepended) ";
        firstP.prepend(prependedSpan);
        alert("Додано span через prepend до першого абзацу.");

        // after: додає після поточного елемента (на тому ж рівні)
        const afterElement = document.createElement('p');
        afterElement.innerText = "Я з'явився після другого абзацу (через after).";
        secondParagraph.after(afterElement);
        alert("Додано новий абзац через after.");

        // replaceWith: замінює поточний елемент
        const replacementElement = document.createElement('p');
        replacementElement.innerHTML = 'Це **замінюючий** абзац (через replaceWith).';
        const originalFirstParagraph = document.getElementById('firstParagraph');
        if (originalFirstParagraph) {
            originalFirstParagraph.replaceWith(replacementElement);
            alert("Перший абзац замінено через replaceWith.");
        }


        // remove: видаляє елемент
        if (removableParagraph) {
            removableParagraph.remove();
            alert("Абзац 'Цей абзац буде видалено.' видалено через remove().");
        }
    } else {
        alert("Не всі необхідні елементи DOM знайдені для демонстрації вставки/видалення.");
    }
}


// Функції з ЛР5: Валідація форми
function showError(element, message, errorElementId) {
    const errorDiv = document.getElementById(errorElementId);
    if (errorDiv) {
        errorDiv.innerText = message;
        element.classList.add('error');
    }
}

function clearError(element, errorElementId) {
    const errorDiv = document.getElementById(errorElementId);
    if (errorDiv) {
        errorDiv.innerText = '';
        element.classList.remove('error');
    }
}

function validateForm(event) {
    event.preventDefault();

    let isValid = true;

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    if (nameInput.value.trim() === '') {
        showError(nameInput, "Будь ласка, введіть ваше ім'я.", 'nameError');
        isValid = false;
    } else {
        clearError(nameInput, 'nameError');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === '') {
        showError(emailInput, "Будь ласка, введіть ваш Email.", 'emailError');
        isValid = false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
        showError(emailInput, "Будь ласка, введіть коректний Email.", 'emailError');
        isValid = false;
    } else {
        clearError(emailInput, 'emailError');
    }

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
        console.log("Пароль: " + passwordInput.value.trim());
    }
}


// Функції з ЛР6: Task Manager
let tasks = [];
let nextTaskId = 0;

const newTaskInput = document.getElementById('newTaskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('nextTaskId', nextTaskId);
}

function loadTasks() {
    const storedTasks = localStorage.getItem('tasks');
    const storedNextTaskId = localStorage.getItem('nextTaskId');
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
    }
    if (storedNextTaskId) {
        nextTaskId = parseInt(storedNextTaskId, 10);
    }
}

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.dataset.id = task.id;

        if (task.completed) {
            li.classList.add('completed');
        }

        const taskDescription = document.createElement('span');
        taskDescription.innerText = task.description;
        taskDescription.style.flexGrow = 1;

        const actionsDiv = document.createElement('div');
        actionsDiv.classList.add('task-actions');

        const toggleButton = document.createElement('button');
        toggleButton.classList.add('toggle-completed');
        toggleButton.innerText = task.completed ? '✓' : '○';
        toggleButton.title = task.completed ? 'Позначити як невиконане' : 'Позначити як виконане';
        toggleButton.onclick = () => toggleTaskCompleted(task.id);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-task');
        deleteButton.innerText = '✕';
        deleteButton.title = 'Видалити завдання';
        deleteButton.onclick = () => deleteTask(task.id);

        actionsDiv.appendChild(toggleButton);
        actionsDiv.appendChild(deleteButton);
        
        li.appendChild(taskDescription);
        li.appendChild(actionsDiv);
        taskList.appendChild(li);
    });
}

function addTask() {
    const description = newTaskInput.value.trim();
    if (description) {
        const newTask = {
            id: nextTaskId++,
            description: description,
            completed: false
        };
        tasks.push(newTask);
        newTaskInput.value = '';
        saveTasks();
        renderTasks();
    } else {
        alert("Будь ласка, введіть опис завдання.");
    }
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    renderTasks();
}

function toggleTaskCompleted(id) {
    tasks = tasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
    );
    saveTasks();
    renderTasks();
}


// Обробники подій та ініціалізація при завантаженні DOM
document.addEventListener('DOMContentLoaded', () => {
    displayCurrentTime(); // Існуюча функція

    // Ініціалізація валідації форми (з ЛР5)
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', validateForm);
    }

    // Ініціалізація Task Manager (з ЛР6)
    loadTasks();
    renderTasks();
    if (addTaskButton) {
        addTaskButton.addEventListener('click', addTask);
    }
    if (newTaskInput) {
        newTaskInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                addTask();
            }
        });
    }
});