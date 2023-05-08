class SparseVector {
  constructor(nums = []) {
    this.nums = nums;
  }

  dotProduct(v2) {
    let max = Math.max(this.nums.length, v2.nums.length);

    let product = 0;
    for (let index = 0; index < max; index++) {
      product += this.nums[index] * v2.nums[index];
    }

    return product;
  }
}
