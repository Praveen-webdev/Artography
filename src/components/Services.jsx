import React from "react";
import "./Services.css";
import { DigitalPainting, Sketch, Frame } from "../Svg.jsx";
import frame1 from "../images/frame-1.jpg";
import frame2 from "../images/frame-2.jpg";
import frame3 from "../images/frame-3.jpg";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";

const Services = () => {
	return (
		<div id="services">
			<div className="cover-img">
				<h4>Drawing potrait sketches with professional touch</h4>
				<ScrollAnimation
					animateIn="animate__bounceInDown"
					animateOnce="true"
				>
					<Link to="./artgallery">
						<button id="cover-btn" className="square-btn">
							<span></span>artgallery
						</button>
					</Link>
				</ScrollAnimation>
			</div>
			<div id="service-grid">
				<ScrollAnimation
					animateIn="animate__fadeInUp"
					animateOnce="true"
				>
					<div className="grid-container ">
						<ScrollAnimation animateIn="animate__fadeInBottomRight animate__delay-5s animate__slower">
							<Sketch />
						</ScrollAnimation>
						<h2>Potrait Sketching</h2>
						<p>
							<i class="fa fa-quote-left" aria-hidden="true"></i>I
							would love to have my own fashion line because I
							love sketching.
							<i class="fa fa-quote-right" aria-hidden="true"></i>
						</p>
					</div>
				</ScrollAnimation>
				<ScrollAnimation
					animateIn="animate__fadeInUp"
					animateOnce="true"
				>
					<div className="grid-container">
						<DigitalPainting />
						<h2>Digital Painting</h2>
						<p>
							<i class="fa fa-quote-left" aria-hidden="true"></i>
							Digital design is like painting, except the paint
							never dries.
							<i class="fa fa-quote-right" aria-hidden="true"></i>
						</p>
					</div>
				</ScrollAnimation>
				<ScrollAnimation
					animateIn="animate__fadeInUp"
					animateOnce="true"
				>
					<div className="grid-container ">
						<Frame />
						<h2>Providing frames</h2>
						<p>
							<i class="fa fa-quote-left" aria-hidden="true"></i>
							We also provide variant frames to showcase our work
							for lifetime.
							<i class="fa fa-quote-right" aria-hidden="true"></i>
						</p>
					</div>
				</ScrollAnimation>
				<div className="grid-container frame">
					<ScrollAnimation
						animateIn="animate__fadeInLeftBig"
						animateOnce="true"
					>
						<img src={frame1} alt="frame-1" />
					</ScrollAnimation>
					<ScrollAnimation
						animateIn="animate__fadeInLeftBig"
						animateOnce="true"
					>
						<img src={frame2} alt="frame-1" />
					</ScrollAnimation>
					<ScrollAnimation
						animateIn="animate__fadeInLeftBig"
						animateOnce="true"
					>
						<img src={frame3} alt="frame-1" />
					</ScrollAnimation>
				</div>
			</div>
			<div className="gallery-btn">
				Want to see more{" "}
				<ScrollAnimation
					animateIn="animate__jackInTheBox"
					animateOnce="true"
				>
					<Link to="/artgallery">
						<button className="rounded-btn">
							<span></span>
							artgallery
						</button>
					</Link>
				</ScrollAnimation>
			</div>
		</div>
	);
};

export default Services;
