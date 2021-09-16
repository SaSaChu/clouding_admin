$(function() {

	var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },

    breakpoints: {
      // when window width is >= 450px
      450: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }

  });

  // 圖片縮放
  if ($.fn.imgLiquid) {
    $(".newsImg, .linkImg, .aImg").imgLiquid ();
  }

  $('.dropdown').click(function() {
    event.preventDefault();
    $('.dropdown').toggleClass('active');
    $('.dropdown-open').slideToggle();
  });

  // 手機版Menu
  $('.m_header_r').click(function() {
    $('.m_menu').addClass('menu_open');
  });

  $('.menuClose').click(function() {
    $('.m_menu').removeClass('menu_open');
  });

});
