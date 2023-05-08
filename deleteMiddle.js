const size = (head) => {
  let length = 1;
  let node = head;
  while (node != null) {
    node = node.next;
    numberItems++;
  }

  return numberItems;
};

const deleteMiddle = (head) => {
  if (!head) return null;
  let node = head;
  let before = null;
  let path = Math.floor(size(head) / 2);

  if (path === 0) return null;
  while (path >= 1) {
    before = node;
    node = node.next;
    path--;
  }

  before.next = node.next;
};
