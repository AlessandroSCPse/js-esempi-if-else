// Se la x è maggiore di 7 scrivo "x è maggiore di 7"
// Se la x è maggiore di 25 scrivo "x è maggiore di 25"
// Altrimenti scrivo "numero errato"
const number = 5;

// Confronto se il numero è maggiore di 25, 
// poi se è maggiore di 7, altrimenti numero errato
// let userMessage;

// if (number > 25) {
//     userMessage = 'numero è maggiore di 25';
// } else if (number > 7) {
//     userMessage = 'numero è maggiore di 7';
// } else {
//     userMessage = 'numero errato';
// }

// ASSEGNAZIONE DI UNA VARIABILE E LA MODIFICO SOLO SE SERVE
let userMessage = 'numero errato';

if (number > 25) {
    userMessage = 'numero è maggiore di 25';
} else if (number > 7) {
    userMessage = 'numero è maggiore di 7';
}

// Stampo
// alert(userMessage);
document.getElementById('user-message').innerHTML = userMessage;
