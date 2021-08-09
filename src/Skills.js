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
					<p className="Skills-article">
						<br />
						<br />
						1년 전부터 개발자가 되기 위한 공부를 시작한 이후로 저는 클론코딩,
						토이 프로젝트를 진행하고, 각 분야의 재능있는 사람들과 협력하며
						경험을 쌓았습니다.
						<br />
						<br />
						풀스택 개발자를 지향하며 Flutter와 같은 앱 개발 프레임워크, 딥러닝을
						비롯한 머신러닝기술에 관심이 많습니다!
					</p>
					<div className="Skills-detail">
						<li>
							<div className="Skill-bar">
								<span>React</span>
								<footer>
									<div Style="width:40%"></div>
								</footer>
							</div>
						</li>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Skills;
