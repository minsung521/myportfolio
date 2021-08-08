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
				<a rel="skils" href="/skils">
					Skils
				</a>
				<a rel="work" href="/work">
					Work
				</a>
				<a rel="Contact" href="/contact">
					Contact
				</a>
				<ul>
					<a href="https://www.instagram.com/mingsung_521/" target="_blank">
						<i class="fab fa-instagram fa-2x"></i>
					</a>
					<a href="https://www.instagram.com/mingsung_521/" target="_blank">
						<i class="fab fa-facebook-f fa-2x"></i>
					</a>
					<a href="https://www.instagram.com/mingsung_521/" target="_blank">
						<i class="fab fa-github fa-2x"></i>
					</a>
				</ul>
			</nav>
		</menu>
	);
}

export default Menu;
