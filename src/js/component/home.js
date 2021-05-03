import React from "react";
import { juego } from "./component/juego.js";

//create your first component
export function Home() {
	return (
		<div>
			<h1 className="display-3 text-center">Tic Tac Toe</h1>

			<div className="contenedor col-12">
				<div className="row">
					<div
						className="cell"
						value={board[0]}
						onClick={() => handleClick(0)}></div>
					<div
						className="cell"
						value={board[1]}
						onClick={() => handleClick(1)}></div>
					<div
						className="cell"
						value={board[2]}
						onClick={() => handleClick(2)}></div>
				</div>
				<div className="row">
					<div
						className="cell"
						value={board[3]}
						onClick={() => handleClick(3)}></div>
					<div
						className="cell"
						value={board[4]}
						onClick={() => handleClick(4)}></div>
					<div
						className="cell"
						value={board[5]}
						onClick={() => handleClick(5)}></div>
				</div>
				<div className="row">
					<div
						className="cell"
						value={board[6]}
						onClick={() => handleClick(6)}></div>
					<div
						className="cell"
						value={board[7]}
						onClick={() => handleClick(7)}></div>
					<div
						className="cell"
						value={board[8]}
						onClick={() => handleClick(8)}></div>
				</div>
			</div>
		</div>
	);
}
