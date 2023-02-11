// *================================= Menu Burger ================================= //

let burger = document.querySelector('.menu__burger');
let headerMain = document.querySelector('.header__main')
let headerClose = document.querySelector('.header__close')
let menu = document.querySelector('.header__menu');
const body = document.querySelector('body');
let menuList = document.querySelector('.menu__list');

burger.onclick = function(){
    headerMain.classList.add('_overlay')
    menu.classList.add('_active');
    menuList.classList.add('_active');
    body.classList.add('_lock');
}

headerClose.onclick = function () {
    headerMain.classList.remove('_overlay')
    menu.classList.remove('_active');
    menuList.classList.remove('_active');
    body.classList.remove('_lock');
}



// *================================= Busket ================================= //
let busket = document.querySelector('.busket-header');
let busketLink = document.querySelector('.busket-header__link');

busketLink.onclick= function () {
    busket.classList.toggle('_active')
}



// *================================= Spoiler ================================= //


const spoilerTitles = document.querySelectorAll('.spoiler__title');
console.log(spoilerTitles);

spoilerTitles.forEach((el) => {
    el.addEventListener("click", function() {
        const spoilerTexts = el.nextElementSibling; 
        console.log(spoilerTexts);
        if (spoilerTexts.style.maxHeight) {
            document.querySelectorAll('.spoiler__text').forEach( (el) => el.style.maxHeight = null);
            spoilerTexts.style.marginBottom = '0px'
            el.classList.remove('_active')
        } else {
            document.querySelectorAll('.spoiler__text').forEach( (el) => el.style.maxHeight = null )
            spoilerTexts.style.maxHeight = spoilerTexts.scrollHeight + "px";
            spoilerTexts.style.marginBottom = '10px'
            el.classList.add('_active')
        }
    })
})



// *================================= Pop Up ================================= //

let popupTick = document.querySelector('.popup__agreetment_tick')
console.log(popupTick);

popupTick.addEventListener('click', function(e) {
    popupTick.classList.toggle('_active');
    e.preventDefault();
})

const popupLinks = document.querySelectorAll('.popup__link');
const popup = document.querySelector('.popup')
const lockPadding = document.querySelectorAll('.lock-padding');

let timeout = 300;

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popuplink = popupLinks[index];
        popuplink.addEventListener('click', function(e) {
            popup.classList.add('_active');
            bodyLock();
        })
    }
}

popup.addEventListener("click", function(e) {
    if (!e.target.closest('.popup__content')) {
        popup.classList.remove('_active')
        bodyUnlock();
    }
});

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
    for (let index = 0; index < lockPadding.length; index++) {
        const element = lockPadding[index];
        element.style.paddingRight = lockPaddingValue;  
    }
    body.classList.add("_lock")
}

const popupCloseIcon = document.querySelector('.close-popup');  
popupCloseIcon.onclick = () => {
    popup.classList.remove('_active')
    bodyUnlock();
}

function bodyUnlock() {
    setTimeout(() => {
        for (let index = 0; index < lockPadding.length; index++) {
            const element = lockPadding[index];
            element.style.paddingRight = '0px';
        }
        body.classList.remove("_lock")
    }, timeout);
}
