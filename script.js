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
    
    

    if (action === 'clear') {
      displayOne.textContent = '0';
      displayTwo.textContent = '';
    
    }

    else if (action === "backspace") {
      displayOne.textContent = display1.slice(0,-1)
    }

    else if (action === "calculate") {
      displayOne.textContent = display1
      displayTwo.textContent = calculate(display1)
      
    }

    else if (display1 === '0' && !action) {
      displayOne.textContent = keyText;
    } 

    else if (display1 !== "0") {
      displayOne.textContent = display1 + keyText;
    }

    
    
    console.log(display1)
    


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