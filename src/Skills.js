import React, { useEffect, useRef } from "react";
import Menu from "./components/Menu";
import "./Skills.css";
import Typed from "typed.js";

function Skills() {
	const skills = useRef(null);
	useEffect(() => {
		const typed = new Typed(skills.current, {
			strings: ["What can i do?"], // Strings to display
			// Speed settings, try diffrent values untill you get good results
			startDelay: 300,
			typeSpeed: 80,
			backSpeed: 80,
			backDelay: 80,
			loop: false,
		});

		// Destropying
		return () => {
			typed.destroy();
		};
	}, []);
	return (
		<div className="Skills">
			<Menu />
			<div className="Skills-contents">
				<div>
					<span className="enter-text">❯ </span>
					<span ref={skills} className="title"></span>
				</div>
				<div className="Skills-contents-main">
					<p className="Skills-article"></p>
					<div className="Skills-detail"></div>
				</div>
			</div>
		</div>
	);
}

export default Skills;
