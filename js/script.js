function displayResult(argPlayerMove, argComputerMove) {

  if(argPlayerMove === 1 && argComputerMove === 2) {
    console.log('Przegrywasz');
  }
  else if(argPlayerMove === 2 && argComputerMove === 1) {
    console.log('Wygrywasz')
  }
  else if(argPlayerMove === 3 && argComputerMove === 1) {
    console.log('Przegrywasz')
  }
  else if(argPlayerMove === 3 && argComputerMove === 2) {
    console.log('Wygrywasz')
  }
  else if(argPlayerMove === 1 && argComputerMove === 3) {
    console.log('Wygrywasz')
  }
  else if(argPlayerMove === 2 && argComputerMove === 3) {
    console.log('Przegrywasz')
  }
  else {
    console.log('Remis')
  }

}

displayResult(1, 2)
