// gridtraveler unmemoized
function gridtraveler_unmemoized(m, n) {
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;

  return gridtraveler_unmemoized(m - 1, n) + gridtraveler_unmemoized(m, n - 1);
}

// gridtraveler memoized
function gridtraveler_memoized(m, n, memo = {}) {
  const key = m + '-' + n;
  const keyReverse = n + '-' + m;

  if (key in memo) return memo[key];
  if (keyReverse in memo) return memo[keyReverse];

  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;

  memo[key] = gridtraveler_memoized(m - 1, n, memo) + gridtraveler_memoized(m, n - 1, memo);

  return memo[key];
}

console.log(gridtraveler_memoized(1, 1));
console.log(gridtraveler_memoized(2, 3));
console.log(gridtraveler_memoized(3, 2));
console.log(gridtraveler_memoized(18, 18));
