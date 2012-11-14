var env = process.env.NODE_ENV || 'development';
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
  
  after(function(done) {
    Blog.remove({}, function(){
      done();
    })
  })
  
  it('Should have populated the blog correctly', function() {
    blog.should.have.property('title','Test');
    blog.should.have.property('article', 'Very short article description');
    blog.should.have.property('author', 'me');
    should.exist(blog.creation_date);
  });
  
  describe('#formatDate', function() {
    
    it('Should format the date correctly.', function() {
      blog.creation_date = new Date(1352827586948);
      blog.formatDate().should.equal("Tue Nov 13 2012");
    });
    
  });
  
  describe('#formatMarkdown', function() {
    
    //We want to make sure the method works, but not actually test the marked module.
    it('Should format the article into markdown.', function() {
      blog.article = "#Header 1\n##Header 2";
      blog.formatMarkdown().should.equal("<h1>Header 1</h1>\n<h2>Header 2</h2>\n");
    });
    
  });
});