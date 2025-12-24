import Board from "../Board/Board.tsx";
import {useState} from "react";

function Game() {
    const[board, setBoard] = useState<("X" | "O" | null)[]>(Array(9).fill(null));
    const [player, setPlayer] = useState<null | "X" | "O">("X");

    function handlePlay(index: number): void {
        if (board[index] !== null) return;

        setBoard(
            () => {
                const nextBoard = [...board];
                nextBoard[index] = player;
                return nextBoard;
            }
        );

        if (player === "X") setPlayer("O");
        else setPlayer("X");
    }

    return (
        <>
            <p>Player play: {player}</p>
            <Board
                currentBoard={board}
                onPlay={handlePlay}
            />
        </>
    );
}

export default Game;