node-news-is-good-news part 7
===============

Overview
===============

Part 7 is all about our site looking better.  The two big ways we are going to do this are:

* Add [twitter bootstrap](http://twitter.github.com/bootstrap/) for some styles.
* Add some JavaScript so that our forms are more responsive.  (This could be taken a step further)

Things to notice
================

In our layout.jade file we will add the bootstrap files, so that they will be included in all of the views.  If you have been using [jade](https://github.com/visionmedia/jade) for sometime now, but haven't upgraded to the latest you may notice that things look a bit different.  You can now extend a layout from your jade file you are serving and can append to `blocks`.  This is useful for including specific JavaScript files on for a given page.

If you haven't used twitter bootstrap before it is *AWESOME*.  

Helpful Tip
================
Use the scripts feature in your package.json file to provide easy commands to start your server or run your tests. You will notice that our package.json now has the start command of nodemon app.js to help enforce the use of nodemon.