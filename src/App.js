import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Albums from "./components/albums";
import DisplayAlbums from "./components/displayAlbums";

function App() {
	return (
		<div>
			{/* <NavBar /> */}
			<Router>
				<Switch>
					<Route path="/" exact={true}>
						<Albums />
					</Route>
					<Route path="/displayAlbums">
						<DisplayAlbums />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
