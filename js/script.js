
displayResult(1, 2)


var argButtonName, buttonTest;

/**
 * Describe this function...
 */
function buttonClicked(argButtonName) {
  clearMessages();
  PlayerMove = argButtonNAme;
  console.log(argButtonName + ' został kliknięty');
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


}
buttonTest = document.getElementById('button-test');
buttonTest.addEventListener('click', function(){ buttonClicked('Guzik TEST'); });
argButtonName = document.getElementById(' button-rock');
argButtonName.addEventListener('click', function(){ buttonClicked(' kamień'); });
argButtonName = document.getElementById(' button-paer');
argButtonName.addEventListener('click', function(){ buttonClicked('papier'); });
argButtonName = document.getElementById('button-scissors');
argButtonName.addEventListener('click', function(){ buttonClicked(' nożyce'); });
