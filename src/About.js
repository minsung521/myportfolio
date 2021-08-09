import React, { useRef, useEffect } from "react";
import Typed from "typed.js";
import Menu from "./components/Menu";
import "./About.css";

function About() {
	const iam = useRef(null);
	useEffect(() => {
		const typed = new Typed(iam.current, {
			strings: ["I am..."], // Strings to display
			// Speed settings, try diffrent values untill you get good results
			startDelay: 300,
			typeSpeed: 120,
			backSpeed: 120,
			backDelay: 120,
			loop: false,
		});

		// Destropying
		return () => {
			typed.destroy();
		};
	}, []);
	return (
		<div className="About">
			<Menu />
			<div className="About-contents">
				<div>
					<span className="enter-text">❯ </span>
					<span ref={iam} className="title"></span>
				</div>
				<div className="About-contents-main">
					<p className="About-article"></p>
					<div className="About-detail"></div>
				</div>
			</div>
		</div>
	);
}

export default About;
