import React, { useRef, useEffect } from "react";
import Typed from "typed.js";
import Menu from "./components/Menu";
import "./Work.css";

function Work() {
	const iam = useRef(null);
	useEffect(() => {
		const typed = new Typed(iam.current, {
			strings: ["What i did?"], // Strings to display
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
		<div className="About">
			<Menu />
			<div className="about-contents">
				<span className="enter-text">❯ </span>
				<span ref={iam} className="title"></span>
			</div>
		</div>
	);
}

export default Work;
