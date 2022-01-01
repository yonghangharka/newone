

const  menubar = document.querySelector('#main__menu_bar');
const  navBar = document.querySelector('.main__navigation_link');

menubar.onclick = () => {
    menubar.classList.toggle('fa-times');
    navBar.classList.toggle('shownav');
}

const currentLocation = location.href;
const newItem = document.querySelectorAll('.main__navigation_link a');
const newLength = newItem.length
for (let i = 0; i<newLength; i++){
    if(newItem[i].href === currentLocation){
        newItem[i].className = 'active'
    }
}

window.addEventListener('scroll', function () {
    var navba = document.querySelector('.main__navigation_bar');
    navba.classList.toggle('sticky', window.scrollY > 0);

});


