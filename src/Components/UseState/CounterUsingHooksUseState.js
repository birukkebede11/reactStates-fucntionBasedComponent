import React, { useState } from "react";
import "./counter.css";

function CounterUsingHooksUseState() {
	// console.log(useState("Evangadi"));

	// Use Array destructuring when using useState
	let [count, setCount] = useState(0);

	const increment = () => {
		// count = count + 10 // // Never do this. It won't update it.
		// console.log(count)
		setCount((x) => x + 10); // use the updater function
	};

	return (
		<div>
			<h1>useState Example</h1>
			<h1>{count}</h1>
			<button onClick={increment}>Increment by Ten</button>
		</div>
	);
}

export default CounterUsingHooksUseState;
