"use client";
import { useEffect, useState } from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";


function AppNavbar() {
  const [activePath, setActivePath] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setActivePath(window.location.pathname);
    }
  }, []);

  return (
    <Navbar key="lg" bg="light" expand="lg" className="shadow-sm py-4">
      <Container>
        <Navbar.Brand href="/">
        <img
              src="/assets/logo.png"
              alt="Logo"
              width={150}
              height={50}
              loading="lazy"
              priority
              />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          aria-labelledby="offcanvasNavbarLabel-expand-lg"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="ms-auto gap-5 fw-semibold">
              <Nav.Link
                href="/"
                className={activePath === "/" ? "nav-link active" : "nav-link"}
              >
                Home
              </Nav.Link>

              <Nav.Link
                href="/services/"
                className={
                  activePath === "/services/" ? "nav-link active" : "nav-link"
                }
              >
                Services
              </Nav.Link>

              <Nav.Link
                href="/about/"
                className={
                  activePath === "/about/" ? "nav-link active" : "nav-link"
                }
              >
                About
              </Nav.Link>

              <Nav.Link
                href="/gallery/"
                className={
                  activePath === "/gallery/" ? "nav-link active" : "nav-link"
                }
              >
                Gallery
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
