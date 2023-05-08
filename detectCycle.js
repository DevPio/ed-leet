class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
const twoList = new ListNode(2);
twoList.next = new ListNode(0);
twoList.next.next = new ListNode(-4);
twoList.next.next.next = twoList;
const list = new ListNode(3);
list.next = twoList;
const detectCycle = function (head) {
  let node = head;
  const hash = new Map();
  let counter = 0;
  while (node != null) {
    if (!hash.has(node)) {
      hash.set(node, counter);
    } else {
      return hash.get(node);
    }

    node = node.next;
    counter++;
  }

  return -1;
};

console.log(detectCycle(list));
