node-news-is-good-news part 6
===============

Overview
===============

In part 6 we are going to do two things:

* Add some middleware to help DRY things up.
* Add support to render [markdown](http://en.wikipedia.org/wiki/Markdown) as HTML.

Things to notice
================

Our package.json now has a new dependency of [marked](https://github.com/chjj/marked/).  Marked is module that allows us to parse markdown syntax into HTML.  The reason we are doing this is so that the admin that is creating the articles can use markdown rather then having to write HTML.

One great feature of express is how it handles middleware.  Typically, I use it for things like requiring that a user is logged in or that pages are being served over https.  For this use case you may have noticed that we had some duplicate code in our controllers for both the public blog page as well as the admin/blog pages.  The duplicate code was:

    function sendError( res ) {
      res.send( { status: 'error' } );
    }

    function sendSuccess( res ) {
      res.send( { status: 'success' } );
    }

Instead, what I am going to do is provide some middleware that will attach these functions to the response object.  This means that I can simply call res.sendError() or res.sendSuccess() and I will have a centralized place that I can manage these responses.

Helpful Tip
================

Use the scripts feature in your package.json file to provide easy commands to start your server or run your tests.  You will notice that our package.json now has the start command of `nodemon app.js` to help enforce the use of nodemon.