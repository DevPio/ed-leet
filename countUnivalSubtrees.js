class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const tree = new TreeNode(5);

tree.left = new TreeNode(1);
tree.right = new TreeNode(5);
tree.right.right = new TreeNode(5);

tree.left.left = new TreeNode(5);
tree.left.right = new TreeNode(5);

const countUnivalSubtrees = (root) => {
  const hash = new Map();
  const countUnivalSubtreesHelp = (root) => {
    if (!root) return "";
    const stringBuilder =
      root.val.toString() +
      countUnivalSubtreesHelp(root.left) +
      countUnivalSubtreesHelp(root.right);

    const set = new Set(stringBuilder);
    if (set.size === 1) {
      let value = set.values().next().value;
      if (hash.has(value)) {
        let number = hash.get(value);

        hash.set(value, number + 1);
      } else {
        hash.set(value, 1);
      }
    }

    return root.val;
  };

  countUnivalSubtreesHelp(root);

  let result = {
    key: null,
    val: Number.MIN_VALUE,
  };
  let items = [...hash.entries()];

  for (const [key, value] of items) {
    if (value > result.val) {
      result.key = key;
      result.val = value;
    }
  }
  return result.val;
};

let t = new TreeNode(5);

t.left = new TreeNode(5);
t.right = new TreeNode(1);
countUnivalSubtrees(t);
