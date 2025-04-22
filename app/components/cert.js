// import React from 'react'
// import Image from "next/image"

// const Cert = () => {
//   return (
//     <div>
//         <h4>Certificate</h4>
//         <div>cert 1</div>
//         <div>cert 2</div>
//         <div>cert 3</div>
//     </div>
//   )
// }

// export default Cert;

// import Col from "react-bootstrap/Col";
// import Container from "react-bootstrap/Container";
// import Image from "react-bootstrap/Image";
// import Row from "react-bootstrap/Row";
// import slide1 from "@/public/assets/slide1.jpg";

// function Cert() {
//   return (
//     <div>
//       <h4>Certificate</h4>

//       <Container>
//         <Row>
//           <Col xs={6} md={4}>
//             <Image src="slide1.jpg/171x180" thumbnail />
//           </Col>
//           <Col xs={6} md={4}>
//             <Image src="slide1.jpg/171x180" thumbnail />
//           </Col>
//           <Col xs={6} md={4}>
//             <Image src="slide1.jpg/171x180" thumbnail />
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default Cert;

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
      <h4 className="text-center my-4">Certificate</h4>

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
        INNOVATION DUEL: Two million naira (N2,000,000) grant to further develop
        their solution (from ideation to ready-for-market). *Certificate of
        Excellence for all the participants
      </p>
    </div>
  );
}

export default Cert;
