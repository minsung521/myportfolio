import React, { useRef, useEffect } from "react";
import Typed from "typed.js";
import Menu from "./components/Menu";
import "./Contact.css";

function Contact() {
	const iam = useRef(null);
	useEffect(() => {
		const typed = new Typed(iam.current, {
			strings: ["Contact me!"], // Strings to display
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
		<div className="Contact">
			<Menu />
			<div className="map-contents"></div>
			<div className="Contact-contents">
				<header>
					<span className="enter-text">❯ </span>
					<span ref={iam} className="title"></span>
				</header>
				<main>
					<p className="subarticle">
						<br />
						다양한 프로젝트, 사람들과의 교류 및 경험에 관심이 많습니다. 질문이나
						용건이 있으시다면 언제든지 아래 폼을 사용해 연락주세요!
					</p>
					<div className="contact-form">
						<form id="contact" autoComplete="off">
							<ul>
								<li className="half animated">
									<input
										className="input_field"
										placeholder="Name"
										type="text"
										name="name"
										required
									/>
									<label></label>
								</li>
								<li className="half animated">
									<input
										className="input_field"
										placeholder="Email"
										name="email"
										type="email"
									/>
								</li>
								<li className="title animated ">
									<input
										className="input_field"
										placeholder="Title"
										name="title"
										type="text"
									/>
								</li>
								<li className="animated full">
									<textarea
										className="input_field msg"
										placeholder="Message"
										name="msg"
									/>
								</li>
								<li>
									<div className="submit_btn animated">
										<span>Send Message</span>
									</div>
								</li>
							</ul>
						</form>
					</div>
					<div className="map"></div>
				</main>
			</div>
		</div>
	);
}

export default Contact;
