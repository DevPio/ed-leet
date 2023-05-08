class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
const intesect = new ListNode(8);
intesect.next = new ListNode(4);
intesect.next.next = new ListNode(5);
const headA = new ListNode(4);
headA.next = new ListNode(1);
headA.next.next = intesect;

const headB = new ListNode(5);
headB.next = new ListNode(6);
headB.next.next = new ListNode(1);
headB.next.next.next = intesect;

const getIntersectionNode = function (headA, headB) {
  let currentHeadA = headA;
  let currentHeadB = headB;
  const map = new Map();

  while (currentHeadA != null) {
    map.set(currentHeadA, currentHeadA);
    currentHeadA = currentHeadA.next;
  }

  while (currentHeadB !== null) {
    if (map.has(currentHeadB)) return currentHeadB;
    currentHeadB = currentHeadB.next;
  }

  return null;
};

console.log(getIntersectionNode(headA, headB));
