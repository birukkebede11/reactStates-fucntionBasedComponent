import React, { useState } from "react";

function ObjStateEx() {
	const [car, setCar] = useState({
		brand: "Ford",
		model: "Mustang",
		year: "1964",
		color: "red",
		image:
			"https://images-stag.jazelc.com/uploads/garycrossleyford-m2en/Screen-Shot-2023-08-10-at-7.57.48-AM-1024x590.png",
	});

	const updateColor = () => {
		// setCar({
		// 	color: "blue",
		// 	image: "https://i.ytimg.com/vi/hwhVza9y0QU/maxresdefault.jpg",
		// }); // wrong way -> never update state directly! Might work on some situations, but it's not recommended. (We will lose all other data)

		// the right way (solution)
		setCar((prevState) => ({
			...prevState,
			color: "blue",
			image: "https://i.ytimg.com/vi/hwhVza9y0QU/maxresdefault.jpg",
		})); // right way
	};

	// console.log(car);

	return (
		<div>
			<h1>Why Using Callback function is good when updating states</h1>
			<hr />
			<h2>My {car.brand}</h2>
			<h2>
				It is a <span className={car.color}>{car.color}</span> {car.model} from {car.year}.
			</h2>

			<div>
				<img src={car.image} alt="" width="50%" />
			</div>

			<button type="button" onClick={updateColor}>
				Change Color To Blue
			</button>
		</div>
	);
}

export default ObjStateEx;
