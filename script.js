const navClick = document.querySelector('nav');
const hamClick = document.querySelector('.ham');

hamClick.addEventListener('click', () => {
    navClick.classList.toggle('nav-mobile');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 750) {
        navClick.classList.remove('nav-mobile');
    }
});
