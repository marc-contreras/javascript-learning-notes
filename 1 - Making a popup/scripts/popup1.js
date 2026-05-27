const button = document.querySelector('button');
const popup_wrapper = document.querySelector('.popup-wrapper');
const popup_close = document.querySelector('.popup-close');

button.addEventListener('click', () => {
    popup_wrapper.style.visibility = 'visible'; 
});

popup_close.addEventListener('click', e => {
    popup_wrapper.style.visibility = 'hidden';
});