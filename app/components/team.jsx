import Card from "react-bootstrap/Card";
import teamMember1 from "../../public/staff/Adeniyi.jpg"; // Example team member image
import teamMember2 from "../../public/staff/im.jpg";
import teamMember3 from "../../public/staff/Seun.jpg";
import teamMember4 from "../../public/staff/AWOYEMI.jpg";

function TeamCardholder() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">

          {/* Team Member 1 */}
          <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mb-4">
            <Card
              style={{
                width: "18rem",
                background: "#f8f9fa",
                border: "none",
                boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
                borderRadius: "10px",
              }}
              className="text-center"
            >
              <Card.Img
                variant="top"
                src={teamMember1.src}
                alt="Team Member"
                style={{
                  height: "250px",
                  objectFit: "cover",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              />
              <Card.Body>
                <Card.Title>
                  Mr. Babajide Olatoye Adeniyi
                </Card.Title>
                <Card.Text>Managing Director</Card.Text>
              </Card.Body>
            </Card>
          </div>


{/* Team Member 2 */}
<div className="col-12 col-sm-6 col-md-4  d-flex justify-content-center mb-4">
            <Card
              style={{
                width: "18rem",
                background: "#f8f9fa",
                border: "none",
                boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
                borderRadius: "10px",
              }}
              className="text-center"
            >
              <Card.Img
                variant="top"
                src={teamMember2.src}
                alt="Team Member"
                style={{
                  height: "250px",
                  objectFit: "cover",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              />
              <Card.Body>
                <Card.Title>Adeniyi Bukola Ayo</Card.Title>
                <Card.Text>Accountant</Card.Text>
              </Card.Body>
            </Card>
          </div>


{/* Team Member 3 */}
<div className="col-12 col-sm-6 col-md-4  d-flex justify-content-center mb-4">
            <Card
              style={{
                width: "18rem",
                background: "#f8f9fa",
                border: "none",
                boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
                borderRadius: "10px",
              }}
              className="text-center"
            >
              <Card.Img
                variant="top"
                src={teamMember3.src}
                alt="Team Member"
                style={{
                  height: "250px",
                  objectFit: "cover",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              />
              <Card.Body>
                <Card.Title>Seun Adeniyi </Card.Title>
                <Card.Text>HOD- Electrical</Card.Text>
              </Card.Body>
            </Card>
          </div>

{/* Team Member 4 */}
<div className="col-12 col-sm-6 col-md-4  d-flex justify-content-center mb-4">
            <Card
              style={{
                width: "18rem",
                background: "#f8f9fa",
                border: "none",
                boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
                borderRadius: "10px",
              }}
              className="text-center"
            >
              <Card.Img
                variant="top"
                src={teamMember4.src}
                alt="Team Member"
                style={{
                  height: "250px",
                  objectFit: "cover",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              />
              <Card.Body>
                <Card.Title>Awoyemi Toheeb Damilare</Card.Title>
                <Card.Text>Asset Engineer</Card.Text>
              </Card.Body>
            </Card>
          </div>


{/* Team Member 5 */}
<div className="col-12 col-sm-6 col-md-4  d-flex justify-content-center mb-4">
            <Card
              style={{
                width: "18rem",
                background: "#f8f9fa",
                border: "none",
                boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
                borderRadius: "10px",
              }}
              className="text-center"
            >
              <Card.Img
                variant="top"
                src={teamMember1.src}
                alt="Team Member"
                style={{
                  height: "250px",
                  objectFit: "cover",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              />
              <Card.Body>
                <Card.Title>John Doe</Card.Title>
                <Card.Text>Chief Engineer</Card.Text>
              </Card.Body>
            </Card>
          </div>



          {/* Repeat for more team members */}
        </div>
      </div>
    </>
  );
}

export default TeamCardholder;
