import React, { useEffect } from "react";

function LoggedIn() {
	useEffect(() => {
		// console.log("Hi, this component is mounting");
		alert("Logging in")

		return () => {
			// console.log("Bye, I'm unmounting");
			alert("You have successfully logged out");
		};
	}, []);

	return (
		<div>
			<h1>User Logged In</h1>
			<h3>Name: Abebe</h3>
			<h3>BootCamp: Evangadi</h3>
			<h3>Group: 5</h3>
		</div>
	);
}

export default LoggedIn;
