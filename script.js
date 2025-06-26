// script.js

// ... (Ваш існуючий код з попередніх лабораторних робіт: ЛР4, ЛР5, ЛР6, ЛР7) ...
// Зручно розташувати новий код ЛР8 в кінці файлу script.js

// Функції з ЛР4 (попередні та оновлені)
function greetUser() {
    let userName = prompt("Будь ласка, введіть ваше ім'я:");
    if (userName) {
        alert("Привіт, " + userName + "! Ласкаво просимо до нашої книгарні!");
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
        window.location.href = "https://www.google.com/";
    } else {
        alert("Перенаправлення скасовано.");
    }
}

function displayDeveloperInfo(lastName, firstName, position = 'Розробник') {
    alert(`Інформація про розробника:\nПрізвище: ${lastName}\nІм'я: ${firstName}\nПосада: ${position}`);
}

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

function changeBackgroundTemporarily() {
    const originalColor = document.body.style.backgroundColor;
    document.body.style.backgroundColor = '#d4edda';

    setTimeout(() => {
        document.body.style.backgroundColor = originalColor;
        alert("Фон повернувся до початкового!");
    }, 30000);
    alert("Фон сторінки змінився на 30 секунд!");
}

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

function demonstrateDOMNodeProperties() {
    const domTarget = document.getElementById('domTarget');
    const firstP = document.getElementById('firstParagraph');

    if (domTarget && firstP) {
        alert("innerHTML domTarget: " + domTarget.innerHTML);
        alert("textContent domTarget: " + domTarget.textContent);
        alert("innerText firstP: " + firstP.innerText);

        domTarget.innerHTML += "<p><em>Це новий абзац, доданий через innerHTML.</em></p>";
        alert("innerHTML domTarget змінено!");
    }
}

function demonstrateOuterHTML() {
    const outerHtmlTarget = document.getElementById('outerHtmlTarget');
    if (outerHtmlTarget) {
        alert("Поточний outerHTML: " + outerHtmlTarget.outerHTML);
        outerHtmlTarget.outerHTML = '<div id="outerHtmlTarget" style="background-color: #ffe6e6; padding: 10px;">' +
                                      '<p>Цей блок був повністю замінений через <strong>outerHTML</strong>.</p>' +
                                      '</div>';
        alert("Блок замінений через outerHTML!");
    }
}

function demonstrateNodeInsertionAndRemoval() {
    const domTarget = document.getElementById('domTarget');
    const secondParagraph = document.getElementById('secondParagraph');
    const removableParagraph = document.getElementById('removableParagraph');

    if (domTarget && secondParagraph && removableParagraph) {
        const newDiv = document.createElement('div');
        const newTextNode = document.createTextNode('Це текстовий вузол.');
        newDiv.appendChild(newTextNode);
        newDiv.style.border = '1px solid green';
        newDiv.style.padding = '5px';
        newDiv.innerText += " (додано через createElement і createTextNode)";

        domTarget.append(newDiv);
        alert("Додано новий div через append.");

        const firstP = document.getElementById('firstParagraph');
        const prependedSpan = document.createElement('span');
        prependedSpan.innerText = "(Prepended) ";
        firstP.prepend(prependedSpan);
        alert("Додано span через prepend до першого абзацу.");

        const afterElement = document.createElement('p');
        afterElement.innerText = "Я з'явився після другого абзацу (через after).";
        secondParagraph.after(afterElement);
        alert("Додано новий абзац через after.");

        const replacementElement = document.createElement('p');
        replacementElement.innerHTML = 'Це **замінюючий** абзац (через replaceWith).';
        const originalFirstParagraph = document.getElementById('firstParagraph');
        if (originalFirstParagraph) {
            originalFirstParagraph.replaceWith(replacementElement);
            alert("Перший абзац замінено через replaceWith.");
        }
        
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


// Функції з ЛР7: Обробка та Делегування Подій
const eventOutput = document.getElementById('eventOutput');
const propertyButton = document.getElementById('propertyButton');
const addEventListenerButton = document.getElementById('addEventListenerButton');
const removeListenerButton = document.getElementById('removeListenerButton');
const objectHandlerButton = document.getElementById('objectHandlerButton');

function showAlertFromAttribute() {
    eventOutput.innerText = "Подія спрацювала: Клік з HTML-атрибуту!";
    console.log("Клік з HTML-атрибуту", event.currentTarget);
}

function handlePropertyClick() {
    eventOutput.innerText = "Подія спрацювала: Клік з властивості DOM-об'єкта!";
    console.log("Клік з властивості DOM-об'єкта", event.currentTarget);
}

function handleAddEventListenerClick1(event) {
    eventOutput.innerText = "Подія спрацювала: Клік з addEventListener (обробник 1)!";
    console.log("Клік з addEventListener (обробник 1)", event.currentTarget);
}

function handleAddEventListenerClick2(event) {
    console.log("Клік з addEventListener (обробник 2) - додатковий лог!", event.currentTarget);
}

const myObjectHandler = {
    message: "Це об'єкт-обробник!",
    handleEvent(event) {
        eventOutput.innerText = `Подія спрацювала: ${event.type} з об'єкта-обробника. Повідомлення: ${this.message}`;
        console.log("Клік з об'єкта-обробника", event.currentTarget);
    }
};

function removeMyEventListener() {
    addEventListenerButton.removeEventListener('click', handleAddEventListenerClick1);
    addEventListenerButton.removeEventListener('click', handleAddEventListenerClick2);
    eventOutput.innerText = "Обробники 'addEventListener' видалено з кнопки 'Клік (addEventListener)'.";
    console.log("Обробники видалені.");
}

const colorClickList = document.getElementById('colorClickList');

function handleListClick(event) {
    if (event.target.tagName === 'LI') {
        const currentlyHighlighted = colorClickList.querySelector('.highlighted');
        if (currentlyHighlighted) {
            currentlyHighlighted.classList.remove('highlighted');
        }
        event.target.classList.add('highlighted');
        eventOutput.innerText = `Вибрано елемент списку: ${event.target.innerText}`;
    }
}

const actionMenu = document.getElementById('actionMenu');
const actionOutput = document.getElementById('actionOutput');

function handleMenuAction(event) {
    const targetButton = event.target.closest('button[data-action]');

    if (targetButton) {
        const action = targetButton.dataset.action;

        switch (action) {
            case 'save':
                actionOutput.innerText = "Вибрано дію: Зберегти дані!";
                break;
            case 'load':
                actionOutput.innerText = "Вибрано дію: Завантажити дані!";
                break;
            case 'delete':
                actionOutput.innerText = "Вибрано дію: Видалити дані!";
                break;
            case 'print':
                actionOutput.innerText = "Вибрано дію: Друк документа!";
                break;
            default:
                actionOutput.innerText = "Невідома дія.";
        }
        console.log(`Дія виконана: ${action}`, event.currentTarget);
    }
}

// ============== НОВИЙ КОД ДЛЯ ЛР8: Події миші та Drag and Drop ==============

const hoverContainer = document.getElementById('hoverContainer');
const hoverOutput = document.getElementById('hoverOutput');
const draggableImage = document.getElementById('draggableImage');
const dropTarget = document.getElementById('dropTarget');
const dropStatus = document.getElementById('dropStatus');

let isDragging = false;
let offsetX, offsetY; // Зміщення курсора відносно верхнього лівого кута перетягуваного елемента

// 1. mouseover та mouseout з event.target/event.relatedTarget
if (hoverContainer) {
    hoverContainer.addEventListener('mouseover', (event) => {
        // Перевіряємо, чи ми "зайшли" на hover-box ззовні контейнера або з іншого hover-box
        if (event.target.classList.contains('hover-box') && !event.target.contains(event.relatedTarget)) {
            event.target.classList.add('highlight-hover');
            hoverOutput.innerText = `Наведено на: ${event.target.innerText}`;
            console.log(`Mouseover на: ${event.target.innerText}, relatedTarget:`, event.relatedTarget);
        }
    });

    hoverContainer.addEventListener('mouseout', (event) => {
        // Перевіряємо, чи ми "вийшли" з hover-box в інший елемент або за межі контейнера
        if (event.target.classList.contains('hover-box') && !event.target.contains(event.relatedTarget)) {
            event.target.classList.remove('highlight-hover');
            hoverOutput.innerText = `Курсор залишив: ${event.target.innerText}`;
            console.log(`Mouseout з: ${event.target.innerText}, relatedTarget:`, event.relatedTarget);
        }
    });
}


// 2. Реалізація Drag and Drop
if (draggableImage) {
    draggableImage.addEventListener('mousedown', (e) => {
        isDragging = true;
        draggableImage.classList.add('dragging');
        draggableImage.style.position = 'absolute'; // Встановлюємо позицію для перетягування
        
        // Розраховуємо зміщення курсора відносно верхнього лівого кута елемента
        offsetX = e.clientX - draggableImage.getBoundingClientRect().left;
        offsetY = e.clientY - draggableImage.getBoundingClientRect().top;

        // Початкова позиція зображення
        //draggableImage.style.left = e.pageX - offsetX + 'px';
        //draggableImage.style.top = e.pageY - offsetY + 'px';

        dropStatus.innerText = "Статус: Перетягування розпочато...";
        console.log("Drag started!");
    });
}

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    // Оновлюємо позицію елемента, враховуючи зміщення курсора
    draggableImage.style.left = (e.pageX - offsetX) + 'px';
    draggableImage.style.top = (e.pageY - offsetY) + 'px';

    // Перевірка, чи курсор знаходиться над dropTarget
    const dropTargetRect = dropTarget.getBoundingClientRect();
    const isOverDropTarget = e.clientX > dropTargetRect.left &&
                             e.clientX < dropTargetRect.right &&
                             e.clientY > dropTargetRect.top &&
                             e.clientY < dropTargetRect.bottom;

    if (isOverDropTarget) {
        dropTarget.classList.add('hovered');
    } else {
        dropTarget.classList.remove('hovered');
    }
});

document.addEventListener('mouseup', (e) => {
    if (!isDragging) return;

    isDragging = false;
    draggableImage.classList.remove('dragging');

    // Перевірка, чи елемент відпущено над зоною dropTarget
    const dropTargetRect = dropTarget.getBoundingClientRect();
    const draggableImageRect = draggableImage.getBoundingClientRect();

    const landedInDropTarget = draggableImageRect.left < dropTargetRect.right &&
                               draggableImageRect.right > dropTargetRect.left &&
                               draggableImageRect.top < dropTargetRect.bottom &&
                               draggableImageRect.bottom > dropTargetRect.top;

    if (landedInDropTarget) {
        dropStatus.innerText = "Статус: Елемент успішно перетягнуто!";
        dropTarget.classList.add('dropped');
        dropTarget.innerText = "Зображення перетягнуто!";

        // Опціонально: розмістити елемент всередині dropTarget
        //draggableImage.style.position = 'static'; // Повернути до нормального потоку
        //dropTarget.appendChild(draggableImage);
        // draggableImage.style.left = '0'; // Скинути стилі позиціонування
        // draggableImage.style.top = '0';
        
    } else {
        dropStatus.innerText = "Статус: Елемент відпущено поза цільовою зоною.";
        dropTarget.classList.remove('dropped');
        dropTarget.innerText = "Перетягни зображення сюди";
    }
    dropTarget.classList.remove('hovered'); // Прибрати ховер клас
    console.log("Drag ended!");
});


// ============== ОБРОБНИКИ ПОДІЙ І ІНІЦІАЛІЗАЦІЯ ==============
document.addEventListener('DOMContentLoaded', () => {
    // Існуючі обробники подій (з ЛР4, ЛР5, ЛР6, ЛР7)
    const currentTimeElement = document.getElementById('currentTime');
    if (currentTimeElement) {
        currentTimeElement.innerText = `Поточний час: ${new Date().toLocaleTimeString()}`;
    }
    
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', validateForm);
    }

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

    // ЛР7 обробники
    if (propertyButton) {
        propertyButton.onclick = handlePropertyClick;
    }
    if (addEventListenerButton) {
        addEventListenerButton.addEventListener('click', handleAddEventListenerClick1);
        addEventListenerButton.addEventListener('click', handleAddEventListenerClick2);
    }
    if (objectHandlerButton) {
        objectHandlerButton.addEventListener('click', myObjectHandler);
    }
    if (removeListenerButton) {
        removeListenerButton.addEventListener('click', removeMyEventListener);
    }
    if (colorClickList) {
        colorClickList.addEventListener('click', handleListClick);
    }
    if (actionMenu) {
        actionMenu.addEventListener('click', handleMenuAction);
    }

    // ЛР8 обробники (Drag and Drop вже глобально на document)
    // mouseover/mouseout на hoverContainer вже підключені вище.

});