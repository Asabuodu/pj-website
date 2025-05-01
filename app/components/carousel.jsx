"use client";

import { useState } from "react";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
import slide1 from "@/public/assets/slide1.jpg";
import cctv3 from "@/public/assets/cctv3.jpg";
import alarm1 from "@/public/assets/alarm1.jpg";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const slides = [
    {
      image: slide1,
      label: "High-Quality Installations",
      description: "Providing top-notch electrical solutions since 2004.",
    },
    {
      image: cctv3,
      label: "Advanced Surveillance",
      description: "Secure your premises with our cutting-edge CCTV systems.",
    },
    {
      image: alarm1,
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
        }

        .carousel-caption h3 {
          font-size: 2rem;
        }

        .carousel-caption p {
          font-size: 1.1rem;
        }
      `}</style>

      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={5000}
        fade
      >
        {slides.map((slide, i) => (
          <Carousel.Item key={i}>
            <div className="carousel-container">
              <Image
                src={slide.image}
                alt={slide.label}
                fill
                style={{ objectFit: "cover" }}
                priority={i === 0}
              />
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
