import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
			<Navbar />
			<div className="container row row-cols-4 m-auto p-2">
				<Jumbotron />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
	);
};

export default Home;
