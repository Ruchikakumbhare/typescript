"use strict";
//----------- function declartion
function sub(x, y) {
    return x - y;
}
let a = sub(10, 5);
console.log(a);
//----------- function experession
let sub1 = function (x, y) {
    return x - y;
};
let a1 = sub1(10, 5);
console.log(a1);
//------------arrow function
let sub2 = (x, y) => {
    return x - y;
};
let a2 = sub1(10, 5);
console.log(a2);
let anju = {
    name: 'ruchi',
    rollNo: 21
};
let t1 = {
    name: 'sunita',
    age: 22
};
let t2 = {
    name: 'sunita',
    age: 12,
    number: '123'
};
let s1 = {
    name: 'ravan',
    age: 45
};
let cal = {
    add: (a, b) => a + b,
    sub: (a, b) => a - b
};
cal.add(10, 21);
cal.sub(15, 2);
let greete = (name) => "Hello"; // arrow function
let gr = function (name) {
    return "hello";
};
gr("bye");
