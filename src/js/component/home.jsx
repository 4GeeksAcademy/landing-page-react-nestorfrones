import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid p-0">
			<Navbar />
			<div className="container row m-auto mt-5">
				<Jumbotron />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<Footer />
		</div>
	);
};

export default Home;
