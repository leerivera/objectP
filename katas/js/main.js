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

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

