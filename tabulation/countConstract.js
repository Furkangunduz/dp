function countConstract(target, wordBank) {
  const table = Array(target.length + 1).fill(0);
  table[0] = 1;

  for (let i = 0; i <= target.length; i++) {
    for (let word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        table[i + word.length] += table[i];
      }
    }
  }

  return table[target.length];
}

console.log(countConstract('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log(countConstract('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(countConstract('skateboard', ['te', 'bo', 'ard', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
