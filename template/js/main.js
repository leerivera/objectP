// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name

// function isEmpty(object){
//     for (let key in object){
//     return false;
//     }
// }

// let salaries = {
//     john: 100,
//     ann: 160,
//     pete: 140
// }

// let sum = 0;
// for (let key in salaries) {
//     sum += salaries[key];
// }

// alert(sum);

// function multiplyNumeric(object){
//     for( let key in object){
//         if(typeof object[key] == 'number'){
//             object[key] *2;
//         } 
//     }
// }

// function filter_list(l) {
//     // Return a new array with the strings filtered out
//   return l.filter( str => typeof str != 'string');
//   }



function removeSmallest(numbers) {

  numbers = [17, 34, 678]
  let indexOfMin = numbers.indexOf(Math.min(...numbers));

  return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}

removeSmallest()

// Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.

// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.

// Note to Tax: not the invested principal is taxed, but only the year's accrued interest

// Example:

//   Let P be the Principal = 1000.00      
//   Let I be the Interest Rate = 0.05      
//   Let T be the Tax Rate = 0.18      
//   Let D be the Desired Sum = 1100.00


// After 1st Year -->
//   P = 1041.00
// After 2nd Year -->
//   P = 1083.86
// After 3rd Year -->
//   P = 1128.30

function calculateYears(principal, interest, tax, desired) {
  let years = 0;
  while (principal < desired) {
    principal += principal * interest * (1 - tax);
    years++;
  }
  return years;
}


// The first century spans from the year 1 up to and including the year 100, the second century 
// - from the year 101 up to and including the year 200, etc.


function century(year) {
  // Finish this :)
  return Math.ceil(year / 100)
}

function yum() {
  console.log("yum")
}

function getCount(input) {
  var vowelsCount = 0;
  var inputLetters = input.split("");

  const vowels = ["a", "e", "i", "o", "u"];

  vowels.forEach(function (vowel) {
    inputLetters.forEach(function (inpLetter) {
      if (inpLetter === vowel) {
        vowelsCount++;
      }
    });
  });

  return vowelsCount;
}
// thinkful logic drills traffic light kata
const updateLight = current => {
  return {
    red: 'green',
    yellow: 'red',
    green: 'yellow'
  }[current];
}

function updateLight(current) {
  switch (current) {
    case 'green':
      return 'yellow';
    case 'yellow':
      return 'red';
    default:
      return 'green';
  }
}





//   Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your

// Long Solution

var birds = [ 
  'Mallard',
  'Hook Bill',
  'African',
  'Crested',
  'Pilgrim',
  'Toulouse',
  'Blue Swedish' ]
const gooseFilter = (birds) => {
  const geese = new Set(['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher'])

  return birds.filter((bird) => !geese.has(bird))
}

// Function Export
module.exports = gooseFilter

function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(b => !geese.includes(b));
};

function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter( bird => geese.indexOf(bird) < 0 );
};


// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

// If you can, try writing it in one line of code.
const calculateVolume = (cuboid = [1, 1, 1]) =>
  cuboid.reduce((total, value) => total * value, 1)

const findDifference = (a, b) =>
  Math.abs(calculateVolume(a) - calculateVolume(b))

// Function Export
module.exports = findDifference

function find_difference(a, b) {
  return Math.abs(a.reduce((previous, current) => previous * current) - b.reduce((previous, current) => previous * current));
}