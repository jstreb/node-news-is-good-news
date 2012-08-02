var controllers = require('../controllers')
  , home = controllers.Home
  , blog = controllers.Blog;

module.exports = function( app ){
  //Home page
  app.get( '/', home.index );
  
  //Blogs
  app.get( '/blog', blog.index );
  app.get( '/blog/new', blog.newBlog );
  app.post( '/blog', blog.create );
};