const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootBST = null;
  }
  root() {
    return this.rootBST;
  }

  add(data) {
    this.rootBST = addElement(this.rootBST, data);
    function addElement(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addElement(node.left, data);
      } else {
        node.right = addElement(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return searchElement(this.rootBST, data);
    function searchElement(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      return data < node.data ? 
        searchElement(node.left, data) : 
        searchElement(node.right, data);
    }
  }

  find(data) {
    return searchElement_1(this.rootBST, data);
    function searchElement_1(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      return data < node.data ? 
        searchElement_1(node.left, data) : 
        searchElement_1(node.right, data);
    }
  }

  remove(data) {
    this.rootBST = removeNode(this.rootBST, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;

        node.right = removeNode(node.right, minRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.rootBST) {
      return null;
    }
    let node = this.rootBST;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.rootBST) {
      return null;
    }

    let node = this.rootBST;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}
  
module.exports = {
  BinarySearchTree
};