import React, { useContext } from "react";
import { MyContext } from "../../App";

function UsingUseContext() {
	// Since the useContext function returns the value of the context, you can assign it to a variable you want
	const exampleContext = useContext(MyContext);
	// console.log(exampleContext);
	return (
		<div>
			<br />
			<hr />
			<hr />
			<h1>Hello from UsingUseContext Component</h1>
			<h3>
				Using the useContext hook: <span className="blue">{exampleContext}</span>
			</h3>
		</div>
	);
}

export default UsingUseContext;
