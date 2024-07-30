let height = parseFloat(prompt("Введіть довжину трикутника"))
let triangle = ""

for (let i = 1; i <= height; i++) {
  triangle += " ".repeat(height - i) + "*".repeat(2 * i -1) + "<br/>"
}

document.write("<pre>" + triangle + "</pre>")