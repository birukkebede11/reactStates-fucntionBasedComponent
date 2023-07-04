import React, { useState } from "react";
import LoggedIn from "./LogInLogOut/LoggedIn";
import LoggedOut from "./LogInLogOut/LoggedOut";

function LogInLogOut() {
	const [show, setShow] = useState(false);

	const status = () => {
		setShow(!show);
	};

	return (
		<div>
			<div>{show ? <LoggedIn /> : <LoggedOut />}</div>
			<button onClick={status}>{show ? "Log Out" : "Log In"}</button>
		</div>
	);
}

export default LogInLogOut;
