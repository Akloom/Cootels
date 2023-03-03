let hamburger = document.querySelector('.hamburger-menu');
let navCollapse = document.querySelector('.header-nav__collapse');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active');
  navCollapse.classList.toggle('is-active');
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    740: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    920: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 40
    },
  }
});

let question = document.querySelectorAll('.faq-content__item');

for (let i = 0; i < question.length; i++) {
  question[i].addEventListener('click', () => {
    question[i].classList.toggle('active');
  })
};