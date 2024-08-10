const cryptoWallet = {
  owner: "", // Ім'я власника буде встановлюватись через текстове поле
  currencies: {
    Bitcoin: {
      name: "Bitcoin",
      logo: "./logos/bitcoin-btc-logo.png",
      coins: 0.5,
      rate: 1030000,
    },
    Ethereum: {
      name: "Ethereum",
      logo: "./logos/Ethereum_logo_2014.svg.png",
      coins: 2,
      rate: 67000,
    },
    Stellar: {
      name: "Stellar",
      logo: "./logos/stellar-xlm-logo.png",
      coins: 150,
      rate: 18,
    },
  },

  // Метод для оновлення імені власника
  setOwnerName(name) {
    this.owner = name;
  },

  // Метод для виведення інформації про валюту
  getCurrencyInfo(currencyName) {
    const currency = this.currencies[currencyName];

    if (currency) {
      const totalValue = (currency.coins * currency.rate).toFixed(2);
      const message = `Доброго дня, ${this.owner}! На вашому балансі ${currency.name} <img src="${currency.logo}" alt="${currency.name}" style="width: 20px; height: 20px;"> залишилося ${currency.coins} монет. Якщо ви сьогодні продасте їх, то отримаєте ${totalValue} грн.`;

      document.getElementById("wallet-info").innerHTML = message;
    } else {
      document.getElementById("wallet-info").innerText = "Валюта не знайдена!";
    }
  },
};

// Обробник для кнопки "Показати інформацію"
document.getElementById("show-info").addEventListener("click", function () {
  // Отримуємо ім'я власника з текстового поля
  const ownerName = document.getElementById("owner-name").value;
  cryptoWallet.setOwnerName(ownerName);

  // Отримуємо вибрану валюту з випадаючого списку
  const selectedCurrency = document.getElementById("currency-select").value;
  cryptoWallet.getCurrencyInfo(selectedCurrency);
});
