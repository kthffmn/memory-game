$( document ).ready(function() {

  var visibleCardNum = 0;
  var matchedTotal = 0;
  var cardTotal = $(".card").length;
  var flippedCard;

  $('.flip').click(function(){
    var card = $(this).find('.card');

    if(!card.hasClass("flipped") && visibleCardNum < 2 && !card.hasClass("matched")) {

      card.addClass('flipped');
      visibleCardNum += 1;

      if(visibleCardNum == 1) { 
        flippedCard = card;
      } else if(visibleCardNum == 2) {
        if(card.data("programmer") == flippedCard.data("programmer")) {
          setTimeout(function() {
            $.each([card, flippedCard], function(i, c){
              c.addClass("matched");
              matchedTotal += 1;
            });
            visibleCardNum = 0;
            if(matchedTotal == cardTotal) {
              $(".card-table").hide("explode");
              setTimeout(function() {
                $(".winning-message").show();
              }, 400);
            }
          }, 325);
        } else {
          setTimeout(function() {
            $.each([card, flippedCard], function(i, c){
              c.removeClass("flipped");
            });
            visibleCardNum = 0;
          }, 1500);
        }
      }

    }

  });

});