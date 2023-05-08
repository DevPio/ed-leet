class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const list = new LinkedList(2);

list.next = new LinkedList(7);
list.next.next = new LinkedList(3);
list.next.next.next = new LinkedList(5);

function getSize(linkedList) {
  let size = 0;
  let node = linkedList;
  while (node != null) {
    node = node.next;
    size++;
  }

  return size;
}

function middleNode(linkedList) {
  let slowPointe = linkedList;
  let speedPointe = linkedList;
  while (speedPointe != null) {
    try {
      speedPointe = speedPointe.next.next;

      slowPointe = slowPointe.next;
    } catch (error) {
      return slowPointe;
    }
  }
  // Write your code here.

  return slowPointe;
}

middleNode(list);
