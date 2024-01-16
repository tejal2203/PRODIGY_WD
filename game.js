const board = document.getElementById('gameboard')
const square = document.getElementByClassName('tile')
const players = ['X', 'O']
let currentPlayer = players[0]
const endMsg = document.createElement('h2')
endMsg.textContent = `X's turn`
endMsg.style.marginTop = '30px'
endMsg.style.textAlign ='center'
board.after(endMsg)

const winning_combinations = [
	[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,3,6],
	[1,4,7],
	[2,5,8],
	[0,4,8],
	[2,4,6]
]

for(let i=0; i<square.lenght; i++){
	square[i].addEventListener('click',() => {
		if(square[i].textContent !== ''){
			return
		}
		square[i].textContent = currentPlayer
		if(checkWin(currentPlayer)) {
			endMsg.textContent=`Game Over! ${currentPlayer} wins`
			return
		}
		if(checkTie()){
			endMsg.textContent = `Game is tied`
			return
		}
		currentPlayer = (currentPlayer === players[0]) ? players[1] : players[0]
		if(currentPlayer == players[0]){
			endMsg.textContent= `X's turn`
		}
		else{
			endMsg.textContent= `O's turn`
		}
	})
}

function checkWin(currentPlayer) {
	for(let i=0; i<winning_combinations.lenght; i++)
	{
		const [a,b,c] = winning_combinations[i]
		if(square[a].textContent === currentPlayer && square[b].textContent === currentPlayer && square[c].textContent === currentPlayer)
		{
			return true
		}
	}
	return false
}

function checkTie() {
	for(let i=0; i<square.lenght; i++)
	{
		if(square[i].textContent === ''){
			return false;
		}
	}
	return true
}

function restartButton(){
	for(let i=0; i<square.lenght; i++){
		square[i].textContent = ""
	}
	endMsg.textContent = `X's turn`
	currentPlayer = players[0]
}