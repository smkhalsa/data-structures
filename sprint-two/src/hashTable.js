var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){

  // create two-ple combining key and value (key will always be at [0])
  var twoPle = [k, v];
  // pass in key to hashing function to produce the bucketIndex
  var i = getIndexBelowMaxForKey(k, this._limit);
  // if storage at bucket index is undefined
  if(!this._storage[i]) {
    // create empty array at bucketIndex of storage
    this._storage[i] = [];
  }
  // set temp variable to bucketIndex of storage
  var temp = this._storage[i];
  // push two-ple into temp
  temp.push(twoPle);
  // set bucketIndex of storage to temp
  this._storage[i] = temp;
};

HashTable.prototype.retrieve = function(k){
  // define result variable
  var result = null;
  // pass in key to hashing function to get bucketIndex
  var i = getIndexBelowMaxForKey(k, this._limit);
  // set new var currentBucket to storage at bucketIndex
  var currentBucket = this._storage[i];
  // iterate over currentBucket
  for (var i=0; i<currentBucket.length; i++) {
    // if first item of two-ple matches key
    if (currentBucket[i][0] === k) {
      // set result to second item of two-ple
      result = currentBucket[i][1];
    }
  }
  // return result variable
  return result;

};

HashTable.prototype.remove = function(k){
  // set variable i to result of running hashing fn on key
  var i = getIndexBelowMaxForKey(k, this._limit);
  // create variable currentBucket and set it to storage at index i
  var currentBucket = this._storage[i];
  // iterate over currentBucket
  for (var i=0; i<currentBucket.length; i++) {
    // if first item of current twoPle is equal to key
    if (currentBucket[i][0] === k) {
      // remove twoPle from currentBucket
      currentBucket.splice(i, 1);
    }
  }
  // set storage at index i to currentBucket
  this._storage[i] = currentBucket;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
