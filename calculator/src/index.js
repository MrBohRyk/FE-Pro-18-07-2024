document.addEventListener("DOMContentLoaded", function () {
  const display = document.querySelector(".display input");
  let memory = null;
  let currentInput = "";
  let operator = null;
  let previousValue = null;
  let memoryActive = false;

  function updateDisplay(value) {
    display.value = value;
  }

  function handleNumber(num) {
    if (operator === null && previousValue !== null) {
      previousValue = null;
    }
    currentInput += num;
    updateDisplay(currentInput);
  }

  function handleOperator(op) {
    if (currentInput === "" && previousValue === null) {
      return;
    }

    if (previousValue === null) {
      previousValue = parseFloat(currentInput);
    } else if (currentInput !== "") {
      calculate();
    }

    operator = op;
    currentInput = "";
  }

  function calculate() {
    if (operator === null || currentInput === "") {
      return;
    }

    const currentValue = parseFloat(currentInput);
    let result = previousValue;

    switch (operator) {
      case "+":
        result += currentValue;
        break;
      case "-":
        result -= currentValue;
        break;
      case "*":
        result *= currentValue;
        break;
      case "/":
        if (currentValue !== 0) {
          result /= currentValue;
        } else {
          updateDisplay("Error");
          resetCalculator();
          return;
        }
        break;
    }

    previousValue = result;
    updateDisplay(result);
    currentInput = "";
    operator = null;
  }

  function handleMemory(action) {
    const currentValue = parseFloat(display.value);
    switch (action) {
      case "M+":
        memory = memory !== null ? memory + currentValue : currentValue;
        memoryActive = true;
        updateMemoryDisplay();
        break;
      case "M-":
        memory = memory !== null ? memory - currentValue : -currentValue;
        memoryActive = true;
        updateMemoryDisplay();
        break;
      case "MRC":
        if (memory !== null) {
          updateDisplay(memory);
          memoryActive = false;
          updateMemoryDisplay();
        }
        break;
    }
  }

  function updateMemoryDisplay() {
    if (memoryActive) {
      display.value = "m " + display.value;
    }
  }

  function resetCalculator() {
    currentInput = "";
    previousValue = null;
    operator = null;
    updateDisplay("0");
  }

  document.querySelector(".keys").addEventListener("click", (e) => {
    if (e.target.classList.contains("button")) {
      const value = e.target.value;

      if (!isNaN(value) || value === ".") {
        handleNumber(value);
      } else if (["+", "-", "*", "/"].includes(value)) {
        handleOperator(value);
      } else if (value === "=") {
        calculate();
      } else if (value === "C") {
        resetCalculator();
      } else if (["M+", "M-", "mrc"].includes(value.toLowerCase())) {
        handleMemory(value.toUpperCase());
      }
    }
  });
});
