import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import affairs from "@/public/assets/affairs.png";
import agrovet from "@/public/assets/agrovet.png";
import firs from "@/public/assets/firs.png";
import syntech from "@/public/assets/syntech.png";

function Cert() {
  return (
    <div className="cert">
      <h4 className="text-center my-4">Certifications</h4>

      <Container>
        <Row>
          <Col xs={12} md={3}>
            <Image
              src={affairs.src}
              alt="certificate"
              className="certificate-img"
              thumbnail
            />
          </Col>
          <Col xs={12} md={3}>
            <Image
              src={agrovet.src}
              alt="certificate"
              className="certificate-img"
              thumbnail
            />
          </Col>
          <Col xs={12} md={3}>
            <Image
              src={firs.src}
              alt="certificate"
              className="certificate-img"
              thumbnail
            />
          </Col>
          <Col xs={12} md={3}>
            <Image
              src={syntech.src}
              alt="certificate"
              className="certificate-img"
              thumbnail
            />
          </Col>
        </Row>
      </Container>
      <p className="text-center my-4 w-3/4">
        
      </p>
    </div>
  );
}

export default Cert;
