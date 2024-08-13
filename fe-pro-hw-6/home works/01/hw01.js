/* Реалізуйте клас Worker (Працівник), який матиме такі властивості: name (ім'я), surname (прізвище),
rate (ставка за день роботи), days (кількість відпрацьованих днів).
Також клас повинен мати метод getSalary(), який виводитиме зарплату працівника.
Зарплата - це добуток (множення) ставки rate на кількість відпрацьованих днів days.*/

class Worker {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }

  getSalary() {
    return this.rate * this.days;
  }
}

// Створення об'єкта Worker
const worker = new Worker("Іван", "Петренко", 100, 22);

// Знаходимо елемент на сторінці
const workerInfoElement = document.getElementById("worker-info");

// Виводимо інформацію на сторінку
workerInfoElement.textContent = `Зарплата працівника ${worker.name} ${
  worker.surname
} складає ${worker.getSalary()} гривень.`;
