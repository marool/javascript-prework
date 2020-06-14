let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

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

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
} else if(playerInput == '2'){
  playerMove = 'papier';
} else if(playerInput == '3'){
  playerMove = 'nożyce';
}

printMessage('Twój ruch to: ' + playerMove);


if( computerMove == 'kamień' && playerMove == 'papier'){
  printMessage('Ty wygrywasz!');
} else if( computerMove == 'papier' && playerMove == 'nożyce'){
  printMessage('Ty wygrywasz!');
} else if( computerMove == 'nożyce' && playerMove == 'kamień'){
  printMessage('Ty wygrywasz!');
} else if( computerMove == playerMove){
  printMessage('Remis!');
} else if( playerMove === 'nieznany ruch'){
    printMessage('Spróbuj jeszcze raz')
} else {
  printMessage('Przegrywasz!');
} 