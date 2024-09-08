//Завдання 1. Створіть порожній масив та використайте метод push, щоб додати до нього кілька елементів (наприклад, чисел чи рядків).

let arr = []

arr.push(1, 2, 5, "String1", "String54")
alert(arr)

arr.pop(1)

alert(arr)
//

function addElementToArray(array, element) {
    array.push(element);
    return array;
}

// Приклад використання
let arra = [1, 2, 3];
let newElement = 4;
addElementToArray(arra, newElement);

console.log(arra);

function removeLastElement(array) {
    array.pop();
    return array;
}

// Приклад використання
let myArray = [5, 10, 15, 20];
removeLastElement(myArray);

console.log(myArray);  // Виведе: [5, 10, 15]


let myArrayі = [3, 4, 5];
myArray.unshift(1, 2);

console.log(myArrayі);  // Виведе: [1, 2, 3, 4, 5]

// unshift

// Завдання 1
let numbersArray = [3, 4, 5];
numbersArray.unshift(1, 2);
console.log(numbersArray);  // Виведе: [1, 2, 3, 4, 5]

// Завдання 2
function addElementToFront(elementsArray, element) {
    elementsArray.unshift(element);
    return elementsArray;
}
let fruitsArray = ['banana', 'orange'];
addElementToFront(fruitsArray, 'apple');
console.log(fruitsArray);  // Виведе: ['apple', 'banana', 'orange']

// shift

// Завдання 1
let colorsArray = ['red', 'blue', 'green'];
let removedColor = colorsArray.shift();
console.log(colorsArray);     // Виведе: ['blue', 'green']
console.log(removedColor);    // Виведе: 'red'

// Завдання 2
function removeFirstElement(itemsArray) {
    itemsArray.shift();
    return itemsArray;
}
let citiesArray = ['London', 'Paris', 'Berlin'];
removeFirstElement(citiesArray);
console.log(citiesArray);  // Виведе: ['Paris', 'Berlin']

// fill

// Завдання 1
let emptyArray = new Array(4).fill('x');
console.log(emptyArray);  // Виведе: ['x', 'x', 'x', 'x']

// Завдання 2
function fillArrayWithValues(arrayToFill, value, startIndex, endIndex) {
    arrayToFill.fill(value, startIndex, endIndex);
    return arrayToFill;
}
let lettersArray = ['a', 'b', 'c', 'd', 'e'];
fillArrayWithValues(lettersArray, 'z', 1, 4);
console.log(lettersArray);  // Виведе: ['a', 'z', 'z', 'z', 'e']

// splice

// Завдання 1
let animalsArray = ['cat', 'dog', 'bird', 'fish'];
animalsArray.splice(1, 2);
console.log(animalsArray);  // Виведе: ['cat', 'fish']

// Завдання 2
function removeElementsFromArray(itemsArray, index, count) {
    itemsArray.splice(index, count);
    return itemsArray;
}
let numbersArray2 = [1, 2, 3, 4, 5, 6];
removeElementsFromArray(numbersArray2, 2, 3);
console.log(numbersArray2);  // Виведе: [1, 2, 6]

// reverse

// Завдання 1
let charsArray = ['x', 'y', 'z'];
charsArray.reverse();
console.log(charsArray);  // Виведе: ['z', 'y', 'x']

// Завдання 2
function reverseElementsOrder(myItemsArray) {
    myItemsArray.reverse();
    return myItemsArray;
}
let temperaturesArray = [30, 20, 10];
reverseElementsOrder(temperaturesArray);
console.log(temperaturesArray);  // Виведе: [10, 20, 30]

// concat

// Завдання 1
let firstArray = [1, 2];
let secondArray = [3, 4];
let combinedArray = firstArray.concat(secondArray);
console.log(combinedArray);  // Виведе: [1, 2, 3, 4]

// Завдання 2
function combineArrays(arrayOne, arrayTwo) {
    return arrayOne.concat(arrayTwo);
}
let fruitsArray1 = ['apple', 'banana'];
let fruitsArray2 = ['cherry', 'date'];
let allFruitsArray = combineArrays(fruitsArray1, fruitsArray2);
console.log(allFruitsArray);  // Виведе: ['apple', 'banana', 'cherry', 'date']

// includes

// Завдання 1
let techArray = ['laptop', 'tablet', 'phone'];
let hasTablet = techArray.includes('tablet');
console.log(hasTablet);  // Виведе: true

// Завдання 2
function checkElementPresence(myArray, element) {
    return myArray.includes(element);
}
let sportsArray = ['soccer', 'basketball', 'tennis'];
let isBasketballPresent = checkElementPresence(sportsArray, 'basketball');
console.log(isBasketballPresent);  // Виведе: true

// filter

// Завдання 1
let numberSet = [1, 2, 3, 4, 5, 6];
let evenNumbers = numberSet.filter(num => num % 2 === 0);
console.log(evenNumbers);  // Виведе: [2, 4, 6]

// Завдання 2
function filterArrayByCondition(myArray, conditionFunction) {
    return myArray.filter(conditionFunction);
}
let agesArray = [18, 25, 30, 17, 15];
let adultsArray = filterArrayByCondition(agesArray, age => age >= 18);
console.log(adultsArray);  // Виведе: [18, 25, 30]

// map

// Завдання 1
let baseNumbers = [1, 2, 3, 4];
let squaredNumbers = baseNumbers.map(num => num * num);
console.log(squaredNumbers);  // Виведе: [1, 4, 9, 16]

// Завдання 2
function transformArray(myArray, transformFunction) {
    return myArray.map(transformFunction);
}
let numbersArray3 = [5, 10, 15];
let stringifiedArray = transformArray(numbersArray3, num => `Number: ${num}`);
console.log(stringifiedArray);  // Виведе: ['Number: 5', 'Number: 10', 'Number: 15']

