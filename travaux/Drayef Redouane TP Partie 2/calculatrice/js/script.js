const keys = document.querySelectorAll(".keys button");
const display = document.querySelector("#result");

function clearDisplay() {
  display.textContent = "0";
}

function deleteLastChar() {
  const currentVal = display.textContent;
  display.textContent = currentVal.slice(0, -1);
}

function evaluateExpression() {
  try {
    const currentVal = display.textContent;
    const result = eval(currentVal);
    display.textContent = result;
  } catch (e) {
    display.textContent = "Error";
  }
}

function appendToDisplay(value) {
  let currentVal = display.textContent;

  if (currentVal === "0") {
    display.textContent = value;
  } else {
    display.textContent = currentVal + value;
  }
}

keys.forEach((key) => {
  key.addEventListener("click", (e) => {
    const keyVal = e.target.value;

    if (keyVal === "clear") {
      clearDisplay();
    } else if (keyVal === "backspace") {
      deleteLastChar();
    } else if (keyVal === "=") {
      evaluateExpression();
    } else {
      appendToDisplay(keyVal);
    }
  });
});
