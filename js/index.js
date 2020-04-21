$(function () {
  $("#unlogin").on('click', 'a', function () {
    $("#popLogin").show();
    $(".popmask").show();
  })
  $(".closebtn ").on('click', function () {
    $("#popLogin").hide();
    $(".popmask").hide();
  })
  $(".head_video ").on('click', function () {
    $("#popLogin").hide();
    $(".popmask").hide();
  })

  // 侧导航的显示
  function slide(e) {
    var offset = $(e).offset().top;
    $("html,body").animate({
      "scrollTop": offset
    });
  }
  var scrollTop;
  scrollTop = $(window).scrollTop();
  if (scrollTop >= 350) {
    $('.sid').fadeIn();
  } else {
    $('.sid').fadeOut();
  }
  $(window).scroll(function () {
    scrollTop = $(window).scrollTop();
    if (scrollTop >= 350) {
      $('.sid').fadeIn();
    } else {
      $('.sid').fadeOut();
    }
  });


  $(window).scroll(function () {
    if (scrollTop >= 933) {
      $('.char').addClass("active")
      $('.status').show()
      $('.sid-a1').addClass("curr").siblings().removeClass('curr');
      $('.line-top').addClass("active")
      $('.card-bd').addClass("active")

    }
    if (scrollTop >= 1930) {
      $('.invite-box').addClass("active")
      $('.sid-a2').addClass("curr").siblings().removeClass('curr');

      $('.btn-lq').addClass("active")

    }
    if (scrollTop >= 2890) {
      $('.sid-a3').addClass("curr").siblings().removeClass('curr');

    }
    if (scrollTop >= 3957) {
      $('.sid-a4').addClass("curr").siblings().removeClass('curr');

    }
    if (scrollTop >=4888) {
      $('.sid-a5').addClass("curr").siblings().removeClass('curr');

    }
  });


  $(".side-nav").on('click', 'a', function () {
    console.log($(this).attr("class"));
    if ($(this).attr("class") == "sid-a1") {
      $("body,html").stop().animate({
        "scrollTop": 933
      }, 2000);
      // $( ).scrollTop(933);
    } else if ($(this).attr("class") == "sid-a2") {
      $("body,html").stop().animate({
        "scrollTop": 1930
      }, 2000);
      // $( ).scrollTop(1930);
    } else if ($(this).attr("class") == "sid-a3") {
      $("body,html").stop().animate({
        "scrollTop": 2890
      }, 2000);
      // $( ).scrollTop(2890);
    } else if ($(this).attr("class") == "sid-a4") {
      $("body,html").stop().animate({
        "scrollTop": 3957
      }, 2000);
      // $( ).scrollTop(3957);
    } else if ($(this).attr("class") == "sid-a5") {
      $("body,html").stop().animate({
        "scrollTop":4888
      }, 2000);
      // $( ).scrollTop(4788);
    }
  })

  var mySwiper = new Swiper('.swiper-container', {
    effect: 'fade',
    autoplay: 5000,//可选选项，自动滑动
    loop: true,//可选选项，开启循环
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
  })
});

