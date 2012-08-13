var Blog = require('../models').Blog;

module.exports.index = function( req, res ) {
  Blog.find({}, function( err, blogs) {
    if( err ) {
      sendError( res );
      return;
    }
    
    res.render('blog/index', { 
      title: 'Blog index',
      blogs: blogs
    });
    
  });
};

function sendError( res ) {
  res.send( { status: 'error' } );
}