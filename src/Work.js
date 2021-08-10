import React, { useRef, useEffect } from "react";
import Typed from "typed.js";
import Menu from "./components/Menu";
import "./Work.css";

function Work() {
	const work = useRef(null);
	useEffect(() => {
		const typed = new Typed(work.current, {
			strings: ["Introducing my works!"], // Strings to display
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
		<div className="Work">
			<Menu />
			<div className="Work-contents">
				<div>
					<span className="enter-text">❯ </span>
					<span ref={work} className="title"></span>
				</div>
				<div className="Work-cards">
					<div className="card"></div>
					<div className="card"></div>
					<div className="card"></div>
					<div className="card"></div>
					<div className="card"></div>
					<div className="card"></div>
					<div className="card"></div>
					<div className="card"></div>
					<div className="card"></div>
					<div className="card"></div>
					<div className="card"></div>
					<div className="card"></div>
					<div className="card"></div>
					<div className="card"></div>
					<div className="card"></div>
				</div>
			</div>
		</div>
	);
}

export default Work;
