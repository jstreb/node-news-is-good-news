var sinon = require('sinon');
var should = require('should');
var BlogModel = require('../../src/models/').Blog;
var BlogController = require('../../src/controllers/').Blog;

describe("#index", function() {
  var req;
  var res;
  
  before(function(){
    sinon.stub(BlogModel, "find");
    req = sinon.stub();
    res = sinon.stub(
      { 
        render: function(){},
        sendError: function(){}
      }
    );
  });
  
  it('Should call the Blog model to find all of the blogs and then call the render function.', function() {
    BlogController.index(req, res);
    
    //Call the callback that was passed into the spy.
    BlogModel.find.args[0][1](null, []);
    
    //Actual specs
    BlogModel.find.called.should.be.ok;
    res.render.called.should.be.ok;
  });
  
  it('Should call the sendError middleware if there is an error finding the blogs.', function() {
    BlogController.index(req, res);
    
    //Call the callback that was passed into the spy.
    BlogModel.find.args[0][1]("error", []);
    
    res.sendError.called.should.be.ok;
    BlogModel.find.called.should.be.ok;
  });
  
});