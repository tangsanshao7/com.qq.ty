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

  // 预约人数
  // var numRun = $("#yy_countnum").numberAnimate({
  //   num: '0',
  //   speed: 1000,
  //   symbol: ","
  // });
  // 游戏特色轮播
  // var swiper = new Swiper('.swiper-container', {
  //   slidesPerView: 1,
  //   spaceBetween: 30,
  //   effect: 'fade',
  //   loop: true,
  //   autoplay: {
  //     delay: 3500,
  //   },
  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  //   },

  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  // });


  // // 视频窗口
  // $('.head_video').on('click', function () {
  //   var vid = $(this).data('vid');
  //   showVideo(vid);
  // });
  // // 视频关闭
  // $('.video-close').on('click', function () {
  //   $('#videoCon').html('');
  //   $('#vidDia').hide();
  // });
  // // 点击抽奖规则
  // $('#cjRules').on('click', function () {
  //   showPopDialog('popPrizeRules')
  // })
  // // 点击抽奖记录
  // $('#cjRecord').on('click', function () {
  //   if (isLogined) {
  //     showPopDialog('popRecord');
  //   } else {
  //     loginEntry();
  //   }
  // })
  // // 点击填写地址
  // $('#cjForm').on('click', function () {
  //   if (!isLogined) {
  //     loginEntry();
  //   }
  // })
  // //视频调用
  // function showVideo(vid) {
  //   var player = new Txplayer({
  //     containerId: 'videoCon',
  //     vid: vid,
  //     width: '100%',
  //     height: '100%',
  //     autoplay: true
  //   });
  //   $('#vidDia').show();
  // }
  // // 弹层显示

  // // 弹层显示
  // function showPopDialog(id) {
  //   console.log("ad");
  //   $('body').addClass('wrap');
  //   $('.popmask').css('display', 'block');
  //   $('#' + id).css('display', 'block');
  // }
  // // 关闭弹层
  // $('.closebtn, .okbtn').on('click', function () {
  //   console.log($(this), $(this).parents('.popcm'));
  //   $('body').removeClass('wrap');
  //   $('.popmask').hide();
  //   $(this).parents('.pop').hide();
  //   $(this).parents('.popcm').hide();
  //   $(this).parents('.popts').hide();
  //   $(this).parents('.fxsns').hide();
  // })

  // function loginEntry() {
  //   showPopDialog('popLogin');
  // }

  // showPopDialog('popInviteList');


  // 滚动显示动画
  // $(window).on('scroll', function () {
  //   // 预约人数的奖品模块
  //   var yygift = $('.inviteyy').offset().top - document.documentElement.clientHeight;
  //   if ($(window).scrollTop() > yygift) {
  //     $('.line-top').addClass('active');
  //     $('.char').addClass('active');
  //     $('.card-bd').addClass('active');
  //   };
  //   // 呼朋唤友模块
  //   var invitebtn = $('.inviteyy .btn-lq').offset().top - document.documentElement.clientHeight;
  //   var invite = $('.lottery').offset().top - document.documentElement.clientHeight;
  //   if ($(window).scrollTop() > invitebtn) {
  //     $('.inviteyy .tree-l').addClass('active');
  //     $('.inviteyy .tree-r').addClass('active');
  //   }
  //   if ($(window).scrollTop() > invite) {
  //     $('.invite-box').addClass('active');
  //     $('.btn-lq').addClass('active');
  //   };
  // });
  // 抽奖动画缩放
  // // function flashzoom() {
  // //   var $zoom = parseFloat($("html").css("font-size")) / 100;
  // //   var $swfcontent = document.getElementById("swfcontent");
  // //   $swfcontent.style.zoom = $zoom;
  // // };
  // // flashzoom();
  // // // 动画缩放适配
  // // $(window).resize(function(e) {
  // //   flashzoom();
  // // });

  // //开始抽奖lottery->js
  // function callJsToStart() {
  //   lottery.disable();
  //   // calllotteryToRoll(4);
  //   if (isLogined) {
  //     amsSubmit(228786, 571527);
  //   } else {
  //     loginEntry();
  //   }
  // }
  // //开发获得抽奖结果 通知lottery开始播放效果 js->lottery
  // function calllotteryToRoll(id) {
  //   if (lottery) lottery.stopRoll(id);
  // }
  //动画完成通知js lottery->js        
  // function callJsToComplete() {
  //   alert(sMsg);
  // }

  //初始化抽奖的 可以不知道内部
  // var lottery = new Lottery({
  //   'lighturl': '//ossweb-img.qq.com/images/js/delottery/sel.png',
  //   'starturl': '//ossweb-img.qq.com/images/js/delottery/blankstartbtn.png',
  //   'total': 8,
  //   'width': 1044,
  //   'height': 745,
  //   'sbtnx': 368,
  //   'sbtny': 271,
  //   'sbtnw': 306,
  //   'sbtnh': 204,
  //   'boxw': 304,
  //   'boxh': 204,
  //   'position': "47_51,369_51,690_51,47_271,690_271,47_491,369_491,690_491",
  //   'contentId': 'swfcontent',
  //   'onClickRollEvent': callJsToStart,
  //   'onCompleteRollEvent': callJsToComplete
  // });

  // 二维码生成方法
  // function qrcode(url) {
  //   need("util.jquery.qrcode", function ($) {
  //     $("#qrcode").empty().qrcode({
  //       width: 122,
  //       height: 122,
  //       render: 'canvas',
  //       text: url
  //     });
  //   })
  //   $('#url-share').attr("value", url);
  // }
  // 倒计时
  // function countDown(finishCallback) {
  //   var n = 60,
  //     timer = null,
  //     $countdown = $('.hqbtn');
  //   var counTime = function () {
  //     n--;
  //     var strN = n <= 9 ? '0' + n : n;
  //     $countdown.attr('value', strN + 's');
  //     if (n <= 0) {
  //       clearInterval(timer);
  //       timer = null;
  //       $countdown.attr('value', '获取');
  //       finishCallback && finishCallback();
  //     }
  //   };
  //   timer = setInterval(function () {
  //     counTime()
  //   }, 1000);
  //   counTime()
  // }


  // 侧导航的显示
  // function slide(e) {
  //   var offset = $(e).offset().top;
  //   $("html,body").animate({
  //     "scrollTop": offset
  //   });
  // }
  // $(function () {
  //   var scrollKey1 = true;
  //   var scrollTop;
  //   scrollTop = $(window).scrollTop();
  //   // console.log(scrollTop);
  //   if (scrollTop >= 350) {
  //     $('.sid').fadeIn();
  //   } else {
  //     $('.sid').fadeOut();
  //   }
  //   $(window).scroll(function () {
  //     scrollTop = $(window).scrollTop();
  //     // console.log(scrollTop);
  //     if (scrollTop >= 350) {
  //       $('.sid').fadeIn();
  //     } else {
  //       $('.sid').fadeOut();
  //     }
  //   });
  // });

  var sideNav = new Scroller({
    navId: "side-nav", //浮动导航的ID
    navs: "a", //导航链接, 可以用标签名或者class名，例如：li或者snav
    conts: ["event1", "event3", "event4", "event5", "event6"], //内容板块ID
    cls: "curr", //导航选中class
    drag: true //是否能拖动
  });

  function copyUrl2(id) {
    var Url2 = document.getElementById(id);
    Url2.select(); // 选择对象
    document.execCommand("Copy"); // 执行浏览器复制命令
    alert("已复制！");
  }
  $('.banx').on('click', function () {
    // isnull( $('.xxx').val());
    var str = $('.xxx').val().replace(/(^\s*)|(\s*$)/g, ''); //去除空格;
    if (str == '' || str == undefined || str == null) {
      //return true;
      // console.log('空');
      alert("链接还未生成！");
    } else {
      //return false;
      // console.log('非空');
      // copyUrl2('xxx')
    }
  })
  // 花瓣飘落
  var number = 8;

  function init() {
    var container = document.getElementById('leafContainer');
    for (var i = 0; i < number; i++) {
      container.appendChild(createALeaf());
    }
  }

  function randomInteger(low, high) {
    return low + Math.floor(Math.random() * (high - low));
  }

  function randomFloat(low, high) {
    return low + Math.random() * (high - low);
  }

  function pixelValue(value) {
    return value + 'px';
  }

  function durationValue(value) {
    return value + 's';
  }

  function createALeaf() {
    var leafDiv = document.createElement('div');
    var image = document.createElement('img');
    image.src = '//game.gtimg.cn/images/ty/cp/a20190522order/' + randomInteger(1, 10) + '.png';
    leafDiv.style.top = "-100px";
    leafDiv.style.left = pixelValue(randomInteger(-200, 400)); //随机位置
    var spinAnimationName = (Math.random() < 0.9) ? 'clockwiseSpin' : 'counterclockwiseSpinAndFlip';
    leafDiv.style.webkitAnimationName = 'fade, drop';
    image.style.webkitAnimationName = spinAnimationName;
    var fadeAndDropDuration = durationValue(randomFloat(5, 11));
    var spinDuration = durationValue(randomFloat(3, 8));
    leafDiv.style.webkitAnimationDuration = fadeAndDropDuration + ', ' + fadeAndDropDuration;
    var leafDelay = durationValue(randomFloat(0, 4));
    leafDiv.style.webkitAnimationDelay = leafDelay + ', ' + leafDelay;
    image.style.webkitAnimationDuration = spinDuration;
    leafDiv.appendChild(image);
    return leafDiv;
  }
  window.addEventListener('load', init, false);
  // 下拉加载更多
  function pullLoding(ulWp, ul) {
    $(ulWp).scroll(function () {
      var scrollTop = $(ulWp).scrollTop() + $(ulWp).height();
      var contHeight = $(ul).height();
      // console.log(scrollTop,contHeight);
      if (ulWp == '.rank-wp2' && scrollTop >= contHeight) {
        // 插入数据
        invitePage++;
        inviteList(invitePage);
        // $('.player').append('<li><img src="//game.gtimg.cn/images/ty/cp/a20190522order/user.jpg" alt=""><span>烤地瓜师傅</span></li>');
      }
    });
  }
  pullLoding('.rank-wp2', '.player');
})



