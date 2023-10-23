$(document).ready(function(){

  $(".tab li").click(function () {
		var num = $(".tab li").index(this);
		$(".tabContent").removeClass('active');
		$(".tabContent").eq(num).addClass('active');
		// $(".tab li").removeClass('active');
		// $(this).addClass('active')
	});

	$(".tab2 li").click(function () {
		var num = $(".tab2 li").index(this);
		$(".tabContent2").removeClass('active');
		$(".tabContent2").eq(num).addClass('active');
		$(".tab2 li").removeClass('active');
		$(this).addClass('active')
	});

	$(".tab li").click(function(){
    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    let result = $(this).attr("data-alt");
    $(".tabContent").removeClass("active");
    $("#"+result).addClass("active").hide().fadeIn();
  });

	$(".tab3 li").click(function () {
		var num = $(".tab3 li").index(this);
		$(".tabContent3").removeClass('active');
		$(".tabContent3").eq(num).addClass('active');
		$(".tab3 li").removeClass('active');
		$(this).addClass('active')
	});
	

});
