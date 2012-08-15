Overview
===============

In part 4 we start to really hook things up.  In this section we are actually using our models from within the controllers to create and read new entries from the DB.  Additionally, we have added a few more views / routes to support this creation of articles.  

Things to notice
================

The first thing you will notice is that we now have an admin section, in order to setup our [CRUD](http://en.wikipedia.org/wiki/Create,_read,_update_and_delete) for our blog.  In a real app this would also be restricted to a user that is signed in with admin privileges, however, login is outside the scope of this project.  (Check out Joe McCann's [juke](https://github.com/joemccann/juke.git) repo if you are interested in user login.)

In the /controllers/admin/blog.js file you will now see that we have routes for the create and read portion of CRUD.  We also have a route to show a page in which you can enter a new blog post.  If you hit the /admin/blog/new page you can now create a new blog post, which will show up in your lists on both /admin/blog along with /blog.  Lets create a few entries now, to make sure everything is working.

Helpful tip
================

If you need to debug and want more control beyond the basic console.log() message, you should check out [node-inspector](https://github.com/dannycoates/node-inspector/).  Makes debugging very similar to the normal chrome web-inspector.