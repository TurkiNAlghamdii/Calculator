let firstOperand, secondOperand;
let operator;
let result;
let currentScreen = 0;

const buttons = document.querySelectorAll("button");

function updateScreen() {
  const screen = document.getElementById("screen");
  screen.innerText = currentScreen;
  if (currentScreen.length > 9) {
    screen.innerText = currentScreen.substring(0, 9);
  }
}

updateScreen();

function manageInput() {
  buttons.forEach((button) => {
    if (button.classList.contains("operand")) {
      button.addEventListener("click", () => {
        if(button.value !== 0){
          operatorIn(button.value);
          updateScreen();
        }
      });
    } else if (button.classList.contains("operator")) {
      button.addEventListener("click", () => {
        store(button.value);
      });
    } else if (button.classList.contains("sign")) {
      button.addEventListener("click", () => {
        sign();
      });
    } else if (button.classList.contains("percent")) {
      button.addEventListener("click", () => {
        percentIt();
      });
    } else if (button.classList.contains("clear")) {
      button.addEventListener("click", () => {
        clear();
      });
    } else if (button.classList.contains("decimal")) {
      button.addEventListener("click", () => {
        currentScreen+='.';
        updateScreen();
      });
    } else if (button.classList.contains("equals")) {
      button.addEventListener("click", () => {
        equal();
        console.log(secondOperand);
      });
    }
  });
}
manageInput();

function operatorIn(operator) {
  if (currentScreen==='0' || currentScreen ===0) {
    currentScreen = operator;
  } else if (currentScreen === result) {
    currentScreen = operator;
    updateScreen();
  } else {
    currentScreen += operator;
  }
}

function clear() {
  firstOperand, (secondOperand = 0);
  operator = "";
  currentScreen = 0;
  updateScreen();
}

function store(op) {
  firstOperand = parseFloat(currentScreen);
  console.log(firstOperand);
  currentScreen = 0;
  operator = op;
}

function equal() {
  secondOperand = parseFloat(currentScreen);
  result = operate(firstOperand, secondOperand, operator);
  currentScreen = result;
  updateScreen();
}

function sign() {
  currentScreen = opposite(parseInt(currentScreen));
  updateScreen();
}

function percentIt() {
  currentScreen = toPercent(parseInt(currentScreen));
  updateScreen();
}

// functions
function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) {
    return "WTF?!";
  }
  return a / b;
}
function toPercent(a) {
  return a / 100;
}
function opposite(a) {
  if (a > 0) {
    return -a;
  } else {
    return a * -1;
  }
}

function operate(n1, n2, opr) {
  switch (opr) {
    case "+":
      return add(n1, n2);
      break;
    case "-":
      return sub(n1, n2);
      break;
    case "*":
      return multiply(n1, n2);
      break;
    case "/":
      return divide(n1, n2);
      break;
    default:
      break;
  }
}
operate(firstOperand, secondOperand, operator);
