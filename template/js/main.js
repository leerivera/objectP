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