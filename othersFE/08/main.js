for (let i = 0; i < 5; i++) {
  console.log(i);
}
let message = "test";

function example() {
  if (true) {
    let message = "Hello, world!";

    console.log(message);
  }
}
example();
console.log(message);

const person = {
  name: "John",

  age: 25,

  occupation: "Developer",
};

for (let key in person) {
  console.log(person[key]);
}

//  Використовуючи for of  та for in  виведіть занчення з об'єктів які знаходяться в масиві
const students = [
  { name: "Alice", age: 20, grade: "A" },

  { name: "Bob", age: 22, grade: "B" },

  { name: "Charlie", age: 21, grade: "C" },
];
for (let student of students) 

  for (let key in student) {
    console.log(`${key}: ${student[key]}`);
  }
  console.log("---"); 

