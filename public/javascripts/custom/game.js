$( document ).ready(function() {

  $('.flip').click(function(){
    var card = $(this).find('.card');
    card.addClass('flipped');
  });
  
});