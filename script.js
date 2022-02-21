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

    const deleteButton = newTodoItem.querySelector('.todo-delete');
    deleteButton.onclick = event => {
        newTodoItem.remove();
    }
    
}



//Hide and show completed/not completed-buttons logic below
const showAllButton = document.querySelector('#show-all')
const activeButton = document.querySelector('#hide-completed');
const completedButton = document.querySelector('#hide-notCompleted');
const clearCompletedButton = document.querySelector('#clear-completed');

let allItems = document.querySelectorAll('.todo-item');
let allCheckboxes = document.querySelectorAll('.todo-item .todo-checkbox');


//Add boolean value to check if items are hidden or not? Change button to checkbox?
showAllButton.onclick = event => {
    showAll(event);

    showAllButton.classList.add('active');
    showAllButton.classList.remove('filter-button');
    

}

activeButton.onclick = event =>{
    hideCompleted(event);
}

completedButton.onclick = event =>{
    hideNotCompleted(event);
}

clearCompletedButton.onclick = event => {
    removeCompleted(event);
}

function showAll(event){
    event.preventDefault();


    for(let item of allItems){
        item.classList.remove('hidden');
    }

}

function hideCompleted(event){
    event.preventDefault();


    for(var i = 0; i < allCheckboxes.length; i++){
        if(allCheckboxes[i].checked == true){
            // allItems[i].remove();
            // allItems[i].style.display = 'none';
            allItems[i].classList.add('hidden');
            
        }
    }
}


function hideNotCompleted(event){
    event.preventDefault();


    for(var i = 0; i < allCheckboxes.length; i++){
        if(allCheckboxes[i].checked == false){
            // allItems[i].remove();
            allItems[i].classList.add('hidden');
        }
    }
}

function removeCompleted(event){
    event.preventDefault();


    for(var i = 0; i < allCheckboxes.length; i++){
        if(allCheckboxes[i].checked == true){
            // allItems[i].remove();
            // allItems[i].style.display = 'none';
            allItems[i].remove();
            
        }
    }
}
