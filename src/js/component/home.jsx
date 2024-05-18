import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";



const Home = () => {
	const card1 = {
		title: "Card Title 1",
		imageUrl: "https://picsum.photos/id/1/500/325",
		description: "Lorem ipsum dolor, sit amet consectetur rem ipsum dolor, sit amet consect adipex ab dolorem animi quasi excepturi unde iure non vitae! Quod odio reprehenderit minima consectetur",
		buttonUrl: "#",
		buttonLabel: "Do Something",
	}
	const card2 = {
		title: "Card Title 2",
		imageUrl: "https://picsum.photos/id/7/500/325",
		description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque a laudantium rem ipsum dolor, sit amet consect sapiente, fugit temporibu Lorem ipsum dolor, sit amet consectetur a temp",
		buttonUrl: "#",
		buttonLabel: "Do Something",
	}
	const card3 = {
		title: "Card Title 3",
		imageUrl: "https://picsum.photos/id/3/500/325",
		description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque a laudantium sapiente, rem ipsum dolor, sit amet consect fugit temporibu Lorem ipsum dolor, sit amet consectetur a temp",
		buttonUrl: "#",
		buttonLabel: "Do Something",
	}
	const card4 = {
		title: "Card Title 4",
		imageUrl: "https://picsum.photos/id/9/500/325",
		description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque a laudantium sapiente, fugit  adipisicing elit. Eaque a laudantium saptemporibu Lorem ipsum dolor, sit amet consectetur a temp",
		buttonUrl: "#",
		buttonLabel: "Do Something",
	}




	return (
		<div className="container-fluid p-0">
			<Navbar />
			<div className="container row m-auto mt-5 p-0">
				<Jumbotron />
				<Card 
					title= {card1.title}
					imageUrl= {card1.imageUrl}
					description= {card1.description}
					buttonUrl= {card1.buttonUrl}
					buttonLabel= {card1.buttonLabel}
					
					/>
				<Card 
					title= {card2.title}
					imageUrl= {card2.imageUrl}
					description= {card2.description}
					buttonUrl= {card2.buttonUrl}
					buttonLabel= {card2.buttonLabel}
					/>
				<Card 
					title= {card3.title}
					imageUrl= {card3.imageUrl}
					description= {card3.description}
					buttonUrl= {card3.buttonUrl}
					buttonLabel= {card3.buttonLabel}
					/>
				<Card 
					title= {card4.title}
					imageUrl= {card4.imageUrl}
					description= {card4.description}
					buttonUrl= {card4.buttonUrl}
					buttonLabel= {card4.buttonLabel}
					/>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
