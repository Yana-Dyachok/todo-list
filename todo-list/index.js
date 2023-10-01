const toDoText = document.querySelectorAll('.todo-text');
const progressTasks = document.querySelector('.progress-tasks');
const toDoBtn = document.querySelector('.todo-icon');
const toDoBlock = document.querySelector('.todo-block');
const addButton = document.querySelector('.add-todo-btn');
const toDoTaskList = document.querySelector('.todo-task-list');
const titleProgressTasks = document.querySelector('.title-progress-tasks');
const inputToDo = document.querySelector('.input-todo');
let language='en'

function addTasks() {
    if (inputToDo.value === '') {
        alert(
                language === 'en'
                ? 'You should write something'
                : 'Ви повинні щось написати'
        );
    } else {
        let task = document.createElement('li');
        task.innerHTML = inputToDo.value;
        let span = document.createElement('span');
        span.setAttribute('class', 'span-task');
        task.appendChild(span);
        toDoTaskList.appendChild(task);
    }
    inputToDo.value = '';
    //setLocalStorage();
    getCheckedTask();
    returnCheckedTask();
}

function getCheckedTask() {
    toDoTaskList.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            event.target.classList.add('checked');
            titleProgressTasks.textContent =
                    language === 'en'
                    ? 'Your progress'
                    : 'Ваш прогрес';
            progressTasks.appendChild(event.target);
            //setLocalStorage();
        } else if (event.target.tagName === 'SPAN') {
            event.target.parentElement.remove();
           // setLocalStorage();
        }
    });
}

function returnCheckedTask() {
    progressTasks.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            event.target.classList.remove('checked');
            toDoTaskList.appendChild(event.target);
            if (progressTasks.childElementCount === 0)
                titleProgressTasks.textContent = '';
            setLocalStorage();
        } else if (event.target.tagName === 'SPAN') {
            event.target.parentElement.remove();
            if (progressTasks.childElementCount === 0)
                titleProgressTasks.textContent = '';
            //setLocalStorage();
        }
    });
}

function getTodoList() {
    addButton.addEventListener('click', addTasks);
    inputToDo.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') addTasks();
    });
}

getTodoList();