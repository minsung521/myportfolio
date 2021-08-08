import React from "react";
import { Route } from "react-router-dom";
import Landing from "./Landing";
import About from "./About";
import Skils from "./Skils";
import Work from "./Work";

const App = () => {
	return (
		<div>
			<Route path="/" component={Landing} exact />
			<Route path="/about" component={About} />
			<Route path="/skils" component={Skils} />
			<Route path="/work" component={Work} />
		</div>
	);
};

export default App;
