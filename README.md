Nogging part 1
================

Install / Prerequisites
================

* Install node.js version 0.8.x
* clone this repo from https://github.com/jstreb/furious-mountain.git

Overview
================

In part 1 of this series we are going to cover the basic structure of an [express](http://expressjs.com/) application running on top of node.js.  This is essentially the layout that express generates for you if you run `express my-app-name`.  Be sure to always run `npm install` after you use `express my-app-name` to generate your files.  For this tutorial we have already generated the files so you just need to have cloned the repo and then you can run npm install.


Usage
================

After you have cloned the repo `cd nogging` and then run node app.js.  If you see the message `Express server listening on port 3000` then you know your environment is setup correctly.  If you see an error make sure you have node version 0.8.x installed.  I find [nvm](https://github.com/creationix/nvm/) to be very helpful in managing my various versions of node.  After running `node app.js` go to http://localhost:3000

#Express
###Welcome to Express

If you see that, they you know that you have node.js installed and running correctly.

Take Aways
================

We now have a working express application!  This is basic app that can handle a single route to the root of the site and displays the view for the home page.  If you are new to express you can follow the call flow by following the request into app.js -> routes/index.js -> which returns the markup defined in layout.jade and index.jade files in the views directory.