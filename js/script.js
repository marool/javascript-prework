let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

printMessage('Komputer wylosował: ' + computerMove);

playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

let playerMove = getMoveName(playerInput);

printMessage('Gracz wylosował: ' + playerMove);

function getMoveName(argMoveId){
  if (argMoveId == 1){
    return 'kamień';
  } else if (argMoveId == 2) {
  	return 'papier';
  } else if (argMoveId == 3) {
  	return 'nożyce';
  } else {
  	printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }
}

function displayResult(argComputerMove, argPlayerMove){
	console.log('moves:', argComputerMove, argPlayerMove);
	if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
  printMessage('Ty wygrywasz!');
} else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
  printMessage('Ty wygrywasz!');
} else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
  printMessage('Ty wygrywasz!');
} else if(argComputerMove == argPlayerMove){
  printMessage('Remis!');
} else if(argPlayerMove === 'nieznany ruch'){
  printMessage('Spróbuj jeszcze raz');
} else {
  printMessage('Przegrywasz!');
}
}
printMessage('Wynik: ' + displayResult(argComputerMove, argPlayerMove));


