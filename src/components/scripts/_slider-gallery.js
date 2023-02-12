
let gallerySwiper = new Swiper('.gallery__swiper', {
  // Optional parameters
  effect: 'slide',
  slidesPerView: 'auto',
  spaceBetween: 30,
  // sledesPreGroup: 1,
  //Стартовый слайд
  initialSlide: 1,
  centeredSlides: true,

  navigation: {
    nextEl: '.gallery__btn_next',
    prevEl: '.gallery__btn_prev',
  },

  speed: 600,


});
