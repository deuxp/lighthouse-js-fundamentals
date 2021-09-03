const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

let chooseStations = function (stations) {
  let goodStations = [];
  for (let location of stations) {
    if (location[1] >= 20 && (location[2] === 'school' || location[2] === 'community centre')) {
      goodStations.push(location[0]);
    }
  }
  return goodStations;
}

console.log(chooseStations(stations));
