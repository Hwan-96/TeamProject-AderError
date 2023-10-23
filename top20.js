$(document).ready(function(){
  /* Like Button */
  $('.product img:last-child').click(function(){
    let src = ($(this).attr('src') === 'image/heart.svg')
      ? 'image/heart-fill.png'
      : 'image/heart.svg';
    $(this).attr('src', src);
  });

  /* countdown */
  function updateTimer() {
    const future = Date.parse("2023/10/24 00:00:00");
    const now = new Date();
    const diff = future - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor(diff / (1000 * 60));
    const secs = Math.floor(diff / 1000);

    const d = days < 10 ? `0${days}` : days;
    const h = hours - days * 24 < 10 ? `0${hours - days * 24}` : hours - days * 24;
    const m = mins - hours * 60 < 10 ? `0${mins - hours * 60}` : mins - hours * 60;
    const s = secs - mins * 60 < 10 ? `0${secs - mins * 60}` : secs - mins * 60;

    document.getElementById("timer")
    .innerHTML =
    '<div>' + d + '<span>Days</span></div>' +
    '<div>' + h + '<span>Hours</span></div>' +
    '<div>' + m + '<span>Minutes</span></div>' +
    '<div>' + s + '<span>Seconds</span></div>'; 
  }

  setInterval(updateTimer, 1000);

});