"use client";
import Card from "react-bootstrap/Card";
import mission from "../../public/assets/mission.jpg";
import vision from "../../public/assets/vision.jpg";

import React from "react";

const Statement = () => {
  return (
    <>
      <div className="container">
        {/* First Card */}
        <div className="d-flex justify-content-center">
          <Card
            className="d-flex flex-column flex-md-row-reverse align-items-center"
            style={{
              width: "100%",
              maxWidth: "65rem",
              background: "#f8f9fa",
              padding: "9px",
              marginTop: "40px",
              border: "none",
              boxShadow: "none",
            }}
          >
            <Card.Img
              variant="top"
              src={vision.src}
              alt="image"
              className="w-100 w-md-60"
              style={{
                height: "300px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
            <Card.Body
              className="text-start d-flex flex-column justify-content-center px-3 "
              style={{
                width: "90%", // 90% width on mobile
                // maxWidth: "45%", // max 45% on larger screens
              }}
            >
              <Card.Title>CORPORATE VISION:</Card.Title>
              <Card.Text>
                Our vision is to be market leaders in our business sector and
                ensure that our clients are fully satisfied with the services
                rendered.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        {/* Second Card */}
        <div className="d-flex justify-content-center mt-4">
          <Card
            className="d-flex flex-column flex-md-row align-items-center"
            style={{
              width: "100%",
              maxWidth: "65rem",
              background: "#f8f9fa",
              marginTop: "30px",
              padding: "9px",
              border: "none",
              boxShadow: "none",
            }}
          >
            <Card.Img
              variant="top"
              src={mission.src}
              alt="image"
              className="w-100 w-md-60"
              style={{
                height: "300px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
            <Card.Body
              className="text-start d-flex flex-column justify-content-center  px-3"
              style={{
                width: "90%",
                // maxWidth: "45%",
              }}
            >
              <Card.Title>MISSION STATEMENT:</Card.Title>
              <Card.Text>
                Guided by our heritage, we provide the best products and
                services in the core areas of electrical and electronic
                development through professional excellence by a well-motivated,
                performance-driven workforce.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        {/* First Card */}
        <div className="d-flex justify-content-center">
          <Card
            className="d-flex flex-column flex-md-row-reverse align-items-center"
            style={{
              width: "100%",
              maxWidth: "65rem",
              background: "#f8f9fa",
              padding: "9px",
              marginTop: "40px",
              border: "none",
              boxShadow: "none",
            }}
          >
            <Card.Img
              variant="top"
              src={vision.src}
              alt="image"
              className="w-100 w-md-60"
              style={{
                height: "300px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
            <Card.Body
              className="text-start d-flex flex-column justify-content-center px-3 "
              style={{
                width: "90%", // 90% width on mobile
                // maxWidth: "45%", // max 45% on larger screens
              }}
            >
              <Card.Title>CORPORATE VISION:</Card.Title>
              <Card.Text>
                Our vision is to be market leaders in our business sector and
                ensure that our clients are fully satisfied with the services
                rendered.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Statement;
