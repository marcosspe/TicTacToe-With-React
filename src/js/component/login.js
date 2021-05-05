import React from "react";

export const Login = () => {
	return (
		<div>
			<h2 className="text-white"> Pick A Weapon</h2>
			<div id="contstart" className="container rounded mt-5 bg-info">
				<h3 className="text-white pt-2 text-center">
					CHOOSE YOUR WEAPON
				</h3>
				<div id="inputs">
					<div className="row d-flex justify-content-center">
						<input
							className="mr-1 rounded border-0"
							placeholder="Player 1 Username"></input>
						<input
							className="ml-1 rounded border-0"
							placeholder="Player 2 Username"></input>
					</div>
					<div className="row d-flex justify-content-center">
						<h1 className="text-warning bg-secondary rounded p-2 mr-5 mt-2">
							<i className="fas fa-times-circle"></i>
						</h1>
						<h1 className="text-danger bg-secondary rounded p-2 ml-5 mt-2">
							<i className="far fa-circle"></i>
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
};
