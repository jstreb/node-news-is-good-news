Node-news-is-good-news part 2
================

Overview
================

In part2 we are going to add a new section for blogs.  To do this we need to add a new view which can be found under

  `/views/blogs/index.jade`

However, the big thing we are doing in this section is introducing the concept of controllers.  This was probably the biggest thing I was missing in my node / express app when I got started.  I ended up with a routes files that was way too big.  Although, it is unnecessary for such a small site, we are going to add the idea of controllers early in order to keep our code organized and able to grow without having to refactor.  

Things to notice
================

The first change you will notice is that in app.js we now call our routes by passing in the app object.  This is because we want to actually define the routes in the 'routes' file rather then the app.js file.  We are going to reserve the app.js file for configuration and creating the server, not routing requests.  In the routes file you will now see that we are loading the controller for each major section we plan to have.  This allows us to organize our requests into reasonable buckets.

Okay, nothing exciting yet, but we have a decent foundation for adding a lot more routes.

Helpful tip
================

After switching to this branch of the repo, you had to kill your node.js server and restart it.  Having to stop / restart the server every time you make a change would be very painful.  Fortunately there is a module called [nodemon](https://github.com/remy/nodemon/) that solves this for us, by automatically restarting the server when it detects that a file has changed.  You can install / find the repo [here](https://github.com/remy/nodemon/).