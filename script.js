let add = (a, b) => a + b;
function multiply(a, b) {
  let count = 0;
  let total = 0;
  while (b > count) {
    count++;
    total = add(a, total);
  }
  return total;
}
// function power() {}
