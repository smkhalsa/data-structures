var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    // create a new node with the argument value
    // set previous node's next property to new node
    // set tail property to new node

    if (list.tail === null) {
      list.tail = Node(value);
      list.head = list.tail;
    }
    else {
      list.tail.next = Node(value);
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function(){
    // set head to next node
    var result = list.head.value;
    list.head = list.head.next;
    return result;
  };

  list.contains = function(target){
    var result = false;
    // start at head
    // check if head is target
    if(list.head === null) {
      return result;
    }
    var nodeCheck = function(node) {
      if(node.value === target) {
        result = true;
      } else {
        if(node.next) {
          nodeCheck(node.next);
        }
      }
    };
    nodeCheck(list.head);
    return result;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
