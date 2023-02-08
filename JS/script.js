var state = {board: [], currenteGame: [], savedGames: [] };

function start(){
    addNumberToGame(1);
    addNumberToGame(2);
    addNumberToGame(3);
    addNumberToGame(3);
    addNumberToGame(3);
    addNumberToGame(3);
    addNumberToGame(3);
    addNumberToGame(3);
    addNumberToGame(444);

    console.log(state.currenteGame);
}

function addNumberToGame(numberToAdd){
    if(numberToAdd < 1 || numberToAdd > 60){
        console.log("Número inválido!");
        return;
    }
    if(state.currenteGame.length >= 6){
        console.log("O jogo já está completo!");
        return;
    }

    state.currenteGame.push(numberToAdd);
}
start();