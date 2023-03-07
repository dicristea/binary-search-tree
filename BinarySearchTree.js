let arrayInput = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

console.log("INPUT", arrayInput);

const TreeNode = (value = null, left = null, right = null) => {
  return { value, left, right };
};

const Tree = (array, root = null) => {
  // HELPER FUNCTION: visualize tree: value of root = node parameter
  const prettyPrint = (node = root, prefix = "", isLeft = true) => {
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
      return null;
    }
    let mid = Math.floor((start + end) / 2);
    let treeRoot = TreeNode(array[mid]);

    treeRoot.left = buildTree(array, start, mid - 1);
    treeRoot.right = buildTree(array, mid + 1, end);

    return treeRoot;
  };

  // Must appear after initialization of buildTree and prettyPrint helper functions
  let sortedArray = [...new Set(array.sort((a, b) => a - b))];
  root = buildTree(sortedArray);

  const find = (value, node = root) => {
    if (node === null || node.value === value) {
      return node;
    }

    if (value < node.value) {
      return find(value, node.left);
    }

    if (value > node.value) {
      return find(value, node.right);
    }

    return null;
  };

  const insert = (value, node = root) => {
    if (node === null) {
      return TreeNode(value);
    }

    if (value < node.value) {
      node.left = insert(value, node.left);
    }

    if (value > node.value) {
      node.right = insert(value, node.right);
    }

    return node;
  };

  function minValue(node) {
    let minv = node.value;
    while (node.left !== null) {
      minv = node.left.value;
      node = node.left;
    }
    return minv;
  }

  const deleteNode = (value, node = root) => {
    if (node === null) {
      return node;
    }

    if (value > node.value) {
      node.right = deleteNode(value, node.right);
    } else if (value < node.value) {
      node.left = deleteNode(value, node.left);
    } else {
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }
      node.value = minValue(node.right);
      node.right = deleteNode(node.value, node.right);
    }

    return node;
  };

  let levelOrder = (node = root) => {
    const levels = [];

    if (!root) {
      return levels;
    }

    let queue = [node];
    while (queue.length) {
      const queueLength = queue.length;
      const level = [];

      for (let i = 0; i < queueLength; i++) {
        const newNode = queue.shift();

        if (newNode.left) {
          queue.push(newNode.left);
        }
        if (newNode.right) {
          queue.push(newNode.right);
        }

        level.push(newNode.value);
      }
      level.map((x) => levels.push(x));
    }
    return levels;
  };

  const inOrder = (array = [], node = root, changeValue) => {
    if (node === null) return;

    if (node.left !== null) {
      inOrder(array, node.left);
    }
    array.push(node.value);

    if (node.right !== null) {
      inOrder(array, node.right);
    }

    if (changeValue) {
      return changeValue(node.value);
    } else {
      return array;
    }
  };

  const preOrder = (array = [], node = root, changeValue) => {
    if (node === null) return;
    array.push(node.value);

    if (node.left !== null) {
      preOrder(array, node.left);
    }

    if (node.right !== null) {
      preOrder(array, node.right);
    }

    if (changeValue) {
      return changeValue(node.value);
    } else {
      return array;
    }
  };

  const postOrder = (array = [], node = root, changeValue) => {
    if (node === null) return;

    if (node.left !== null) {
      postOrder(array, node.left);
    }

    if (node.right !== null) {
      postOrder(array, node.right);
    }

    array.push(node.value);

    if (changeValue) {
      return changeValue(node.value);
    } else {
      return array;
    }
  };

  const height = (node = root) => {
    if (node === null) {
      return 0;
    }
    let lHeight = height(node.left);
    let rHeight = height(node.right);

    if (lHeight > rHeight) {
      return lHeight + 1;
    } else {
      return rHeight + 1;
    }
  };

  const findDepth = (value, depth = 0, node = root) => {
    if (node === null || node.value === value) {
      return depth;
    }

    if (value < node.value) {
      return findDepth(value, ++depth, node.left);
    }

    if (value > node.value) {
      return findDepth(value, ++depth, node.right);
    }
  };

  const isBalanced = (node = root) => {
    if (Math.abs(height(node.left) - height(node.right)) <= 1) {
      return true;
    } else {
      return false;
    }
  };

  const rebalance = (node = root) => {
    let currentArray = inOrder();
    root = buildTree(currentArray);
    return root;
  };

  console.log("Original root");
  prettyPrint(root);
  console.log("-----------------------------");

  return {
    root,
    prettyPrint,
    insert,
    deleteNode,
    find,
    levelOrder,
    inOrder,
    preOrder,
    postOrder,
    height,
    findDepth,
    isBalanced,
    rebalance,
  };
};

let dianasTree = Tree(arrayInput);
console.log(dianasTree.levelOrder(dianasTree.root));
// console.log("prettyprint call", dianasTree.prettyPrint(outsideRoot));
