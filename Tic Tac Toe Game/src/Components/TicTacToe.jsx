import React from 'react'

function TicTacToe() {

    const [board, setBoard] = React.useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = React.useState(true); // State to track whose turn it is
    const [winner, setWinner] = React.useState(null); // State to track the winner

    const renderSquare = (index) => {
        return (
            <button className='sqaure' onClick={() => handleClick(index)}>{board[index]}</button>
        )
    }

    const handleClick = (index) => {
        if (board[index] || winner) return; // Prevent clicking on already filled squares or after a winner is declared

        const newBoard = [...board]; // Create a copy of the board array
        newBoard[index] = isXTurn ? 'X' : 'O'; // Set the clicked square to 'X' or 'O'
        setBoard(newBoard); // Update the board state
        setIsXTurn(!isXTurn); // Toggle the turn
        
        const winnerCombination = checkWinner(newBoard); // Check for a winner
        if (winnerCombination) {
            setWinner(newBoard[winnerCombination[0]]); // Set the winner state
        }
    }

    const checkWinner = (newBoard) => {
        const combinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i < combinations.length; i++) {
            const [a, b, c] = combinations[i]; // Destructure the combination array
            if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[b] === newBoard[c]) {
                return combinations[i];
            }
        }
        return null; // No winner yet
    }

    const handleReset = () => {
        setBoard(Array(9).fill(null)); // Reset the board to initial state
        setIsXTurn(true); // Reset the turn to 'X'
        setWinner(null); // Reset the winner state
    }

    return (
        <>
            <div className='board'>
                <div className='board-row'>
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div className='board-row'>
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div className='board-row'>
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>
            </div>
            {winner && <div className='winner'>{winner} is the Winner of this Game.</div>}
            <button className='ResetBtn' onClick={handleReset}>Reset</button>
        </>
    )
}

export default TicTacToe
