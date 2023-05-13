const sum = (items = []) => {
  return items.reduce((acc, number) => acc + number, 0);
};

const maximumWealth = (accounts = []) => {
  let max = null;
  for (let index = 0; index < accounts.length; index++) {
    const items = accounts[index];

    max = Math.max(max, sum(items));
  }

  return max;
};

[];
