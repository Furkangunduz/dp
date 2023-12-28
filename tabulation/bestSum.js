function bestSum(taregtNum, numbers) {
  const table = Array(taregtNum + 1).fill(null);

  table[0] = [];

  for (let i = 0; i <= taregtNum; i++) {
    if (table[i] !== null) {
      for (let num of numbers) {
        const combination = [...table[i], num];
        if (!table[i + num] || table[i + num].length > combination.length) {
          table[i + num] = combination;
        }
      }
    }
  }

  return table[taregtNum];
}
console.log(bestSum(7, [2, 3, 4]));
console.log(bestSum(300, [7, 14, 5, 25]));
console.log(bestSum(300, [7, 14, 5, 25, 50]));
console.log(bestSum(300, [7, 14, 5, 25, 50, 100]));
