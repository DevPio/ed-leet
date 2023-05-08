var getCommon = function (nums1, nums2) {
  const nums1Set = new Set(nums1);
  const nums2Set = new Set(nums2);
  const returnSet = new Set();
  nums1Set.forEach((number) => {
    if (nums2Set.has(number)) {
      returnSet.add(number);
    }
  });

  if (returnSet.size === 0) return -1;

  return returnSet.keys().next().value;
};
