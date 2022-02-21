/*---DEFINE-VARIABLES---*/
//DOM variables

const todoTemplate = document.querySelector('#template-item');
todoTemplate.remove();
const todoList = document.querySelector('#todo-list');
const newTodo = document.querySelector('#new-item');
const newForm = document.querySelector('#input-form');
const counter = document.querySelector('#counter');

newForm.onsubmit = event => {
    createNewTodo(event);
}


function createNewTodo(event){
    event.preventDefault();

    if(newTodo.value == '') return;

    let newTodoItem = todoTemplate.content.firstElementChild.cloneNode(true);
    newTodoItem.querySelector('.todo-text').textContent = newTodo.value;
    todoList.append(newTodoItem);

    // Update lists
    allItems = document.querySelectorAll('.todo-item');
    allCheckboxes = document.querySelectorAll('.todo-item .todo-checkbox');
    updateCounter()

    const deleteButton = newTodoItem.querySelector('.todo-delete');
    deleteButton.onclick = event => {
        newTodoItem.remove();
        allItems = document.querySelectorAll('.todo-item');
        allCheckboxes = document.querySelectorAll('.todo-item .todo-checkbox');
        updateCounter()
    }

    const checkbox = newTodoItem.querySelector('.todo-checkbox');
    checkbox.onclick = event => {
        updateCounter();
    }

    
}



//Hide and show completed/not completed-buttons logic below
const showAllButton = document.querySelector('#show-all')
const activeButton = document.querySelector('#hide-completed');
const completedButton = document.querySelector('#hide-notCompleted');
const clearCompletedButton = document.querySelector('#clear-completed');

let allItems = document.querySelectorAll('.todo-item');
//const allItems1 = () => document.querySelectorAll('.todo-item'); Andreas Experiment
let allCheckboxes = document.querySelectorAll('.todo-item .todo-checkbox');


//Add boolean value to check if items are hidden or not? Change button to checkbox?
showAllButton.onclick = event => {
    showAllItems();
    clearFilterActiveStyles()
    showAllButton.classList.add('active');
    //showAllButton.classList.remove('filter-button');
}

activeButton.onclick = event =>{
    hideCompleted();
    clearFilterActiveStyles()
    activeButton.classList.add('active');
    //activeButton.classList.remove('filter-button');
}

completedButton.onclick = event =>{
    hideNotCompleted();
    clearFilterActiveStyles()
    completedButton.classList.add('active');
}

function clearFilterActiveStyles(){
    showAllButton.classList.remove('active');
    activeButton.classList.remove('active');
    completedButton.classList.remove('active');
}

clearCompletedButton.onclick = event => {
    removeCompleted(event);
}

function showAllItems(){
    for(let item of allItems){
        item.classList.remove('hidden');
    }
}

function updateCounter(){
    const uncheckedItems = document.querySelectorAll('.todo-checkbox:not(:checked)');
    if(uncheckedItems.length == 1){
        counter.textContent = '1 item left';
    } else {
        counter.textContent = uncheckedItems.length + ' items left';
    }
}

function hideCompleted(){
    showAllItems()
    for(var i = 0; i < allCheckboxes.length; i++){
        if(allCheckboxes[i].checked == true){
            allItems[i].classList.add('hidden');
        }
    }
}


function hideNotCompleted(){
    showAllItems()
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
            allItems[i].remove();
        }
    }
}
