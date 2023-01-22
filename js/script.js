const iconMenu = document.querySelector('.icon-menu')
const menuMobile = document.querySelector('#menu-mobile')
const linkMenuMobileOne = document.querySelector('.link-menu-mobile-one')
const arrowMenuMobileOne = document.querySelector('.arrow-down-one')
const linkMenuMobileTwo = document.querySelector('.link-menu-mobile-two')
const arrowMenuMobileTwo = document.querySelector('.arrow-down-two')

iconMenu.addEventListener('click', () => {
    menuMobile.classList.toggle('inactive')
})

linkMenuMobileOne.addEventListener('click', () => {
    arrowMenuMobileOne.classList.toggle('arrow-transform')
})

linkMenuMobileTwo.addEventListener('click', () => {
    arrowMenuMobileTwo.classList.toggle('arrow-transform')
})