Node-news-is-good-news part 2
================

Overview
================

In part2 we are going to add a new section for blogs.  To do this we need to add a new view which can be found under

`/views/blogs/index.jade`

However, the big thing we are doing in this section is introducing the concept of controllers.  This was probably the biggest thing I was missing in my node / express app when I got started.  I ended up with a routes files that was way too big.  Although, it is unnecessary for such a small site, we are going to add the idea of controllers early in order to keep our code organized and able to grow without having to refactor.  If you restart your server and open `http://localhost:3000/blog` we will see our new page. 

Things to notice
================

The first change you will notice is that in app.js we now call our routes by passing in the app object.  This is because we want to actually define the routes in the 'routes' file rather then the app.js file.  We are going to reserve the app.js file for configuration and creating the server, not routing requests.  In the routes file you will now see that we are loading the controller for each major section we plan to have.  This allows us to organize our requests into reasonable buckets.

Okay, nothing exciting yet, but we have a decent foundation for adding a lot more routes.

Helpful tip
================

Use the scripts feature in your package.json file to provide easy commands to start your server or run your tests. You will notice that our package.json now has the start command of nodemon src/app.js to help enforce the use of nodemon.  To use this you simply run `npm start` and it will run this command.  This is a great way to add commands for things like running your tests.