import squareStyle from "./Square.module.css";
import type {ReactNode} from "react";

interface squareProps {
    children: ReactNode;

    onClick: () => void;
}

function Square({children, onClick}: squareProps) {
    return (
        <button
            className={squareStyle.btn}
            onClick={onClick}
            type="button"
        >{children}</button>
    );
}

export default Square;