var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){

  var twoPle = [k, v];
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(!this._storage[i]) {
    this._storage[i] = [];
  }
  var temp = this._storage[i];
  temp.push(twoPle);
  this._storage[i] = temp;
};

HashTable.prototype.retrieve = function(k){
  var result = null;
  var i = getIndexBelowMaxForKey(k, this._limit);
  var currentBucket = this._storage[i];
  for (var i=0; i<currentBucket.length; i++) {
    if (currentBucket[i][0] === k) {
      result = currentBucket[i][1];
    }
  }
  return result;

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var currentBucket = this._storage[i];
  for (var i=0; i<currentBucket.length; i++) {
    if (currentBucket[i][0] === k) {
      currentBucket.splice(i, 1);
    }
  }
  this._storage[i] = currentBucket;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
