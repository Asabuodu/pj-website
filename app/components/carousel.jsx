"use client";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const slides = [
    {
      image: "/assets/slide1.jpg",
      label: "High-Quality Installations",
      description: "Providing top-notch electrical solutions since 2004.",
    },
    {
      image: "/assets/cctv3.jpg",
      label: "Advanced Surveillance",
      description: "Secure your premises with our cutting-edge CCTV systems.",
    },
    {
      image: "/assets/alarm1.jpg",
      label: "Reliable Alarm Systems",
      description: "Stay protected with our smart alarm & access solutions.",
    },
  ];

  return (
    <>
      <style jsx>{`
        .carousel-container {
          position: relative;
          width: 100%;
          height: 80vh;
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .carousel-container {
            height: 40vh;
          }
        }

        .carousel-container img {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }

        .carousel-caption {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.4);
          color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 2rem;
        }

        .carousel-caption h1 {
          font-size: 2.5rem;
        }

        .carousel-caption p {
          font-size: 1.2rem;
        }
      `}</style>

      <Carousel activeIndex={index} onSelect={handleSelect} interval={5000} fade>
        {slides.map((slide, i) => (
          <Carousel.Item key={i}>
            <div className="carousel-container">
              <img src={slide.image} alt={slide.label} />
              <div className="carousel-caption">
                <div>
                  <h1>{slide.label}</h1>
                  <p>{slide.description}</p>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}

export default ControlledCarousel;
