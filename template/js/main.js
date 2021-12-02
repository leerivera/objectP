let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name

function isEmpty(object){
    for (let key in object){
    return false;
    }
}

let salaries = {
    john: 100,
    ann: 160,
    pete: 140
}

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}

alert(sum);

function multiplyNumeric(object){
    for( let key in object){
        if(typeof object[key] == 'number'){
            object[key] *2;
        } 
    }
}

function filter_list(l) {
    // Return a new array with the strings filtered out
  return l.filter( str => typeof str != 'string');
  }



function removeSmallest(numbers) {

  numbers = [17, 34, 678]
  let indexOfMin = numbers.indexOf(Math.min(...numbers));

  return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}

// removeSmallest()

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
// const calculateVolume = (cuboid = [1, 1, 1]) =>
//   cuboid.reduce((total, value) => total * value, 1)

// const findDifference = (a, b) =>
//   Math.abs(calculateVolume(a) - calculateVolume(b))

// Function Export
module.exports = findDifference

function find_difference(a, b) {
  return Math.abs(a.reduce((previous, current) => previous * current) - b.reduce((previous, current) => previous * current));
}

// This kata is about multiplying a given number by eight if it 
// is an even number and by nine otherwise.
function simpleMultiplication(n){
  return n % 2 ? n * 9 : n * 8;
}

// is even determine if a number is even

function isEven(n){
  return n % 2 == 0
}

// Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

// This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

// This function should return a number (final grade). There are four types of final grades:

// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases

const finalGrade = (exam, projects) => {
  if (exam > 90 || projects > 10) return 100
  if (exam > 75 && projects >= 5) return 90
  if (exam > 50 && projects >= 2) return 75

  return 0
}


module.exports = finalGrade

function finalGrade (exam, projects) {
  if(exam > 90 || projects > 10) return 100;
  if(exam > 75 & projects >= 5) return 90;
  if(exam > 50 & projects >= 2) return 75;
  return 0;
}

console.log("check")

// remove first and last characters of String. using slice on this one
// -1 removes last character
function removeChar(str){
  return str.slice(1, str.length -1);
};

// quarter of the year

// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

const quarterOf = m => Math.ceil(m/3);


const quarterOf = (month) => {
  if (month <= 3) {
    return 1
  } else if (month <= 6) {
    return 2
  } else if (month <= 9) {
    return 3
  } else if (month <= 12) {
    return 4
  }
  
}

const quarterOf = (month) => {
  return month < 4 ? 1 : month < 7 ? 2 : month < 10 ? 3 : 4;
  
}

// calculate avg of an array

let find_average = (array) => array.length > 0 ? array.reduce((acc,c)=> acc + c, 0)/array.length : 0

function find_average(array) {
  if (array.length === 0) {
  return 0;
  }
  var result = 0;
  for (i=0; i<array.length; i++) {
    result +=array[i];
  }
  return result/array.length;
}

// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.



function feast(beast, dish) {
  //your function here
  return beast[0] === dish[0] && beast[beast.length-1] === dish[dish.length-1]
  }
let arr = [1,2,3,4,5,6,7,8,9]
let isEven = (num) =>{
return new Promise((resolve,reject)=>{
  if(num%2===0){resolve(true)}
  else{reject(false)}
})
}
let consolePromiseResult = (num,data)=>{
console.log(num,data)
}

let isEvenArr = (arr,callBack1,callBack2)=>{
for(let i = 0; i < arr.length;i++){
  callBack2(arr[i]).then(data=>callBack1(arr[i],data)).catch(err=>callBack1(arr[i],err))
}
}
isEvenArr(arr,consolePromiseResult,isEven)

function feast(beast, dish) {
  return beast[0]===dish[0] && beast.slice(-1)===dish.slice(-1);
}

function feast(beast, dish) {
  return dish.startsWith(beast[0]) && dish.endsWith(beast[beast.length-1])
}

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  // code goes here
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals
}


function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  // code goes here
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals
}


// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

let sumArray = (array) => array == null || array.length < 3   ? 0 : array.sort((a,b)=> a-b )
.filter((x,i) => i > 0 && i < array.length-1 )
.reduce((acc,c)=> acc+c,0 ) 

function sumArray(array) {
  if (array == null) {
    return 0;
  } else if (array.length < 2) {
    return 0;
  } else {
    array = array.sort(function(a,b) {return a - b;});
    var total = 0;
    for (var i = 1; i < array.length - 1; i++) {
      total += array[i];
    }
    return total;
  }
}

sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0

function sumArray(array) {
  return Array.isArray(array) && array.length > 1
    ? array.reduce((s, n) => s + n, 0) - Math.min(...array) - Math.max(...array)
    : 0
}

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

let removeExclamationMarks = (s) => s.split('').filter(x=> x != '!' ).join('')

function removeExclamationMarks(s) {
  return s.split('!').join('');
}



// 8kyu sort and star 
// You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.


twoSort = (s) => s.sort()[0].split('').join('***')

function twoSort(array) {
  return [...array.reduce((min, str) => min < str ? min : str)].join("***");
}

function twoSort(array) {
  return [...array.reduce((min, str) => min < str ? min : str)].join("***");
}


// 8kyu lost without a map double the value of each el in an array

function maps(x){
  return x.map(el => el *2)
}

function maps(x){
  //return x.map(el => el * 2);
  let arr = [];
  for(let i = 0; i < x.length; i++){
  arr.push(x[i] * 2);
  }
  return arr;
  }

  // Your task is to create functionisDivideBy (or is_divide_by) to check if an integer number is divisible by each out of two arguments.
  let isDivideBy = (number, a, b) => {
    if (number % a === 0 && number % b === 0) {
      return true
    } else {
      return false
    }
  }

  const isDivideBy = (number, a, b) => number % a === 0 && number % b === 0;

  // return negative 8kyu

//   In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Example:

// makeNegative(1); // return -1 makeNegative(-5); // return -5 makeNegative(0); // return 0

function makeNegative(num) {
  return (num > 0) ? parseInt(`-${num}`,10) : num

}

function makeNegative(num) {
  return -Math.abs(num);
}

// fake binary

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string

function fakeBin(x) {
  return x.replace(/\d/g, d => d < 5 ? 0 : 1);
}

function fakeBin(x){
  return x.split('').map((num) => num > 4 ? 1 : 0).join('');
}
