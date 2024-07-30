let height = parseFloat(prompt("Введіть довжину ромба"));
let rhombus = "";
for (let i = 1; i <= height; i++) {
    rhombus += " ".repeat(height - i) + "*".repeat(2 * i - 1) + "<br/>"

};

for (let i = height - 1; i >= 1; i--) {
    rhombus += " ". repeat(height - i) + "*".repeat(2 * i - 1) + "<br/>"
 };
document.write("<pre>" + rhombus + "<pre/>");
