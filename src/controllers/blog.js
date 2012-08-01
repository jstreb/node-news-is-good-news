var Blog = require('../models').Blog;

module.exports.index = function( req, res ) {
  res.render('blog/index', { title: 'Blog index' });
};