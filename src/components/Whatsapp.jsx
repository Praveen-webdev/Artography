import React from "react";

function Whatsapp() {
	return (
		<div className="whatsapp btn  animate__zoomIn">
			<a
				href="https://api.whatsapp.com/send?phone=916382112038"
				class="float"
				target="_blank"
				rel="noopener noreferrer"
			>
				<i className="fa fa-whatsapp my-float"></i>
			</a>
		</div>
	);
}

export default Whatsapp;
