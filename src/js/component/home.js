import React, { useState } from "react";
import { Login } from "./login.js";
import { Tablero } from "./tablero.js";

//create your first component
export function Home() {
	const [inicio, setInicio] = useState(true);

	return (
		<div>
			<h1 className="text-white">Tic Tac Toe in React.js</h1>
			{inicio ? <Login /> : <Tablero />}

			<button
				id="start"
				className="rounded btn-light mt-3"
				onClick={() => {
					setInicio(false);
				}}>
				START
			</button>
		</div>
	);
}
