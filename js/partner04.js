$(function () {

  var animationDiv = $(".box_1");
  var num = 0;
  animationDiv.bind("webkitAnimationEnd", function () {
    num++;
    animationDiv.css({ "width": '100%' });
    animationDiv.addClass("animation1");
    if (num == 2) {
      // $('.box').fadeOut(1000);
      $('.box').hide()

      $('.idx_nav').addClass('act');
      $('.directory').addClass('ready');
      $('.pagebox').show()
      // $('.bg').addClass('pos')
      $('.btn_return').show();
      $('.btn_next').show();
      $('.partner01').show();
      $('.page3').show();
      $('#side-nav ').show();
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
  var mscList = ['./music/wan_music_01.mp3', './music/wan_music_02.mp3', './music/wan_music_03.mp3', './music/wan_music_04.mp3']
  var msc = $("#msc")[0]
  $('.people_sy').on('click', 'a', function () {
    $('#msc').attr('src', mscList[$(this).index()]);
    console.log(mscList[$(this).index()]);
    msc.play()
  })

  $(".nav-inner").on('click', 'li', function () {
    // $(window).scrollTop();
    console.log($(this).attr("class"));
    $(this).addClass('on').siblings().removeClass("on");
    if ($(this).index() == 0) {
      $("body,html").stop().animate({
        "scrollTop": 1293
      }, 500);
    } else if ($(this).index() == 1) {
      $("body,html").stop().animate({
        "scrollTop": 2643
      }, 500);
    } else if ($(this).index() == 2) {
      $("body,html").stop().animate({
        "scrollTop": 3493
      }, 500);
    } else if ($(this).index() == 3) {
      $("body,html").stop().animate({
        "scrollTop": 4344
      }, 500);
    } else if ($(this).index() == 4) {
      $("body,html").stop().animate({
        "scrollTop": 5244
      }, 500);
    } else if ($(this).index() == 5) {
      $("body,html").stop().animate({
        "scrollTop": 5960
      }, 500);
    }

  })
  var scrollTop;
  $(window).scroll(function () {
    scrollTop = $(window).scrollTop();
    if (scrollTop >= 5960) {
      $('.page7').addClass('show-block').show();
      $(".nav-inner li").eq(5).addClass('on').siblings().removeClass("on");
    } else if (scrollTop >= 5000) {
      $('.page6').addClass('show-block').show();
      $(".nav-inner li").eq(4).addClass('on').siblings().removeClass("on");
    } else if (scrollTop >= 4000) {
      $('.page5').addClass('show-block').show();
      $(".nav-inner li").eq(3).addClass('on').siblings().removeClass("on");
    } else if (scrollTop >= 3000) {
      $('.page4').addClass('show-block').show();
      $(".nav-inner li").eq(2).addClass('on').siblings().removeClass("on");
    } else if (scrollTop >= 2000) {
      $('.page3').addClass('show-block').show();
      $(".nav-inner li").eq(1).addClass('on').siblings().removeClass("on");
    } else if (scrollTop >= 1000) {
      $('.page2').addClass('show-block').show();
      $(".nav-inner li").eq(0).addClass('on').siblings().removeClass("on");
    }
  })
})



