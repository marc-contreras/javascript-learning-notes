const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');

form.addEventListener('submit', e =>{
    // preventDefault no longer refresh the page which is the default submit action of a particular event
    e.preventDefault();
    /**
     * both clg print the same
     */
    // console.log(username.value);
    console.log(form.username.value);

});