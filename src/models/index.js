var mongoose = require('mongoose');

module.exports.Blog = mongoose.model( "Blog", require( './blog' ) );