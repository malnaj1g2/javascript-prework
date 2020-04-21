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
