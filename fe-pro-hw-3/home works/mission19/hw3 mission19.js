const num = prompt("Введіть кількість елементів масиву")

let list = []
for(let i = 0; i < num; i++) {
    i % 2 === 1 ? document.write(`<span style="background-color: red;">${i}</span>`):document.write(`<p>${i}</p>`)
}

