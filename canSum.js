const cansum_unmemoized = (targetNum, numbers) => {
  if (targetNum === 0) return true;
  if (targetNum < 0) return false;

  for (let num of numbers) {
    const remain = targetNum - num;
    if (cansum_unmemoized(remain, numbers) === true) {
      return true;
    }
  }

  return false;
};

const cansum_memoized = (targetNum, numbers, memo = {}) => {
  if (targetNum in memo) return memo[targetNum];
  if (targetNum === 0) return true;
  if (targetNum < 0) return false;

  for (let num of numbers) {
    const remain = targetNum - num;
    if (cansum_memoized(remain, numbers, memo) === true) {
      memo[targetNum] = true;
      return true;
    }
  }
  memo[targetNum] = false;
  return false;
};

// console.log(cansum_unmemoized(7, [3, 3, 3]));
// console.log(cansum_unmemoized(23, [3, 3, 3]));
// console.log(cansum_unmemoized(555, [3, 3, 3]));
// console.log(cansum_unmemoized(1000, [3, 3, 3]));

console.log(cansum_memoized(7, [3, 4, 1]));
console.log(cansum_memoized(2222, [3, 7, 1]));
console.log(cansum_memoized(11, [3, 6, 1]));
console.log(cansum_memoized(5555, [3, 4, 1]));
