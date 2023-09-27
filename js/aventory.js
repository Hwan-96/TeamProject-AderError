$(document).ready(function(){

  /* 헤더 메뉴 */
  $(".trigger").click(function(){
    $(this).toggleClass("active");
    $(".mo-header").slideToggle();
  });

  /* 푸터 아코디언 */
  $(".fTitle").click(function(){

    $(this).siblings(".fTitle").removeClass("active");
    $(this).toggleClass("active");
    $(this).siblings(".fContent").stop().slideUp();
    $(this).next().stop().slideToggle();
  });

  /* Like Button */
  $('.hitItem img:last-child').click(function(){
    let src = ($(this).attr('src') === 'image/heart.svg')
      ? 'image/heart-fill.png'
      : 'image/heart.svg';
    $(this).attr('src', src);
  });

});