/* Створіть об 'єкт заробітної плати obj. Виведіть на екран зарплату Петі та Колі.

 <
 pre >
     <
     code >
     <
     span class = "green" > //Цей об'єкт надано:</span>
     var obj = { 'Коля': '1000', 'Вася': '500', 'Петя': '200' }; <
 /code> < /
 pre >
*/
var obj = { 'Коля': '1000', 'Вася': '500', 'Петя': '200' };

document.write(obj.Петя)
document.write("<br/>")
document.write(obj.Коля)

/*Напишіть функцію isEmpty(obj), яка повертає true, якщо об'єкт не має властивостей, інакше false.*/
function isEmpty(obj) {
    if (!Object.keys(obj).length) {
        return true;
    } else {
        return false;
    }
}

/*Виведіть на сторінку назву валюти ціну купівлі та ціну продажу. https://api.privatbank.ua/p24api/exchange_rates?json&date=01.07.2024*/
function fetchExchangeRates() {
    document.write(
        `<table> 
            <thead>
                <th>Name</th>
                <th>Buy</th>
                <th>Sell</th>
            </thead>
        </table>`
    )
    for (let i = 0; i < exchange_rates.exchangeRate.length; i++) {
        document.write(`
            <tr>
            <td>${exchange_rates.exchangeRate[i].currency}</td>
            <td>${exchange_rates.exchangeRate[i].purchaseRateNB}</td>
            <td>${exchange_rates.exchangeRate[i].saleRateNB}</td>
            /tr>`)
    }
    document.write(
        ``
    )
}