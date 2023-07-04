import React, { useState } from "react";

function ObjStateEx() {
	const [car, setCar] = useState({
		brand: "Ford",
		model: "Mustang",
		year: "1964",
		color: "red",
	});

	const updateColor = () => {
		// setCar({ color: "blue" }); // wrong way -> never update state directly! Might work on some situations, but it's not recommended. (We will lose all other data)

		// the right way (solution)
		setCar((prevState) => {
			return { ...prevState, color: "blue" };
		}); // right way
	};

	console.log(car);

	return (
		<div>
			<h1>Why Using Callback function is good when updating states</h1>
			<hr />
			<h2>My {car.brand}</h2>
			<h3>
				It is a <span className={car.color}>{car.color}</span> {car.model} from{" "}
				{car.year}.
			</h3>
			<button type="button" onClick={updateColor}>
				Change Color To Blue
			</button>
		</div>
	);
}

export default ObjStateEx;
