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
function exchangeRatesShowTable() {
  const container = document.getElementById("exchangeRatesContainer");
  let tableHTML = `
                <table border="1">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Buy</th>
                            <th>Sell</th>
                        </tr>
                    </thead>
                    <tbody>
            `;
  for (let i = 0; i < exchangeRatesShow.exchangeRate.length; i++) {
    tableHTML += `
                    <tr>
                        <td>${exchangeRatesShow.exchangeRate[i].currency}</td>
                        <td>${exchangeRatesShow.exchangeRate[i].purchaseRateNB}</td>
                        <td>${exchangeRatesShow.exchangeRate[i].saleRateNB}</td>
                    </tr>
                `;
  }
  tableHTML += `
                    </tbody>
                </table>
            `;
  // Inject table into the container
  container.innerHTML = tableHTML;
}

// Call the function to display the table
exchangeRatesShowTable();
