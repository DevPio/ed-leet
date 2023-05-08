class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
const twoList = new ListNode(1);
twoList.next = new ListNode(2);
twoList.next.next = new ListNode(3);
twoList.next.next.next = new ListNode(4);

const list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4);
list.next.next.next.next = new ListNode(5);

const reorderList = function (head = new ListNode()) {
  let node = head;
  const hash = new Map();
  let index = 0;
  while (node !== null) {
    hash.set(index, node);
    node = node.next;
    index++;
  }
  let next = index - 1;
  let jump = 0;
  let jumpNode = head;
  console.log(hash.get(next));
  console.log(hash.get(jump));
  while (hash.get(next) && hash.get(jump) && jumpNode != null) {
    let currentNode = hash.get(next);
    let nextNode = hash.get(jump);
    currentNode.next = null;
    nextNode.next = null;
    jumpNode.next = currentNode;
    jumpNode.next.next = nextNode;
    if (jumpNode.next.next == null) {
      break;
    }
    jumpNode = jumpNode.next.next;
    next--;
    jump++;
  }

  let currentNode = head;

  while (currentNode.next != null) {
    currentNode = currentNode.next;
  }

  let finalNode = hash.get(next);
  console.log(hash.get(index - 1));
  finalNode.next = null;
  currentNode.next = finalNode;
  return head;
};

reorderList(list);
reorderList(list);
