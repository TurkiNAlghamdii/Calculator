let buttons = document.querySelectorAll("button");
let buttonsCount = buttons.length
for (var i = 0; i <= buttonsCount; i += 1) {
    buttons[i].onclick = function(e) {
        alert(this.id);
    };
}

function add(a,b){
    
    return a + b;
}
function sub(a,b){
    return a - b;
}
function multiply(a,b){
    return a * b;
}
function divide(a,b){
    if(b ===0){
        return "WTF?!";
    }
    return a / b;
}

function toPercent(a){
    return a/100;
}

function opposite(a){
    if(a>0){
        return -a;
    }else{
        return a*-1;
    }
    
}

let num1,num2,opr;
num1 = 5
num2 = 5
opr = '+'

let result;

function operate(n1,n2,opr){
    switch (opr) {
        case "+":
            result = add(n1,n2);
            break;
        case "-":
            result = sub(n1,n2)
        break;
        case "*":
            result = multiply(n1,n2)
        break;
        case "/":
            result = divide(n1,n2)
        break;
        default:
            break;
    }
}
operate(num1,num2,opr);
