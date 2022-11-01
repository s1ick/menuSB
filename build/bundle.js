const hamburger = document.querySelector('#btn');
const menu = document.querySelector('#menu');
const submenuBtn = document.querySelector('.btn-js');
const submenuBtn2 = document.querySelector('.btn-js2');
const wrapper = document.querySelector('.wrapper');
hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
    wrapper.classList.toggle('darkmode');
});

submenuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.currentTarget.parentElement.classList.toggle('show');
});
submenuBtn2.addEventListener('click', (e) => {
    e.preventDefault();
    e.currentTarget.parentElement.classList.toggle('show');
});
