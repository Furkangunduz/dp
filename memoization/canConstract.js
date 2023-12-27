function canConstract_unmemoized(target, wordBank) {
  if (target === '') return true;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);

      if (canConstract_unmemoized(suffix, wordBank) === true) {
        return true;
      }
    }
  }
  return false;
}

// console.log(canConstract_unmemoized('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
// console.log(canConstract_unmemoized('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
// console.log(canConstract_unmemoized('eeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee']));

function canConstract_memoized(target, wordBank, memo = {}) {
  if (target in memo) return memo[target];
  if (target === '') return true;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);

      if (canConstract_memoized(suffix, wordBank, memo) === true) {
        memo[target] = true;
        console.log(memo);
        return true;
      }
    }
  }

  memo[target] = false;
  console.log(memo);
  return false;
}

console.log(canConstract_memoized('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(canConstract_memoized('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(canConstract_memoized('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee']));
