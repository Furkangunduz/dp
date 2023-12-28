function howSum(taregtNum, numbers) {
  const table = Array(taregtNum + 1).fill(null);

  table[0] = [];

  for (let i = 0; i <= taregtNum; i++) {
    if (table[i] !== null) {
      for (let num of numbers) {
        table[num + i] = [...table[i], num];
      }
    }
  }

  return table[taregtNum];
}
console.log(howSum(7, [2, 3, 4]));
console.log(howSum(300, [7, 14, 5]));
