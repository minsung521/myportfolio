import React from "react";
import "./Menu.css";

function Menu() {
	return (
		<menu className="main-menu">
			<nav className="main-menu-nav">
				<div>
					<a href="/">
						<img src="logo.png" alt="Logo" />
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
			</nav>
		</menu>
	);
}

export default Menu;
