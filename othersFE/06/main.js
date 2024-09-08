//Створіть функції для кожної математичної операції (функція суми створена на уроці). Використовуючи switch напишіть програму яка отримує знак математичної операції (+, -, /, *) та 2 значення і запускає функцію для цієї математичної операції з 2 цифровими значеннями

function sumTwoNumbers(a, b) {
  return a + b;
}
function subtractTwoNumbers(a, b) {
  return a - b;
}

function miltiplyTwoNumbers(a, b) {
  return a * b;
}

function divideTwoNumbers(a, b) {
  if (b === 0) {
    return "Error 404";
  }
  return a / b;
}
console.log(
  sumTwoNumbers(2, 3),
  subtractTwoNumbers(2, 3),
  miltiplyTwoNumbers(3, 4),
  divideTwoNumbers(2, 3)
);

function switchNumbers(operation, a, b) {
  switch (operation) {
    case "+":
      sumTwoNumbers(a, b);
      return a + b;
    case "-":
      subtractTwoNumbers(a, b);
      return a - b;
    case "*":
      miltiplyTwoNumbers(a, b);
      return a * b;
    case "/":
      divideTwoNumbers(a, b);
      return a / b;

    default:
      return "Unkown operation";
  }
}

let a = parseFloat(prompt("number A"));
let b = parseFloat(prompt("number B"));
let operation = prompt("operation");

document.write(
  `result this operation: ${a} ${operation} ${b} = ${switchNumbers(
    operation,
    a,
    b
  )}`
);

//Створіть функцію wellcomUser, яка приймає масив і функцію-колбек hiUser яка виводить в console ('Вітаю ${user}'), і викликає цю функцію для кожного елемента масиву.
// Функція-колбек для виведення привітання
function hiUser(user) {
  console.log(`Вітаю ${user}`);
}

// Функція, яка приймає масив і колбек, і викликає колбек для кожного елемента масиву
function wellcomUser(usersArray, callback) {
  usersArray.forEach((user) => {
    callback(user); // Викликаємо функцію-колбек для кожного користувача
  });
}

// Приклад масиву користувачів
const userss = ["Іван", "Олена", "Микола"];

// Виклик функції wellcomUser
wellcomUser(userss, hiUser);


// Стрілочна функція-колбек для виведення привітання
const hiUser = (user) => {
  console.log(`Вітаю ${user}`);
};

// Стрілочна функція, яка приймає масив і колбек, і викликає колбек для кожного елемента масиву
const wellcomUser = (usersArray, callback) => {
  usersArray.forEach(user => callback(user)); // Викликаємо функцію-колбек для кожного користувача
};

// Приклад масиву користувачів
const users = ['Іван', 'Олена', 'Микола'];

// Виклик функції wellcomUser
wellcomUser(users, hiUser);
