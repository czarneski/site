
$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

    $('#parallax-test').css({
      'transform' : 'translate(0px, '+ wScroll /5 +'%)'
    });

    // $('.back-bird').css({
    //   'transform' : 'translate(0px, '+ wScroll /4 +'%)'
    // });

    // $('.fore-bird').css({
    //   'transform' : 'translate(0px, -'+ wScroll /40 +'%)'
    // });
  });
