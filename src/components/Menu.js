import React from "react";
import "./Menu.css";
import logo from "./logo.png";

function Menu() {
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
					<form autoComplete="off">
						<li>
							<h2>contact</h2>
						</li>
						<li>
							<input type="text" placeholder="Title" className="m_title" />
						</li>
						<li>
							<textarea placeholder="Message" className="m_message" />
						</li>
						<div className="m_submit">Send</div>
					</form>
				</div>
			</nav>
		</menu>
	);
}

export default Menu;
