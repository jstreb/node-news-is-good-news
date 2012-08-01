var controllers = require('../controllers')
  , home = controllers.Home
  , blog = controllers.Blog;

module.exports = function( app ){
  //Home page
  app.get( '/', home.index );
  
  //Blogs
  app.get( '/blog', blog.index );
};