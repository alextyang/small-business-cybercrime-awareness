

$(window).scroll(function() {
   var hT = $('#crime1').offset().top,
       hH = $('#crime1').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH)){
     document.querySelector('#crime1 .crimeImage .compImg').style.opacity = 1;
   }

   var hT = $('#crime2').offset().top,
       hH = $('#crime2').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH)){
     document.querySelector('#crime2 .crimeImage .compImg').style.opacity = 1;
   }

   var hT = $('#crime3').offset().top,
       hH = $('#crime3').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH)){
     document.querySelector('#crime3 .crimeImage .compImg').style.opacity = 1;
   }

   var hT = $('#crime4').offset().top,
       hH = $('#crime4').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH)){
     document.querySelector('#crime4 .crimeImage .compImg').style.opacity = 1;
   }
});
