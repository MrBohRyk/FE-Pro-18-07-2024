let count = 0;

function clickBtn() {
    let newUser = prompt("input information", "Имя.Фамилия.Язык программирования");
    if (!newUser) return;

    count++
    //"Ivan.Ivanov.Java".split(".")
    newUser = newUser.split(".");
    if (newUser.length !== 3) return;

    const tr = `
    <tr>
    <td>${count}</td>
    <td>${newUser[0]}</td>
    <td>${newUser[1]}</td>
    <td>${newUser[2]}</td>
    </tr>
    `
    document.getElementById("table-data").innerHTML += tr;
    document.getElementById("count").innerHTML = count;
}


