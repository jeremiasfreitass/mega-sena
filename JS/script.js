var state = {board: [], currenteGame: [], savedGames: [] };


function start(){
    createBoard();
    newGame();

    console.log(state.board);
}

function createBoard(){
    state.board = [];
    
    for(var i = 1; i <=60; i++){
        state.board.push(i);
    }
}

function newGame(){
    resetGame();
    render();

}

function render(){
    renderBoard();
}

function renderBoard(){
    var divBoard = document.querySelector('#megasena-board');
    divBoard.innerHTML = '';

    var ulNumbers = document.createElement('ul');
    
    for(var i = 0; i < state.board.length; i++){
        var currenteNumber = state.board[i];

        var liNumber = document.createElement('li');
        liNumber.textContent = currenteNumber;

        ulNumbers.appendChild(liNumber);
    }
    divBoard.appendChild(ulNumbers);
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
    if(isNumberInGame(numberToAdd)){
        console.error('Este número já está no jogo!', numberToAdd);
        return;
    }

    state.currenteGame.push(numberToAdd);
}

function removeNumberFromGame(numberToRemove){
    var newGame = [];

    for(var i = 0; i < state.currenteGame; i++){
        var currenteNumber = state.currenteGame[i];
        
        if(currenteNumber === numberToRemove){
            continue;
        }
        newGame.push(currenteNumber);
    }
    state.currenteGame = newGame;
}

function isNumberInGame(numberToCheck){
    return state.currenteGame.includes(numberToCheck);  
}

function savedGame(){
    if(!isGameComplete()){
        console.error('O jogo não está completo');
        return;
    }
    state.savedGames.push(state.currenteGame);
}

function isGameComplete(){
    return state.currenteGame.length === 6;
} 

function resetGame(){
    state.currenteGame = [];
}


start();