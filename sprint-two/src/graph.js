

var Graph = function(){
  this.storage = {};
};

var GraphNode = function(value) {
  this.value = value;
  this.edges = [];
};

Graph.prototype.addNode = function(nodeName){
  this.storage[nodeName] = new GraphNode(nodeName);

};

Graph.prototype.contains = function(target){
  return this.storage.hasOwnProperty(target);
};

Graph.prototype.removeNode = function(nodeName){
  delete this.storage[nodeName];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  var result = false;
  _.each(this.storage[fromNode].edges, function (value) {
    if (value === toNode) {
      result = true;
    }
  });

  return result;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.storage[fromNode].edges.push(toNode);
  this.storage[toNode].edges.push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



