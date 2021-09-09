function range(start, end, step) {
  let nums = []
  if ((start || start === 0) && end && step && start < end && step > 0) {
    for (let i = start; i <= end; i += step) {
      nums.push(i);
    }
  }
  return nums;
}



// console.log(range(0, 10, 2));
// console.log(range(10, 30, 5));
// console.log(range(-5, 2, 3));
console.log(range(-9, 3, 3));