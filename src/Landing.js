import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./Landing.css";
import Menu from "./components/Menu";

const Landing = () => {
	const el = useRef(null);
	useEffect(() => {
		const typed = new Typed(el.current, {
			strings: ["I'm Minsung."], // Strings to display
			// Speed settings, try diffrent values untill you get good results
			startDelay: 300,
			typeSpeed: 100,
			backSpeed: 100,
			backDelay: 100,
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
			<div className="greeting-text">
				<div>Hi!</div>
				<span className="enter-text">❯ </span>
				<span ref={el} className="name-text"></span>
			</div>
		</div>
	);
};

export default Landing;
