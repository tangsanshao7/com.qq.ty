$(".page7").on('click','div',function(){
  var href= $(this).find('a').attr('href');
  console.log(href);
  console.log(222);
  window.location=href
})