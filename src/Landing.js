import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./Landing.css";
import Menu from "./components/Menu";

const Landing = () => {
	const name = useRef(null);
	useEffect(() => {
		const typed = new Typed(name.current, {
			strings: ["I'm Web Developer!", "I'm Student!", "I'm Minsung!"], // Strings to display
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
		<div className="Landing">
			<Menu />
			<div className="greeting-contents">
				<div>Hi!</div>
				<span className="enter-text">❯ </span>
				<span ref={name} className="name-text"></span>
			</div>
		</div>
	);
};

export default Landing;
