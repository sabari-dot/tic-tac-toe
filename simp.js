let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleClick(cellIdx) {
    if (board[cellIdx] === '' && gameActive) {
        board[cellIdx] = currentPlayer;
        document.getElementById('status').textContent = `Player ${currentPlayer}'s turn`;
        document.getElementsByClassName('cell')[cellIdx].textContent = currentPlayer;
        checkResult();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkResult() {
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            gameActive = false;
            document.getElementById('status').textContent = `Player ${board[a]} wins!`;
            highlightWinningCells(winningConditions[i]);
            return;
        }
    }
    if (!board.includes('')) {
        gameActive = false;
        document.getElementById('status').textContent = "It's a draw!";
    }
}

function highlightWinningCells(cells) {
    cells.forEach(idx => {
        document.getElementsByClassName('cell')[idx].style.backgroundColor = 'lightgreen';
    });
}

function resetGame() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    document.getElementById('status').textContent = `Player ${currentPlayer}'s turn`;
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = '';
        cells[i].style.backgroundColor = '#eee';
    }
}
