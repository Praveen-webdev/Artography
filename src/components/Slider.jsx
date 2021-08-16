import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img0 from "../images/img0.jpg";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import img6 from "../images/img6.jpg";
import img7 from "../images/img7.jpg";
import img8 from "../images/img8.jpg";
import img9 from "../images/img9.jpg";
import img10 from "../images/img10.jpg";
import img11 from "../images/img11.jpg";
import img12 from "../images/img12.jpg";
import img13 from "../images/img13.jpg";
import img14 from "../images/img14.jpg";
import img15 from "../images/img15.jpg";
import img16 from "../images/img16.jpg";
import img17 from "../images/img17.jpg";
import c1 from "../images/cl1.jpg";
import c2 from "../images/cl2.jpg";
import c3 from "../images/cl3.jpg";
import c4 from "../images/cl4.jpg";
import c5 from "../images/cl5.jpg";
import c6 from "../images/cl6.jpg";

function ImageSlider() {
    const images = [
        img2,
        img3,
        img5,
        img0,
        img1,
        img4,
        img6,
        img7,
        img8,
        img9,
        img10,
        img11,
        img12,
        img13,
        img14,
        img16,
        img17,
    ];
    const clientImages = [c5, c1, c2, c3, c4, c6];

    let settings1 = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    let settings2 = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear",
        autoplay: true,
        autoplaySpeed: 2000,
        draggable: false,
        swipe: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <>
            <Slider {...settings1}>
                {images.map((image, idx) => (
                    <div className="card-wrapper wrapper-1">
                        <div className="card">
                            <div className="card-image">
                                <img src={image} />
                            </div>
                            }
                        </div>
                    </div>
                ))}
            </Slider>
            <br />
            <h1 className="slider_title">Meet our happy clients</h1>
            <Slider {...settings2}>
                {clientImages.map((image, idx) => (
                    <div className="card-wrapper wrapper-2">
                        <div className="card">
                            <div className="card-image">
                                <img src={image} />
                            </div>
                            }
                        </div>
                    </div>
                ))}
            </Slider>
        </>
    );
}

export default ImageSlider;
