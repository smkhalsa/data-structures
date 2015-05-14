var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    counter: 0,
    storage: {}
  };
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  enqueue: function(value){
    this.storage[this.counter] = value;
    this.counter++;
  },
  dequeue: function(){
    var result;
    var reStore = {};
    if(this.counter>0) {
      result = this.storage[0];
      delete this.storage[0];
      _.each(this.storage, function(value, key) {
        reStore[key-1] = value;
      });
      this.storage = reStore;
      this.counter --;
    }
    return result;
  },
  size: function(){
    return this.counter;
  }
};



