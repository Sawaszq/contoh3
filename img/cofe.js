
const navbarNav = document.queryselector
('.navbar-nav');

document.queryselector('#list-menu').
onclick = ( ) => {
    navbarNav.classList.toogle('active');
};


const menu =document.querySelector('#list-menu');

document.addEventListener('click', function(e) {
    if(!menu.cortains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})

