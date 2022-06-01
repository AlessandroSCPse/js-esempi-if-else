// Chiediamo all'utente due parole in successione.
// Andiamo poi a verificare quale delle due parole 
// è più lunga e stampiamo in console un messaggio appropriato.

// Due prompt per chiedere due parole
const firstWord = prompt('Dimmi la prima parola');
const secondWord = prompt('Dimmi la seconda parola');

// Ottenere le lunghezze delle parole come valori numeri
const firstWordLength = firstWord.length;
const secondWordLength = secondWord.length;

// Comparo le parole:
// se la prima parola è più lunga della seconda -> msg
// se la seconda parola è più lunga -> msg
// altrimenti sono uguali
let userMessage;

if (firstWordLength > secondWordLength) {
    userMessage = 'Prima parola più lunga';
} else if (secondWordLength > firstWordLength) {
    userMessage = 'Seconda parola più lunga';
} else {
    userMessage = 'Le parole hanno la stessa lunghezza';
}

// Stampo il messaggio
console.log(userMessage);