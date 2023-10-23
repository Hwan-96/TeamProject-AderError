$(document).ready(function(){
  /* Like Button */
  $('.product img:last-child').click(function(){
    let src = ($(this).attr('src') === 'image/heart.svg')
      ? 'image/heart-fill.png'
      : 'image/heart.svg';
    $(this).attr('src', src);
});

  /* 상단 페이드배너 */
  let $img = $(".changeimg ul li");
  let oldidx = 0;
  let idx = 0;
  let img_n = $img.length;
  
  function changeImg(idx){

    if(oldidx != idx){
      $img.eq(oldidx).stop().fadeOut("300");
      $img.eq(idx).stop().fadeIn("300");
    }
    oldidx = idx;
  };

  //자동함수 생성
  function changeAuto(){
    idx++;
    if(idx > img_n-1){
      idx=0;
    }
    changeImg(idx);
  }
  timer = setInterval(changeAuto,4000);

});