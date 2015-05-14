var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.num = 0;
  obj.storage = {};
  return obj;
};

var stackMethods = {};
stackMethods.push = function (item){
  this.storage[this.num] = item;
  this.num++;
};
stackMethods.pop = function (){
  var result = this.storage[this.num-1];
  if(this.num>0) {
    delete this.storage[this.num-1];
    this.num--;
  }
  return result;
};
stackMethods.size = function (){
  return this.num;
};
