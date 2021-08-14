const addForm = document.querySelector('.add');
const todos = document.querySelector('.todos');

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
})