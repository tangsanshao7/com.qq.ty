$(function () {

  $(".event1-nav").on('click', 'a', function () {
    console.log($(this).index());
    $(this).addClass('on').siblings().removeClass("on");
    $(".event1-right>.event1-right-wrap").eq($(this).index()).show().siblings().hide();
    var tabIndex = $(this).indx();
    if (tabIndex == 0) {
      if (swiper1 != undefined) {
        swiper1.destroy();
      }
      swiper1 = createSwiper(1);
    } else if (tabIndex == 1) {
      if (swiper2 != undefined) {
        swiper2.destroy();
      }
      swiper2 = createSwiper(2);
    } else if (tabIndex == 2) {
      if (swiper3 != undefined) {
        swiper3.destroy();
      }
      swiper3 = createSwiper(3);
    } else if (tabIndex == 3) {
      if (swiper4 != undefined) {
        swiper4.destroy();
      }
      swiper4 = createSwiper(4);
    }


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
    var video_src = `./video/tab_v${$(this).index() + 1}.mpeg`;
    var img_src = `./picture/tab_0${$(this).index() + 1}.png`;
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
  function createSwiper(index) {

    var mySwiper = new Swiper('.event1-right-swiper', {
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
  }

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

