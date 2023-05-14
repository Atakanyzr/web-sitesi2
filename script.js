const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-ling');
const btnpopup = document.querySelector('.btnlogin-popup');


loginlink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnpopup.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});