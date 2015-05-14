var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.count = 0;
  obj.storage = {};
  return obj;
};

var queueMethods = {
  enqueue: function(value){
    this.storage[this.count] = value;
    this.count++;
  },
  dequeue: function(){
    var result = this.storage[0];
    var reStore = {};
    if(this.count>0) {
      delete this.storage[0];
      _.each(this.storage, function(value, key){
        reStore[key-1] = value;
      });
      this.storage = reStore;
      this.count--;
    }
    return result;
  },
  size: function(){
    return this.count;
  }
};


