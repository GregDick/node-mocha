function Animal(type){
  this.isAlive = true;
  this.type = type;
}

Animal.prototype.beCute = function(){
  this.isCute = true;
}

module.exports = Animal;
