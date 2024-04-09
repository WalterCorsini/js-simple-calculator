# SVOLGIMENTO
creazione di una calcolatrice tramite javascript.

## LOGICA
1. creazione contenitori tasti in html
2. creazione classi tasti in css
3. mi attacco ai contenitori dei tasti  html in javascript
4. mi collego al display della calcolatrice.
4. dichiaro variabili dei 2 valori da sommare.
5. creo i tasti numerici
    - ciclo for
        - invoco la funzione crea numero
            - crea l'elemento button
            - assegno delle classi
            - gli do il suo valore dentro innerHTML
            - ritorno il suo valore nello script.
        - salvo l'elemento creato e lo inserisco nel DOM.
        - invoco la fuzione crea simbolo
            - crea l'elemento button
                - assegno delle classi
                - gli do il suo valore dentro innerHTML
                - ritorno il suo valore nello script.
        - salvo l'elemento creato e lo inserisco nel DOM.
6. mi collego ai pulsanti btn-number e btn symbol tramite querySelectorAll
7. applico l'evento click ai button number
    - invoco la funzione btnNumber
        - salvo il valore clickato nella variabile del display
    - quando utente clicca su un operatore algebrico
        - invoco la funzione per salvare l'operatore scelto.
        - salvo il primo valore.
        - salvo l'operatore.
        - ripulisco il display
    - invoco nuovamente la funzione btnNumber
    - quando l'utente clicca su "="
        - salvo il secondo valore
        - trasformo i valori da stringa a numero
        - faccio il totale