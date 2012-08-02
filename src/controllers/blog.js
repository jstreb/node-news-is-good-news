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

module.exports.newBlog = function( req, res ) {
  res.render( 'blog/new', { title: 'Blog New' } );
};

module.exports.create = function( req, res ) {
  var data = req.body;
  var blog = new Blog( {
    title: data.title,
    article: data.article,
    author: data.author
  });
  
  blog.save( function( err ) {
    if( err ) {
      sendError( res );
      return;
    }
    
    res.redirect( '/blog' );
  });
};

function sendError( res ) {
  res.send( { status: 'error' } );
}