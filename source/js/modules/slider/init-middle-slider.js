
import Swiper, {Navigation, Pagination} from 'swiper';
import '../../vendor/swiper';

const middleSlider = new Swiper('.products__swiper', {
  modules: [Navigation, Pagination],
  loop: true,
  slidesPerView: 4,
  autoHeight: true,
  navigation: {
    nextEl: '.products__swiper-button-next',
    prevEl: '.products__swiper-button-prev',
  },
  pagination: {
    el: '.products__swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

export default middleSlider;
