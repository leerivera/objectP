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