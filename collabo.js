$(document).ready(function(){

  /* Like Button */
  $('.product img:last-child').click(function(){
    let src = ($(this).attr('src') === 'image/heart.svg')
      ? 'image/heart-fill.png'
      : 'image/heart.svg';
    $(this).attr('src', src);
});

});