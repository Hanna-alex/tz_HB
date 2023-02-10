
const swiper = new Swiper('.reviews__swiper', {
  // Optional parameters
  loop: true,

  navigation: {
    nextEl: '.reviews__btn_next',
    prevEl: '.reviews__btn_prev',
  },
  effect: "coverflow",
  speed: 600,


});
