const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
 
  root() {
    if (!this.node) {
      return null;
    } else {
      return this.node();
    }
  }

  add(data) {
    const node = new Node(data);
    if (!this.root){
      this.root = node;
    }
  }

  has(data) {
  
  }

  find(data) {
    
  }

  remove(data) {
    
  }

  min() {
    
  }

  max() {
    
  }
}

module.exports = {
  BinarySearchTree
};