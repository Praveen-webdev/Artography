import React from "react";
import "./contact.css";
import ScrollAnimation from "react-animate-on-scroll";

function Contact() {
	return (
		<div id="contact">
			<h5>Contacts</h5>

			<iframe
				title="Contact location"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31405.307223137024!2d79.80734593708762!3d10.288681205590436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3aff8dfcb894795f%3A0x85f3f54438a01436!2sKodiyakarai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1628140155028!5m2!1sen!2sin"
				width="600"
				height="450"
				style={{ border: 0 }}
				allowfullscreen=""
				loading="lazy"
			></iframe>
			<h5>Contact info</h5>
			<div className="contact-info">
				<ScrollAnimation
					animateIn="animate__fadeInLeft"
					animateOut="animate__fadeOutRight"
				>
					<div className="contact-content">
						<i className="fa fa-map-marker " aria-hidden="true"></i>
						<div className="contact-message">
							<p className="bl-color">ksdjks lakjdk ladkjk ,</p>
							<p className="bl-color">sdjjsdfj</p>
						</div>
					</div>
				</ScrollAnimation>
				<ScrollAnimation
					animateIn="animate__fadeInLeft"
					animateOut="animate__fadeOutRight"
				>
					<div className="contact-content">
						<i class="fa fa-phone" aria-hidden="true"></i>
						<div className="contact-message">
							<p className="bl-color">
								<a href="tel:6382112038">+91 63821 12038</a>
							</p>
							<p className="bl-color">artography2001@gmail.com</p>
						</div>
					</div>
				</ScrollAnimation>
			</div>
		</div>
	);
}

export default Contact;
