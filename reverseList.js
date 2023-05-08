class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const list = new ListNode(1);

list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4);
list.next.next.next.next = new ListNode(5);

const reverseList = function (head) {
  const stack = [];
  let node = head;

  while (node != null) {
    stack.push(node);
    node = node.next;
  }
  let result;
  let pointer;
  while (stack.length > 0) {
    let list = stack.pop();
    list.next = null;

    if (!result) {
      result = list;
      pointer = list;
    } else {
      pointer.next = list;
      pointer = pointer.next;
    }
  }

  return result;
};

reverseList(list);
