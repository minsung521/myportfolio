import React, { useRef, useEffect, useState } from "react";
import emailjs from "emailjs-com";
import Typed from "typed.js";
import Menu from "./components/Menu";
import "./Contact.css";
import Swal from "sweetalert2";

const Contact = () => {
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

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"portfolio",
				"template_k3c8k9v",
				e.target,
				"user_FzpRR5bFxN5cYUCKeSCwJ"
			)
			.then(
				(result) => {
					Swal.fire({
						title: "Success!",
						text: "메시지가 전송되었습니다!",
						icon: "success",
						showConfirmButton: false,
						timer: 1500,
						iconColor: "#30C730",
						background: "#D4E4CD",
					});
				},
				(error) => {
					Swal.fire({
						title: "Error!",
						text: "메시지 전송에 실패했습니다..",
						icon: "error",
						showConfirmButton: false,
						timer: 1500,
						iconColor: "red",
						background: "#E6D3D3",
					});
				}
			);
	};

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
						<form id="contact" autoComplete="off" onSubmit={sendEmail}>
							<ul>
								<li className="half animated">
									<input
										spellCheck="false"
										className="input_field"
										placeholder="Name"
										type="text"
										name="from_name"
									/>
									<label></label>
								</li>
								<li className="half animated">
									<input
										spellCheck="false"
										className="input_field"
										placeholder="Email"
										name="email"
										type="email"
									/>
								</li>
								<li className="title animated ">
									<input
										spellCheck="false"
										className="input_field"
										placeholder="Title"
										name="title"
										type="text"
										required
									/>
								</li>
								<li className="animated full">
									<textarea
										spellCheck="false"
										className="input_field msg"
										placeholder="Message"
										name="message"
										required
									/>
								</li>
								<li>
									<button type="submit" className="submit_btn animated">
										<span className="innertext">Send Message</span>
									</button>
								</li>
							</ul>
						</form>
					</div>
					<div className="map"></div>
				</main>
			</div>
		</div>
	);
};

export default Contact;
