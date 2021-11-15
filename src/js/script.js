'use strict';

const navLiSub_Link = document.querySelectorAll(".nav__li-sub>.nav__link"),
    navUlSub = document.querySelectorAll(".nav__li-sub>.nav__ul-sub"),
    iconArrow = document.querySelectorAll(".nav__li-sub>.nav__link i");

const catalogContent = document.querySelector(".catalog__content"),
    catalogBtn = document.querySelector(".catalog__btn");

for(let i = 0; i < navLiSub_Link.length; i++) {
    navLiSub_Link[i].addEventListener('click', (e) => {
        navUlSub[i].classList.toggle('nav__ul-sub_active');
        iconArrow[i].classList.toggle('icon-arrow-up_rotate');
    });
}

catalogBtn.addEventListener('click', () => {
    catalogContent.classList.toggle('catalog__content_active');
});


// Slick Slider
$('.baner').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
});