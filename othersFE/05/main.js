//Створіть код, який приймає назву геометричної фігури ("коло", "квадрат", "трикутник") і використовуючи switch оператор, виводить повідомлення про кількість сторін цієї фігури //(наприклад, "Коло має 0 сторін", "Квадрат має 4 сторони").

let figure = prompt("Введіть назву фігури");

switch (figure) {
  case "Коло":
  case "коло":
    alert("Кількість сторін цієї фігури: 0");
    break;
  case "Квадрат":
  case "квадрат":
    alert("Кількість сторін цієї фігури: 4");
    break;
  case "Трикутник":
  case "трикутник":
    alert("Кількість сторін цієї фігури: 3");
    break;
  default:
    alert("Немає інформації щодо фігури");
    break;
}

//Створіть код, який використовує цикл while для знаходження суми всіх парних чисел в заданому діапазоні (наприклад, від 1 до 20).
let num = 0;
let sum = 0;

while (num < 21) {
  if (num % 2 === 0) {
    sum = sum + num;
  }
  num++;
}
alert(`suma = ${sum}`);

//Використовуючи цикл for, напишіть програму, яка генерує "таблицю множення" виводимо в console.log операції  для конкретного числа (наприклад, для числа 5).
let numb = 5;
let mnoz = 0;
for (let i = 1; i <= 10; i++) {
  mnoz = numb * i;
  document.write(`<p>${numb} * ${i} = ${mnoz}<p/>`);
}

//Використовуючи цикл for, напишіть програму, яка виводить числа від 10 до 1 в зворотньому порядку.

for (let i = 10; i >= 0; i--) {
  console.log(i);
}

//Напишіть програму, яка приймає число і використовуючи if та for, виводить повідомлення про те, чи є число парним чи непарним.

let number = 22;

for (let i = 0; i <= number; i++) {
  if (number % 2 === 0) {
    console.log(`${number} є парний`);
  } else {
    console.log(`${number} є непарний`);
  }
}

//Напишіть програму, яка використовує цикл for для перебору чисел від 1 до 10 і виводить перше знайдене парне число. Використайте оператор break, щоб припинити виконання циклу, якщо парне число знайдено.

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`${i} є парним числом`);
    break;
  }
}

//Створіть програму, яка використовує цикл for для перебору чисел від 1 до 10 і виводить тільки парні числа. Використайте оператор continue, щоб пропустити ітерації для непарних чисел.
for (let i = 1; i <= 10; i++) {
    if(i % 2 === 0)[
        console.log(`${i}`)
    ]
    continue

}
