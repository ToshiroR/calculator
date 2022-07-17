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
    
    
    let operator = 0;
    let firstInput = 0;
    let secondInput = 0;
    
    
    
    

    if (action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide') {
          firstInput = display1;
          operator = action;
          displayOne.textContent = display1 + keyText;
          displayTwo.textContent = "";
    }

    if (action === 'clear') {
      displayOne.textContent = '0';
      displayTwo.textContent = '';
    
    }

    if (action === "backspace") {
      displayOne.textContent = display1.slice(0,-1)
      displayTwo.textContent = ''
    }

    if (action === "calculate") {
      
      secondInput = display2;
      displayTwo.textContent = `${calculate(firstInput, operator, secondInput)}`;
    
     
    }

    if (display1 === '0' && !action) {
      displayOne.textContent = keyText;
      displayTwo.textContent = keyText;
    } 

    if (display1 !== "0" && !action) {
      displayOne.textContent = display1 + keyText;
      displayTwo.textContent = display2 + keyText;
    }

    console.log(firstInput)
    console.log(operator)
    console.log(secondInput)
  })


})


function calculate(firstInput, operator, secondInput) {
  
  total = ''
  
  if (operator === 'add'){
    total = parseInt(firstInput) + parseInt(secondInput);
    return total
  }
  if (operator === 'subtract'){
    total = parseInt(firstInput) - parseInt(secondInput);
    return total
  }
  if (operator === 'multiply'){
    total = parseInt(firstInput) * parseInt(secondInput);
    return total
  }
  if (operator === 'divide'){
    total = parseInt(firstInput) / parseInt(secondInput)
    return total
  }
}


let number = 63+6;
console.log(calculate(number))

