var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BlogSchema = module.exports = new Schema(
  {
    title: String,
    article: String,
    author: String,
    creation_date: { type: Date, "default": Date.now }
  }
);