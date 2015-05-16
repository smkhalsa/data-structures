

var Graph = function(){
  this.storage = {};
};

var GraphNode = function(value) {
  this.value = value;
  this.edges = {};
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
  return this.storage[fromNode].edges.hasOwnProperty(toNode);
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.storage[fromNode].edges[toNode] = toNode;
  this.storage[toNode].edges[fromNode] = fromNode;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.storage[fromNode].edges[toNode];
  delete this.storage[toNode].edges[fromNode];
};

Graph.prototype.forEachNode = function(callback){
  var scope = this;
  _.each.apply(scope, scope.storage, function(node) {
    debugger;
    callback(node);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



