const body = document.body;
const btnAdd = document.querySelector(".plus");
const taskInput = document.querySelector("input[type='text']"); 
const box = document.querySelector(".box"); 


function addTaskHandlers(taskDiv) {
    const deleteButton = taskDiv.querySelector('.delete');
    deleteButton.addEventListener('click', function() {
        box.removeChild(taskDiv);
    });

    const editButton = taskDiv.querySelector('.write');
    editButton.addEventListener('click', function() {
        const currentTaskText = taskDiv.querySelector('h2').textContent;
        const newTaskText = prompt('Редактировать задачу:', currentTaskText);
        if (newTaskText !== null && newTaskText.trim() !== '') {
            taskDiv.querySelector('h2').textContent = newTaskText;
        }
    });
}


const initialTaskDiv = document.querySelector('.list');
addTaskHandlers(initialTaskDiv);


btnAdd.addEventListener("click", function() {
    const taskText = taskInput.value;

    if (taskText === '') {
        alert('Пожалуйста, введите задачу.');
        return;
    }

    const newTaskDiv = document.createElement('div');
    newTaskDiv.className = 'list';
    
    newTaskDiv.innerHTML = `

        <div class="text">
            <input class="checkbox" type="checkbox">
            <h2>${taskText}</h2>
        </div>
        <div class="buttons">
            <button class="write"><img src="./write 2.png" alt=""></button>
            <button class="delete"><img src="./delete 2.png" alt=""></button>
        </div>
        `
    ;

    box.appendChild(newTaskDiv)
    addTaskHandlers(newTaskDiv)
    taskInput.value = ''
});

