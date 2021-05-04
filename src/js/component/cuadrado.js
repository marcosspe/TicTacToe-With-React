import React from "react";
import PropTypes from "prop-types";

export const Cuadrado = props => {
	return (
		<div className="col" onClick={props.onClick}>
			{props.value}
		</div>
	);
};

Cuadrado.propTypes = {
	value: PropTypes.string,
	onClick: PropTypes.func
};
