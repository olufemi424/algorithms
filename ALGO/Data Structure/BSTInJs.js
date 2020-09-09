// node class
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Binary Search tree class
class BinarySearchTree {
  constructor() {
    // root of a binary search tree
    this.root = null;
  }
  //functions
  // helper method which creates a new node to be inserted and call inserNot
  insert(data) {
    // create a new node with data
    const newNode = new Node(data);
    // console.log(newNode);
    // if root is null, node will be added to the root of the tree
    if (this.root === null) {
      this.root = newNode;
    } else {
      // find the correct position for the node
      this.insertNode(this.root, newNode);
    }
  }

  //methode to indertNode
  // it moves all over the tree to find the location to insert a node
  // with a given data
  //insert new node to right position
  // it takes in the head node and the new node
  insertNode(node, newNode) {
    // if new node data is less than node data, new node data moves to the left of the tree
    if (newNode.data < node.data) {
      //if left is null
      if (node.left === null) {
        node.left = newNode;
      } else {
        //if not null recurr till null is found
        this.insertNode(node.left, newNode);
      }
    } // if data node is greater than the new node data
    else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  //remove data
  // this method removes a node with a given data
  //helper method that calls remove node
  remove(data) {
    // root is initiallized
    this.root = this.removeNode(this.root, data);
  }
  //Methode to remove node with a given data
  // it recurrs over the tree to find the data and removes it
  removeNode(node, key) {
    // if tree is null then tree is empty
    if (node === null) return null;

    // if data to be deleted is less than root, then move to the left sub-tree
    if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    } // if data to be deleted is greater than root, them move to the right
    else if (node.data > key) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      //delete node with no children
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      // delete node with one children
      if (node.left === null) {
        node = node.right;
        return node;
      }

      if (node.right === null) {
        node = node.left;
        return node;
      }

      let aux = this.findMinMode(node.right);
      node.data = aux.data;
      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }

  //helper function
  // find min node
  //find minimum node in tree
  // searching start giveen node
  //the minimum will always be on the left
  findMinMode(node) {
    // if left of node is null, then it must be minimum node
    if (node.left === null) {
      return node;
    } else {
      return this.findMinMode(node.left);
    }
  }
  //get root node
  // inoder node
  // pre order node
  // post order node
  // search node with data
}

const a = new BinarySearchTree();
a.insert(8);
a.insert(9);
a.insert(10);
a.insert(0);
a.insert(5);
a.insert(1);

console.log(a);
