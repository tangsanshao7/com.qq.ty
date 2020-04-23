$(function () {
  $('#unlogin').on('click', function () {
    $('.dialog').show();
    $('#_overlay_').show();
  })
  $('.dia-close').on('click', function () {
    $('.dialog').hide();
    $('#_overlay_').hide();
  })


  var mySwiper = new Swiper('.swiper-container', {
    autoplay: 5000,//可选选项，自动滑动
    loop: true,//可选选项，开启循环
    navigation: {
      nextEl: '.arrow-right',
      prevEl: '.arrow-left',
    },
    pagination: {
      el: '.pagination',
    },
  })

  
})