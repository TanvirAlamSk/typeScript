// String
let course: String = "I start next level Course";

//Number
let roll: number = 785;

// boolean
let isMarried: boolean = false;

// Array
let student: number[] = [12, 42, 354, 644];
for (let i of student) {
  console.log(i);
}
let teacher: string[] = ["monika", "ranu", "prokash"];
for (let i of teacher) {
  console.log(i);
}

// tuple
let voter: [string, number] = ["Ali", 37];
voter[0] = "raja";

// Object
const details: {
  name: string;
  roll: number;
  isMarried: boolean;
  address?: string; //optional
  instution: "Dhanmondi Govt. High School"; //literal
  readonly email: string;
} = {
  name: "Boni",
  roll: 200,
  isMarried: false,
  instution: "Dhanmondi Govt. High School",
  email: "asdfg.@com",
};


