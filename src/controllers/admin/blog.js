var Blog = require('../../models').Blog;

module.exports.index = function( req, res ) {
  Blog.find({}, function( err, blogs) {
    if( err ) {
      sendError( res );
      return;
    }
    
    res.render('admin/blog/index', { 
      title: 'Blog index',
      blogs: blogs
    });
    
  });
}

module.exports.new = function( req, res ) {
  res.render( 'admin/blog/new', { title: 'Blog New' } );
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
    
    res.redirect( '/admin/blog' );
  });
};

module.exports.edit = function( req, res ) {
  Blog.findById( req.params.id, function( err, blog ) {
    if( err ) {
      sendError( res );
      return;
    }

    res.render('admin/blog/edit', {
      title: 'Blog Edit',
      blog: blog
    });
  });
};

module.exports.update = function( req, res ) {
  var data = req.body;
  Blog.findByIdAndUpdate( req.params.id, data, function( err, blog ) {
    if( err ) {
      res.sendError();
      return; 
    }
    res.sendSuccess();
  });
};

module.exports.destroy = function( req, res ) {
  Blog.findByIdAndRemove( req.params.id, function( err ) {
    if( err ) {
      res.sendError();
      return;
    }
    
    res.sendSuccess();
  });
};