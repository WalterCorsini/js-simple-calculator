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
  // refresh display after total
  if (start !== false) {
    start = false;
    divDisplayElem.innerHTML = 0;
  }

    divDisplayElem = document.getElementById("display");
    if (divDisplayElem.innerHTML == 0) {
      divDisplayElem.innerHTML = "";
      divDisplayElem.innerHTML = this.innerHTML;
    } else if (divDisplayElem.innerHTML.length <= 5) {
      divDisplayElem.innerHTML += this.innerHTML;
    }

}

/** save value in two separated varaible and save operator */
function btnOpe() {
  divDisplayElem = document.getElementById("display");
  if (divDisplayElem.innerHTML != 0) {
    if (cont === 0) {
      valore1 = divDisplayElem.innerHTML;
      operator = this.innerHTML;
      cont += 1;
      result = true;
      divDisplayElem.innerHTML = "";
    }
  }
}

/** operation between two variables */
function btnTotal() {
  if (result === true) {
    divDisplayElem = document.getElementById("display");
    valore2 = divDisplayElem.innerHTML;
    valore1 = parseInt(valore1);
    valore2 = parseInt(valore2);
    if (operator == "x") {
      operator = "*";
    }
    valore1 = valore1 + operator + valore2;
    valore1 = eval(valore1);
    valore1 = parseFloat(valore1.toFixed(2));
    divDisplayElem.innerHTML = valore1;
    // reset value
    operator = "";
    valore2 = "";
    cont = 0;
    result = false;
    start = true;
    if (
      (valore2 == 0 && operator == "/") ||
      (valore1 == 0 && operator == "/")
    ) {
      divDisplayElem.innerHTML = "ERROR";
    }
  } else {
    valore1 = "";
    divDisplayElem.innerHTML = 0;
  }
}

function resetValue() {
  valore1 = "";
  valore2 = "";
  operator = "";
  cont = 0;
  divDisplayElem.innerHTML = 0;
  result = false;
}
