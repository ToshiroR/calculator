const displayOne = document.querySelector(".display1");
const displayTwo = document.querySelector(".display2");
const btn = document.querySelectorAll("button");

addEventListener('click', function(e) {

  const target = e.target;
  const keyText = target.textContent;
  const action = target.dataset.action;
  const display1 = displayOne.textContent;
  const display2 = displayTwo.textContent;


  if (!action) {
    displayTwo.textContent = keyText
  }

  
});