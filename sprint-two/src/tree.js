var Tree = function(value){
  var newBranch = {};
  newBranch.value = value;

  // your code here
  newBranch.children = null;  // fix me
  _.extend(newBranch, treeMethods);

  return newBranch;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  if(this.children === null) {
    this.children = [];
  }
  this.children.push(Tree(value));

};

treeMethods.contains = function(target){
  var result = false;
  var checkBranch = function(branch) {
    if(branch.value === target) {
      result = true;
    } else if (branch.children) {
      _.each(branch.children, function(child) {
        checkBranch(child);
      });
    }
  };
  checkBranch(this);
  return result;

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
