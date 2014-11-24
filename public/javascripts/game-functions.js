function randomInt(min,max) {
  // create a range that includes min and max and return a random number from it
}

function selectMole() {
  // here you're going to find what mole is visible
  // and hide it

  // select a new mole to make visible, 
  // making sure it isn't the same as the previous visible mole
  // and make this new mole visible
}

// the function below is called on game.js and calls on your selectMole() function every second
function play() {
  setInterval(function() {
    selectMole();
  }, 1000);
}
