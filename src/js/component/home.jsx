import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
			<Navbar />
			<div className="container m-auto">
				<Jumbotron />
				<div className="row row-cols-4 m-1">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</div>
	);
};

export default Home;
