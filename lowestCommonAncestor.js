function intersection(...arrays) {
  const sets = arrays.map((arr) => new Set(arr));

  const intersectionSet = sets.reduce((setA, setB) => {
    const filteredSet = new Set([...setA].filter((value) => setB.has(value)));
    return filteredSet;
  });

  return Array.from(intersectionSet);
}
const dfs = (root, before) => {
  if (!root) return;
  dfs(root.left, root);
  root.ancestor = before;

  dfs(root.right, root);
};

var lowestCommonAncestor = function (root, nodes) {
  dfs(root);

  const equal = (root, node, items = []) => {
    if (!root) return;
    equal(root.left, node, items);

    if (node === root) {
      let curr = root;

      while (curr && curr.ancestor) {
        items.push(curr.val);
        curr = curr.ancestor;
      }
    }
    equal(root.right, node, items);

    return items;
  };

  let all = [];
  for (let index = 0; index < nodes.length; index++) {
    const node = nodes[index];

    let items = equal(root, node);
    all.push(items);
  }

  return Math.min(...intersection(...all));
};
