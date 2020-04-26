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
  $('.bottoms').on("click", function () {
    $('.history').hide()
    $('.come').hide()
    $('.bottoms').hide()
    $('.pagebox').show();
    $('.btn_return').show();
    $('.btn_next').show();


  })
  $('.pagebox').on("mouseover", 'div', function () {
    $(this).find('.btn_xq').show().parent().siblings().find(".btn_xq").hide();
    $(this).find('img').css({
      'transform': ' translateY(0px)',
    });
  })
  $('.pagebox').on("mouseout", 'div', function () {

    $(this).find('img').css({
      'transform': ' translateY(10px)',
    });
  })

})



