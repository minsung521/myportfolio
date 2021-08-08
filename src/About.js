import React, { useRef, useEffect } from "react";
import Typed from "typed.js";
import Menu from "./components/Menu";
import "./about.css";

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
			<div className="about-contents">
				<span className="enter-text">❯ </span>
				<span ref={iam} className="title"></span>
				<p>
					좋아하는 것은 코딩 축구 기타 유튜브 시청 음악감상 등이 있습니다.
					싫어하는 것은 딱히 없습니다. <br />
					안에 내용물까지 만드려니 피곤해서 내일 만들겠습니다.
				</p>
			</div>
		</div>
	);
}

export default About;
