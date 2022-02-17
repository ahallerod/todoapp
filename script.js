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
