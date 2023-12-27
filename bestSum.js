const bestsum_memoized = (targetNum, numbers, memo = {}) => {
  if (targetNum in memo) return memo[targetNum];
  if (targetNum === 0) return [];
  if (targetNum < 0) return null;

  let shortestCombination = null;

  for (let num of numbers) {
    const remain = targetNum - num;
    const remainResult = bestsum_memoized(remain, numbers, memo);
    if (remainResult !== null) {
      const combination = [...remainResult, num];
      if (shortestCombination === null || combination.length < shortestCombination.length) {
        shortestCombination = combination;
      }
    }
  }

  memo[targetNum] = shortestCombination;
  return shortestCombination;
};

console.log(bestsum_memoized(11, [3, 6, 11]));
