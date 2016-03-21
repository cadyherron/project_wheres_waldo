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


var keepTag = function() {

}


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
    $(".button_to").on("click", function(e) {
      e.preventDefault();
      var el = e.target;
      $.post({
        url: "/tags.json",
        dataType: "json",
        // TODO: remove hardcoded photo id
        data: { tag: { character_id: el.id.slice(7), photo_id: 1, x: (e.pageX - 30), y: (e.pageY - 60) } },
        success: function(json) {
          hideDropdown();
          displayTarget();
        }
      });

    });
  }

});
