"use client";
import { usePathname } from "next/navigation";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import Image from "next/image";
import logo from "@/public/assets/logo.png";

function AppNavbar() {
  const pathname = usePathname();

  return (
    <Navbar key="lg" bg="light" expand="lg" className="shadow-sm py-4">
      <Container>
        <Navbar.Brand href="/">
          <Image src={logo} alt="Logo" width={150} height={50} priority />
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
                className={pathname === "/" ? "nav-link active" : "nav-link"}
              >
                Home
              </Nav.Link>

              <Nav.Link
                href="/services"
                className={
                  pathname === "/services" ? "nav-link active" : "nav-link"
                }
              >
                Services
              </Nav.Link>

              <Nav.Link
                href="/about"
                className={
                  pathname === "/about" ? "nav-link active" : "nav-link"
                }
              >
                About
              </Nav.Link>

              <Nav.Link
                href="/gallery"
                className={
                  pathname === "/gallery" ? "nav-link active" : "nav-link"
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
