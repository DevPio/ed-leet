const lengthOfLongestSubstring = (s = "") => {
  let ans = 0;
  let keys = {};
  let i = 0;
  for (let index = 0; index < s.length; index++) {
    if (keys[s[index]]) {
      i = Math.max(keys[s[index]], i);
    }

    ans = Math.max(ans, index - i + 1);

    keys[s[index]] = index + 1;
  }

  return ans;
};

// lengthOfLongestSubstring("abcabcbb");
// lengthOfLongestSubstring("bbbbb");
// lengthOfLongestSubstring("pwwkew");
// lengthOfLongestSubstring(" ");
// lengthOfLongestSubstring("");
//lengthOfLongestSubstring("aab");

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

const swapPairs = function (head) {
  let currentNode = head;
  let nextNode = head.next;
  let counter = 0;

  while (currentNode != null && nextNode != null) {
    counter++;
    if (counter === 1) {
      console.log(currentNode.val);
      console.log(nextNode.val);
      counter = 0;
    }

    nextNode = nextNode.next;
    currentNode = currentNode.next;
  }
};

swapPairs(list);

const dfs = (node, cb, type) => {
  if (!node) return;

  dfs(node.left, cb, { left: true });

  cb(node.val, type);
  dfs(node.right, cb, { left: false });
};

// const isSameTree = (p, q) => {
//   let firstItems = [];
//   let secondItems = [];

//   dfs(p, (val, type) => {
//     firstItems.push({
//       val,
//       type,
//     });
//   });
//   dfs(q, (val, type) => {
//     secondItems.push({
//       val,
//       type,
//     });
//   });

//   if (firstItems.length != secondItems.length) return false;
//   for (let index = 0; index < firstItems.length; index++) {
//     if (
//       firstItems[index].val != secondItems[index].val ||
//       JSON.stringify(firstItems[index].type) !=
//         JSON.stringify(secondItems[index].type)
//     )
//       return false;
//   }

//   return true;
// };

const isSameTree = (p, q) => {
  if (p === null && q === null) return true;

  if (p === null || q === null) return false;

  if (p.val != q.val) return false;

  return isSameTree(p.right, q.right) && isSameTree(p.left, q.left);
};

const majorityElement = (nums) => {
  let numbers = {};
  let max = {
    val: null,
    key: null,
  };
  for (let index = 0; index < nums.length; index++) {
    if (!numbers[nums[index]]) {
      numbers[nums[index]] = 1;
    } else {
      numbers[nums[index]] = numbers[nums[index]] + 1;
    }

    if (!max.key) {
      max = {
        val: numbers[nums[index]],
        key: nums[index],
      };
    }

    if (numbers[nums[index]] > max.val) {
      max.val = numbers[nums[index]];
      max.key = nums[index];
    }
  }

  return max.key;
};

majorityElement([6, 5, 5]);
