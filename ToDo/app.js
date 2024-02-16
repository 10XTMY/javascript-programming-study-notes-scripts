const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = todo => {

    // Generate list item HTML and inject into the list
    const html = `<li class="list-group-item d-flex justify-content-between align-items-center"">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
</li>`;

    list.innerHTML += html;
};

// Add
addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim(); // trim is a string method removing whitespace before and after
    if (todo.length){ // if length is > 0 returns true
        generateTemplate(todo);
        addForm.reset(); // reset input fields
    }
});

// Remove
list.addEventListener(('click'), e => {
    if (e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

// Search Filter
// find the items not in the search input
// apply a class that sets display to none

const filterTodos = (term) => {
    // convert html collection into an array so we can iterate over it
    Array.from(list.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(term))
        // apply display none class to the array
        .forEach((todo) => todo.classList.add('filtered'));

    Array.from(list.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.remove('filtered'));
};
// key up event to capture current search input text
search.addEventListener('keyup', () => {
   const term = search.value.trim().toLowerCase();
   filterTodos(term);
});
