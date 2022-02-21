/*---DEFINE-VARIABLES---*/
//DOM variables

const todoTemplate = document.querySelector('#template-item');
todoTemplate.remove();
const todoList = document.querySelector('#todo-list');
const newTodo = document.querySelector('#new-item');
const newForm = document.querySelector('#input-form');

newForm.onsubmit = event => {
    createNewTodo(event);
}


function createNewTodo(event){
    event.preventDefault();

    let newTodoItem = todoTemplate.content.firstElementChild.cloneNode(true);
    newTodoItem.querySelector('.todo-text').textContent = newTodo.value;
    todoList.append(newTodoItem);
}



//Hide and show completed/not completed-buttons logic below
const showAllButton = document.querySelector('#show-all')
const activeButton = document.querySelector('#hide-completed');
const completedButton = document.querySelector('#hide-notCompleted');

//Add boolean value to check if items are hidden or not? Change button to checkbox?
showAllButton.onclick = event => {
    showAll(event);
}

activeButton.onclick = event =>{
    hideCompleted(event);
}

completedButton.onclick = event =>{
    hideNotCompleted(event);
}

function showAll(event){
    event.preventDefault();
    let allItems = document.querySelectorAll('.todo-item');
    for(let item of allItems){
        item.style.display = 'grid';
    }

}

function hideCompleted(event){
    event.preventDefault();
    let allItems = document.querySelectorAll('.todo-item');
    let allCheckboxes = document.querySelectorAll('.todo-item .todo-checkbox')

    for(var i = 0; i < allCheckboxes.length; i++){
        if(allCheckboxes[i].checked == true){
            // allItems[i].remove();
            allItems[i].style.display = 'none';
        }
    }
}


function hideNotCompleted(event){
    event.preventDefault();
    let allItems = document.querySelectorAll('.todo-item');
    let allCheckboxes = document.querySelectorAll('.todo-item .todo-checkbox')

    for(var i = 0; i < allCheckboxes.length; i++){
        if(allCheckboxes[i].checked == false){
            // allItems[i].remove();
            allItems[i].style.display = 'none';
        }
    }
}


