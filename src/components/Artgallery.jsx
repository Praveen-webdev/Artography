import ImageSlider from "./Slider";
import "./Artgallery.css";

function Artgallery() {
  return (
    <div className="container mt-5 carousel">
      <h1 className="slider_title">Art gallery</h1>
      <ImageSlider />
    </div>
  );
}

export default Artgallery;
