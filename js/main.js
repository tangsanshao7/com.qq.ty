$(function () {
  var mySwiper = new Swiper('.swiper-container', {
    // effect: 'fade',
    autoplay: 5000,//可选选项，自动滑动
    loop: true,//可选选项，开启循环
    pagination: {
      el: '.swiper-pagination',
      bulletElement: 'li',
    },
  })

})