var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
  computerMove = 'kamień';
} else {
  computerMove = 'nieznany ruch';
}
printMessage('Mój ruch: ' + computerMove);
computerMove = Math.floor(Math.random() * 2 + 1);
console.log('Wylosowana liczba to:' + randomNumber);
if (randomNumber == '2') {
  computerMove = ' papier';
} else {
  computerMove = ' nieznany ruch';
}
printMessage(' Mój ruch:' + computerMove);
computerMove = Math.floor((Math.random() + 1) * 1);
console.log(' Wylosowana liczba to:' + randomNumber);
if (randomNumber == '3') {
  computerMove = ' nożyce';
} else {
  computerMove = ' nieznany ruch';
}
printMessage(' Mój ruch:' + computerMove);
computerMove = 'nieznany ruch';

var playerInput, playerMove;
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Wpisana odpowiedź to: ' + playerInput);
if (playerInput == '1') {
  playerMove = 'kamień';
} else {
  playerMove = 'nieznany ruch';
}
printMessage('Twój ruch: ' + playerMove);
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Wpisana odpowiedź to:' + playerInput);
if (playerInput == '2') {
  playerMove = ' papier';
} else if (playerInput > '3') {
  playerMove = ' błąd';
} else {
  playerMove = ' nieznany ruch';
}
printMessage(' Twój ruch: ' + playerMove);
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Wpisana odpowiedź to:' + playerInput);
if (playerInput == '3') {
  playerMove = ' nożyce';
} else if (playerInput > '3') {
  playerMove = 'błąd';
} else {
  playerMove = ' nieznany ruch ';
}
printMessage(' Twój ruch: ' + playerMove);
