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
