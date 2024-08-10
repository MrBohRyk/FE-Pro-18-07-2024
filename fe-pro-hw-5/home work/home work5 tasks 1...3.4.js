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
var obj = { Коля: "1000", Вася: "500", Петя: "200" };

document.write(obj.Петя);
document.write("<br/>");
document.write(obj.Коля);

/*Напишіть функцію isEmpty(obj), яка повертає true, якщо об'єкт не має властивостей, інакше false.*/
function isEmpty(obj) {
  if (!Object.keys(obj).length) {
    return true;
  } else {
    return false;
  }
}

/*Виведіть на сторінку назву валюти ціну купівлі та ціну продажу. https://api.privatbank.ua/p24api/exchange_rates?json&date=01.07.2024*/
function exchangeRatesShow() {
  document.write(
    `<table>
            <thead>
                <th>Name</th>
                <th>Buy</th>
                <th>Sell</th>
            </thead>
            <tbody>
        `
  );
  for (let i = 0; i < exchangeRates.exchangeRate.length; i++) {
    document.write(
      `<tr>
                <td>${exchangeRates.exchangeRate[i].currency}</td>
                <td>${exchangeRates.exchangeRate[i].purchaseRateNB}</td>
                <td>${exchangeRates.exchangeRate[i].saleRateNB}</td>
            </tr>`
    );
  }
  document.write(
    `</tbody>
        </table>`
  );
}
exchangeRatesShow();
