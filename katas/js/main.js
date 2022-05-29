// var capitals = function (word) {
//     return word.split('')
//                .map(function(l, i) { if (l.toUpperCase() === l) return i; })
//                .filter(function(i) { return i != null })
//   };

//   let circle = {
//       radius:1,
//       location:{
//           x:1,
//           y:1
//       },
//       draw: function(){
//           console.log('draw');
//       }
//   };

//   circle.draw()

function Stopwatch(){
    let startTime =0;
    let endTime =0;
    let running =0;
    let duration = 0;

    this.start = function() {
        if(running)
           throw new Error("You already pressed this button, press another");
           running = true;
           startTime = new Date();
    };

    this.stop = function() {
        if(!running){
            throw new Error('Stop watch is off bruh')
        } 
        running = false;
        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime())/ 1000;
        duration += seconds;

    };

    this.reset = function() {
        startTime = null;
        endTime = null;
        running = null;
        duration = 0;
    }

}



function newFilter(){
    let arr = ["bear", "cat"]
    let bear = ["bear"]
     newArr= arr.filter(b => !bear.includes(b))
    console.log(newArr)
}

newFilter()
// nath min and max

const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

// another solution using module exports

const min = list => Math.min(...list)

const max = list => Math.max(...list)

// Function Export
module.exports = { min, max }

// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

const areaOrPerimeter = function(l , w) {
    // Return your answer
    return l == w ? w * l : l * 2 + w * 2
  };

//   Complete the square sum function
//    so that it squares each number passed into it and then sums the results together.

function squareSum(numbers) {
    let sum = 0
    for( let i = 0; i < numbers.length; i++) {
        sum += numbers[i] **2
    }
    return sum
}


// Hide Kata Description
// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".

function hoopCount (n) {
    return (n < 10) ? 'Keep at it until you get it' : 'Great, now move on to tricks';
  }

  function hoopCount (n) {
    const HOPS_LIMIT = 10
    return n >= HOPS_LIMIT
      ? 'Great, now move on to tricks'
      : 'Keep at it until you get it';
 }

//  This function should test if the factor is a factor of base.

//  Return true if it is a factor or false if it is not.
 
//  About factors
//  Factors are numbers you can multiply together to get another number.
 
//  2 and 3 are factors of 6 because: 2 * 3 = 6
 
//  You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
//  You can use the mod operator (%) in most languages to check for a remainder
//  For example 2 is not a factor of 7 because: 7 % 2 = 1
 
//  Note: base is a non-negative number, factor is a positive number.


 function checkForFactor (base, factor) {
    return base % factor === 0;
  }



//   Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained

const expressionMatter = (a, b, c) => Math.max(a + b + c, a * b * c, (a + b) * c, a * (b + c))

// Export
module.exports = expressionMatter

function expressionMatter(a, b, c) {
    let arr = [];
    arr.push(a + b + c);
    arr.push(a * b * c);
    arr.push(a + b * c);
    arr.push(a * b + c);
    arr.push((a + b) * c);
    arr.push(a * (b + c));
    return arr.reduce((a,b) => Math.max(a, b));
  }



//   Your task is to create a function that does four basic mathematical operations.

//   The function should take three arguments - operation(string/char), value1(number), value2(number).
//   The function should return result of numbers after applying the chosen operation.



function basicOp(operation, value1, value2)
{
  return eval(value1 + operation + value2);
}




  function basicOp(operation, value1, value2)
{
  
  switch (operation) {
    case "+":
      result = value1 + value2;
      break;
    case "-":
      result = value1 - value2;
      break;
    case "*":
      result = value1 * value2;
      break;
    case "/":
      result = value1 / value2;
      break;
    default:
      return null;
  }
  return result;
}

//convert number to string sum it and return it back as a string

function sumStr(a,b){
    return String(Number(a) +Number(b));
}

// 8kyu parse int from char problem

// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a numb
let getAge=(inputString)=>Number(inputString.split("")[0] )
function getAge(inputString){
  return parseInt(inputString);
}

function getAge(inputString){
  switch(inputString){
    case "1 years old":
      return 1;
    case "2 years old":
      return 2;
    case "3 years old":
      return 3;
    case "4 years old":
      return 4;
    case "5 years old":
      return 5;
    case "6 years old":
      return 6;
    case "7 years old":
      return 7;
    case "8 years old":
      return 8;
    case "9 years old":
      return 9;
    default:
      return 1;
  }
}

//8kyu l1 set alarm

const setAlarm = (employed, vacation) => employed && !vacation;

function setAlarm(employed, vacation){
  return (employed && !vacation) ? true : false;
}

function setAlarm(employed, vacation){
  return employed > vacation
}

//8ku check for palindrone

let isPalindrome=(x)=> x.toLowerCase().split('').reverse().join('') == x.toLowerCase() ? true : false 

function isPalindrome(x) {
  x = x.toLowerCase()
  let a = 0
  let b = x.length
  while (a < b) {
    if (x[a] != x[b-1])
      return false
    a++
    b--
  }
  return true
}

function isPalindrome(line) {
  line = line.toString().toLowerCase();

  for (var left = 0, right = line.length - 1; left < right;) {
    if (line.charAt(left++) !== line.charAt(right--)) {
      return false;
    }
  }

  return true;
}

//8kyu reversed string

function solution(str){
  str.split('').reverse('').join('')
}

function solution(s){
  var o = '';
  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  return o;
}

// 8kyu double char
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
let doubleChar =(str) => str.split('').map(x=> x+x).join('')

function doubleChar(str) {
  var word = '';
  for (var i = 0; i < str.length; i++){
    word = word + str[i] + str[i];
  };
  return word;
};

function doubleChar(str) {
  return str.split("").map(function (c) {
    return c + c;
  }).join("");
}

// 8kyu invert values
//Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
function invert(array) {
  return array.map( x => x === 0 ? x : -x);
}

function invert(array) {
  return array.map(i => 0 - i);
}

function invert(array) {
  var newArr = [];
  for(var i = 0; i < array.length; i++){
    newArr.push(-array[i]);
  }
   return newArr;
}

// 8kyu if you cant sleep count sheep
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.