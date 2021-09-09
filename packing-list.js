// iterating over an array with `for` -> for loops start from 0

const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];
let i = 0

console.log("Kitchen stuff to pack:");
while (i < packingList.length) {
  console.log(packingList[i]);
  i++;
}

