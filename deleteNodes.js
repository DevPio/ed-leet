class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
const list = new ListNode(1);

let node = list;
for (let index = 2; index <= 13; index++) {
  node.next = new ListNode(index);
  node = node.next;
}

const deleteNodes = (head, m, n) => {
  console.log(JSON.stringify(head));
  let node = head;
  let counter = 1;
  while (node != null) {
    console.log(node);
    if (counter === m) {
      let iterator = n;
      let currentNode = node;
      while (iterator >= 0 && currentNode) {
        currentNode = currentNode.next;
        iterator--;
      }

      counter = 1;

      node.next = currentNode;

      node = node ? node.next : null;
      if (counter === m) continue;
    }
    if (!node) break;
    node = node.next;
    counter++;
  }

  return head;
};
let t = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: {
            val: 6,
            next: {
              val: 7,
              next: {
                val: 8,
                next: {
                  val: 9,
                  next: { val: 10, next: { val: 11, next: null } },
                },
              },
            },
          },
        },
      },
    },
  },
};
deleteNodes(t, 1, 3);
