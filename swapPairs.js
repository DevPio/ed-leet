const swapPairs = (head) => {
  let node = head;
  let swapItems = [];

  while (node != null) {
    swapItems.push(node);
  }

  for (let index = 0; index < swapItems.length; index++) {
    if ((index + 1) % 2 === 0) {
      let secondItem = swapItems[index];

      swapItems[index] = swapItems[index - 1];
      swapItems[index - 1] = secondItem;
    }
  }

  let list = swapItems.shift();
  let nodeSwap = list;

  while (swapItems.length > 0) {
    let curr = swapItems.shift();

    curr.next = null;

    nodeSwap.next = curr;

    nodeSwap = curr;
  }

  return list;
};
