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
