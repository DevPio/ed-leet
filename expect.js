class Equal {
  constructor(val) {
    this.val = val;
  }

  toBe(compareValue) {
    if (this.val === compareValue) return true;

    throw new Error("Not Equal");
  }

  notToBe(compareValue) {
    if (this.val !== compareValue) return true;

    throw new Error("Equal");
  }
}

const expect = (val) => {
  return new Equal(val);
};
