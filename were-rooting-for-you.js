const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

// const judgeVegetable = (veg, met) => {
//   let winner = '';
//   let highScore = 0;
//   for (i = 0; i < veg.length; i++) {
//     // console.log(veg[i].redness);
//     if (veg[i].redness > highScore) {
//       winner = veg[i].submitter;
//       highScore = veg[i].redness;
//     }
//   }
//   return winner;
// };

const judgeVegetable = (vegetables, metric) => {
  let winner = '';
  let highScore = 0;
  vegetables.forEach(element => {
    if (element[metric] > highScore) {
      winner = element.submitter;
      highScore = element[metric];
    }
  });
  return winner;
};

let a = judgeVegetable(vegetables, metric);

console.log(a);