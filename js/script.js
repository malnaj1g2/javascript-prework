
const gameSummary={
  numbers: 0,
  wins: 0,
  lost: 0,
  draw: 0,
  argPlayerMove:"",
  argComputerMove:"",
}
/*pobieram wartość
gameSumary.numbers
wydziela osobne wartości
*/

/**
 * Describe this function...
 */
function buttonClicked(argButtonName) {
  clearMessages();
  gameSummary.numbers = gameSummary.numbers +1


gameSummary.argPlayerMove = argButtonName
gameSummary.argComputerMove = Math.floor(Math.random()*3)
  console.log(argButtonName + ' został kliknięty');

  function displayResult(argPlayerMove, argComputerMove) {

    if(argPlayerMove === 1 && argComputerMove === 2) {
      printMessage('Przegrywasz');
      gameSummary.lost = gameSummary.lost +1
    }
    else if(argPlayerMove === 2 && argComputerMove === 1) {
      printMessage('Wygrywasz')
        gameSummary.wins = gameSummary.wins +1
    }
    else if(argPlayerMove === 3 && argComputerMove === 1) {
      printMessage('Przegrywasz')
        gameSummary.lost = gameSummary.lost +1
    }
    else if(argPlayerMove === 3 && argComputerMove === 2) {
      printMessage('Wygrywasz')
      gameSummary.wins = gameSummary.wins +1
    }
    else if(argPlayerMove === 1 && argComputerMove === 3) {
      printMessage('Wygrywasz')
      gameSummary.wins = gameSummary.wins +1
    }
    else if(argPlayerMove === 1 && argComputerMove === 3) {
      printMessage('Przegrywasz')
        gameSummary.lost = gameSummary.lost +1
    }
    else {
      printMessage('Remis')
      gameSummary.draw = gameSummary.draw +1
    }

  }
displayResult(gameSummary.argPlayerMove, gameSummary.argComputerMove)
document.querySelector('.numbers span').innerHTML = gameSummary.numbers
document.querySelector('.won span').innerHTML = gameSummary.wins
document.querySelector('.lost span').innerHTML = gameSummary.lost
document.querySelector('.draw span').innerHTML = gameSummary.draw
}

const buttonTest = document.getElementById('button-test');
buttonTest.addEventListener('click', function(){ buttonClicked(); });
const argButtonRock = document.getElementById('button-rock');
argButtonRock.addEventListener('click', function(){ buttonClicked(1); });
const argButtonPaper = document.getElementById('button-paper');
argButtonPaper.addEventListener('click', function(){ buttonClicked(2); });
const argButtonScissors = document.getElementById('button-scissors');
argButtonScissors.addEventListener('click', function(){ buttonClicked(3); });
