var capitals = function (word) {
    return word.split('')
               .map(function(l, i) { if (l.toUpperCase() === l) return i; })
               .filter(function(i) { return i != null })
  };

  let circle = {
      radius:1,
      location:{
          x:1,
          y:1
      },
      draw: function(){
          console.log('draw');
      }
  };

  circle.draw()
