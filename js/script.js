//------------------------------------------------------
// mobile menu
//------------------------------------------------------

const iconMenu = document.querySelector(".icon-menu");
const menuMobile = document.querySelector("#menu-mobile");

const linkMenuMobileOne = document.querySelector(".link-menu-mobile-one");
const linkMenuMobileTwo = document.querySelector(".link-menu-mobile-two");
const arrowMenuMobile = document.querySelectorAll(".arrow-down");
const productListMobile = document.querySelectorAll(".product-list-mobile");

iconMenu.addEventListener('click', () => {
    menuMobile.classList.toggle("inactive");
});

linkMenuMobileOne.addEventListener('click', () => { proof(0) });
linkMenuMobileTwo.addEventListener('click', () => { proof(1) });

function proof(pos) {
    productListMobile[pos].classList.toggle("inactive");
    arrowMenuMobile[pos].classList.toggle("arrow-transform");
}

//------------------------------------------------------
// pricing cards
//------------------------------------------------------

const btnMonthly = document.querySelector("#monthly");
const btnYearly = document.querySelector("#yearly");
const priceStarter = document.querySelector("#price-starter");
const priceProfessional = document.querySelector("#price-professional");
const priceBusiness = document.querySelector("#price-business");

btnMonthly.addEventListener('click', toggleBtn);
btnYearly.addEventListener('click', toggleBtn);

function toggleBtn() {
    btnMonthly.classList.toggle("toggle-button-pricing");
    btnYearly.classList.toggle("toggle-button-pricing");
    changePricing();
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

//------------------------------------------------------
// nav menu - down menu
//------------------------------------------------------

// first block

const newDownMenu = Array.from(document.getElementsByClassName("down-links"));
const newTitleNav = Array.from(document.getElementsByClassName("title-nav"));
const pricingCards = document.querySelector('.pricing-cards')

newTitleNav[0].onmouseover = () => { down(0) }
newTitleNav[1].onmouseover = () => { down(1) }
newTitleNav[2].onmouseover = () => { down(2) }
pricingCards.onmouseover = () => { down("end") }

function down(pos) {
    if (pos == 0 || pos == 1 || pos == 2) {
        let n1 = newDownMenu[pos];
        newDownMenu[pos].classList.remove("inactive");
        newDownMenu.splice(pos, 1);
        for (let i = 0; i < newDownMenu.length; i++) {
            newDownMenu[i].classList.add("inactive");
        }
        newDownMenu.splice(pos, 0, n1)
    } else {
        for (let i = 0; i < newDownMenu.length; i++) {
            newDownMenu[i].classList.add("inactive");
        };
    }
}

// second block

const templatesLink = Array.from(document.querySelectorAll(".templates-link"));
const featuredTemplates = Array.from(document.querySelectorAll(".featured-templates"))
const featuredTemplates2 = Array.from(document.querySelectorAll(".featured-templates-2"))

templatesLink[0].addEventListener("click", () => { linkDown(0) })
templatesLink[1].addEventListener("click", () => { linkDown(1) })
templatesLink[2].addEventListener("click", () => { linkDown(2) })
templatesLink[3].addEventListener("click", () => { linkDown(3) })
templatesLink[4].addEventListener("click", () => { linkDown(4) })
templatesLink[5].addEventListener("click", () => { linkDown(5) })
templatesLink[6].addEventListener("click", () => { linkDown(6) })

function linkDown(pos) {
    let n1 = templatesLink[pos];
    templatesLink[pos].classList.add("link-down-menu-decoration");
    templatesLink.splice(pos, 1);
    for (let i = 0; i < templatesLink.length; i++) {
        templatesLink[i].classList.remove("link-down-menu-decoration");
    }
    templatesLink.splice(pos, 0, n1)

    console.log(featuredTemplates)
    console.log(featuredTemplates2)
    let n2 = featuredTemplates[pos];
    let n3 = featuredTemplates2[pos];
    featuredTemplates[pos].classList.remove("inactive");
    featuredTemplates2[pos].classList.remove("inactive");
    featuredTemplates.splice(pos, 1);
    featuredTemplates2.splice(pos, 1);
    for (let i = 0; i < featuredTemplates.length; i++) {
        featuredTemplates[i].classList.add("inactive");
        featuredTemplates2[i].classList.add("inactive");
    }
    featuredTemplates.splice(pos, 0, n2)
    featuredTemplates2.splice(pos, 0, n3)
};

//------------------------------------------------------