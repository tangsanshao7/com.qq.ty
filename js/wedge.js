$(function () {

  var animationDiv = $(".box_1");
  var num = 0;
  animationDiv.bind("webkitAnimationEnd", function () {
    num++;
    animationDiv.css({ "width": '100%' });
    animationDiv.addClass("animation1");
    if (num == 2) {
      $('.box').fadeOut(1000);
      $('.idx_nav').addClass('act');
      $('.directory').addClass('ready');
      // $('.bg').addClass('pos')
    }

  })
  $('.btn-sid').on("click", function () {
    $(this).toggleClass("on");
    $('.btn_logo').toggleClass("on");
    $('.idx_nav').toggleClass("on");
    $('.btn_yy').toggleClass("on");
    $('.nav_list').toggle();
    $('.sdi-div').toggle();
  })

  var mySwiper = new Swiper('.swiper-container', {
    // direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay: {
      delay: 7000,
      stopOnLastSlide: false,
      // disableOnInteraction: true,
      disableOnInteraction: false,
    },

    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  })
  $('.nav_07').on('click', function () {
    $('.dia-con').show();
    $('.dia-close').show();
    $('#_overlay_').show();
  })
  $('.nav_08').on('click', function () {
    $('.dia-con').show();
    $('.dia-close').show();
    $('#_overlay_').show();
  })
  $('.nav_09').on('click', function () {
    $('.dia-con').show();
    $('.dia-close').show();
    $('#_overlay_').show();
  }) 
   $('.dia-close').on('click', function () {
    $('.dia-con').hide();
    $('.dia-close').hide();
    $('#_overlay_').hide();
  })
})