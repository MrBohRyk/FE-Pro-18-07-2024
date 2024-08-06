Унарні оператори `+` та `-` у JavaScript використовуються для перетворення типів даних або зміни знаку чисел. Ось детальний опис і приклади їх використання.

### Унарний плюс (`+`)

Унарний плюс використовується для перетворення значення на число. Якщо значення вже є числом, воно залишається незмінним. Якщо значення не може бути коректно перетворено на число, результатом буде `NaN` (Not-a-Number).

#### Приклади

```javascript
// Перетворення рядків на числа
let str = "42";
let num = +str;
console.log(num); // 42

let floatStr = "3.14";
let floatNum = +floatStr;
console.log(floatNum); // 3.14

// Перетворення булевих значень на числа
let trueValue = true;
let falseValue = false;
console.log(+trueValue); // 1
console.log(+falseValue); // 0

// Перетворення значень, що не можуть бути перетворені на числа
let invalidStr = "hello";
console.log(+invalidStr); // NaN

let obj = {};
console.log(+obj); // NaN

let arr = [];
console.log(+arr); // 0 (порожній масив перетворюється на 0)
```

### Унарний мінус (`-`)

Унарний мінус змінює знак числового значення на протилежний. Якщо значення не є числом, воно спочатку перетворюється на число, а потім змінюється його знак.

#### Приклади

```javascript
// Зміна знаку чисел
let positive = 42;
let negative = -positive;
console.log(negative); // -42

let negativeValue = -42;
let positiveValue = -negativeValue;
console.log(positiveValue); // 42

// Перетворення рядків на числа і зміна знаку
let str = "3.14";
let num = -str;
console.log(num); // -3.14

// Перетворення булевих значень на числа і зміна знаку
let trueValue = true;
let falseValue = false;
console.log(-trueValue); // -1
console.log(-falseValue); // -0

// Перетворення значень, що не можуть бути перетворені на числа, і зміна знаку
let invalidStr = "hello";
console.log(-invalidStr); // NaN

let obj = {};
console.log(-obj); // NaN

let arr = [];
console.log(-arr); // -0 (порожній масив перетворюється на 0, потім знак змінюється на мінус)
```

### Використання у виразах

Унарні оператори можуть бути використані у виразах разом з іншими операторами.

#### Приклади

```javascript
let a = "5";
let b = "10";

let sum = +a + +b; // Перетворюємо рядки на числа і додаємо їх
console.log(sum); // 15

let difference = -a - +b; // Перетворюємо рядки на числа, змінюємо знак першого і віднімаємо друге
console.log(difference); // -15
```

### Висновок

Унарні оператори `+` та `-` у JavaScript є корисними для перетворення типів даних і зміни знаку чисел. Вони можуть бути використані для простих математичних операцій, а також для перетворення різних типів значень на числа.