/**
 * create button number
 * @param {number} number
 * @returns {object} element HTML
 */
function createNumber(number){
    const divElem = document.createElement("div");
    divElem.classList.add("numbers");
    divElem.innerText = number;
    if(number < 10) {
        divElem.classList.add("bg-grey");
        divElem.innerText = number;
    } else if (number == 10){
        divElem.classList.add("bg-grey", "special");
        divElem.innerText = "0";
    } else if (number === 11){
        divElem.classList.add("bg-orange");
        divElem.innerText = "=";      
    }

    // divElem.addEventListener("click", operation);
    return divElem;
}

/**
 * create button operations
 * @param {number} numberSymbol
 * @returns {object}  element HTML
 */
function createSymbol(numberSymbol){
    const divElem = document.createElement("div");
    divElem.classList.add("symbols");
    if(i == 1){
        divElem.classList.add("bg-orange");
    } else {
        divElem.classList.add("bg-blue");
    }
    switch (numberSymbol){
        case 1:
            divElem.innerText = "C";
            break;
        
        case 2:
            divElem.innerText = "+";
            break;
    
        case 3:
            divElem.innerText = "-";
            break;

        case 4:
            divElem.innerText = "x";
            break;

        case 5:
            divElem.innerText = "/";
            break;
    }

    // divElem.addEventListener("click", operation);
    return divElem;
}
