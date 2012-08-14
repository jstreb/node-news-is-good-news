var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var marked = require('marked');

var BlogSchema = module.exports = new Schema(
  {
    title: String,
    article: String,
    author: String,
    creation_date: { type: Date, "default": Date.now }
  }
);

BlogSchema.methods.formatDate = function() {
  var d = new Date( this.creation_date );
  return d.toDateString();
}

BlogSchema.methods.formatMarkdown = function() {
  return marked( this.article );
}