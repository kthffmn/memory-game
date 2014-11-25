$( document ).ready(function() {

  $('.flip').click(function(){
    var card = $(this).find('.card')
    card.addClass('flipped');
  });

  function turnDownCards() {
    if($('.flipped').length > 1) {
      $(".card").removeClass("flipped");
    }
  }

  setInterval(function() { 
    turnDownCards() 
  }, 2000); 

});