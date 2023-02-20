let arrayInput = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
console.log(arrayInput);

const TreeNode = (value = null, left = null, right = null) => {
  return { value, left, right };
};

const Tree = (array) => {
  // visualize tree
  // value of root = node parameter
  const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

  const buildTree = (array, start = 0, end = array.length - 1) => {
    if (start > end) {
      // base case
      return null;
    }
    let mid = (start + end) / 2;
    let treeRoot = TreeNode(array[mid]);

    treeRoot.left = buildTree(array, start, mid - 1);
    treeRoot.right = buildTree(array, mid + 1, end);

    return treeRoot;
  };

  let sortedArray = [...new Set(array.sort((a, b) => a - b))];
  let root = buildTree(sortedArray);
  console.log(buildTree(sortedArray));
  prettyPrint(root);

  const insert = (value) => {
    // insert node
    // return new root node
  };

  const deleteNode = (value) => {
    // delete node - does node have children or not?
    // return new root node
  };

  const find = (value) => {
    // return node with the value
  };

  const levelOrder = () => {
    // make queue array acting as queue for children nodes to be traversed
    // traverse the tree in breadth-first level order and provide each node as the argument to the provided function.
    // iteration and recursion (try implementing both!).
    // The method should return an array of values if no function is given.
  };

  // functions that accept a function parameter. Each of these functions should traverse the tree in their respective depth-first order and yield each node to the provided function given as an argument. The functions should return an array of values if no function is given.
  const inOrder = () => {};
  const preOrder = () => {};
  const postOrder = () => {};

  const height = (node) => {
    //returns node height
    // Height is defined as the number of edges in longest path from a given node to a leaf node.
  };

  const depth = (node) => {
    // returns node depth
    // Depth is defined as the number of edges in path from a given node to the tree’s root node.
  };

  const isBalanced = () => {
    // checks if the tree is balanced
    // The difference between heights of left subtree and right subtree of every node is not more than 1.
  };

  const rebalance = () => {
    // rebalances an unbalanced tree
    // Tip: You’ll want to use a traversal method to provide a new array to the buildTree function.
  };

  return {
    root,
    insert,
    deleteNode,
    find,
    levelOrder,
    inOrder,
    preOrder,
    postOrder,
    height,
    depth,
    isBalanced,
    rebalance,
  };
};

let dianasTree = Tree(arrayInput);
