function sum(num1, num2) {
  return num1 + num2;
}

function subt(num1, num2) {
  return num1 - num2;
}

function mult(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

let num1 = null;
let operator = null;
let num2 = null;

function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return (num1 = sum(num1, num2));
    case "-":
      return (num1 = subt(num1, num2));
    case "*":
      return (num1 = mult(num1, num2));
    case "/":
      return (num1 = divide(num1, num2));
    default:
      return "Not valid operator";
  }
}

const numButtons = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator");
const display = document.querySelector("#display");
const equal = document.querySelector("#equal");
const clear = document.querySelector("#clear");

display.textContent = 0;

numButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (operator === null) {
            if (num1 === null) {
                num1 = button.value;
            } else {
                num1 += button.value;
            }
            display.textContent = num1;
        } else {
            if (num2 === null) {
                num2 = button.value;
            } else {
                num2 += button.value;
            }
            display.textContent = num2;
        }
    })
})


operators.forEach((button) => {
  button.addEventListener("click", () => {
    operator = button.value;
    display.textContent = button.value;
  });
});

function evaluate() {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  if (num2 === 0) {
    display.textContent = "ERR";
    return null;
  } else {
    const result = operate(operator, num1, num2);
    display.textContent = result;
    num1 = result;
    num2 = null;
    operator = null;
  }
}

equal.addEventListener("click", evaluate);

clear.addEventListener("click", () => {
  num1 = null;
  num2 = null;
  operator = null;
  display.textContent = 0;
});
