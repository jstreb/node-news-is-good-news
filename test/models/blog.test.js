var env = process.env.NODE_ENV || 'development';
var vows = require('mocha');
var should = require('should');
var mongo = require("../../src/models/mongo");
var config = require("../../src/configs/")[env];
var Blog = require('../../src/models/').Blog;

mongo.connect(config.mongodb);

describe('Creating a new Blog', function(){
  var blog;
  
  before(function(done){
    blog = new Blog();
    blog.title = 'Test';
    blog.article = 'Very short article description';
    blog.author = 'me';
    blog.save(function(err,b) {
      done();
    })
  });
  
  it('Should have populated the blog correctly', function() {
    blog.should.have.property('title','Test');
    blog.should.have.property('article', 'Very short article description');
    blog.should.have.property('author', 'me');
    should.exist(blog.creation_date);
  });
})