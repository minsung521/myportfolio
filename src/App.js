import React from "react";
import { Route } from "react-router-dom";
import Landing from "./Landing";
import About from "./About";
import Skills from "./Skills";
import Work from "./Work";
import Contact from "./Contact";
import "./App.css";

const App = () => {
	return (
		<body>
			<div className="mobileNotSupported">
				<header>
					<h1>모바일 미지원..</h1>
					<p>
						아직 모바일 접속이 불가합니다ㅜㅜ
						<br /> 현재 기능 개발중에 있습니다.
					</p>
				</header>
			</div>
			<div className="pcInterface">
				<Route path="/" component={Landing} exact />
				<Route path="/about" component={About} />
				<Route path="/skills" component={Skills} />
				<Route path="/work" component={Work} />
				<Route path="/Contact" component={Contact} />
			</div>
		</body>
	);
};

export default App;
