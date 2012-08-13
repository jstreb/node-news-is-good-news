( function( $, undefined ) {
  
  $( document ).ready( init );
  
  function init() {
    registerEventListeners();
  }
  
  function registerEventListeners() {
    $( ".submit" ).click( handleSubmit );
    $( ".delete" ).click( handleDelete );
  }
  
  function handleSubmit() {
    var $form = $( "#form" );
    $.ajax(
      {
        url: $form.attr( "action" ),
        data: $( "#form" ).serializeObject(),
        type: "PUT"
      }
    ).success( function( data ) {
      console.log( data );
    });
    return false;
  }
  
  function handleDelete() {
    var id = this.getAttribute( "data-id" );
    $.ajax(
      {
        url: "/admin/blog/" + id,
        type: "DELETE"
      }
    ).success( function( data ) {
      location.href = "/admin/blog/";
    })
    return false;
  }
  
})( jQuery );