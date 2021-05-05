import React from "react";
import PropTypes from "prop-types";

export const Cuadrado = props => {
	return (
		<button id="boton" className="col rounded" onClick={props.onClick}>
			{props.value}
		</button>
	);
};

Cuadrado.propTypes = {
	value: PropTypes.string,
	onClick: PropTypes.func
};
