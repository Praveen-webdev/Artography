import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
	return (
		<header>
			<h1 class="animate__animated animate__bounceInDown">
				Sharing the best artworks to worldwide
			</h1>
			<span class="animated animate__bounce"></span>
			<Link to="/services">
				<button
					className="square-btn animate__heartBeat animate__delay-5s animate__slower"
					type="button"
				>
					<span></span>Our Services
				</button>
			</Link>
		</header>
	);
}

export default Home;
