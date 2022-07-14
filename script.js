const displayOne = document.querySelector(".display1");
const displayTwo = document.querySelector(".display2");
const calKey = document.querySelector('calculator-buttons')
const buttons = document.querySelectorAll("button");


buttons.forEach(btn => {
  
  btn.addEventListener('click', function(e) {

 
    const target = e.target;
    const keyText = target.textContent;
    const action = target.dataset.action;
    let display1 = displayOne.textContent;
    let display2 = displayTwo.textContent;


    if (display2 === "0") {
    displayOne.textContent = keyText;
    displayTwo.textContent = keyText;
  
    } 
    if (display2 !== "0") {
    displayOne.textContent = display1;
    displayTwo.textContent = display2 + keyText;
    }

    if (action === 'clear') {
    displayOne.textContent = '';
    displayTwo.textContent = '0';
  }

  
})

})