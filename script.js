const displayOne = document.querySelector(".display1");
const displayTwo = document.querySelector(".display2");
const calKey = document.querySelector('calculator-buttons')
const buttons = document.querySelectorAll("button");


buttons.forEach(btn => {
  
  btn.addEventListener('click', function(e) {

 
    let target = e.target;
    let keyText = target.textContent;
    let action = target.dataset.action;
    let display1 = displayOne.textContent;
    let display2 = displayTwo.textContent;


    if (display2 === "0" && !action) {
      displayTwo.textContent = keyText;
    } 

    if (display2 !== "0") {
      displayTwo.textContent = display2 + keyText;
      displayOne.textContent = display2 + keyText;
      
    }

    if (action === 'clear') {
      displayOne.textContent = '';
      displayTwo.textContent = '0';
    }

    if (action === "backspace") {
      displayOne.textContent = display2
      displayTwo.textContent = display2.substring(0, display2.length - 1)
    }

    if (action === "calculate") {
      displayOne.textContent = `${display2}`
      displayTwo.textContent = `${calculate(display2)}`
    }


console.log(action)

  })





})


function calculate(n1, operator, n2) {
  
  total = ''
  
  if (operator === '+'){
    total = n1 + n2;
    return total
  }
  if (operator === '-'){
    total = n1 - n2;
    return total
  }
  if (operator === '*'){
    total = n1 * n2;
    return total
  }
  if (operator === '/'){
    total = n1 / n2
    return total
  }
}

console.log(calculate(2, "+", 3))