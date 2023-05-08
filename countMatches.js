const countMatches = (items = [[]], ruleKey, ruleValue) => {
  const rules = {
    type: 0,
    color: 1,
    name: 2,
  };

  let countMatch = 0;
  for (let index = 0; index < items.length; index++) {
    if (items[index][rules[ruleKey]] === ruleValue) countMatch++;
  }

  return countMatch;
};
