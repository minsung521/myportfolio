import React from "react";
import "./Menu.css";
import logo from "./logo.png";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";

function Menu() {
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
					});
				},
				(error) => {
					Swal.fire({
						title: "Error!",
						text: "메시지 전송에 실패했습니다..",
						icon: "error",
						showConfirmButton: false,
						timer: 1500,
					});
				}
			);
	};

	return (
		<menu className="main-menu">
			<div className="separator"></div>
			<nav className="main-menu-nav">
				<div>
					<a href="/">
						<img src={logo} alt="Logo" className="namelogo" />
					</a>
				</div>
				<a rel="about" href="/about">
					About
				</a>
				<a rel="skills" href="/skills">
					Skills
				</a>
				<a rel="work" href="/work">
					Work
				</a>
				<a rel="Contact" href="/contact">
					Contact
				</a>
				<a rel="Blog" href="https://devmingsung.tistory.com/" target="_blank">
					Blog
				</a>
				<ul>
					<a href="https://www.instagram.com/mingsung_521/" target="_blank">
						<i class="fab fa-instagram fa-2x"></i>
					</a>
					<a href="https://www.facebook.com/kmskmskmskgb/" target="_blank">
						<i class="fab fa-facebook-f fa-2x"></i>
					</a>
					<a href="https://github.com/minsung521" target="_blank">
						<i class="fab fa-github fa-2x"></i>
					</a>
				</ul>
				<div className="menu_contactform">
					<form autoComplete="off" onSubmit={sendEmail}>
						<li>
							<h2>contact</h2>
						</li>
						<li>
							<input
								type="text"
								placeholder="Title"
								className="m_title"
								spellCheck="false"
								name="title"
								required
							/>
						</li>
						<li>
							<textarea
								placeholder="Message"
								className="m_message"
								spellCheck="false"
								name="message"
								required
							/>
						</li>
						<button type="submit" className="m_submit">
							<span className="innertext">Send</span>{" "}
						</button>
					</form>
				</div>
			</nav>
		</menu>
	);
}

export default Menu;
