// import React from "react";
// import Image from "next/image";
// import { Container, Row, Col } from "react-bootstrap";
// import {
//   BsTelephone,
//   BsEnvelope,
//   BsLinkedin,
//   BsWhatsapp,
//   BsFacebook,
//   BsMap,
//   BsPin,
// } from "react-icons/bs";
// import logo from "@/public/assets/logo.png";

// function Footer() {
//   return (
//     <footer className="bg-light text-dark py-4 mt-5 border-top">
//       <Container>
//         <Row className="text-center text-md-start">
//           <Col md={4} className="my-auto">
//             <Image src={logo} alt="Logo" width={128} height={40} priority />
//             <p className="mt-2">
//               &copy; {new Date().getFullYear()} All rights reserved.
//             </p>
//           </Col>

//           <Col md={4} className="text-md-start">
//             <p className="fw-bold">Contact Us:</p>
//             <ul className="list-unstyled">
//               <li className="mb-2">
//                 <BsTelephone className="me-2" /> +2348035682183, +2349094408234
//               </li>

//               <li className="mb-2">
//                 <a
//                   href="mailto:thoptech@gmail.com"
//                   className="text-decoration-none text-dark"
//                   target="blank"
//                 >
//                   <BsEnvelope className="me-2" /> thoptech@gmail.com
//                 </a>
//               </li>

//               <li className="mb-2">
//                 <a href="https://ng.linkedin.com/in/thop-tech-512523195" className="text-decoration-none text-dark"
//                   target="blank"
//                 >
//                 <BsLinkedin className="me-2" /> LinkedIn
//                 </a>
//               </li>

//               <li className="mb-2">
//                 <a
//                   href="https://wa.me/qr/WJ5XLAYFOGHZP1"
//                   className="text-decoration-none text-dark"
//                   target="blank"
//                 >
//                   <BsWhatsapp className="me-2" /> WhatsApp
//                 </a>
//               </li>

//               <li className="mb-2">
//                 <BsFacebook className="me-2" /> Facebook
//               </li>
//             </ul>
//           </Col>

//           <Col md={4} className="text-md-start my-auto">
//             <ul>
//               <li className="list-unstyled me-2 mb-2">
//                 {" "}
//                 <a href="/privacypage" className="text-decoration-none text-dark">
//                   Privacy Policy
//                 </a>
//               </li>
//               <li className="list-unstyled">
//                 {" "}
//                 <a href="/terms" className="text-decoration-none text-dark">
//                   Terms of Service
//                 </a>
//               </li>
//               <li className="list-unstyled me-2 mt-4">
//                 <BsPin className="me-2" /> 13, Omodumi Street, Lawason, Lagos.
//               </li>
//             </ul>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// }

// export default Footer;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
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
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // use x   endpoint
    const response = await fetch("https://formspree.io/f/xnndpyea", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Thank you! Your message has been sent.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        message: "",
      });
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <footer className="bg-light text-dark py-5 mt-5 border-top">
      <Container>
        <Row className="text-center text-md-start">
          {/* Logo and Copyright */}
          <Col md={3} className="my-auto">
            <Image src={logo} alt="Logo" width={128} height={40} priority />
            <p className="mt-2">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </Col>

          {/* Contact Info */}
          <Col md={3} className="text-md-start">
            <p className="fw-bold">Contact Us:</p>
            <ul className="list-unstyled">
              <li className="mb-2">
                <BsTelephone className="me-2" /> +2348035682183, +2349094408234
              </li>
              <li className="mb-2">
                <a
                  href="mailto:thoptech@gmail.com"
                  className="text-decoration-none text-dark"
                  target="_blank"
                >
                  <BsEnvelope className="me-2" /> thoptech@gmail.com
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://ng.linkedin.com/in/thop-tech-512523195"
                  className="text-decoration-none text-dark"
                  target="_blank"
                >
                  <BsLinkedin className="me-2" /> LinkedIn
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://wa.me/qr/WJ5XLAYFOGHZP1"
                  className="text-decoration-none text-dark"
                  target="_blank"
                >
                  <BsWhatsapp className="me-2" /> WhatsApp
                </a>
              </li>
              <li className="mb-2">
                <BsFacebook className="me-2" /> Facebook
              </li>
            </ul>
          </Col>

          {/* Navigation & Address */}
          <Col md={3} className="text-md-start">
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="/privacypage"
                  className="text-decoration-none text-dark"
                >
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="/terms" className="text-decoration-none text-dark">
                  Terms of Service
                </a>
              </li>
              <li className="mt-4">
                <BsPin className="me-2" /> 13, Omodumi Street, Lawason, Lagos.
              </li>
            </ul>
          </Col>

          {/* Contact Form */}
          <Col md={3}>
            <p className="fw-bold">Send an Enquiry:</p>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-2">
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Control
                  type="text"
                  placeholder="+1234567890"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Control
                  as="textarea"
                  placeholder="Your enquiry..."
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Button variant="dark" type="submit" className="w-100">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
