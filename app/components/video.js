import React from "react";
import { Container, Card } from "react-bootstrap";

function VideoPlayer() {
  return (
    <Container className="my-5 ">
      <Card style={{ border: "none" }}>
        <Card.Body className="video">
          {/* <Card.Title className="text-center mb-3">Project Video</Card.Title> */}
          <video
            width="100%"
            height="auto"
            controls
            autoPlay
            muted
            loop
            className="shadow"
          >
            <source src="/video/0930.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default VideoPlayer;
