/*
Реализовать функцию для создания объекта "пользователь".
Написать функцию createNewUser(), которая будет создавать и возвращать объект newUser. 

При вызове функция должна спросить у вызывающего имя и фамилию. 

Используя данные, введенные пользователем, создать объект newUser со свойствами firstName и lastName. 

Добавить в объект newUser метод getLogin(), который будет возвращать первую букву имени пользователя, соединенную с фамилией пользователя, все в нижнем регистре (например, Ivan Kravchenko → ikravchenko). 

Создать пользователя с помощью функции createNewUser(). Вызвать у пользователя функцию getLogin(). Вывести в консоль результат выполнения функции.
*/

function createNewUser() {
  // Запрошуємо ім'я та прізвище у користувача
  const firstName = prompt("Введіть ваше ім'я:");
  const lastName = prompt("Введіть ваше прізвище:");

  // Створюємо об'єкт newUser з даними
  const newUser = {
    firstName: firstName,
    lastName: lastName,

    // Метод для отримання логіна
    getLogin() {
      return (
        this.firstName.charAt(0).toLowerCase() + this.lastName.toLowerCase()
      );
    },
  };

  // Повертаємо об'єкт
  return newUser;
}

// Додаємо подію, щоб код виконувався після завантаження сторінки
document.addEventListener("DOMContentLoaded", function () {
  // Створюємо користувача
  const user = createNewUser();

  // Отримуємо логін користувача
  const login = user.getLogin();

  // Знаходимо елемент на сторінці для виводу
  const loginOutputElement = document.getElementById("login-output");

  // Виводимо результат на екран
  if (loginOutputElement) {
    loginOutputElement.textContent = `Логін користувача: ${login}`;
  } else {
    console.error("Елемент з id 'login-output' не знайдено");
  }
});
