/*---DEFINE-VARIABLES---*/

//DOM variables

const todoTemplate = document.querySelector('#template-item');
todoTemplate.remove();
const todoList = document.querySelector('#todo-list');
const newTodo = document.querySelector('#new-item');
const newTodoForm = document.querySelector('#input-form');
const actionBar = document.querySelector('#action-bar')
const counter = document.querySelector('#counter');
const checkAllButton = document.querySelector('#checkAllButton');

newTodoForm.onsubmit = event => {
    createNewTodo(event);
    controlVisibility();
}


function createNewTodo(event){
    event.preventDefault();

    if(newTodo.value == '') return;

    let newTodoItem = todoTemplate.content.firstElementChild.cloneNode(true);
    newTodoItem.querySelector('.todo-text').textContent = newTodo.value;
    todoList.append(newTodoItem);
    newTodo.value = '';

    // Update lists
    allItems = document.querySelectorAll('.todo-item'); //to be removed
    allCheckboxes = document.querySelectorAll('.todo-item .todo-checkbox');

    //Update UI
    updateCounter();
    showOrHideActionBar();

    const deleteButton = newTodoItem.querySelector('.todo-delete');
    deleteButton.onclick = event => {
        deleteItem(newTodoItem);
        controlVisibility();
        /*newTodoItem.remove();
        allItems = document.querySelectorAll('.todo-item');
        allCheckboxes = document.querySelectorAll('.todo-item .todo-checkbox');
        updateCounter();
        showOrHideActionBar();*/
    }

    const checkbox = newTodoItem.querySelector('.todo-checkbox');
    checkbox.onclick = event => {
        currentFilterFunction(currentFilter);
        controlVisibility();
    }
}

function deleteItem(item){
    item.remove();
    allItems = document.querySelectorAll('.todo-item');
    allCheckboxes = document.querySelectorAll('.todo-item .todo-checkbox');
    controlVisibility();
}

function showOrHideActionBar(){
    if(getAllItems().length == 0){
        actionBar.classList.add('hidden');
    } else {
        actionBar.classList.remove('hidden');
    }
}


//Hide and show completed/not completed-buttons logic below
const showAllButton = document.querySelector('#show-all')
const activeButton = document.querySelector('#hide-completed');
const completedButton = document.querySelector('#hide-notCompleted');
const clearCompletedButton = document.querySelector('#clear-completed');

let allItems = document.querySelectorAll('.todo-item'); //TO be removed.
const getAllItems = () => {
    return document.querySelectorAll('.todo-item'); //Andreas Experiment: Working!
} 
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
    controlVisibility();
    checkAllButton.checked = false;
}

function showAllItems(){
    for(let item of getAllItems()){
        item.classList.remove('hidden');
    }
    currentFilter = 'all';
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
            getAllItems()[i].classList.add('hidden');
        }
    }
    currentFilter = 'active';
}


function hideNotCompleted(){
    showAllItems()
    for(var i = 0; i < allCheckboxes.length; i++){
        if(allCheckboxes[i].checked == false){
            getAllItems()[i].classList.add('hidden');
        }
    }
    currentFilter = 'completed';
}

function removeCompleted(){
    for(let todo of getAllItems()){
        if(todo.queryAllSelector('.todo-checkbox:checked') != null){
            deleteItem(todo);
        }
    }
}

let currentFilter = '';

function currentFilterFunction(currentFilterPar){
    if(currentFilterPar == ''){
        showAllItems();
    }
    if(currentFilterPar == 'all'){
        showAllItems();
    }
    if(currentFilterPar == 'active'){
        hideCompleted();
    }
    if(currentFilterPar == 'completed'){
        hideNotCompleted();
    }
}

checkAllButton.onclick = event =>{
    if(allCheckboxesCheck()){
        uncheckAllCheckboxes();
        checkAllButton.checked = false;
    } else {
        checkAllCheckboxes();
       checkAllButton.checked = true;
    }
    currentFilterFunction(currentFilter);
    controlVisibility()
}

function checkAllCheckboxes(){
    for(let checkbox of allCheckboxes){
        checkbox.checked = true;
    }
}

function uncheckAllCheckboxes(){
    for(let checkbox of allCheckboxes){
        checkbox.checked = false;
    }
}

function allCheckboxesCheck(){
    if(getAllItems().length == document.querySelectorAll('.todo-checkbox:checked').length)
        return true
    return false;
}

function anyCheckboxChecked(){
    return document.querySelectorAll('.todo-checkbox:checked').length > 0 ? true : false;
}

function controlVisibility(){
    hideOrShowClearButton();
    hideOrShowCheckAllButton();
    showOrHideActionBar();
    updateCounter();
    currentFilterFunction(currentFilter);
}

function hideOrShowCheckAllButton(){
    if(getAllItems().length > 0){
        checkAllButton.classList.remove('hidden');
        if(allCheckboxesCheck())
            checkAllButton.checked = true;
        else
            checkAllButton.checked = false;
    } else {
        checkAllButton.classList.add('hidden');
        checkAllButton.checked = false;
    }
}

function hideOrShowClearButton(){
    if(!anyCheckboxChecked())
        clearCompletedButton.classList.add('hidden');
    else
        clearCompletedButton.classList.remove('hidden');
}

function removeCompleted(){
    for(let todo of getAllItems()){
        if(todo.querySelector('.todo-checkbox:checked') != null){
            deleteItem(todo);
        }
    }
}



// const itemCheckbox = document.querySelector('.todo-checkbox');
//     itemCheckbox.onclick = event =>{
//         if(currentFilter == ''){
//             showAllItems();
//         }
//         if(currentFilter == 'all'){
//             showAllItems();
//         }
//         if(currentFilter == 'active'){
//             hideCompleted();
//         }
//         if(currentFilter == 'completed'){
//             hideNotCompleted();
//         }
//     }

