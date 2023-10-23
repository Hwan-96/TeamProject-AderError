//intro.html을 index.html로 옮겨와야함
/* if(!sessionStorage.getItem("first_load")&&sessionStorage.setItem("first_load","first_load")){
  if(sessionStorage.getItem("first_load")){
      $(".intro").fadeIn();
  }
}else{
  setTimeout(()=>{
      $(".intro").fadeOut();
      $("#wrap").css("display","block");
  },3500);
}; */

if(!sessionStorage.getItem("first_load")){
  $("#intro_wrap").css("display","block");
  setTimeout(()=>{
      sessionStorage.setItem("first_load","first_load")
      $("#intro_wrap").fadeOut();
      $("#wrap").css("display","block");
  },3500);
}

window.onload = () => {
  if(sessionStorage.getItem("first_load")){
      $("#intro_wrap").css("display","none");
      $("#wrap").css("display","block");
  }
}