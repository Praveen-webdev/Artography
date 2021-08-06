import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
	const [toggler, setToggler] = useState(false);
	const clickToggler = () => setToggler((prev) => !prev);
	const linkStyles = {
		color: "inherit",
		textDecoration: "none",
	};
	const logoStyles = {
		color: "#17d2d9ff",
		textDecoration: "none",
	};
	return (
		<>
			<nav id="navbar" className="navbar navbar-expand-lg navbar-light ">
				<h1 className="navbar-brand">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-pencil-fill"
						viewBox="0 0 16 16"
					>
						<path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
					</svg>
					Artography
				</h1>
				<button
					className={
						!toggler ? "navbar-toggler collapsed" : "navbar-toggler"
					}
					type="button"
					onClick={() => setToggler((prev) => !prev)}
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded={toggler}
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div
					className={
						toggler
							? "collapse navbar-collapse show"
							: "collapse navbar-collapse"
					}
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav mr-auto">
						<li id="home" className="nav-item active ">
							<Link
								style={{
									color: "inherit",
									textDecoration: "none",
								}}
								to="/"
								onClick={clickToggler}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									class="bi bi-house-door-fill"
									viewBox="0 0 16 16"
								>
									<path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
								</svg>
								Home
							</Link>
						</li>
						<li className="nav-item ">
							<Link
								style={{
									color: "inherit",
									textDecoration: "none",
								}}
								to="/services"
								onClick={clickToggler}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									class="bi bi-info-circle"
									viewBox="0 0 16 16"
								>
									<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
									<path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
								</svg>
								Services
							</Link>
						</li>
						<li className="nav-item ">
							<Link
								style={linkStyles}
								to="/artgallery"
								onClick={clickToggler}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									class="bi bi-images"
									viewBox="0 0 16 16"
								>
									<path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
									<path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z" />
								</svg>
								Art gallery
							</Link>
						</li>
						<li className="nav-item ">
							<Link
								style={linkStyles}
								to="/contact"
								onClick={clickToggler}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									class="bi bi-telephone-fill"
									viewBox="0 0 16 16"
								>
									<path
										fill-rule="evenodd"
										d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
									/>
								</svg>
								Contact us
							</Link>
						</li>
						<div className="logos">
							<a href="#" style={logoStyles}>
								<i
									class="fa fa-instagram"
									aria-hidden="true"
								></i>
							</a>
							<a href="#" style={logoStyles}>
								<i
									class="fa fa-facebook-square"
									aria-hidden="true"
								></i>
							</a>
							<a
								href="https://api.whatsapp.com/send?phone=916382112038"
								style={logoStyles}
							>
								<i
									class="fa fa-whatsapp"
									aria-hidden="true"
								></i>
							</a>
						</div>
					</ul>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
