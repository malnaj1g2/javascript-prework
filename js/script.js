



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

    if(argPlayerMove === kamień && argComputerMove === papier) {
      console.log('Przegrywasz');
    }
    else if(argPlayerMove === papier && argComputerMove === kamień) {
      console.log('Wygrywasz')
    }
    else if(argPlayerMove === nożyce && argComputerMove === kamień) {
      console.log('Przegrywasz')
    }
    else if(argPlayerMove === nożyce && argComputerMove === papier) {
      console.log('Wygrywasz')
    }
    else if(argPlayerMove === kamień && argComputerMove === nożyce) {
      console.log('Wygrywasz')
    }
    else if(argPlayerMove === kamień && argComputerMove === nożyce) {
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
argButtonName.addEventListener('click', function(kamień){ buttonClicked(' kamień'); });
argButtonName = document.getElementById(' button-paper');
argButtonName.addEventListener('click', function(papier){ buttonClicked('papier'); });
argButtonName = document.getElementById('button-scissors');
argButtonName.addEventListener('click', function(nożyce){ buttonClicked(' nożyce'); });
