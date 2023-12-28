function canSum(targetSum, numbers) {
  const table = Array(targetSum + 1).fill(false);
  table[0] = true;

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] === true) {
      for (let number of numbers) {
        table[i + number] = true;
      }
    }
  }

  return table[targetSum];
}

console.log(canSum(7, [2, 3, 4]));
console.log(canSum(300, [7, 14]));
