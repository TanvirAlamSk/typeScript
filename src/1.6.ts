// function
function foo() {
  console.log("I start Work on Typestript");
}

foo();

function add(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(add(30, 10));

const rollNumber: number[] = [1, 3, 4, 5];

const rollSquare: number[] = rollNumber.map(
  (roll: number): number => roll * roll
);
console.log(rollSquare);

function mul(...num: number[]) {
  num.forEach((element) => console.log(`${element}`));
}

mul(2, 4, 5);
