function allConstract_memoized(target, wordBank, memo = {}) {
  if (target in memo) return memo[target];
  if (target === '') return [[]];

  const result = [];

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstract_memoized(suffix, wordBank, memo);
      const targetWays = suffixWays.map((way) => [word, ...way]);

      memo[target] = [...targetWays];
      result.push(...targetWays);
    }
  }

  return result;
}

console.log(allConstract_memoized('abcdef', ['ab', 'c', 'd', 'ef', 'abc', 'cd', 'def', 'abcd']));
console.log(allConstract_memoized('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(allConstract_memoized('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee']));
