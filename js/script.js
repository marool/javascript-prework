{
const playGame = function (playerInput) {

	clearMessages();

		const randomNumber = Math.floor(Math.random() * 3 + 1);

		console.log('Wylosowana liczba to: ' + randomNumber);

		/*playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/

		const getMoveName = function (argMoveId){
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

		const displayResult = function (argComputerMove, argPlayerMove) {
			console.log('moves:', argComputerMove, argPlayerMove);
			if(argComputerMove == 'kamień' && argPlayerMove == 'papier') {
			  printMessage('Ty wygrywasz!');
			} else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
			  printMessage('Ty wygrywasz!');
			} else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
			  printMessage('Ty wygrywasz!');
			} else if(argComputerMove == argPlayerMove) {
			  printMessage('Remis!');
			} else if(argPlayerMove === 'nieznany ruch') {
			  printMessage('Spróbuj jeszcze raz');
			} else {
			  printMessage('Przegrywasz!');
			}
	}

	const computerMove = getMoveName(randomNumber);
		  playerMove = getMoveName(playerInput);
	printMessage('Komputer wylosował: ' + computerMove);
	printMessage('Gracz wylosował: ' + playerMove);

	printMessage('Wynik: ');
	displayResult(computerMove, playerMove);
}

 document.getElementById('play-rock').addEventListener('click', function(){
	(playGame(1));
});

 document.getElementById('play-paper').addEventListener('click', function(){
	(playGame(2));
});

 document.getElementById('play-scissors').addEventListener('click', function(){
	(playGame(3));
});
}

