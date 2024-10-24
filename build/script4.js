"use strict";
//----------------->program 1
//simple function declaration and invocation
function gt(name) {
    console.log('hye', { name });
}
gt('rups');
//----------------->program 2
//function with  type annoatations , parameter and return type 
function add(a, b) {
    return a * b;
}
let x = add(1, 5);
console.log(x);
//------------------->program 3
//arrow func and function expression
let add11 = (a2, a3) => {
    return a2 * a3;
};
let x1 = add11(4, 3);
console.log(x1);
let add12 = function (a22, a33) {
    return a22 * a33;
};
let x2 = add11(4, 3);
console.log(x1);
//--------------------------> program 4
function total(...num) {
    return num.reduce(function (acc, el) {
        return acc + el;
    }, 0);
}
let z = total(1, 2, 3);
console.log(z);
//--------------------------->program 5
//default parameter
function greetUser(name = 'guest') {
    console.log('hey', { name });
}
greetUser('morning');
greetUser();
//---------------------------->program 6
//optional parameter
function showDetails(name, age) {
    if (age) {
        console.log(`${name} ${age}`);
    }
    else {
        console.log(` ${name}  has no age provided`);
    }
}
showDetails("ridhi");
showDetails("ridhi", 19);
