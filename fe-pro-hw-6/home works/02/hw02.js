/* Реалізуйте клас MyString, який матиме такі методи: метод reverse(),
який параметром приймає рядок, а повертає її в перевернутому вигляді, метод ucFirst(),
який параметром приймає рядок, а повертає цей же рядок, зробивши його першу літеру великою
та метод ucWords, який приймає рядок та робить заголовною першу літеру кожного слова цього рядка. */

function MyString() {
  this.reverse = function (str) {
    return str.split("").reverse().join("");
  };

  this.ucFirst = function (str) {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  this.ucWords = function (str) {
    return str
      .split(" ")
      .map((word) => this.ucFirst(word))
      .join(" ");
  };
}

const myString = new MyString();

const reversedText = myString.reverse("Привіт");
const ucfirstText = myString.ucFirst("привіт");
const ucwordsText = myString.ucWords("привіт світ");

document.getElementById(
  "reverse-result"
).textContent = `Перевернутий рядок: ${reversedText}`;
document.getElementById(
  "ucfirst-result"
).textContent = `Рядок з великої літери: ${ucfirstText}`;
document.getElementById(
  "ucwords-result"
).textContent = `Рядок з великих літер кожного слова: ${ucwordsText}`;
