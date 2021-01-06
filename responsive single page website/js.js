$(document).ready(function(){
  $('.nav-toggle').click(function(){
      $('nav').toggleClass('active')
  
  })
})


mybutton = document.getElementById("topBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};


function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
};


