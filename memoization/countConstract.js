function countConstract_memoized(target, wordBank, memo = {}) {
  if (target in memo) return memo[target];
  if (target === '') return 1;

  let totalCount = 0;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);

      totalCount += countConstract_memoized(suffix, wordBank, memo);
    }
  }

  memo[target] = totalCount;
  return totalCount;
}

console.log(countConstract_memoized('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(countConstract_memoized('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(
  countConstract_memoized('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])
);
