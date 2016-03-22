var displayTarget = function() {
  $('.target').addClass("active searching");
};

var hideTarget = function() {
  $('.target').removeClass("active searching");
};

var animateDropdown = function() {
  $('.dropdown').slideDown();
};

var hideDropdown = function() {
  $('.dropdown').slideUp();
};


var keepTag = function(json, name) {
  $('#waldo-photo').append("<div class='saved-tag' data-id=" + json.id + " style='left: " + json.x + 'px; top: ' + json.y + "px;'> <p class='btn btn-default btn-block' data-id=" + json.id + ">Remove "+ name + "</p></div>");
};


$(document).ready(function() {

  if ($('#photos-show').length) {

    $('#waldo-photo').hover(displayTarget, hideTarget);

    // make sure cursor is in the center of tagging box
    $('#waldo-photo').on('mousemove', function(e) {
      // make the box float on mouse move
      if ($(this).hasClass('searching')) {
        $('.target').css({
          left: e.pageX - 20,
          top: e.pageY - 20
        });
      }
    });

    // if you click, stop the box from moving
    $('#waldo-photo').click(function() {
      if ($(this).hasClass('searching')) {
        $(this).removeClass('searching');
        animateDropdown();
      } else {
        $(this).addClass('searching');
        $('.target').removeClass('clicked');
        hideDropdown();
      }
    });

    // clicking the button creates the tag
    $(".target").on("click", ".button_to", function(e) {
      e.preventDefault();
      var character = e.target;
      var $target = $('.target.active.searching');
      var left = $target.css("left").slice(0,-2) // removes px
      var top = $target.css("top").slice(0,-2) // removes px
      $.ajax({
        url: "/tags.json",
        type: "POST",
        dataType: "json",
        // TODO: remove hardcoded photo id
        data: { tag: { character_id: character.id.slice(7), photo_id: 1, x: left, y: top } },
        success: function(json) {
          hideDropdown();
          displayTarget();
          keepTag(json, character.value);
          // $('#waldo-photo').addClass('searching');
        },
        error: function() {
          console.log("You've already tagged that character!")
          alert("You've already tagged that character!")
          $('#waldo-photo').addClass('searching');
        }
      });

    });






  }

});

// TODO: save as percentage instead of pixels
