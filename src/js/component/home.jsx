import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
			<Navbar />
			<div className="container row m-auto p-1">
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
