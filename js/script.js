const divNumberElem = document.querySelector(".number");
const divSymbolElem = document.querySelector(".symbol");
let divDisplayElem = document.getElementById("display");
let valore1;
let valore2;
let cont = 0;
let operator = "";

// create number
for (i = 1; i <= 11; i++) {
  const newNumber = createNumber(i);
  console.log(newNumber);
  divNumberElem.append(newNumber);
}

//  create symbol
for (i = 1; i <= 5; i++) {
  const newSymbol = createSymbol(i);
  console.log(newSymbol);
  divSymbolElem.append(newSymbol);
}

const btnNumberArray = document.querySelectorAll(".btn-number");
const btnSymbolArray = document.querySelectorAll(".btn-symbol");
const btnEqual = document.querySelector(".btn-total");
const rstButton = document.querySelector(".reset");

//reset button
rstButton.addEventListener("click",function(){
  window.location.reload();
});

//  btn click number
for(let i = 0; i <= 9; i++){
    btnNumberArray[i].addEventListener("click", btnNumber);
  }

  // btn operator
  for(let j = 1; j < 5; j++){
    btnSymbolArray[j].addEventListener("click", btnOpe);

}

// btn total
btnEqual.addEventListener("click", btnTotal);






