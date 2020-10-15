let add = (a, b) => a + b;
function multiply(a, b) {
  let count = 0;
  let total = 0;
  while (b > count) {
    count = add(count, 1);
    total = add(a, total);
  }
  return total;
}
function power(a, b) {
  let count = 0;
  let total = 1;
  if (a === 0) {
    return 0;
  }
  while (b > count) {
    count = add(count, 1);
    total = multiply(a, total);
  }
  return total;
}
function factorial(a) {
  let total = a;
  if (a === 0 || a === 1) {
    return 1;
  }
  while (a > 1) {
    a = add(a, -1);
    total = multiply(total, a);
  }
  return total;
}
//Attempt extra-credit! https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e
// found on Medium.com
// function fibonacci(num) {
//   let a = 1,
//     b = 0,
//     temp;
//   while (num >= 0) {
//     temp = a;
//     a = add(a, b);
//     b = temp;
//     num = add(num, -1);
//   }
//   return b;
// }
function fibonacci(n) {
  let n1 = 0;
  let n2 = 1;
  let n3;
  if (n === 0 || n === 1) {
    return n;
  } else {
    while (n > 0) {
      n3 = n1;
      n1 = add(n1, n2);
      n2 = n3;
      n = add(n, -1);
    }
  }
  return n3;
}
