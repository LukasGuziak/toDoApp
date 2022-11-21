const inputTodo = document.querySelector('.header__input');
const addTodoBtn = document.querySelector('.header__add-btn');
const todoListInfo = document.querySelector('.todo-list__info');
const workList = document.querySelector('#work-list');
const popup = document.querySelector('.popup');
const popupInput = document.querySelector('.popup__input');
const popupAcceptBtn = document.querySelector('.accept');
const popupCancelBtn = document.querySelector('.cancel');
const popupInfo = document.querySelector('.popup__info');
console.log(workList);
console.log(todoListInfo.innerHTML);
console.log('test2');
const addNewTodo = () => {
    console.log('dodanie nowego todo');
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
addTodoBtn.addEventListener('click', addNewTodo);
inputTodo.addEventListener('keyup', enterCheck);
// <li class="todo" id="test2">
// <div class="main-box">
//     <p class="todo__text">zrobić apkę todo</p>
//     <div class="todo__tools">
//         <button class="add"><i class="fas fa-plus"></i></button>
//         <button class="complete"><i class="fas fa-check"></i></button>
//         <button class="eddit">EDIT</button>
//         <button class="delete"><i class="fas fa-times"></i></button>
//     </div>
// </div>
// <ul class='sub-box'>
//     <li class="todo-sub" id="sub2">podpunkt 2.1
//         <div class="todo-sub__tools">
//             <button class="complete"><i class="fas fa-check"></i></button>
//             <button class="eddit">EDIT</button>
//             <button class="delete"><i class="fas fa-times"></i></button>
//         </div>
//     </li>
// </ul>
// </li>
