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
			<div className="Contact-contents">
				<header>
					<span className="enter-text">❯ </span>
					<span ref={iam} className="title"></span>
				</header>
				<main>
					<div className="contact-form">
						<form id="contact" autoComplete="off">
							<ul>
								<li>
									<input placeholder="name" type="text" />
								</li>
								<li>
									<input placeholder="email" type="email" />
								</li>
								<li>
									<input placeholder="title" type="text" />
								</li>
								<li>
									<input placeholder="message" type="text" />
								</li>
								<li>
									<input type="submit" />
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
