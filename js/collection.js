$(document).ready(function(){

  /* 푸터 아코디언 */
  $(".fTitle").click(function(){

    $(this).siblings(".fTitle").removeClass("active");
    $(this).toggleClass("active");
    $(this).siblings(".fContent").stop().slideUp();
    $(this).next().stop().slideToggle();
  });

  /* Like Button */
  $('.product img:last-child').click(function(){
    let src = ($(this).attr('src') === 'image/heart.svg')
      ? 'image/heart-fill.png'
      : 'image/heart.svg';
    $(this).attr('src', src);
  });


  /* top20 이미지 슬라이드 */
  function bannerAuto(){

    $(".ban ul").stop(true,true).animate({marginLeft:"-=190px"},500,function(){
      $(".ban ul li:first-child").appendTo(".ban ul"); 
      $(this).css({marginLeft:"0px"});
    });

  };
  bauto = setInterval(bannerAuto,4000);
});