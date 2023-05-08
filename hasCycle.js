const hasCycle = function (head) {
  let node = head;
  const hash = new Map();

  while (node != null) {
    if (hash.has(node)) return true;
    hash.set(node, node);
    node = node.next;
  }
};
