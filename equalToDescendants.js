class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const tree = new TreeNode(10);

tree.left = new TreeNode(3);
tree.right = new TreeNode(4);

tree.left.left = new TreeNode(2);
tree.left.right = new TreeNode(1);

const getChildrens = (root) => {
  let childres = [];
  let values = [];
  if (!root) return childres;

  childres.push({ node: root.left });
  childres.push({ node: root.right });
  while (childres.length > 0) {
    let { node } = childres.pop();
    if (!node) continue;
    values.push(node.val);

    childres.push({ node: node.left });
    childres.push({ node: node.right });
  }

  return values;
};

const equalToDescendants = function (root) {
  let d = {};
  let results = [];
  const dfs = (root) => {
    if (!root) return;
    dfs(root.left);
    let count = getChildrens(root);
    if (root.val == 0 && count.length == 0) {
      results.push(0);
    } else {
      d[root.val] = count;
    }

    dfs(root.right);
  };

  dfs(root);

  Object.keys(d).forEach((key) => {
    if (d[key].length > 0) {
      let sum = d[key].reduce((acc, number) => acc + number, 0);

      if (key == sum) {
        results.push(key);
      }
    }
  });

  return results.length;
};

const t = new TreeNode(0);

t.right = new TreeNode(0);

equalToDescendants(t);
