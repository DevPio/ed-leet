class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const list = new ListNode(1);

list.next = new ListNode(2);
// list.next.next = new ListNode(3);
// list.next.next.next = new ListNode(4);
// list.next.next.next.next = new ListNode(5);

var removeNthFromEnd = function (head, n) {
  const stack = [];
  let node = head;

  while (node !== null) {
    stack.push(node);
    node = node.next;
  }

  let index = n * -1;

  stack.splice(index, 1);
  let list = stack.shift();
  if (!list) return null;
  list.next = null;
  let iterator = list;

  let curr = iterator;
  while (stack.length > 0) {
    let list = stack.shift();
    list.next = null;
    curr.next = list;
    curr = curr.next;
  }

  return iterator;
};

removeNthFromEnd(list, 1);
