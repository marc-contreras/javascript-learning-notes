const addForm = document.querySelector('.add');
const ul = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = (todo) => {
    const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
                    <span>${todo}</span>
                    <i class="far fa-trash-alt delete"></i>
                </li>`;
    ul.innerHTML += html;
};

//adding to list
addForm.addEventListener('submit', e => {

    e.preventDefault();

    const  todo = addForm.add.value.trim();
    //todo !== '' //works too
    if(todo.length){
        generateTemplate(todo);
        //addForm.add.value = '';
    }
    addForm.reset();

    
});



// removing to list
// my way
ul.addEventListener('click', e =>{
    // console.log(e.target.classList.contains('delete'));
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
    
});

const filterTodos = (term) => {

    Array.from(ul.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.add('filtered'));

    Array.from(ul.children)
        .filter(todo => todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.remove('filtered'));
    
};

// key up event

search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});
