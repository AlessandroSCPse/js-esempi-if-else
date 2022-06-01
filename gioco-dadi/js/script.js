// Pari o dispari: chiedere all'utente se vuole pari o 
// dispari e un numero intero compreso tra 1 e 9. 
// Generare un numero casuale compreso tra 1 e 9, 
// che sarà la giocata del computer. 
// Sommare i due numeri.
// Stabilire e comunicare chi ha vinto secondo le 
// regole di pari o dispari.

// Scelta dell'utente pari o dispari
const userEvenOrOdd = prompt('Digita pari o dispari');
// numero utente fra 1 e 9
const userNumber = parseInt( prompt('Dammi un numero tra 1 e 9') );
// numero random per il computer fra 1 e 9
const computerNumber = Math.floor(Math.random() * 9) + 1;

// Sommo numero utente + numero computer
const gameSum = userNumber + computerNumber;

// Se la somma è pari il risultato del gioco è pari
// Altrimenti sarà dispari
let gameResult;
if(gameSum % 2 === 0) {
    gameResult = 'pari';
} else {
    gameResult = 'dispari';
}

// Comparare la scelta dell'utente col risultato del gioco
// Se scelta utente e risultato sono uguali il giocatore ha vinto
// altrimenti ha perso
let userMessage;
if (userEvenOrOdd === gameResult) {
    userMessage = 'Hai vinto ;)';
} else {
    userMessage = 'Hai perso :(';
}

// Stampiamo il messaggio
alert(userMessage);