let operations = 0;
divNumberElem = document.querySelector(".number");
divSymbolElem = document.querySelector(".symbol");

// create number
    for(i=1; i<=11; i++){
        const newNumber = createNumber(i);
        console.log(newNumber);
        divNumberElem.append(newNumber);
    }

//  create symbol
    for(i=1; i<=5; i++){
        const newSymbol = createSymbol(i);
        console.log(newSymbol);
        divSymbolElem.append(newSymbol);
    }