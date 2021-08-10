import ImageSlider from "./Slider";
import "./Artgallery.css";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

function Artgallery() {
  return (
    <div className="container mt-5 carousel">
      <h1 className="slider_title">Art gallery</h1>
      <ImageSlider />
      <div className="gallery-btn contact-btn animate__jackInTheBox">
        <Link to="/contact">
          <button className="rounded-btn">
            <span></span>
            Contact us
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Artgallery;
