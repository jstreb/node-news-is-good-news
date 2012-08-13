var Blog = require('../models').Blog;
var marked = require('marked');

module.exports.index = function( req, res ) {
  Blog.find({}, function( err, blogs) {
    if( err ) {
      res.sendError();
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
    var html;
    if( err ) {
      res.sendError();
      return;
    }
    
    html = marked( blog.article );
    
    res.render('blog/show', {
      title: blog.title,
      blog: blog,
      article: html
    });
  });
};