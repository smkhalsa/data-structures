var BinarySearchTree = function(value){
  var newTree = Object.create(BinarySearchTree.prototype);
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  return newTree;
};

BinarySearchTree.prototype.insert =  function(node) {
  var direction;
  node > this.value ? direction = "right" : direction = "left";
  if(!this[direction]) {
    this[direction] = BinarySearchTree(node);
  } else {
    this[direction].insert(node);
  }

};

BinarySearchTree.prototype.contains = function(target){
  var targetFound = false;
  var searchTree = function(node) {
    var direction;
    if(node.value === target) {
      targetFound = true;
    } else if (node.value < target) {
      direction = "right";
    } else if (node.value > target) {
      direction = "left";
    }
    if(node[direction]) {
      searchTree(node[direction]);
    }
  };
  searchTree(this);
  return targetFound;
};

BinarySearchTree.prototype.depthFirstLog = function(callback){
  var runCallBack = function (node) {
    callback(node.value);
    if (node.left) {
      runCallBack(node.left);
    }
    if (node.right) {
      runCallBack(node.right);
    }
  };
  runCallBack(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
