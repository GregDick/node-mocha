var should = require("chai").should();
var Animal = require(process.cwd() + '/lib/Animal');

describe('Mocha + Chai', function() {
  it('Truthyness', function(){
    true.should.equal(true);
  });
});


describe('Animal', function(){
  describe('constructor', function(){
    it('should return an animal object', function(){
      var animal = new Animal();

      animal.should.be.an('object');
      animal.should.be.an.instanceOf(Animal);
    });

    it('should be alive', function(){
      var animal = new Animal();

      animal.isAlive.should.be.true;
    })

    it('should accept a type function', function(){
      var cat = new Animal('cat');
      var dog = new Animal('dog');

      cat.type.should.equal('cat');
      dog.type.should.equal('dog');
    })

  })
})

describe('#beCute()', function(){
  it('should be a prototype method', function(){
    var animal = new Animal();

    animal.should.respondTo('beCute');
    animal.should.not.have.ownProperty('beCute');
  });
  it('should make the animal cute', function(){
    var animal = new Animal();

    should.not.exist(animal.isCute);
    animal.beCute();
    animal.isCute.should.be.true;
  });
})

describe('Array', function(){
  describe('#filter()', function(){
    it('should return an array of items that return truthy in the inner fn', function(){
      var array = [1,2,3,4,5];
      var output = array.filter(function(item){
        return item % 2;
      })

      output.should.eql([1,3,5]);
    });
  });

  describe('#map()', function(){
    it('should create a new array with the return value of the inner function', function(){
      var array = [1,2,3,4,5];

      var output = array.map(function(item){
        return item * item;
      });

      output.should.eql([1,4,9,16,25]);
    });

    it('should keep the same length', function(){
      var array = [1,2,3,4,5];

      var length = array.map(function(item){
        return false;
      }).length;

      length.should.equal(array.length);
    });

    it('should not mutate the original array', function(){
      var array = [1,2,3,4,5];

      array.map(function(){
        return false;
      })

      array.should.eql([1,2,3,4,5]);
    });
  });

})
