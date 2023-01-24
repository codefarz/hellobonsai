const iconMenu = document.querySelector('.icon-menu')
const menuMobile = document.querySelector('#menu-mobile')
const linkMenuMobileOne = document.querySelector('.link-menu-mobile-one')
const arrowMenuMobileOne = document.querySelector('.arrow-down-one')
const linkMenuMobileTwo = document.querySelector('.link-menu-mobile-two')
const arrowMenuMobileTwo = document.querySelector('.arrow-down-two')
const btnMonthly = document.querySelector('#monthly')
const btnYearly = document.querySelector('#yearly')
const priceStarter = document.querySelector('#price-starter')
const priceProfessional = document.querySelector('#price-professional')
const priceBusiness = document.querySelector('#price-business')
const productListMobile = document.querySelector('.product-list-mobile')
const templatesList = document.querySelector('#templates-list')
const productList = document.querySelector('#product-list')
const productDownMenu = document.querySelector('#product-down-menu')
const industriesDownMenu = document.querySelector('#industries-down-menu')
const productTitleNav = document.querySelector('#product-title-nav')
const industriesTitleNav = document.querySelector('#industries-title-nav')
const templatesTitleNav = document.querySelector('#templates-title-nav')


iconMenu.addEventListener('click', () => {
    menuMobile.classList.toggle('inactive')
})

linkMenuMobileOne.addEventListener('click', () => {
    arrowMenuMobileOne.classList.toggle('arrow-transform')
    productList.classList.toggle('inactive')
})

linkMenuMobileTwo.addEventListener('click', () => {
    arrowMenuMobileTwo.classList.toggle('arrow-transform')
    templatesList.classList.toggle('inactive')
})

productTitleNav.onmouseover = () => {
    productDownMenu.classList.remove("inactive")
    industriesDownMenu.classList.add('inactive')
}

industriesTitleNav.onmouseover = () => {
    industriesDownMenu.classList.remove("inactive")
    productDownMenu.classList.add('inactive')
}

btnMonthly.addEventListener('click', toggleBtn)
btnYearly.addEventListener('click', toggleBtn)

function toggleBtn() {
    btnMonthly.classList.toggle('toggle-button-pricing')
    btnYearly.classList.toggle('toggle-button-pricing')
    changePricing()
}

function changePricing() {
    if (priceStarter.textContent == 17) {
        priceStarter.innerText = 24;
        priceProfessional.innerText = 39;
        priceBusiness.innerText = 79;
    } else {
        priceStarter.innerText = 17;
        priceProfessional.innerText = 32;
        priceBusiness.innerText = 52;
    }
}

