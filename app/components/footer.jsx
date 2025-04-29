import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import {
  BsTelephone,
  BsEnvelope,
  BsLinkedin,
  BsWhatsapp,
  BsFacebook,
  BsMap,
  BsPin,
} from "react-icons/bs";
import logo from "@/public/assets/logo.png";

function Footer() {
  return (
    <footer className="bg-light text-dark py-4 mt-5 border-top">
      <Container>
        <Row className="text-center text-md-start">
          <Col md={4} className="my-auto">
            <Image src={logo} alt="Logo" width={128} height={40} priority />
            <p className="mt-2">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </Col>

          <Col md={4} className="text-md-start">
            <p className="fw-bold">Contact Us:</p>
            <ul className="list-unstyled">
              <li className="mb-2">
                <BsTelephone className="me-2" /> +2348035682183, +2349094408234
              </li>

              <li className="mb-2">
                <a
                  href="mailto:thoptech@gmail.com"
                  className="text-decoration-none text-dark"
                  target="blank"
                >
                  <BsEnvelope className="me-2" /> thoptech@gmail.com
                </a>
              </li>

              <li className="mb-2"> 
                <a href="https://ng.linkedin.com/in/thop-tech-512523195" className="text-decoration-none text-dark"
                  target="blank"
                >
                <BsLinkedin className="me-2" /> LinkedIn
                </a>
              </li>

              <li className="mb-2">
                <a
                  href="https://wa.me/qr/WJ5XLAYFOGHZP1"
                  className="text-decoration-none text-dark"
                  target="blank"
                >
                  <BsWhatsapp className="me-2" /> WhatsApp
                </a>
              </li>

              <li className="mb-2">
                <BsFacebook className="me-2" /> Facebook
              </li>
            </ul>
          </Col>

          <Col md={4} className="text-md-start my-auto">
            <ul>
              <li className="list-unstyled me-2 mb-2">
                {" "}
                <a href="#" className="text-decoration-none text-dark">
                  Privacy Policy
                </a>
              </li>
              <li className="list-unstyled">
                {" "}
                <a href="#" className="text-decoration-none text-dark">
                  Terms of Service
                </a>
              </li>
              <li className="list-unstyled me-2 mt-4">
                <BsPin className="me-2" /> 13, Omodumi Street, Lawason, Lagos.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
