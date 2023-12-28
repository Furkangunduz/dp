function allConstract(target, wordBank) {
  const table = Array(target.length + 1)
    .fill()
    .map(() => []);

  table[0] = [[]];

  for (let i = 0; i <= target.length; i++) {
    for (let word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        const newCombination = table[i].map((subArray) => {
          return [...subArray, word];
        });
        table[i + word.length].push(...newCombination);
      }
    }
  }
  return table[target.length];
}

console.log(allConstract('abcdef', ['ab', 'c', 'd', 'ef', 'abc', 'cd', 'def', 'abcd']));
console.log(allConstract('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(allConstract('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee']));
