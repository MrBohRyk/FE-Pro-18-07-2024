const num = prompt("Введіть кількість елементів масиву")

let list = []
for(let i = 0; i < num; i++) {
    list.push(i)
}

document.write(list)