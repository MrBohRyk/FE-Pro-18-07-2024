/* Реалізуйте клас Worker (Працівник), який матиме такі властивості: name (ім'я), surname (прізвище),
rate (ставка за день роботи), days (кількість відпрацьованих днів).
Також клас повинен мати метод getSalary(), який виводитиме зарплату працівника.
Зарплата - це добуток (множення) ставки rate на кількість відпрацьованих днів days.*/

// Конструктор Worker
function Worker(name, surname, rate, days) {
  this.name = name;
  this.surname = surname;
  this.rate = rate;
  this.days = days;
}

Worker.prototype.getSalary = function () {
  return this.rate * this.days;
};

const worker = new Worker("Іван", "Петренко", 100, 22);

const workerInfoElement = document.getElementById("worker-info");

workerInfoElement.textContent = `Зарплата працівника ${worker.name} ${
  worker.surname
} складає ${worker.getSalary()} гривень.`;
