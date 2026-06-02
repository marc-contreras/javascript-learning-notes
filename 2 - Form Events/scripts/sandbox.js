const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;


// My try
// form.addEventListener('submit', e =>{
//     e.preventDefault();

//     // validation
//     const username = form.username.value;
//     const usernamePattern = /^[-a-zA-Z]{6,12}$/;
//     let tag;
//     if(usernamePattern.test(username)){
//         // feedback good info
//         tag = '<p>username available</p>';
//     }
//     else {
//         // feedback help info
//         tag = '<p>keep trying</p>';
//     }
//     feedback.innerHTML = tag;

// });

// Answer

form.addEventListener('submit', e => {
    e.preventDefault();

    // validation
    const username = form.username.value;
    const usernamePattern = /^[a-zA-Z]{6,12}/;

    if(usernamePattern.test(username)){
        // feedback good info
        feedback.textContent = 'that username is valid!';
    } else {
        // feedback help info
        feedback.textContent = 'username must containe letters only & be between 6 & 12 character long';

    }
    
    

});

// live feedback

form.username.addEventListener('keyup', e =>{
    console.log(e);
    // console.log(e.target.value, form.username.value);
    if(usernamePattern.test(e.target.value)){
        form.username.setAttribute('class', 'success');
    } else {
        form.username.setAttribute('class', 'error');
    }
});