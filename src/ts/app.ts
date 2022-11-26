const inputTodo: HTMLInputElement = document.querySelector('.header__input');
const addTodoBtn: HTMLButtonElement =
	document.querySelector('.header__add-btn');

const todoListInfo: HTMLParagraphElement =
	document.querySelector('.todo-lists__info');

const workList: HTMLUListElement = document.querySelector('#work-list');
const hobbyList: HTMLUListElement = document.querySelector('#hobby-list');
const dutiesList: HTMLUListElement = document.querySelector('#duties-list');
const otherList: HTMLUListElement = document.querySelector('#other-list');

const allLists: HTMLDivElement = document.querySelector('.todo-lists');

const allTodoItem = document.getElementsByTagName('li');

const popup: HTMLDivElement = document.querySelector('.popup');
const popupInput: HTMLInputElement = document.querySelector('.popup__input');
const popupAcceptBtn: HTMLButtonElement = document.querySelector('.accept');
const popupCancelBtn: HTMLButtonElement = document.querySelector('.cancel');
const popupInfo: HTMLParagraphElement = document.querySelector('.popup__info');

const subPopup: HTMLDivElement = document.querySelector('.sub-popup');
const subPopupInput: HTMLInputElement =
	document.querySelector('.sub-popup__input');
const subPopupAcceptBtn: HTMLButtonElement =
	document.querySelector('.sub-accept');
const subPopupCancelBtn: HTMLButtonElement =
	document.querySelector('.sub-cancel');
const subPopupInfo: HTMLParagraphElement =
	document.querySelector('.sub-popup__info');

let idNumber: number = 0;
let newTodo: HTMLLIElement;
let mainBox: HTMLDivElement;
let editedTodo;

const addNewTodo = () => {
	let inputTodoValue: string = inputTodo.value;

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
	} else {
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

const createSubTools = () => {
	const todoTools = document.createElement('div');
	todoTools.classList.add('todo__tools');
	newTodo.appendChild(todoTools);

	const completeBtn = document.createElement('button');
	completeBtn.classList.add('complete');
	completeBtn.innerHTML = '<i class="fas fa-check"></i>';

	const editBtn = document.createElement('button');
	editBtn.classList.add('edit');
	editBtn.innerHTML = 'EDIT';

	const deleteBtn = document.createElement('button');
	deleteBtn.classList.add('delete');
	deleteBtn.innerHTML = '<i class="fas fa-times"></i>';

	todoTools.appendChild(completeBtn);
	todoTools.appendChild(editBtn);
	todoTools.appendChild(deleteBtn);

	// console.log(todoTools);
};

const enterCheck = (e: KeyboardEvent): void => {
	let pressKey: string = e.key;
	if (pressKey === 'Enter') {
		addNewTodo();
	}
};
const checkClick = (e) => {
	console.log('Check klick !');
	if (e.target.tagName === 'BUTTON' || e.target.tagName === 'I') {
		if (e.target.closest('button').classList.contains('add')) {
			console.log('add');
			createSubTodo(e);
		} else if (e.target.closest('button').classList.contains('complete')) {
			console.log('COMPLETE !!!');
			e.target.closest('li').classList.toggle('completed');
		} else if (e.target.closest('button').classList.contains('edit')) {
			editTodo(e);
		} else if (e.target.closest('button').classList.contains('delete')) {
			console.log('delete');
			deleteTodo(e);
		} else if (e.target.closest('button').classList.contains('collapse')) {
			console.log('collapse');
			e.target.closest('button').classList.toggle('collapse-active');
			e.target
				.closest('button')
				.previousElementSibling.classList.toggle('expand-active');
			e.target.closest('div').nextElementSibling.style.display = 'none';
		} else if (e.target.closest('button').classList.contains('expand')) {
			console.log('expand');
			e.target.closest('button').classList.toggle('expand-active');
			e.target
				.closest('button')
				.nextElementSibling.classList.toggle('collapse-active');
			e.target.closest('div').nextElementSibling.style.display = 'block';
		}
	}
};

const deleteTodo = (e) => {
	const todoTooDelete: HTMLLIElement = e.target.closest('li');
	todoTooDelete.remove();
	if (allTodoItem.length === 0) {
		todoListInfo.innerText = 'Brak zadań na liście';
	}
};

const editTodo = (e) => {
	const idEditedTodo: string = e.target.closest('li').id;
	editedTodo = document.getElementById(idEditedTodo);
	console.log(editedTodo);

	popupInput.value = editedTodo.querySelector('p').textContent;

	popup.style.display = 'block';
};

const createSubTodo = (e) => {
	subPopup.style.display = 'block';

	// console.log(e.target.closest('li').lastElementChild);
	let whereAddSubTodo = e.target.closest('li').lastElementChild.id;
	// console.log(whereAddSubTodo);
	console.log(whereAddSubTodo);

	subPopupAcceptBtn.addEventListener('click', () => {
		if (subPopupInput.value !== '') {
			newTodo = document.createElement('li');
			newTodo.classList.add('todo-sub');
			newTodo.setAttribute('id', `todo-sub-${idNumber}`);

			const todoText = document.createElement('p');
			todoText.classList.add('todo-sub__text');
			todoText.innerText = subPopupInput.value;
			newTodo.appendChild(todoText);
			createSubTools();

			subPopupInfo.innerText = '';
			subPopupInput.value = '';

			subPopup.style.display = 'none';

			let test = document.querySelector(`#${whereAddSubTodo}`);
			console.log(test);
			test.appendChild(newTodo);
			console.log(newTodo);
			return;

		} else {
			subPopupInfo.innerText = 'Wpisz treść zadania !';
		}

		return
	});

	// console.log(newTodo);
	// e.target.closest('li').lastElementChild.appendChild(newTodo);
};

const changeTodo = () => {
	if (popupInput.value !== '') {
		editedTodo.querySelector('p').textContent = popupInput.value;

		popupInfo.innerText = '';
		popup.style.display = 'none';
		// popupInfo.value= '';
	} else {
		popupInfo.innerText = 'Wpisz treść zadania !';
	}
};

const closePopup = () => {
	popup.style.display = 'none';
	popupInfo.innerText = '';
	// console.log('zamkniecie popup')
};
const closeSubPopup = () => {
	subPopup.style.display = 'none';
	subPopupInfo.innerText = '';
	// console.log('zamkniecie popup')
};

const preperAllListener = () => {
	addTodoBtn.addEventListener('click', addNewTodo);
	inputTodo.addEventListener('keyup', enterCheck);
	// workList.addEventListener('click', checkClick);
	allLists.addEventListener('click', checkClick);
	popupAcceptBtn.addEventListener('click', changeTodo);
	popupCancelBtn.addEventListener('click', closePopup);
	subPopupCancelBtn.addEventListener('click', closeSubPopup);
};
document.addEventListener('DOMContentLoaded', preperAllListener);

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
