let operations = 0;
divNumberElem = document.querySelector(".number");
// create number{
    for(i=1; i<=11; i++){
        const newNumber = createNumber(i);
        console.log(newNumber);
        divNumberElem.append(newNumber);
    }
