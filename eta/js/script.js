// età: chiedere all'utente con due prompt gli anni di due persone 
// e comunicare quale delle due è più grande

// Chiedere l'età delle persone
const firstAge = parseInt( prompt('Dammi la prima età') );
const secondAge = parseInt( prompt('Dammi la seconda età') );
console.log(firstAge);
console.log(secondAge);

// Se la prima età è maggiore della seconda, la prima persona ha un'età più alta
// Atrimenti Se la seconda età è maggiore della prima, la seconda persona ha un'età più alta
// Altrimenti l'eta è uguale
let userMessage;

if(firstAge > secondAge) {
    userMessage = "la prima persona ha un'età più alta";
} else if (secondAge > firstAge) {
    userMessage = "la seconda persona ha un'età più alta";
} else {
    userMessage = "l'eta è uguale";
}

// Stampare il messaggio
alert(userMessage);