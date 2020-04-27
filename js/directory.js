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


  $('.sec_box.active1').on('click', 'a', function () {
    $('.bg').css({
      'animation': ' imgclick 1s'
    })
    // console.log($(this));
    var href = $(this).attr('html')
    // console.log($(this).prop('html'));
    setTimeout(function () {
      // console.log($(this).attr('html'));
      location.href = href;//PC网页式跳转
    }, 1000);

  })

  $('.sec_box.active2').on('click', function () {
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