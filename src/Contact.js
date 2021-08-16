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
					{/* <p className="subarticle">
						<br />
						<br />
						dfafs
					</p> */}
					<div className="contact-form">
						<form id="contact" autoComplete="off">
							<ul>
								<li className="half animated">
									<input placeholder="Name" type="text" name="name" required />
									<label></label>
								</li>
								<li className="half animated">
									<input placeholder="Email" type="email" />
								</li>
								<li className=" animated title">
									<input placeholder="Title" type="text" />
								</li>
								<li className=" animated full">
									<input placeholder="Message" type="text" />
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
