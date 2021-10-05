
/* 
const merge = (a, b, m) => {

  a = a.concat(b);

  // base
  if ((a.length) < 2) {
    return a.concat(m.concat(b));


  } else {

    // recursion
    let low = [];
    let high = [];
    let mid = a.splice(0, 1);

    for (let i = 0; i < a.length; i++) {
      let num = a[i];

      if (mid > num) {
        low.push(a.splice(i, i + 1))
      } else {
        high.push(a.splice(i, i + 1));
      }

    }
    return merge(low, high, mid)
  }
}


 */


// console.log(merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6]);

//   // Partitions
//   let pivot = m;
//   let lesser = [];
//   let greater = [];

//   if (a.length < 1 && b.length < 1) {

//     return a.concat(m).concat(b);


//   } else {


//     for (let i = 0; i < c.length; i++) {
//       let num = c[i];
//       if (num >= pivot[0]) {
//         greater.push(num)
//       } else if (num <= pivot[0]) {
//         lesser.push(num)
//       }
//     }
//     return merge(lesser).concat(pivot.concat(merge(greater)));
//   }
// }



// does not work right





// const merge = (a, b = []) => {

//   let c = a.concat(b);
//   // Partitions
//   let pivot = c.splice(0, 1);
//   let lesser = [];
//   let greater = [];

//   if (c.length < 2) {
//     return c;
//   } else {
//     c.forEach(num => {
//       num > pivot[0] ? greater.push(num) : lesser.push(num)
//     });
//   }
//   return merge(lesser) + pivot + merge(greater);
// }



const merge = (a, b) => {

  let sortedMergeList = [];
  let mergedList = a.concat(b);

  while (mergedList.length >= 1) {
    let lowest = Infinity                      // init starting point of comparison for lowest number
    let lowestIndex = 0;

    for (let i = 0; i < mergedList.length; i++) {
      const num = mergedList[i];

      if (num <= lowest) {
        lowest = num;
        lowestIndex = i;
      }
    }
    let popNpush = mergedList.splice(lowestIndex, 1)
    sortedMergeList.push(popNpush[0])
  }
  return sortedMergeList
}


console.log(merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6]);
console.log(merge([4], [2, 5, 8]), "=?", [2, 4, 5, 8]);
console.log(merge([1, 2, 6], []), "=?", [1, 2, 6]);