var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = 0;
};

Queue.prototype.enqueue = function(value){
  this.storage[this.count] = value;
  this.count++;
};

Queue.prototype.dequeue = function() {
  var result = this.storage[0];
  var tempStorage = {};

  if(this.count > 0) {
    delete this.storage[0];
    _.each(this.storage, function(value, key){
      tempStorage[key-1] = value;
    });
    this.count--;
    this.storage = tempStorage;
  }
  return result;
};

Queue.prototype.size = function () {
  return this.count;
};

