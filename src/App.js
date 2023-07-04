import { createContext } from "react";
import "./App.css";
import LogInLogOut from "./Components/UseEffect/LogInLogOut";
import UsingUseEffect from "./Components/UseEffect/UsingUseEffect";
import CounterUsingHooksUseState from "./Components/UseState/CounterUsingHooksUseState";
import ObjStateEx from "./Components/UseState/ObjStateEx";
import Component1 from "./Components/UseContext/Component1";

function App() {
	return (
		<div className="App">
			<CounterUsingHooksUseState />

			{/* <ObjStateEx /> */}

			{/* <UsingUseEffect /> */}
			{/* <LogInLogOut /> */}
		</div>
	);
}

// Uncomment the code below for context API example
// First create context
// export const MyContext = createContext();
// // console.log(MyContext);

// function App() {
// 	return (
// 		<div className="App">
// 			<div>
// 				<MyContext.Provider value="Hello World">
// 					<Component1 />
// 				</MyContext.Provider>
// 			</div>
// 		</div>
// 	);
// }

export default App;
