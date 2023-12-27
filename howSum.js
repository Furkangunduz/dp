const howsum_unmemoized = (targetNum, numbers) => {
  if (targetNum === 0) return [];
  if (targetNum < 0) return null;

  for (let num of numbers) {
    const remain = targetNum - num;
    const remainResult = howsum_unmemoized(remain, numbers);

    if (remainResult !== null) {
      return [...remainResult, num];
    }
  }
  return [];
};

// console.log(howsum_unmemoized(1, [2]));
// console.log(howsum_unmemoized(2222, [3, 7, 1]));
// console.log(howsum_unmemoized(11, [3, 6, 1]));
// console.log(howsum_unmemoized(300, [7, 14]));

const howsum_memoized = (targetNum, numbers, memo = {}) => {
  if (targetNum in memo) return memo[targetNum];
  if (targetNum === 0) return [];
  if (targetNum < 0) return null;

  for (let num of numbers) {
    const remain = targetNum - num;
    const remainResult = howsum_memoized(remain, numbers, memo);

    if (remainResult !== null) {
      memo[targetNum] = [...remainResult, num];

      return memo[targetNum];
    }
  }

  memo[targetNum] = null;
  return null;
};
