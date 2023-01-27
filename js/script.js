// mobile menu

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

// -------------------------------------------

// pricing cards

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

// -------------------------------------------

// nav menu - down menu

const newDownMenu = Array.from(document.getElementsByClassName("down-links"));
const newTitleNav = Array.from(document.getElementsByClassName("title-nav"));
const pricingCards = document.querySelector('.pricing-cards')

newTitleNav[0].onmouseover = () => { down(0) }
newTitleNav[1].onmouseover = () => { down(1) }
newTitleNav[2].onmouseover = () => { down(2) }
pricingCards.onmouseover = () => { down("end") }

function down(pos) {
    if (pos == 0 || pos == 1 || pos == 2) {
        console.log(newDownMenu);
        let n1 = newDownMenu[pos];
        newDownMenu[pos].classList.remove("inactive");
        newDownMenu.splice(pos, 1);
        console.log(newDownMenu);
        for (let i = 0; i < newDownMenu.length; i++) {
            newDownMenu[i].classList.add("inactive");
        }
        newDownMenu.splice(pos, 0, n1)
        console.log(newDownMenu);
    } else {
        for (let i = 0; i < newDownMenu.length; i++) {
            newDownMenu[i].classList.add("inactive");
        };
    }
}

const contractTemplatesLink = document.querySelector(
    ".contract-templates-link"
);
const proposalTemplatesLink = document.querySelector(
    ".proposal-templates-link"
);
const invoiceTemplatesLink = document.querySelector(".invoice-templates-link");
const quoteTemplatesLink = document.querySelector(".quote-templates-link");
const scopeTemplatesLink = document.querySelector(".scope-templates-link");
const briefTemplatesLink = document.querySelector(".brief-templates-link");
const formTemplatesLink = document.querySelector(".form-templates-link");
const featuredContractTemplates = document.getElementsByClassName(
    "featured-contract-templates"
);
const featuredProposalTemplates = document.getElementsByClassName(
    "featured-proposal-templates"
);
const featuredInvoiceTemplates = document.getElementsByClassName(
    "featured-invoice-templates"
);
const featuredQuoteTemplates = document.getElementsByClassName(
    "featured-quote-templates"
);
const featuredScopeTemplates = document.getElementsByClassName(
    "featured-scope-templates"
);
const featuredBriefTemplates = document.getElementsByClassName(
    "featured-brief-templates"
);
const featuredFormTemplates = document.getElementsByClassName(
    "featured-form-templates"
);


contractTemplatesLink.addEventListener("click", () => {
    contractTemplatesLink.classList.add("link-down-menu-decoration");
    proposalTemplatesLink.classList.remove("link-down-menu-decoration");
    invoiceTemplatesLink.classList.remove("link-down-menu-decoration");
    quoteTemplatesLink.classList.remove("link-down-menu-decoration");
    scopeTemplatesLink.classList.remove("link-down-menu-decoration");
    briefTemplatesLink.classList.remove("link-down-menu-decoration");
    formTemplatesLink.classList.remove("link-down-menu-decoration");
    for (let i = 0; i < featuredContractTemplates.length; i++) {
        featuredContractTemplates[i].classList.remove("inactive");
        featuredProposalTemplates[i].classList.add("inactive");
        featuredInvoiceTemplates[i].classList.add("inactive");
        featuredQuoteTemplates[i].classList.add("inactive");
        featuredScopeTemplates[i].classList.add("inactive");
        featuredBriefTemplates[i].classList.add("inactive");
        featuredFormTemplates[i].classList.add("inactive");
    }
});
proposalTemplatesLink.addEventListener("click", () => {
    proposalTemplatesLink.classList.add("link-down-menu-decoration");
    contractTemplatesLink.classList.remove("link-down-menu-decoration");
    invoiceTemplatesLink.classList.remove("link-down-menu-decoration");
    quoteTemplatesLink.classList.remove("link-down-menu-decoration");
    scopeTemplatesLink.classList.remove("link-down-menu-decoration");
    briefTemplatesLink.classList.remove("link-down-menu-decoration");
    formTemplatesLink.classList.remove("link-down-menu-decoration");
    for (let i = 0; i < featuredProposalTemplates.length; i++) {
        featuredContractTemplates[i].classList.add("inactive");
        featuredProposalTemplates[i].classList.remove("inactive");
        featuredInvoiceTemplates[i].classList.add("inactive");
        featuredQuoteTemplates[i].classList.add("inactive");
        featuredScopeTemplates[i].classList.add("inactive");
        featuredBriefTemplates[i].classList.add("inactive");
        featuredFormTemplates[i].classList.add("inactive");
    }
});
invoiceTemplatesLink.addEventListener("click", () => {
    invoiceTemplatesLink.classList.add("link-down-menu-decoration");
    contractTemplatesLink.classList.remove("link-down-menu-decoration");
    proposalTemplatesLink.classList.remove("link-down-menu-decoration");
    quoteTemplatesLink.classList.remove("link-down-menu-decoration");
    scopeTemplatesLink.classList.remove("link-down-menu-decoration");
    briefTemplatesLink.classList.remove("link-down-menu-decoration");
    formTemplatesLink.classList.remove("link-down-menu-decoration");
    for (let i = 0; i < featuredInvoiceTemplates.length; i++) {
        featuredContractTemplates[i].classList.add("inactive");
        featuredProposalTemplates[i].classList.add("inactive");
        featuredInvoiceTemplates[i].classList.remove("inactive");
        featuredQuoteTemplates[i].classList.add("inactive");
        featuredScopeTemplates[i].classList.add("inactive");
        featuredBriefTemplates[i].classList.add("inactive");
        featuredFormTemplates[i].classList.add("inactive");
    }
});
quoteTemplatesLink.addEventListener("click", () => {
    quoteTemplatesLink.classList.add("link-down-menu-decoration");
    contractTemplatesLink.classList.remove("link-down-menu-decoration");
    proposalTemplatesLink.classList.remove("link-down-menu-decoration");
    invoiceTemplatesLink.classList.remove("link-down-menu-decoration");
    scopeTemplatesLink.classList.remove("link-down-menu-decoration");
    briefTemplatesLink.classList.remove("link-down-menu-decoration");
    formTemplatesLink.classList.remove("link-down-menu-decoration");
    for (let i = 0; i < featuredQuoteTemplates.length; i++) {
        featuredContractTemplates[i].classList.add("inactive");
        featuredProposalTemplates[i].classList.add("inactive");
        featuredInvoiceTemplates[i].classList.add("inactive");
        featuredQuoteTemplates[i].classList.remove("inactive");
        featuredScopeTemplates[i].classList.add("inactive");
        featuredBriefTemplates[i].classList.add("inactive");
        featuredFormTemplates[i].classList.add("inactive");
    }
});
scopeTemplatesLink.addEventListener("click", () => {
    scopeTemplatesLink.classList.add("link-down-menu-decoration");
    contractTemplatesLink.classList.remove("link-down-menu-decoration");
    proposalTemplatesLink.classList.remove("link-down-menu-decoration");
    invoiceTemplatesLink.classList.remove("link-down-menu-decoration");
    quoteTemplatesLink.classList.remove("link-down-menu-decoration");
    briefTemplatesLink.classList.remove("link-down-menu-decoration");
    formTemplatesLink.classList.remove("link-down-menu-decoration");
    for (let i = 0; i < featuredScopeTemplates.length; i++) {
        featuredContractTemplates[i].classList.add("inactive");
        featuredProposalTemplates[i].classList.add("inactive");
        featuredInvoiceTemplates[i].classList.add("inactive");
        featuredQuoteTemplates[i].classList.add("inactive");
        featuredScopeTemplates[i].classList.remove("inactive");
        featuredBriefTemplates[i].classList.add("inactive");
        featuredFormTemplates[i].classList.add("inactive");
    }
});
briefTemplatesLink.addEventListener("click", () => {
    briefTemplatesLink.classList.add("link-down-menu-decoration");
    contractTemplatesLink.classList.remove("link-down-menu-decoration");
    proposalTemplatesLink.classList.remove("link-down-menu-decoration");
    invoiceTemplatesLink.classList.remove("link-down-menu-decoration");
    quoteTemplatesLink.classList.remove("link-down-menu-decoration");
    scopeTemplatesLink.classList.remove("link-down-menu-decoration");
    formTemplatesLink.classList.remove("link-down-menu-decoration");
    for (let i = 0; i < featuredBriefTemplates.length; i++) {
        featuredContractTemplates[i].classList.add("inactive");
        featuredProposalTemplates[i].classList.add("inactive");
        featuredInvoiceTemplates[i].classList.add("inactive");
        featuredQuoteTemplates[i].classList.add("inactive");
        featuredScopeTemplates[i].classList.add("inactive");
        featuredBriefTemplates[i].classList.remove("inactive");
        featuredFormTemplates[i].classList.add("inactive");
    }
});
formTemplatesLink.addEventListener("click", () => {
    formTemplatesLink.classList.add("link-down-menu-decoration");
    contractTemplatesLink.classList.remove("link-down-menu-decoration");
    proposalTemplatesLink.classList.remove("link-down-menu-decoration");
    invoiceTemplatesLink.classList.remove("link-down-menu-decoration");
    quoteTemplatesLink.classList.remove("link-down-menu-decoration");
    scopeTemplatesLink.classList.remove("link-down-menu-decoration");
    briefTemplatesLink.classList.remove("link-down-menu-decoration");
    for (let i = 0; i < featuredFormTemplates.length; i++) {
        featuredContractTemplates[i].classList.add("inactive");
        featuredProposalTemplates[i].classList.add("inactive");
        featuredInvoiceTemplates[i].classList.add("inactive");
        featuredQuoteTemplates[i].classList.add("inactive");
        featuredScopeTemplates[i].classList.add("inactive");
        featuredBriefTemplates[i].classList.add("inactive");
        featuredFormTemplates[i].classList.remove("inactive");
    }
});

// -------------------------------------------

