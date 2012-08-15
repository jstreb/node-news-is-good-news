var controllers = require('../controllers')
  , home = controllers.Home
  , blog = controllers.Blog
  , adminBlog = controllers.AdminBlog;

module.exports = function( app ){
  //Home page
  app.get( '/', home.index );
  
  //Blogs
  app.get( '/blog', blog.index );
  app.get( '/blog/:id', blog.show );
  
  //Admin section
  app.get( '/admin/blog', adminBlog.index );
  app.get( '/admin/blog/new', adminBlog.new );
  app.post( '/admin/blog', adminBlog.create );
  app.get( '/admin/blog/:id', adminBlog.edit );
  app.put( '/admin/blog/:id', adminBlog.update );
  app['delete']( '/admin/blog/:id', adminBlog.destroy );
};