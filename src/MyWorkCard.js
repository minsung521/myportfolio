import React from "react";
import PropTypes from "prop-types";

function MyWorkCard({
	id,
	coverImage,
	year,
	title,
	summary,
	usedTechStack,
	link,
}) {
	return (
		<div>
			<div className="card">
				<img src={coverImage} alt={title} />
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
	link: PropTypes.string,
};

export default MyWorkCard;
