

/*
    let counter = 0;

    do {
        document.write(counter + "<br />");
        counter++;
    } while (counter < 10);
*/
    

let counter = prompt("Введите число"); //4
let factorial = 1;

document.write("Факториал числа: " + counter + "! = ");

do {

    if (counter == 0) {
        factorial = 1;
        break;
    }

    factorial = factorial * counter; // 24
    counter = counter - 1; // 0
}
while (counter > 0); // false

document.write(factorial);

