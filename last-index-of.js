function lastIndexOf(array, num) {
  let lastIndex = -1;
  array.forEach((item, index) => {
    if (item === num) {
      lastIndex = index;
    }
  })
  return lastIndex
}

// let a = lastIndexOf([0, 1, 4, 1, 2], 1) //	3
// let a = lastIndexOf([0, 1, 4, 1, 2], 2) //	4
// let a = lastIndexOf([0, 1, 4, 1, 2], 3) //	-1
// let a = lastIndexOf([5, 5, 5], 5) //	2
let a = lastIndexOf([], 3) //	-1

console.log(a);