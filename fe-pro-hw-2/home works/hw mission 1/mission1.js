let height = parseFloat(prompt("Введіть довжину трикутника:"));
for (let row = 0; row < height; row++) {
  for (let col = 0; col < row; col++) {
    document.write("*&#160&#160");
  }
  document.write("<br/>");
}
