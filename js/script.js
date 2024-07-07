const divNumberElem = document.querySelector(".number");
const divSymbolElem = document.querySelector(".symbol");
let divDisplayElem = document.getElementById("display");
let valore1;
let valore2;
let cont = 0;
let operator = "";
let result = false;
let start = false;

// create number
for (i = 1; i <= 11; i++) {
  const newNumber = createNumber(i);
  divNumberElem.append(newNumber);
}

//  create symbol
for (i = 1; i <= 5; i++) {
  const newSymbol = createSymbol(i);
  divSymbolElem.append(newSymbol);
}

const btnNumberArray = document.querySelectorAll(".btn-number");
const btnSymbolArray = document.querySelectorAll(".btn-symbol");
const btnEqual = document.querySelector(".btn-total");
const rstButton = document.querySelector(".reset");

//reset value
rstButton.addEventListener("click",resetValue);

//  btn click number
for(let i = 0; i < btnNumberArray.length; i++){
    btnNumberArray[i].addEventListener("click", btnNumber);
  }

  // btn operator
for(let i = 1; i < btnSymbolArray.length; i++){
    btnSymbolArray[i].addEventListener("click", btnOpe);
}

// btn total
btnEqual.addEventListener("click", btnTotal);


