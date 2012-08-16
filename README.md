Node-news-is-good-news part 5
================

Overview
================

Part 5 is really about finishing up the work we began in part 4.  We are going to finish up the routes for the admin/blog section by adding support to edit and delete a blog entry.  Additionally, we have also added two new views, one for a page to allow an admin to edit an entry and another to actually show the blog entry to the public.

Things to notice
================

Within the routes/index.js file you will notice that we are following best practice when creating these routes in that we use a PUT for updates, DELETE for destroys, POST for creation and GET for when we want to read the data.  This means that our update API follows the same route as the edit page, except that this one is made via a GET request while the other is made via a PUT.