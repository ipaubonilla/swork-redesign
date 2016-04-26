$(document).ready(function() {
   $('.gal').mouseenter(function() {
       $(this).animate({
           width: '+=20px',
           height: '+=10px'
       });
   });
   $('.gal').mouseleave(function() {
       $(this).animate({
           width: '-=20px',
           height: '-=10px'
       }); 
   });
   // $('div').click(function() {
   //     $(this).toggle(1000);
   // });
});

