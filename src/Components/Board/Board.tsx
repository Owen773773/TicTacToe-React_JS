import Square from "../Square/Square.tsx";
import boardStyle from "./Board.module.css"

interface boardProps {
    currentBoard: (null | "X" | "O")[];
    onPlay: (index: number) => void;
}

function Board({currentBoard, onPlay}: boardProps) {
    const squareCompList = currentBoard.map(
        (value, index) => {
            return (
                <div className="board">
                    <Square
                        key={index}
                        onClick={() => onPlay(index)}
                    >
                        {value}
                    </Square>
                </div>
            );
        }
    )

    return (
        <div className={boardStyle.board}>
            {squareCompList}
        </div>
    );
}

export default Board;