const taskInput = document.getElementById('taskInput')
const addBtn = document.getElementById('addButton')
const taskList = document.getElementById('taskList')

const fromLocalStorage = JSON.parse(localStorage.getItem('tasks'))
let tasks = fromLocalStorage || []

tasks.forEach(item => {
    taskList.innerHTML += `<li>${item}
    <button class="done-todo-btn">Done</button>
    </li>`
    taskInput.value = ""
})

addBtn.addEventListener('click', function() {
    tasks.push(taskInput.value)
    localStorage.setItem('tasks', JSON.stringify(tasks))
    taskList.innerHTML += `<li>${taskInput.value}
    <button class="done-todo-btn">Done</button>

    </li>`
    taskInput.value = ""
})

document.addEventListener("keypress", function onEvent(event) {
    if (event.key === "Enter") {
        tasks.push(taskInput.value)
        localStorage.setItem('tasks', JSON.stringify(tasks))
        taskList.innerHTML += `<li>${taskInput.value}
         <button class="done-todo-btn">Done</button>
        
        </li>`
        taskInput.value = ""
    }
})

taskList.addEventListener('click', function(e) {
    if (e.target.classList.contains('done-todo-btn')) {
        const entry = e.target.parentNode
        entry.classList.toggle('strike')
    }
})
