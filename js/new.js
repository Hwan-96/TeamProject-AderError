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

  /* 상단 페이드배너 */
  let $img = $(".changeimg ul li");
  let $btn = $(".btn ul li");
  let oldidx = 0; //기존이미지
  let idx = 0; //새로 바뀌는 이미지
  let img_n = $img.length; // length메서드 -> 1,2,3...이미지의 개수를 세어서 변수를 저장

  //이미지와 버튼이 바뀌는 함수
  function changeImg(idx){ //매개변수가 있는 함수 ->idx는 선택되는 이미지

    if(oldidx != idx){ //기존의 이미지와 선택된 이미지가 다를때...
      $btn.eq(oldidx).removeClass("active"); //기존 하단버튼 비활성화 ->active 클래스를 삭제
      $btn.eq(idx).addClass("active"); //선택된 하단버튼 활성화- >active 클래스를 추가
      $img.eq(oldidx).stop().fadeOut("300"); //기존 이미지 사라짐
      $img.eq(idx).stop().fadeIn("300"); //새로 바뀌는 이미지 나타남  
    }
    oldidx = idx;  //새로 바뀐 이미지는 이미지는 다시 기존이미지로 저장되어서 Fade Out...
  };

  //자동함수 생성
  function changeAuto(){
    idx++;
    //선택한 이미지가 마지막일때 다시 처음 이미지부터 시작
    if(idx > img_n-1){ //index는 0부터 시작하고 length는 1부터 시작하므로 1을 빼주어야 마지막 숫자가 맞음
      idx=0;
    }
    changeImg(idx);  //함수호출
  }
  timer = setInterval(changeAuto,4000);  //4초 간격으로 함수를 자동재생

});