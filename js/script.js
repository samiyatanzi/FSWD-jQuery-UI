// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

/*tooltip rules*/
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))



/*accordion rules*/
const accordionCollapseElementList = document.querySelectorAll('#myAccordion .collapse')
const accordionCollapseList = [...accordionCollapseElementList].map(accordionCollapseEl => new bootstrap.Collapse(accordionCollapseEl))


$(document).ready( function() {
     $( "#dialog" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
 
    $( "#opener" ).on( "click", function() {
      $( "#dialog" ).dialog( "open" );
    });


    $( "#accordion" ).accordion({
        collapsible: true});


    $( "#tabs" ).tabs({
      event: "mouseover"
    });

    $(".btn").click(function () {
  $(this).prev(".effect").toggle("highlight", {}, 1000);
  });
    

    var handle = $("#custom-handle");

    $("#slider").slider({
    min: 1,
    max: 10,
    value: 1,

    create: function () {
    handle.text($(this).slider("value"));
  },

    slide: function (event, ui) {
    handle.text(ui.value);

    // Update display
    $("#size").text(ui.value);
    $("#amount").text(ui.value * 1000);
  }
});


     
     var tooltips = $( "[title]" ).tooltip({
      position: {
        my: "left top",
        at: "right+5 top-5",
        collision: "none"
      }
    });
    
})
