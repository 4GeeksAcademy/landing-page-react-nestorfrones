import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";



const Home = () => {
	return (
		<div className="container-fluid p-0">
			<Navbar />
			<div className="container row m-auto mt-5 p-0">
				<Jumbotron />
				<Card 
					title= "Card Title 1"
					imageUrl= "https://picsum.photos/id/1/500/325"
					description= "Lorem ipsum dolor, sit amet consectetur adipex ab dolorem animi quasi excepturi unde iure non vitae! Quod odio reprehenderit minima consectetur"
					buttonUrl= "#"
					buttonLabel= "Do Something"
					/>
				<Card 
					title= "Card Title 2"
					imageUrl= "https://picsum.photos/id/7/500/325"
					description= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque a laudantium sapiente, fugit temporibu Lorem ipsum dolor, sit amet consectetur a temp"
					buttonLabel= "Do Something"
					/>
				<Card 
					title= "Card Title 3"
					imageUrl= "https://picsum.photos/id/3/500/325"
					description= "Lorem ipsum dolor, sit amet consectetur a temporibus ex ab dolorem animi quasi excepturi unde iure non vitae! Quod odio reprehenderit minima consectetur"
					buttonUrl= "#"
					buttonLabel= "Do Something"
					/>
				<Card 
					title= "Card Title 4"
					imageUrl= "https://picsum.photos/id/9/500/325"
					description= "audantium sapiente, fugit temporibus ex ab dolorem animi quasi excepturi unde iure non vitae! Quod odio reprehenderit minima consectetur"
					buttonUrl= "#"
					buttonLabel= "Do Something"
					/>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
