import Board from "../Board/Board.tsx";
import {useState} from "react";

function Game() {
    const[board, setBoard] = useState<("X" | "O" | null)[]>(Array(9).fill(null));
    const [player, setPlayer] = useState<null | "X" | "O">("X");
    const [winner, setWinner] = useState<null | "X" | "O">(null);

    function handlePlay(index: number): void {
        if (board[index] !== null || winner !== null) return;

        const nextBoard = [...board];
        nextBoard[index] = player;

        setBoard(nextBoard);
        checkWinner(nextBoard);

        if (player === "X") setPlayer("O");
        else setPlayer("X");
    }

    function checkWinner(nextBoard: (null | "X" | "O")[]) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (nextBoard[a] && nextBoard[a] === nextBoard[b] && nextBoard[a] === nextBoard[c]) {
                setWinner(nextBoard[a]);
            }
        }
    }

    return (
        <>
            <p>Player play: {player}</p>
            <Board
                currentBoard={board}
                onPlay={handlePlay}
            />
            {winner && <p>Winner: {winner}</p>}
        </>
    );
}

export default Game;