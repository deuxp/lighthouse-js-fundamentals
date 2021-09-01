// const years = 5;
// const years = 17;
const years = 39;
// const years = 0;
// const years = -25;
// first the ternary operator tests for ELementary School age;
// age>13 activates a nested ternary that tests for High school age
// else Lighthouse Labs is the output. 
const whichSchool = age => {
  return age < 13 ? 'Elementary School' : (age <= 18 ? 'Secondary School' : 'Lighthouse Labs')
}

console.log(whichSchool(years));