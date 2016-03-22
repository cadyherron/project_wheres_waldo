
var Game = (function() {

  var _score = 1000;
  var id;

  // var getScore = function() {
  //   return _score;
  // };

  var decreaseScore = function() {
    _score -= 1;
    $('.score').html("Score: " + _score);
  };


  var checkForTags = function() {
    if ($('.saved-tag').length === 5) {
      clearInterval(id);
      alert("Great, let's see how many you got right!")
    }
  };


  var gameLoop = function() {
    id = setInterval( function() {
      checkForTags();
      decreaseScore();
    }, 1000)
  };


  return {
    gameLoop: gameLoop
  }


})();






$(document).ready(function() {

  Game.gameLoop();

})