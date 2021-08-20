import React from "react";
import PropTypes from "prop-types";
import "./MyWorkCard.css";

function MyWorkCard({
	id,
	coverImage,
	year,
	title,
	summary,
	usedTechStack,
	StackColor,
	link,
}) {
	return (
		<div>
			<div className="card">
				<header>
					<img src={coverImage} alt={title} />
					<div className="card_title">{title}</div>
				</header>
				<main>
					<ul>
						<li>
							<div className="year">{year}</div>
						</li>
						<li>
							<div className="usedTechStack">{usedTechStack}</div>
						</li>
						<li>
							<a className="link" href={link}>
								Link
							</a>
						</li>
						<li>
							<div className="summary">{summary}</div>
						</li>
					</ul>
				</main>
			</div>
		</div>
	);
}

MyWorkCard.propTypes = {
	id: PropTypes.number.isRequired,
	coverImage: PropTypes.string,
	year: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	usedTechStack: PropTypes.arrayOf(PropTypes.string).isRequired,
	StackColor: PropTypes.arrayOf(PropTypes.string).isRequired,
	link: PropTypes.string,
};

export default MyWorkCard;
