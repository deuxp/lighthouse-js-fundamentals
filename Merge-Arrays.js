
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

  let answer = [];
  let lowest = Infinity;
  let lowestIndex = 0;
  let mainList = a.concat(b);
  let testCounter = 0

  while (mainList.length >= 1) {

    for (let i = 0; i < mainList.length; i++) {
      const num = mainList[i];

      if (num <= lowest) {
        lowest = num;
        lowestIndex = i;
      }
    }

    answer.push(mainList.splice(lowestIndex, lowestIndex + 1))
    lowest = Infinity
    testCounter += 1
    console.log(testCounter);
  }
  return answer
}

// NEEDS A DEBUGGING, BADLY !!!

console.log(merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6]);
