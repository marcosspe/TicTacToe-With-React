import React, { useState } from "react";
import { calcularGanador } from "./component/ganador.js"

export const juego = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const ganador = calcularGanador(board);

     const handleClick = i => {
        const boardCopy = [...board];
        if (ganador || boardCopy[i]) return;
        boardCopy[i] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);
        setXisNext(!xIsNext);
    }
    const renderMoves = () => (
        <button type="button"
				className="btn btn-light" onClick={() => setBoard(Array(9).fill(null))}>
            START
        </button>
    )
      return (
        <>
            <Board cell={board} onClick={handleClick} />
            <div>
                <p>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</p>
                {renderMoves()}
            </div>
        </>
    )

}