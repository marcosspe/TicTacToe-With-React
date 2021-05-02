import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div>
			<h1 className="display-3 text-center">Tic Tac Toe</h1>
			<button type="button" className="btn btn-light" id="startButton">
				START
			</button>
			<div className="contenedor col-12">
				<div className="row">
					<div className="cell">Hola</div>
					<div className="cell"></div>
					<div className="cell"></div>
				</div>
				<div className="row">
					<div className="cell"></div>
					<div className="cell"></div>
					<div className="cell"></div>
				</div>
				<div className="row">
					<div className="cell"></div>
					<div className="cell"></div>
					<div className="cell"></div>
				</div>
			</div>
		</div>
	);
}
