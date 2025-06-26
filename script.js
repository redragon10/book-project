// script.js

// ... (Ваш існуючий код з попередніх лабораторних робіт: ЛР4, ЛР5, ЛР6) ...
// Зручно розташувати новий код ЛР7 в кінці файлу script.js

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
        alert("innerText firstParagraph: " + firstP.innerText);

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


// ============== НОВИЙ КОД ДЛЯ ЛР7: Обробка та Делегування Подій ==============

const eventOutput = document.getElementById('eventOutput');
const propertyButton = document.getElementById('propertyButton');
const addEventListenerButton = document.getElementById('addEventListenerButton');
const removeListenerButton = document.getElementById('removeListenerButton');
const objectHandlerButton = document.getElementById('objectHandlerButton');

// 1. Демонстрація подій миші та обробників

// Обробник через атрибут HTML (вже в index.html: onclick="showAlertFromAttribute()")
function showAlertFromAttribute() {
    eventOutput.innerText = "Подія спрацювала: Клік з HTML-атрибуту!";
    console.log("Клік з HTML-атрибуту", event.currentTarget);
}

// Обробник через властивість DOM-об'єкта
function handlePropertyClick() {
    eventOutput.innerText = "Подія спрацювала: Клік з властивості DOM-об'єкта!";
    console.log("Клік з властивості DOM-об'єкта", event.currentTarget);
}

// Обробник №1 для addEventListener
function handleAddEventListenerClick1(event) {
    eventOutput.innerText = "Подія спрацювала: Клік з addEventListener (обробник 1)!";
    console.log("Клік з addEventListener (обробник 1)", event.currentTarget);
}

// Обробник №2 для addEventListener (та ж подія, інший обробник)
function handleAddEventListenerClick2(event) {
    console.log("Клік з addEventListener (обробник 2) - додатковий лог!", event.currentTarget);
}

// Об'єкт-обробник з методом handleEvent
const myObjectHandler = {
    message: "Це об'єкт-обробник!",
    handleEvent(event) {
        eventOutput.innerText = `Подія спрацювала: ${event.type} з об'єкта-обробника. Повідомлення: ${this.message}`;
        console.log("Клік з об'єкта-обробника", event.currentTarget);
    }
};

// Функція для видалення обробника
function removeMyEventListener() {
    // Важливо: для видалення потрібно передати той самий обробник та ті самі опції, що й при додаванні
    addEventListenerButton.removeEventListener('click', handleAddEventListenerClick1);
    addEventListenerButton.removeEventListener('click', handleAddEventListenerClick2);
    eventOutput.innerText = "Обробники 'addEventListener' видалено з кнопки 'Клік (addEventListener)'.";
    console.log("Обробники видалені.");
}


// 2. Делегування подій: Підсвічування елементів списку

const colorClickList = document.getElementById('colorClickList');

function handleListClick(event) {
    // Перевіряємо, чи клік відбувся саме на елементі <li> всередині списку
    if (event.target.tagName === 'LI') {
        // Знімаємо підсвічування з усіх раніше підсвічених елементів
        const currentlyHighlighted = colorClickList.querySelector('.highlighted');
        if (currentlyHighlighted) {
            currentlyHighlighted.classList.remove('highlighted');
        }
        // Додаємо підсвічування до поточного елемента
        event.target.classList.add('highlighted');
        eventOutput.innerText = `Вибрано елемент списку: ${event.target.innerText}`;
    }
}


// 3. Патерн "Поведінка" з data-атрибутами

const actionMenu = document.getElementById('actionMenu');
const actionOutput = document.getElementById('actionOutput');

function handleMenuAction(event) {
    const targetButton = event.target.closest('button[data-action]'); // Знаходимо найближчу кнопку з data-action

    if (targetButton) {
        const action = targetButton.dataset.action; // Отримуємо значення data-action

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
        console.log(`Дія виконана: ${action}`, event.currentTarget); // event.currentTarget буде #actionMenu
    }
}


// ============== ОБРОБНИКИ ПОДІЙ І ІНІЦІАЛІЗАЦІЯ ==============
document.addEventListener('DOMContentLoaded', () => {
    // Існуючі обробники подій (з ЛР4, ЛР5, ЛР6)
    // Функція displayCurrentTime() потребує елемент <p id="currentTime">
    const currentTimeElement = document.getElementById('currentTime');
    if (currentTimeElement) {
        // Це проста функція, яка може оновлювати час, якщо вона визначена
        // Для цієї лаби можна її просто імітувати або залишити як є, якщо вона була робочою
        // Наприклад:
        currentTimeElement.innerText = `Поточний час: ${new Date().toLocaleTimeString()}`;
        // setInterval(() => { currentTimeElement.innerText = `Поточний час: ${new Date().toLocaleTimeString()}`; }, 1000);
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

    // НОВІ обробники подій для ЛР7
    // Призначення обробника через властивість
    if (propertyButton) {
        propertyButton.onclick = handlePropertyClick;
    }

    // Призначення обробників через addEventListener
    if (addEventListenerButton) {
        addEventListenerButton.addEventListener('click', handleAddEventListenerClick1);
        addEventListenerButton.addEventListener('click', handleAddEventListenerClick2); // Кілька обробників
    }

    // Призначення об'єкта-обробника
    if (objectHandlerButton) {
        objectHandlerButton.addEventListener('click', myObjectHandler);
    }

    // Обробник для видалення
    if (removeListenerButton) {
        removeListenerButton.addEventListener('click', removeMyEventListener);
    }

    // Делегування подій для списку
    if (colorClickList) {
        colorClickList.addEventListener('click', handleListClick);
    }

    // Патерн "Поведінка" для меню
    if (actionMenu) {
        actionMenu.addEventListener('click', handleMenuAction);
    }
});

// Функції Fetch API з попередньої ЛР7, якщо ви їх зберегли і хочете залишити.
// Якщо ви хочете повністю зосередитись на новій ЛР7, можете їх видалити або закоментувати.
/*
const fetchPostsButton = document.getElementById('fetchPostsButton');
const fetchUsersButton = document.getElementById('fetchUsersButton');
const loadingIndicator = document.getElementById('loadingIndicator');
const apiError = document.getElementById('apiError');
const apiDataContainer = document.getElementById('apiDataContainer');

async function fetchData(url, type) {
    apiDataContainer.innerHTML = '';
    apiError.style.display = 'none';
    loadingIndicator.style.display = 'block';

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        loadingIndicator.style.display = 'none';
        
        if (type === 'posts') {
            renderPosts(data);
        } else if (type === 'users') {
            renderUsers(data);
        }

    } catch (error) {
        console.error('Помилка при отриманні даних:', error);
        loadingIndicator.style.display = 'none';
        apiError.innerText = `Не вдалося завантажити дані: ${error.message}`;
        apiError.style.display = 'block';
    }
}

function renderPosts(posts) {
    apiDataContainer.innerHTML = '<h3>Останні пости:</h3>';
    if (posts && posts.length > 0) {
        posts.slice(0, 5).forEach(post => {
            const postDiv = document.createElement('div');
            postDiv.classList.add('data-item');
            postDiv.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            `;
            apiDataContainer.appendChild(postDiv);
        });
    } else {
        apiDataContainer.innerHTML += '<p>Пости не знайдено.</p>';
    }
}

function renderUsers(users) {
    apiDataContainer.innerHTML = '<h3>Користувачі:</h3>';
    if (users && users.length > 0) {
        users.forEach(user => {
            const userDiv = document.createElement('div');
            userDiv.classList.add('data-item');
            userDiv.innerHTML = `
                <h3>${user.name} (${user.username})</h3>
                <p>Email: ${user.email}</p>
                <p>Місто: ${user.address.city}</p>
            `;
            apiDataContainer.appendChild(userDiv);
        });
    } else {
        apiDataContainer.innerHTML += '<p>Користувачів не знайдено.</p>';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // ... існуючі обробники
    if (fetchPostsButton) {
        fetchPostsButton.addEventListener('click', () => fetchData('https://jsonplaceholder.typicode.com/posts', 'posts'));
    }
    if (fetchUsersButton) {
        fetchUsersButton.addEventListener('click', () => fetchData('https://jsonplaceholder.typicode.com/users', 'users'));
    }
});
*/