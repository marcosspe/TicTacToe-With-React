import React, { useState } from "react";
import { Cuadrado } from "./cuadrado.js";
//import PropTypes from "prop-types";

export const Tablero = () => {
	const arreglosCuadradosVacio = ["", "", "", "", "", "", "", "", ""];
	const [cuadrados, setCuadrados] = useState(arreglosCuadradosVacio);
	const [turno, setTurno] = useState(true);

	function calculateWinner(squares) {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		];
		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			if (
				squares[a] &&
				squares[a] === squares[b] &&
				squares[a] === squares[c]
			) {
				return squares[a];
			}
		}
		return null;
	}

	let jugar = posicion => {
		const copyarreglosCuadrados = [...cuadrados];
		copyarreglosCuadrados[posicion] = turno ? "X" : "O";
		setCuadrados(copyarreglosCuadrados);
		setTurno(!turno);
	};

	const Ganador = () => {
		let alguienGano = calculateWinner(cuadrados);
		if (alguienGano) {
			return <h2>{alguienGano} WINS</h2>;
		} else {
			return <h2>{turno ? "X" : "O"} is next</h2>;
		}
	};

	return (
		<div className="container">
			<Ganador />
			<div className="row">
				<Cuadrado value={cuadrados[0]} onClick={() => jugar(0)} />
				<Cuadrado value={cuadrados[1]} onClick={() => jugar(1)} />
				<Cuadrado value={cuadrados[2]} onClick={() => jugar(2)} />
			</div>
			<div className="row">
				<Cuadrado value={cuadrados[3]} onClick={() => jugar(3)} />
				<Cuadrado value={cuadrados[4]} onClick={() => jugar(4)} />
				<Cuadrado value={cuadrados[5]} onClick={() => jugar(5)} />
			</div>
			<div className="row">
				<Cuadrado value={cuadrados[6]} onClick={() => jugar(6)} />
				<Cuadrado value={cuadrados[7]} onClick={() => jugar(7)} />
				<Cuadrado value={cuadrados[8]} onClick={() => jugar(8)} />
			</div>
		</div>
	);
};
