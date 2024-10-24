"use strict";
let r1 = {
    name: 'ruchika',
    age: 22
};
console.log(`name:${r1.name} , age:${r1.age}`);
let r2 = {
    name: 'ritik',
    age: 23
};
console.log(`name:${r2.name} , age:${r2.age} , roll:${r2.rollN}`);
let r3 = {
    title: 'harry_potter',
    author: 'harray',
    amount: 900000
};
// r3.title = 'sam' -->it cannot be change
r3.amount = 2000;
console.log(`name:${r3.title} ,author:${r3.author} , amount:${r3.amount}`);
let r4 = {
    add: (a, b) => a + b,
    sub: (a, b) => a - b
};
let x11 = r4.add(10, 20);
let x12 = r4.sub(40, 10);
console.log(x11);
console.log(x12);
let r5 = {
    name: 'tiger'
};
let r6 = {
    name: 'cutecat',
    breed: 'catie'
};
