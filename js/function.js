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

