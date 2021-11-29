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

// tovars IMG slider
// images slider tovars
(function ($) {
    $.fn.HvrSlider = function () {
      return this.each(function () {
        var el = $(this);
        if (el.find('img').length > 1) {
          var hvr = $('<div>', {
            class: 'hvr',
            append: [
              $('<div>', {
                class: 'hvr__images',
                append: $('<div>', {
                  class: 'hvr__sectors',
                }),
              }),
              $('<div>', {
                class: 'hvr__dots',
              }),
            ],
            insertAfter: el,
            prepend: el,
          });
          var hvrImages = $('.hvr__images', hvr);
          var hvrImage = $('img', hvr);
          var hvrSectors = $('.hvr__sectors', hvr);
          var hvrDots = $('.hvr__dots', hvr);
          el.prependTo(hvrImages);
          hvrImage.each(function () {
            hvrSectors.prepend('<div class="hvr__sector"></div>');
            hvrDots.append('<div class="hvr__dot"></div>');
          });
          $('.hvr__dot:first', hvrDots).addClass('hvr__dot--active');
          var setActiveEl = function (el) {
            hvrImage.hide().eq(el.index()).show();
            $('.hvr__dot', hvrDots).removeClass('hvr__dot--active').eq(el.index()).addClass('hvr__dot--active');
          };
          $('.hvr__sector', hvrSectors).hover(function () {
            setActiveEl($(this));
          });
          hvrSectors.on('touchmove', function (e) {
            e.preventDefault();
            var position = e.originalEvent.changedTouches[0];
            var target = document.elementFromPoint(position.clientX, position.clientY);
            if ($(target).is('.hvr__sector')) {
              setActiveEl($(target));
            }
          });
        }
      });
    };
})(jQuery);

$('.images').HvrSlider();

// tovars slick
$('.tovars__items').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// change button slick in tovars
const btns = document.querySelectorAll('.tovars .slick-next, .tovars .slick-prev');

btns.forEach(function(item) {
  item.innerHTML = "<i class='icon-arrow-right'></i>";
});