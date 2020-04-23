$(function () {
  $('#unlogin').on('click', function () {
    $('.dialog').show();
    $('#_overlay_').show();
  })
  $('.dia-close').on('click', function () {
    $('.dialog').hide();
    $('#_overlay_').hide();
  })
})
