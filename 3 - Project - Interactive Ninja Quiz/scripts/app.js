const correctAnswers = ['D','B','B','D','C'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];     // selected option in each question

    // check answers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 20;
        }
    });

    // show result on page
    scrollTo(0,0);

    // without animation
    //result.children[0].children[0].children[0].textContent = `${score}%`;
    //result.querySelector('span').textContent = `${score}%`;
    
    result.classList.remove('d-none'); // showing result

    // score animation

    let output = 0;
    const timer = setInterval( () => {
        result.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);
    
});

// window objte


// console.log('hello');
// window.console.log('hello');

// console.log(document.querySelector('form'));
// console.log(window.document.querySelector('form'));


// alert('hello');
// window.alert('hello');

// setTimeout(() => {
//     alert('hello nakamas');
// }, 3000);

// let i = 0;
// const timer = setInterval(() => {
//     console.log('hello');
//     i++;
//     if(i === 5){
//         clearInterval(timer);
//     }
// }, 1000);
