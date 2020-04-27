



var argButtonName, buttonTest;

/**
 * Describe this function...
 */
function buttonClicked(argButtonName) {
  clearMessages();
  PlayerMove == argButtonNAme;
  console.log(argButtonName + ' został kliknięty');
  1 == kamień;
  2 == papier;
  3 == nożyce;
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

}
buttonTest = document.getElementById('button-test');
buttonTest.addEventListener('click', function(Test){ buttonClicked('Guzik TEST'); });
argButtonName = document.getElementById(' button-rock');
argButtonName.addEventListener('click', function(Kamień){ buttonClicked(' kamień'); });
argButtonName = document.getElementById(' button-paper');
argButtonName.addEventListener('click', function(Papier){ buttonClicked('papier'); });
argButtonName = document.getElementById('button-scissors');
argButtonName.addEventListener('click', function(Nożyce){ buttonClicked(' nożyce'); });
