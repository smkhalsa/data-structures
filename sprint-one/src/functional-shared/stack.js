var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  someInstance.storage = {};
  someInstance.propCount = 0;

  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.propCount] = value;
    this.propCount++;
  },
  pop: function() {
    var result = this.storage[this.propCount-1];
    if(this.propCount > 0) {
      delete this.storage[this.propCount-1];
      this.propCount --;
    }
    return result;
  },
  size: function() {
    return this.propCount;
  }
};


