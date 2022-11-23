const inputTodo = document.querySelector('.header__input');
const addTodoBtn = document.querySelector('.header__add-btn');
const todoListInfo = document.querySelector('.todo-lists__info');
const workList = document.querySelector('#work-list');
const popup = document.querySelector('.popup');
const popupInput = document.querySelector('.popup__input');
const popupAcceptBtn = document.querySelector('.accept');
const popupCancelBtn = document.querySelector('.cancel');
const popupInfo = document.querySelector('.popup__info');
let idNumber = 0;
let newTodo;
let mainBox;
console.log(workList);
console.log(todoListInfo.innerHTML);
console.log('test2');
const addNewTodo = () => {
    let inputTodoValue = inputTodo.value;
    if (inputTodoValue !== '') {
        newTodo = document.createElement('li');
        newTodo.classList.add('todo');
        newTodo.setAttribute('id', `todo-${idNumber}`);
        mainBox = document.createElement('div');
        mainBox.classList.add('main-box');
        const todoText = document.createElement('p');
        todoText.classList.add('todo__text');
        todoText.innerText = `${inputTodoValue}`;
        mainBox.appendChild(todoText);
        createTodoTools();
        // const todoTools = document.createElement('div');
        // todoTools.classList.add('todo__tools');
        newTodo.appendChild(mainBox);
        console.log('dodanie nowego todo');
        console.log(newTodo);
        workList.appendChild(newTodo);
        todoListInfo.innerText = '';
        inputTodo.value = '';
        idNumber++;
    }
    else {
        todoListInfo.innerText = 'Wpisz treść zadania';
    }
};
const createTodoTools = () => {
    const todoTools = document.createElement('div');
    todoTools.classList.add('todo__tools');
    mainBox.appendChild(todoTools);
    const addBtn = document.createElement('button');
    addBtn.classList.add('add');
    addBtn.innerHTML = '<i class="fas fa-plus"></i>';
    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete');
    completeBtn.innerHTML = '<i class="fas fa-check"></i>';
    const editBtn = document.createElement('button');
    editBtn.classList.add('edit');
    editBtn.innerHTML = 'EDIT';
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
    todoTools.appendChild(addBtn);
    todoTools.appendChild(completeBtn);
    todoTools.appendChild(editBtn);
    todoTools.appendChild(deleteBtn);
    console.log(todoTools);
};
function getDirection(e) {
    let directionCode = e.keyCode;
    let directionCodeStr = e.key;
    // code going on here
}
const enterCheck = (e) => {
    let pressKey = e.key;
    if (pressKey === 'Enter') {
        addNewTodo();
    }
};
const checkClick = (e) => {
    if (e.target.tagName === 'BUTTON' || e.target.tagName === 'I') {
        if (e.target.closest('button').classList.contains('add')) {
            console.log('add');
        }
        else if (e.target.closest('button').classList.contains('complete')) {
            console.log('COMPLETE !!!');
            e.target
                .closest('li').classList.toggle('completed');
        }
        else if (e.target.closest('button').classList.contains('edit')) {
            console.log('edit !!!');
        }
        else if (e.target.closest('button').classList.contains('delete')) {
            console.log('delete');
        }
    }
};
addTodoBtn.addEventListener('click', addNewTodo);
inputTodo.addEventListener('keyup', enterCheck);
workList.addEventListener('click', checkClick);
// <li class="todo" id="test2">
// <div class="main-box">
//     <p class="todo__text">zrobić apkę todo</p>
//     <div class="todo__tools">
//         <button class="add"><i class="fas fa-plus"></i></button>
//         <button class="complete"><i class="fas fa-check"></i></button>
//         <button class="edit">EDIT</button>
//         <button class="delete"><i class="fas fa-times"></i></button>
//     </div>
// </div>
// <ul class='sub-box'>
//     <li class="todo-sub" id="sub2">podpunkt 2.1
//         <div class="todo-sub__tools">
//             <button class="complete"><i class="fas fa-check"></i></button>
//             <button class="edit">EDIT</button>
//             <button class="delete"><i class="fas fa-times"></i></button>
//         </div>
//     </li>
// </ul>
// </li>
