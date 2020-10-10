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
// function multiply(a, b) {
//   let count = 0;
//   let runningTotal = 0;
//   let total = 0;
//   while (b > count) {
//     count++;
//     runnningTotal = add(a, 0);
//     total += runningTotal;
//   }
//   return total;
// }
// console.log("Multiply Function: ", multiply(4, 3));
// function power() {}
