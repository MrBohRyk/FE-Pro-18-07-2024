let height = parseInt(prompt("Введіть висоту рівнобедреного трикутника:"));
for (let i = 1; i <= height; i++) {
  console.log(" ".repeat(height - i) + "*".repeat(2 * i - 1));
}
