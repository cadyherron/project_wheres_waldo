var removeSpecificTag = function(id) {
  $("[data-id='"+id+"']").remove()
  $('#waldo-photo').addClass('searching')
  hideDropdown();
}



$(document).ready(function() {


    $('.saved-tag').hover( 
      function() { $('#waldo-photo').removeClass('searching') }, 
      function () { $('#waldo-photo').addClass('searching') }
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