const openBurgerBtn = document.querySelector('.menu__burger-icon')
const closedBurgerBtn = document.querySelector('.menu__burger-closed')
const menuBurger = document.querySelector('.menu__burger')

openBurgerBtn.addEventListener('click', onOpenBurger)
closedBurgerBtn.addEventListener('click', onClosedBurger)

function onOpenBurger (){
    menuBurger.classList.add('active__burger')
}

function onClosedBurger (){
    menuBurger.classList.remove('active__burger')
}