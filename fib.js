// fib unmemoized
function fib_unmemoized(n) {
  if (n < 2) return n;
  return fib_unmemoized(n - 1) + fib_unmemoized(n - 2);
}

// fib memoized
function fib_memoized(n, memo = {}) {
  if (n in memo) return memo?.[n];
  if (n <= 2) return 1;

  memo[n] = fib_memoized(n - 1, memo) + fib_memoized(n - 2, memo);
  return memo[n];
}

console.log('fib_memoized');
console.log(fib_memoized(6));
console.log(fib_memoized(7));
console.log(fib_memoized(8));
console.log(fib_memoized(1000));
