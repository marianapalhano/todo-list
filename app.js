const addForm = document.querySelector('.add');
const todos = document.querySelector('.todos');
const search = document.querySelector('.search');

// Add Todos
addForm.addEventListener('submit', evt => {
    evt.preventDefault();
    const todo = addForm.add.value.trim();
    if (todo) {
        const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="bi bi-trash delete"></i>
        </li>`;
        todos.innerHTML += html;
    }
    addForm.reset();
});

// Delete Todos
todos.addEventListener('click', evt => {    
    if (evt.target.classList.contains('delete')) {
        evt.target.parentElement.remove();
    }
});

// Search Todos
search.term.addEventListener('keyup', evt => {
    const term = search.term.value.trim().toLowerCase();
    Array.from(todos.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.add('filtered'));
    Array.from(todos.children)
        .filter(todo => todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.remove('filtered'));
})