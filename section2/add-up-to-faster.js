function addUpTo(n) {
  return n * (n + 1) / 2;
}
console.log(addUpTo(30000))
// var time1 = performance.now();
// addUpTo(1000000000);
// var time2 = performance.now();
// console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)