import React from "react";
import { MyContext } from "../../App";

function Component3() {
	return (
		<div>
			<MyContext.Consumer>
				{(x) => {
					console.log(x)
					return (
						<div>
							<h1>Hello from Component3</h1>
							<h3>
								Using MyContext Consumer: <span className="red"> {x}</span>
							</h3>
						</div>
					);
				}}
			</MyContext.Consumer>
		</div>
	);
}

export default Component3;
