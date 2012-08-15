Nogging part 3
================

Overview
================

In part 3 things are starting to get more interesting.  In here we are going to add a mongo database, add in models and add in a config file to store a various environments.  (For this tutorial it is just development.)

Install / Prerequisites
================

You will need to install and have mongo running locally for this step.  You can follow the [instructions here](http://www.mongodb.org/display/DOCS/Quickstart/) if you do not already have mongo up and running.

Things to notice
================

* Our package.json has a new dependency for mongoose.  You can read more about it [here](https://github.com/learnboost/mongoose), but it essentially provides an excellent wrapper for mongo, by allowing you to easily setup your schemas and run queries.
* There is a new models directory which holds our model files.  I like to put the mongo connection code in my models directory as I tend to think of mongo in connection with models, but you can put this in the app.js file or your own directory.
* In the models directory you will see the blog.js which defines the schema for this model.  This will allow us to do some powerful things like, new Blog(), save(), remove(), find()...etc.  You can see a reference to the mongoose API [here](https://github.com/learnboost/mongoose).
* In app.js, one of the first things we do now is connect to the DB.  When we restart the app we should now see a message saying that we have connected to the mongo DB.
