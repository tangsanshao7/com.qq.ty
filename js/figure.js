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

})



