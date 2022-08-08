// nav model
const focusModal = document.querySelector('.modal-card')
const modal = document.querySelector('.input-modal')
const modalIcon = document.querySelector('.modal-icon')

focusModal.addEventListener('click', () =>
  modal.classList.add('input-modal-active')
)
modalIcon.addEventListener('click', () =>
  modal.classList.remove('input-modal-active')
)

// slick
$('.section-fruit-content').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoPlay: true,
  prevArrow: '.fruit-arrow-left',
  nextArrow: '.fruit-arrow-right',
  arrow: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrow: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: false,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
})


// category 
$('.section-category-btn-group-items').slick({
  dots: false,
  infinite: true,
  speed: 300,
  autoPlay: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoPlay: true,
  prevArrow: '.fruit-arrow-left',
  nextArrow: '.fruit-arrow-right',
  arrow: false,
})

// mix up 
var mixer = mixitup('.section-category');



