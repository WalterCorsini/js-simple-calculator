const divNumberElem = document.querySelector(".number");
const divSymbolElem = document.querySelector(".symbol");
let divDisplayElem = document.getElementById("display");
let valore1 = "";
let valore2 = "";
let cont = 0;

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

//  btn click number
for(let i = 0; i <= 9; i++){
    // if(cont = 0){
    valore1 = btnNumberArray[i].addEventListener("click", btnNumber);
    // } else if(cont = 1){
    // }
}

for(let j = 1; j < 5; j++){
    btnSymbolArray[j].addEventListener("click", btnOpe(valore1));
}




