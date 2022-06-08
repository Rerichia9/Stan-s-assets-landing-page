// Тултип
tippy('.contacts__item-location', {
  content: "Location",
  arrow: false,
  followCursor: true,
  theme: 'tomato',
});

tippy('.contacts__item-phone', {
  content: "Call",
  arrow: false,
  followCursor: true,
  theme: 'tomato',
});

tippy('.contacts__item-whatsapp', {
  content: "Whats-app",
  arrow: false,
  followCursor: true,
  theme: 'tomato',
});

tippy('.contacts__item-skype', {
  content: "Skype",
  arrow: false,
  followCursor: true,
  theme: 'tomato',
});

tippy('.contacts__item-mail', {
  content: "Mail",
  arrow: false,
  followCursor: true,
  theme: 'tomato',
});

tippy('.contacts__item-facebook', {
  content: "Facebook",
  arrow: false,
  followCursor: true,
  theme: 'tomato',
});

// Слайдер
document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });
});

// Бургер

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.header__list-link');

burger.addEventListener('click',
  function () {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');
  })

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');

  })
})

// Раскрытие блоков по клику

let partnersMore = document.querySelector('.show-more');
let partners = document.querySelectorAll('.partners__item');
let link = document.querySelectorAll('.partners__img');

partnersMore.addEventListener('click',

  function () {

    partners.forEach(function (el) {
      el.classList.add('partners__item--visible')
    });

    link.forEach(function (el) {
      el.classList.add('partners__img--visible')
    });

    partnersMore.querySelector(".partners__btn").classList.add("partners__btn--hidden");
    partnersMore.classList.add('.show-more--hide')
  })


// Селект
// const element = document.querySelector('.selectCustom');
// const choices = new Choices(element, {
//   searchEnabled: false,
//   placeholder: true,
// })
