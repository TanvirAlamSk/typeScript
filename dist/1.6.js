"use strict";
// function
function foo() {
    console.log("I start Work on Typestript");
}
foo();
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(30, 10));
const rollNumber = [1, 3, 4, 5];
const rollSquare = rollNumber.map((roll) => roll * roll);
console.log(rollSquare);
