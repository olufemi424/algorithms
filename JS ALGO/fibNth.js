// const fib = n => {
//   if (n === 0) return 0;
//   if (n === 1) return 1;
//   return fib(n - 1) + fib(n - 2);
// };

// console.log(fib(4))

const fib = n => {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a, b, result;
  const arr = [1];

  a = 0;
  b = 1;
  result = b;

  for (let i = 1; i < n; i++) {
    result = a + b;
    a = b;
    b = result;
    arr.push(b);
  }

  return arr;
};

console.log(fib(4));
