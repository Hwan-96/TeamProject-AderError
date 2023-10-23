$(document).ready(function(){
  
  /* Like Button */
  $('.product img:last-child').click(function(){
    let src = ($(this).attr('src') === 'image/heart.svg')
      ? 'image/heart-fill.png'
      : 'image/heart.svg';
    $(this).attr('src', src);
});


/* 사이즈버튼 */
const target = document.getElementById('target_btn');

// 활성화 버튼
const btnActive = document.getElementById('btnActive');
btnActive.addEventListener('click', () => target.disabled = false);

// 비활성화 버튼
const btnDisabled = document.getElementById('btnDisabled');
btnDisabled.addEventListener('click', () => target.disabled = true);

});