
var Game = (function() {

  var _score = 1000;
  var id;
  var gameOver = false;

  // var getScore = function() {
  //   return _score;
  // };

  var updateScore = function() {
    if (_score === 0) {
      gameOver = true;
    } else {
      _score -= 1;
      $('.score').html("Score: " + _score);
    }
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
    }, 1000)
  };


  return {
    gameLoop: gameLoop
  }


})();






$(document).ready(function() {

  Game.gameLoop();

})