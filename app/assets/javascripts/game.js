
var Game = (function() {

  var _score = 1000;
  var id;
  var gameOver = false;

  var updateScore = function() {
    if (_score === 0) {
      gameOver = true;
    } else {
      _score -= 1;
      $('.score').html("Score: " + _score);
    }

  var decreaseScore = function() {
    _score -= 1;
    $('.score').html("Score: " + _score);
  };


  var checkForTags = function() {
    if ($('.saved-tag').length === 5) {
      clearInterval(id);
      alert("Great, let's see how many you got right!")
    } else if (gameOver) {
      clearInterval(id);
      alert("Time is up!")
    }
  };


  var gameLoop = function() {
    id = setInterval( function() {
      checkForTags();
      updateScore();
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