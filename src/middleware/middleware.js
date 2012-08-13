module.exports.defaultCallbacks = function( req, res, next ) {
  res.sendError = function() {
    this.send( { status: 'error' } );
  };
  
  res.sendSuccess = function() {
    this.send( { status: 'success' } );
  };
  
  next();
};