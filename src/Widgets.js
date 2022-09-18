import React from "react";
import './Widgets.css'
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
	const newsArticle = (heading, subtitle) => (
		<div className="widgets__article">
			<div className="widgets__airticleLeft">
				<FiberManualRecordIcon />
			</div>
			<div className="widgets__airticleRight">
				<h4>{heading}</h4>
				<p>{subtitle}</p>

			</div>
		</div>
	)
	return (
		<div className="widgets">
			<div className="widgets__header">
				<h2> LinkedIn News</h2>
				<InfoIcon />
			</div>
			{newsArticle("Trending social media app", "Top news - 922 readers")}
			{newsArticle("Bitcoin Breaks $22k", "Crypto - 854 readers")}
			{newsArticle("Top Gun Maverick sets box office records", "Entertainment -789 readers")}
			{newsArticle("Coronavirus Vaccine: LA update", "Top news - 675 readers")}
			{newsArticle("Is Redux too good", "Tech Code - 573 readers")}
		</div>
	);
}

export default Widgets;
