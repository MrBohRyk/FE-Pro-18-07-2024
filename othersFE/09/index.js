//Створіть клас Person з властивостями name та age. Створіть об'єкт з цього класу з ім'ям "John" та віком 30.

class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }
  getAllInfo() {
    console.log(`Name: ${this._name} <br/> Age: ${this._age}`);
  }

  sayHello() {
    console.log(`Hello, dear ${this._name}`);
  }
}

let newPerson = new Person("John", 30);

newPerson.getAllInfo();
newPerson.sayHello();

class Student extends Person {
  constructor(name, age, studentid) {
    super(name, age);
    this._studentid = studentid;
  }
  study() {
    console.log(
      `Student: ${this._name} are studying. His Stident ID: ${this._studentid}`
    );
  }
}

let student = new Student("Mykola", 22, 12345);

student.sayHello();
student.getAllInfo();
student.study();
