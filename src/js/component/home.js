import React from "react";
import { Login } from "./login.js";
import { Cuadrado } from "./cuadrado.js";
import { Tablero } from "./tablero.js";

//create your first component
export function Home() {
	return (
		<div>
			<h1 className="text-white">Tic Tac Toe in React.js</h1>
			<Login />
			<Tablero />
		</div>
	);
}
