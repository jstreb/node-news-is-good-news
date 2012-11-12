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
    var $this = $( this );
    
    $this.text( "Saving..." );
    $.ajax(
      {
        url: $form.attr( "action" ),
        data: $( "#form" ).serializeObject(),
        type: "PUT"
      }
    ).success( function( data ) {
      //We ar eassuming success here, but we should be checking the response and handling appropriately.
      $this.text( "Saved" );
      setTimeout( function() {
        $this.text( "Save" );
      }, 1000 );
    });
    return false;
  }
  
  function handleDelete() {
    var id = this.getAttribute( "data-id" );
    var $this = $( this );
    
    $this.text( "Deleting..." );
    $.ajax(
      {
        url: "/admin/blog/" + id,
        type: "DELETE"
      }
    ).success( function( data ) {
      //We are assuming success here, but we should be checking the response and handling appropriately.
      $this.text( "Deleted" );
      setTimeout( function() {
        location.href = "/admin/blog/";
      }, 500 );
      
    })
    return false;
  }
  
})( jQuery );