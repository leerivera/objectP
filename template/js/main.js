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

