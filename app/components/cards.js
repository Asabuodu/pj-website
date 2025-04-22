import Card from "react-bootstrap/Card";
import cctv from "../../public/assets/cctv.jpg";
import alarm1 from "../../public/assets/alarm1.jpg";
import repair from "../../public/assets/repair.jpg";
import polecables from "../../public/assets/polecables.jpg";
import building from "../../public/assets/building.jpg";
import light from "../../public/assets/light.jpg";

function Cardholder() {
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
              src={cctv.src}
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
              <Card.Title>CCTV Installation</Card.Title>
              <Card.Text>
                We specialize in the installation of high-quality CCTV systems
                designed to enhance security for homes, businesses, and public
                spaces. Our solutions ensure round-the-clock surveillance,
                providing real-time monitoring and video recording to protect
                your assets and loved ones. With expert technicians and
                cutting-edge equipment, we tailor each installation to meet your
                unique security needs, ensuring reliability and peace of mind.
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
              src={alarm1.src}
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
              <Card.Title>Fire Alarm System</Card.Title>
              <Card.Text>
                Our fire alarm systems are designed to provide early detection
                and reliable alerts in the event of smoke or fire, helping to
                safeguard lives and property. We install and maintain a wide
                range of advanced fire alarm solutions tailored to meet
                regulatory standards and client needs. Whether for residential,
                commercial, or industrial use, our systems ensure fast response
                and seamless integration with other safety components, offering
                you complete peace of mind.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        {/* Third care */}
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
              src={repair.src}
              alt="image"
              className="w-100 w-md-60"
              style={{
                height: "300px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
            <Card.Body
              className="text-start d-flex flex-column justify-content-center px-3"
              style={{
                width: "90%", // 90% width on mobile
                // maxWidth: "45%", // max 45% on larger screens
              }}
            >
              <Card.Title>Electronics Repairs and Maintenance</Card.Title>
              <Card.Text>
                We offer professional electronics repairs and maintenance
                services to ensure your devices operate at peak performance.
                From routine servicing to complex fault diagnostics, our skilled
                technicians handle a wide range of electronic equipment with
                precision and care. Our goal is to extend the life of your
                systems, reduce downtime, and provide cost-effective solutions
                tailored to your needs.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        {/* Fourth Card */}

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
              src={polecables.src}
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
              <Card.Title>High Way Project</Card.Title>
              <Card.Text>
                We undertake electrical installations for highway projects,
                including street lighting, traffic signal systems, and safety
                infrastructure. Our expertise ensures reliable, energy-efficient
                solutions that enhance visibility, improve road safety, and
                support smart city development. With a focus on durability and
                compliance with national standards, we deliver timely and
                cost-effective services for both new constructions and road
                upgrades.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        {/* fifth card */}

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
              src={light.src}
              alt="image"
              className="w-100 w-md-60"
              style={{
                height: "300px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
            <Card.Body
              className="text-start d-flex flex-column justify-content-center px-3"
              style={{
                width: "90%", // 90% width on mobile
                // maxWidth: "45%", // max 45% on larger screens
              }}
            >
              <Card.Title>
                Supplying Electrical Materials & Equipment
              </Card.Title>
              <Card.Text>
                We supply high-quality electrical materials and equipment to
                meet the needs of residential, commercial, and industrial
                projects. Our inventory includes trusted brands and a wide range
                of products—from wiring accessories and circuit breakers to
                lighting, conduits, and control systems. We ensure prompt
                delivery, competitive pricing, and expert support to help
                clients complete their projects efficiently and safely.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        {/* sixth card */}
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
              src={building.src}
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
              <Card.Title>Electrical Installation in Building</Card.Title>
              <Card.Text>
                We specialize in electrical installations for residential,
                commercial, and industrial buildings. From initial wiring to
                final fittings, our team ensures safe, efficient, and
                code-compliant systems tailored to each project's
                specifications. Whether it's new construction or a renovation,
                we deliver reliable solutions that power your space effectively
                and support long-term functionality.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Cardholder;
