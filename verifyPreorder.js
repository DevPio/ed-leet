const verifyPreorder = function (preorder = []) {
  if (preorder.length === 0) return true;
  let firstElement = preorder[0];

  let less = preorder.filter((n) => n < firstElement);
  let bigger = preorder.filter((n) => n > firstElement);

  console.log(preorder.length);

  let mount = [firstElement].concat(less).concat(bigger);

  for (let index = 0; index < mount.length; index++) {
    const element = mount[index];

    if (element !== preorder[index]) return false;
  }
  return verifyPreorder(less) && verifyPreorder(bigger);
};
