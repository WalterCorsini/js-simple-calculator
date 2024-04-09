/**
 * create button number
 * @param {number} number
 * @returns {object} element HTML
 */
function createNumber(number) {
  const divElem = document.createElement("button");
  divElem.classList.add("numbers");
  divElem.innerText = number;
  if (number < 10) {
    divElem.classList.add("bg-grey", "btn-number");
    divElem.innerText = number;
  } else if (number == 10) {
    divElem.classList.add("bg-grey", "btn-number", "special");
    divElem.innerText = "0";
  } else if (number === 11) {
    divElem.classList.add("bg-orange", "btn-total");
    divElem.innerText = "=";
  }
  return divElem;
}

/**
 * create button operations
 * @param {number} numberSymbol
 * @returns {object}  element HTML
 */
function createSymbol(numberSymbol) {
  const divElem = document.createElement("button");
  divElem.classList.add("symbols", "btn-symbol");
  if (i == 1) {
    divElem.classList.add("bg-orange");
  } else {
    divElem.classList.add("bg-blue");
  }
  switch (numberSymbol) {
    case 1:
      divElem.innerText = "C";
      divElem.classList.add("reset");
      break;

    case 2:
      divElem.innerText = "+";
      divElem.classList.add = "add";
      break;

    case 3:
      divElem.innerText = "-";
      divElem.classList.add = "less";
      break;

    case 4:
      divElem.innerText = "x";
      divElem.classList.add = "moltpli";
      break;

    case 5:
      divElem.innerText = "/";
      divElem.classList.add = "divider";
      break;
  }

  return divElem;
}

/**
 * Description assign value to display
 * @param {string}   // display value
 * @returns {string}
 */
function btnNumber() {
  if (divDisplayElem.innerHTML == 0) {
    divDisplayElem.innerHTML = ""; 
    divDisplayElem.innerHTML = this.innerHTML;
  } else {    
    divDisplayElem.innerHTML += this.innerHTML; 
  }
  console.log(divDisplayElem.innerHTML);
  return divDisplayElem.innerHTML
}
function btnOpe(){
  if(cont == 0){
  valore1 = divDisplayElem.innerHTML;
  operator = this.innerHTML;
  } else {
    valore2 = divDisplayElem.innerHTML;
  }
  cont +=1;
  divDisplayElem.innerHTML = "";
  console.log(valore1,operator,valore2);
}

function btnTotal() {
  valore2 = divDisplayElem.innerHTML;
valore1 = parseInt(valore1);
valore2 = parseInt(valore2);

switch (operator){
  case "+":
    divDisplayElem.innerHTML = valore1 + valore2;
  case "x":
    divDisplayElem.innerHTML = valore1 * valore2;
  case "-":
    divDisplayElem.innerHTML = valore1 - valore2;
  case "/":
    divDisplayElem.innerHTML = valore1 / valore2;
  }
}
