import React from "react";
import { Cuadrado } from "./cuadrado.js";
import { Tablero } from "./tablero.js";

//create your first component
export function Home() {
	return (
		<div>
			<h1>Hola</h1>
			<Tablero />
		</div>
	);
}
