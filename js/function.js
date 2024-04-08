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

function btnNumber() {
  let value;
  if (divDisplayElem.innerText == "0") {
    divDisplayElem.innerText = this.innerText;
  } else {
    value = divDisplayElem.innerText;
    divDisplayElem.innerText += this.innerText;
  }
  return divDisplayElem.innerText;
}

function btnOpe(valuee) {
  const firstValue = valuee + this.innerText;
  divDisplayElem.innerHTML = "";
  console.log(firstValue.innerText, "firstValue");
  return firstValue;
}

// function btnTotal(valore1, valore2, ope) {
//   console.log(typeof valore1, typeof valore2, typeof operator);
//   totalBtnOpe = parseInt(valore1) + ope + parseInt(valore2);
//   console.log(totalBtnOpe);
// }
