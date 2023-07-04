import React, { useState, useEffect } from "react";
import "./effects.css";

function UsingUseEffect() {
	const [count, setCount] = useState(100);
	const [age, setAge] = useState(50);

	useEffect(() => {
		console.log("Hello World");
		document.title = `Count: ${count}`;
	}, [age, count]);

	return (
		<div>
			<h1>Function Based Components Life Cycle</h1>
			<div className="valueHolder">
				<h3>Count is: {count}</h3>
			</div>
			<button onClick={() => setCount((count) => count + 1)}>
				Increment Count
			</button>

			<br />
			<hr />
			<br />

			<div className="valueHolder">
				<h3>Age is: {age}</h3>
			</div>
			<button onClick={() => setAge((age) => age + 1)}>Increment Age</button>
		</div>
	);
}

export default UsingUseEffect;
