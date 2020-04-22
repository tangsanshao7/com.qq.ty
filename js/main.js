$(function () {

  $(".event1-nav").on('click', 'a', function () {
    console.log($(this).index());
    $(this).addClass('on').siblings().removeClass("on");
    $(".event1-right>.event1-right-wrap").eq($(this).index()).show().siblings().hide()
    // console.log($(".event1-right>.event1-right-wrap").eq($(this).index()));
  })

  $("span.inc").on('click', function () {
    console.log($(this).index());
    $('.img-div').eq($(this).index()).show();
    console.log($('.img-div').eq($(this).index()).show());
  })
  $(".xt-div").on('click', '.btn-gb', function () {
    $(this).parents('.img-div').hide();
  })

  $(".event3-nav").on('click', 'a', function () {
    console.log($(this).index());
    $(this).addClass("on").siblings().removeClass('on');
    // $("event-right-video").eq($(this).index()).addClass('active').siblings().removeClass('active')
    // $('event3-video video').src()
    var video_src = `./video/tab_v${$(this).index()+1}.mpeg`;
    var img_src = `./picture/tab_0${$(this).index()+1}.png`;
    $('#video').attr('src', video_src)
    $('.event3-img').attr('src', img_src)
  })




  var mySwiper = new Swiper('.event1-left-swiper', {
    // effect: 'fade',
    autoplay: 5000,//可选选项，自动滑动
    loop: true,//可选选项，开启循环
    pagination: {
      el: '.event1-left-pagination',
    },
  })
  var mySwiper = new Swiper('.event1-right-wrap', {
    // effect: 'fade',
    autoplay: 5000,//可选选项，自动滑动
    // loop: true,//可选选项，开启循环
    navigation: {
      nextEl: '.event1-right-next',
      prevEl: '.event1-right-prev',
    },
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  })

  var mySwiper = new Swiper('.event2-swiper', {
    autoplay: 5000,//可选选项，自动滑动
    loop: true,//可选选项，开启循环
    navigation: {
      nextEl: '.event2-swiper-next',
      prevEl: '.event2-swiper-prev',
    },
    pagination: {
      el: '.event2-pagination',
      // bulletElement: 'li',
    },
  })

})

