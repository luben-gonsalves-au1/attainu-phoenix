class Bst {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    let currentNode = this;
    while (true) {
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = new Bst(value);
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = new Bst(value);
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
    return this;
  }

  contains(value) {
    let currentNode = this;
    while (currentNode != null) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        return true;
      }
    }
    return false;
  }

  remove(value, parent = null) {
    let currentNode = this;
    while (currentNode != null) {
      if (value < currentNode.value) {
        parent = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parent = currentNode;
        currentNode = currentNode.right;
      } else {
        if (currentNode.left != null && currentNode.right !== null) {
          currentNode.value = currentNode.right.getMinValue();
          currentNode.right.remove(currentNode.value, currentNode);
        } else if (parent == null) {
          if (currentNode.left != null) {
            currentNode = currentNode.left;
          } else if (currentNode.right != null) {
            currentNode = currentNode.right;
          } else {
            currentNode.value = null;
          }
        } else if (parent.left == currentNode) {
          parent.left =
            currentNode.left != null ? currentNode.left : currentNode.right;
        } else if (parent.right === currentNode) {
          parent.right =
            currentNode.left != null ? currentNode.left : currentNode.right;
        }
        break;
      }
    }
    return this;
  }

  getMinValue() {
    let currentNode = this;
    while (currentNode.left != null) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }

  bfs() {
    let node = this;
    let queue = [];
    let data = [];
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  closest(value) {
    let closest = Infinity;
    let currentNode = this;
    while (currentNode != null) {
      if (Math.abs(value - closest) > Math.abs(value - currentNode.value)) {
        closest = currentNode.value;
      }
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        break;
      }
    }
    return closest;
  }

  validate() {
    function validateBst(tree, minValue, maxValue) {
      if (tree == null) return true;
      if (tree.value < minValue || tree.value >= maxValue) return false;
      const isLeftValid = validateBst(tree.left, minValue, tree.value);
      return isLeftValid && validateBst(tree.right, tree.value, maxValue);
    }
    return validateBst(this, -Infinity, Infinity);
  }

  inorder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this);
    return data;
  }

  postOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this);
    return data;
  }

  preOrder() {
    let data = [];
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this);
    return data;
  }
}

let bst = new Bst(10);
bst.insert(5);
bst.insert(15);
bst.insert(5);
bst.insert(13);
bst.insert(22);
bst.insert(8);
bst.insert(2);
bst.insert(1);
bst.insert(14);
// bst.remove(5);
// console.log(bst.closest(7));
// console.log(bst.validate());
// console.log(bst.bfs());
// console.log(bst.contains(12));
console.log(bst.inorder());
console.log(bst.postOrder());
console.log(bst.preOrder());
