//============ VERGONHA ESSA SOLUCAO, MELHORAR =======================

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const tree = new TreeNode(4);

tree.right = new TreeNode(6);
tree.left = new TreeNode(2);

tree.left.left = new TreeNode(1);
tree.left.right = new TreeNode(3);

const dfs = (root, cb) => {
  if (!root) return;
  dfs(root.left, cb);
  cb(root.val);
  dfs(root.right, cb);
};
const minDiffInBST = (root) => {
  const array = [];
  dfs(root, (val) => array.push(val));
  let mins = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      mins.push(Math.abs(array[i] - array[j]));
    }
  }

  return Math.min(...mins);
};

console.log(minDiffInBST(tree));
