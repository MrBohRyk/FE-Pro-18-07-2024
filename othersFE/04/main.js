//Запитайте у користувача ввести три числа (ввести через prompt)

//Виведіть у консоль повідомлення про те, яке з введених чисел є найбільшим.

// let giveANumber1 = parseFloat(prompt("Введіфть число"))
// let giveANumber2 = parseFloat(prompt("Введіфть число"))
// let giveANumber3 = parseFloat(prompt("Введіфть число"))

// if(giveANumber1 >= giveANumber2 && giveANumber1 >= giveANumber3){
//     alert(`Це число є найбільшим ${giveANumber1}`)
// }
// else if(giveANumber2 >= giveANumber1 && giveANumber2 >= giveANumber3){
//     alert(`Це число є найбільшим ${giveANumber2}`)
// }
// else{
//     alert(`Це число є найбільшим ${giveANumber3}`)
// }

//Запитайте у користувача ввести номер місяця (від 1 до 12).

//Виведіть у консоль повідомлення про те, якому сезону належить введений місяць.

// let giveAMonth = parseFloat(prompt("Введіть число від 1 до 12"));
// if (giveAMonth == 12 || giveAMonth == 1 || giveAMonth == 2) {
//   alert(`Пора року числа ${giveAMonth} зима`);
// } else if (giveAMonth == 3 || giveAMonth == 4 || giveAMonth == 5) {
//   alert(`Пора року числа ${giveAMonth} весна`);
// } else if (giveAMonth == 6 || giveAMonth == 7 || giveAMonth == 8) {
//   alert(`Пора року числа ${giveAMonth} літо`);
// } else if (giveAMonth == 9 || giveAMonth == 10 || giveAMonth == 11) {
//   alert(`Пора року числа ${giveAMonth} осінь`);
// }
// else{
//     alert("ЗНАЧЕННЯ ВВЕДЕНО НЕ ВІРНО")
// }

//Запитайте у користувача ввести число.

//Виведіть у консоль повідомлення про те, чи введене число є додатнім, від'ємним чи нулем.

// let num = parseFloat(prompt("Введіть число"));
// if (num > 0) {
//   alert(`Число ${num} є додатнім`);
// } else if (num < 0) {
//   alert(`Число ${num} є відємним`);
// } else {
//   alert(`Число ${num}`);
// }

//Запитайте у користувача ввести величину кута в градусах.

//Виведіть у консоль повідомлення про те, чи є величина кута гострою чи тупою ( це більше і менеше 90 градусів відповідно), використовуючи тернарний оператор.

// let value = parseFloat(prompt("Введіть величину кута"));

// let valueOfKyT = 0;
// valueOfKyT =
//   value < 90 ? "Кут гострий" : value > 90 ? "Кут тупий" : "Кут прямий";
// alert(valueOfKyT);

/*Запитайте у користувача ввести свою оцінку за тест (від 0 до 100).

Визначте, яку оцінку отримає студент (A, B, C, D або F) за таких умов:

90-100: A

80-89: B

70-79: C

60-69: D

менше 60: F

Збільште оцінку студента на одиницю, використовуючи постфіксний інкремент.

Виведіть у консоль повідомлення про оцінку до і після інкремента та визначте за допомогою тернарного оператора, чи студент зарахований чи ні (прохідний бал 60).*/

let score = parseFloat(prompt("Введіть свій бал"));
let initialScore = score;
score++;
if (score >= 90 && score <= 100) {
  alert("Оцінка користувача A");
} else if (score >= 80 && score <= 89) {
  alert("Оцінка користувача B");
} else if (score >= 70 && score <= 79) {
  alert("Оцінка користувача B");
} else if (score >= 60 && score <= 69) {
  alert("Оцінка користувача B");
} else if (score < 60) {
  alert("Оцінка користувача F");
} else {
  alert("Не правильно введена оцінка");
}

if (score >= 90 && score <= 100) {
  alert("Оцінка користувача A");
} else if (score >= 80 && score <= 89) {
  alert("Оцінка користувача B");
} else if (score >= 70 && score <= 79) {
  alert("Оцінка користувача B");
} else if (score >= 60 && score <= 69) {
  alert("Оцінка користувача B");
} else if (score < 60) {
  alert("Оцінка користувача F");
} else {
  alert("Не правильно введена оцінка");
}

let scoreMessage1 = 0;
let scoreMessage2 = 0;
scoreMessage1 =
  initialScore >= 60
    ? "Прохідний бал набрано, студент зарахований!"
    : "Прохідний бал HE набрано, студент HE зарахований!";
scoreMessage2 =
  score >= 60
    ? "Прохідний бал набрано, студент зарахований!"
    : "Прохідний бал HE набрано, студент HE зарахований!";
alert(scoreMessage1);
alert(scoreMessage2);
