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
  while (b > count) {
    count = add(count, 1);
    total = multiply(a, total);
  }
  return total;
}
function factorial(a) {
  //5! = 5 * 4 * 3 * 2 * 1 = 120
  let count = 0;
  let newNum = a;
  let oldNum = a;
  let total = a;
  while (a > count) {
    count = add(count, 1);
    newNum = add(newNum, -1);
    total = power(oldNum, newNum);
    oldNum = add(oldNum, -1);
  }
  // currently getting 1 after 5! maybe needs an IF statement
  return total;
}
