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
    return 0
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
      return 1
      }
  while (a > count) {
    a = add(a, -1);
    total = multiply(total, a);
  }
  return total;
}
//Attempt extra-credit!
