import React from "react";
import { Route } from "react-router-dom";
import Landing from "./Landing";
import About from "./About";
import Skills from "./Skills";
import Work from "./Work";
import Contact from "./Contact";

const App = () => {
	return (
		<div>
			<Route path="/" component={Landing} exact />
			<Route path="/about" component={About} />
			<Route path="/skills" component={Skills} />
			<Route path="/work" component={Work} />
			<Route path="/Contact" component={Contact} />
		</div>
	);
};

export default App;
