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

module.exports.show = function( req, res ) {
  Blog.findById( req.params.id, function( err, blog ) {
    if( err ) {
      
    }
    
    res.render('blog/show', {
      title: blog.title,
      blog: blog
    });
  });
};

function sendError( res ) {
  res.send( { status: 'error' } );
}

function sendSuccess( res ) {
  res.send( { status: 'success' } );
}