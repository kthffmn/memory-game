$( document ).ready(function() {

  var visibleCardNum = 0;

  $('.flip').click(function(){
    var card = $(this).find('.card');

    if(!card.hasClass("flipped") && visibleCardNum < 2 && !card.hasClass("matched")) {
      card.addClass('flipped');
      visibleCardNum += 1;

      if(visibleCardNum == 2) {
        setTimeout(function() {
          $('.card').removeClass('flipped');
          visibleCardNum = 0;
        }, 1500);
      }

    }

  });

});