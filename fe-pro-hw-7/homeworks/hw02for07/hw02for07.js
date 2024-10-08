/**
Дополнить функцию createNewUser() методами подсчета возраста пользователя и его паролем.

Возьмите выполненное задание выше (созданная вами функция createNewUser()) и дополните ее следующим функционалом: При вызове функция должна спросить у вызывающего дату рождения (текст в формате dd.mm.yyyy) и сохранить ее в поле birthday. 

Создать метод getAge() который будет возвращать сколько пользователю лет. 

Создать метод getPassword(), который будет возвращать первую букву имени пользователя в верхнем регистре, соединенную с фамилией (в нижнем регистре) и годом рождения. (например, Ivan Kravchenko 13.03.1992 → Ikravchenko1992). Вывести в консоль результат работы функции createNewUser(), а также функций getAge() и getPassword() созданного объекта.
*/

function createNewUser() {
  const firstName = prompt("Введіть ваше ім'я:");
  const lastName = prompt("Введіть ваше прізвище:");
  const birthday = prompt("Введіть вашу дату народження (dd.mm.yyyy):");

  const newUser = {
    firstName: firstName,
    lastName: lastName,
    birthday: birthday,

    getAge() {
      const dateParts = this.birthday.split(".");
      if (dateParts.length !== 3) {
        console.error("Неправильний формат дати");
        return "Невідомо";
      }

      const [day, month, year] = dateParts;
      const birthDate = new Date(year, month - 1, day);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();

      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      return age;
    },

    getPassword() {
      const dateParts = this.birthday.split(".");
      if (dateParts.length !== 3) {
        console.error("Неправильний формат дати");
        return "Невідомо";
      }

      const [day, month, year] = dateParts;
      return (
        this.firstName.charAt(0).toUpperCase() +
        this.lastName.toLowerCase() +
        year
      );
    },

    getLogin() {
      return (
        this.firstName.charAt(0).toLowerCase() + this.lastName.toLowerCase()
      );
    },
  };
  return newUser;
}

// Створюємо користувача
document.addEventListener("DOMContentLoaded", function () {
  const user = createNewUser();

  const login = user.getLogin();
  const age = user.getAge();
  const password = user.getPassword();

  document.getElementById(
    "login-output"
  ).textContent = `Логін користувача: ${login}`;
  document.getElementById("age-output").textContent = `Вік користувача: ${age}`;
  document.getElementById(
    "password-output"
  ).textContent = `Пароль користувача: ${password}`;
});
