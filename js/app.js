const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,

  navigation: {
    nextEl: '.swiper-custom-next',
    prevEl: '.swiper-custom-prev',
  },

  breakpoints: {
    520: {
      slidesPerView: 2,
      spaceBetween: 24,
    },

    1024: {
      slidesPerView: 4,
      spaceBetween: 24,
    }
  },
});