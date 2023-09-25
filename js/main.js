$(document).ready(function(){

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

  $(window).scroll(function(){
    let pos = $(window).scrollTop();
    // console.log(pos);

    if(pos>50){
      $(".house__contents-title").addClass('scroll');
    }else{
      $(".house__contents-title").removeClass('scroll');
    };
    if(pos>2700){
      $(".ctitle2").addClass('scroll');
    }else{
      $(".ctitle2").removeClass('scroll');
    };
    if(pos>5200){
      $(".ctitle3").addClass('scroll');
    }else{
      $(".ctitle3").removeClass('scroll');
    };
    if(pos>7750){
      $(".ctitle4").addClass('scroll');
    }else{
      $(".ctitle4").removeClass('scroll');
    };
    if(pos>10400){
      $(".ctitle5").addClass('scroll');
    }else{
      $(".ctitle5").removeClass('scroll');
    };
    if(pos>12600){
      $(".ctitle6").addClass('scroll');
    }else{
      $(".ctitle6").removeClass('scroll');
    };
  });

});


/* 인기 검색어 클릭 이벤트 */
const changeColor = document.querySelector('.keyword');

  function select(ulEl, liEl) {
  Array.from(ulEl.children).forEach((v) => v.classList.remove('selected'));
  if (liEl) {
    const liParent = liEl.tagName === 'A' ? liEl.parentElement : liEl;
    liParent.classList.add('selected');
  }
}
  changeColor.addEventListener('click', (e) => {
  console.log(e.target);
  const selected = e.target;
  select(changeColor, selected);
});