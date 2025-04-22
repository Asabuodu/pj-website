// src/components/Gallery.jsx
import React, { useState } from "react";
import { Container, Row, Col, Modal, Image, Carousel } from "react-bootstrap";

const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "/assets/cctv.jpg",
    "/assets/cctv.jpg",
    "/assets/cctv.jpg",
    "/assets/cctv.jpg",
    "/assets/cctv.jpg",
    "/assets/cctv.jpg",
    "/assets/cctv.jpg",
    "/assets/cctv.jpg",
    "/assets/cctv.jpg",
    "/assets/cctv.jpg",
    "/assets/cctv.jpg",
    "/assets/cctv.jpg",
    "/assets/cctv.jpg",
    "/assets/cctv.jpg",
    "/assets/cctv.jpg",
    "/assets/cctv.jpg",
    "/assets/cctv.jpg",
    "/assets/cctv.jpg",
    // More image URLs or paths
  ];

  const handleImageClick = (index) => {
    setActiveIndex(index);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const handleKeyDown = (e) => {
    if (!showModal) return;
    if (e.key === "ArrowRight") {
      setActiveIndex((prev) => (prev + 1) % images.length);
    } else if (e.key === "ArrowLeft") {
      setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <Container className="my-5" onKeyDown={handleKeyDown} tabIndex="0">
      <h3 className="mb-4 text-center">Image Gallery</h3>
      <Row xs={1} sm={2} md={3} lg={4} className="g-3">
        {images.map((img, idx) => (
          <Col key={idx}>
            <Image
              src={img}
              alt={`Gallery ${idx}`}
              thumbnail
              loading="lazy"
              onClick={() => handleImageClick(idx)}
              style={{
                cursor: "pointer",
                transition: "transform 0.3s ease",
                borderRadius: "0.5rem",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Body className="p-0">
          <Carousel
            activeIndex={activeIndex}
            onSelect={setActiveIndex}
            interval={null}
            indicators={false}
          >
            {images.map((img, idx) => (
              <Carousel.Item key={idx}>
                <Image src={img} alt={`Slide ${idx}`} fluid />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Gallery;
