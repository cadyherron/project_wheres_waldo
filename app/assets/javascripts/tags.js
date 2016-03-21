var removeSpecificTag = function(id) {
  $("[data-id='"+id+"']").remove()
  $('#waldo-photo').addClass('searching')
  hideDropdown();
}



$(document).ready(function() {


    $('#waldo-photo').on('mouseenter', '.saved-tag',
      function() { 
        $('#waldo-photo').removeClass('searching');
        $('.target').removeClass('active searching')
      }
      )

    $('#waldo-photo').on('mouseleave', '.saved-tag',
      function() { 
        $('#waldo-photo').addClass('searching');
        $('.target').addClass('active searching')
      }
      )

    // click to delete a tag
    $('#waldo-photo').on("click", ".saved-tag > p", function(e) {
      var id = $(this).data("id");

      $.ajax({
        url: "tags/" + id,
        type: "DELETE",
        data: { id: id },
        success: function() {
          removeSpecificTag(id);
        }

      })

    })


})