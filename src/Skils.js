import React, { useEffect, useRef } from "react";
import Menu from "./components/Menu";
import "./Skils.css";
import Typed from "typed.js";

function Skils() {
	const iam = useRef(null);
	useEffect(() => {
		const typed = new Typed(iam.current, {
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
		<div className="About">
			<Menu />
			<div className="about-contents">
				<span className="enter-text">❯ </span>
				<span ref={iam} className="title"></span>
			</div>
		</div>
	);
}

export default Skils;
