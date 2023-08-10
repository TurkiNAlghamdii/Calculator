// - Problem: Storing the two number in variables
// - Then continue with the rest

let buttons = document.querySelectorAll("button");
let screen = document.getElementById("screen")



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

let num1, num2, opr;
buttons.forEach(button => button.addEventListener("click", (e)=>{
    if(e.target.id ==="+" || e.target.id ==="-" || e.target.id ==="*" || e.target.id ==="/"){
        opr = e.target.id;
    }else{
        screen.innerText =e.target.innerText;
        save(e.target.innerText);
        
        
        
    }
}));

function save(a){
    num1 = a;
    
}


let result;

function operate(n1, n2, opr) {
  switch (opr) {
    case "+":
      result = add(n1, n2);
      break;
    case "-":
      result = sub(n1, n2);
      break;
    case "*":
      result = multiply(n1, n2);
      break;
    case "/":
      result = divide(n1, n2);
      break;
    default:
      break;
  }
}
operate(num1, num2, opr);


