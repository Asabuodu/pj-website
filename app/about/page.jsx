"use client";
import React from "react";
import Navbar from "../components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/footer";
import ControlledCarousel from "../components/carousel";
// import Statement from "../components/statement";
// import AboutCards from './../components/aboutcards';
import Statement from "../components/statement";

export default function About() {
  return (
    <div>
      <Navbar />

      <ControlledCarousel />
      <div className="container my-5 bg-light">
        {/* Letter of Introduction */}
        {/* <div className="card shadow p-4 mb-5 bg-light">
          <h4 className="mb-3 text-success">
            <u>LETTER OF INTRODUCTION:</u>
          </h4>
          <p>
            We hereby introduce our company, Thoptech Electrical Limited, to
            your organization. Thoptech Electrical Limited is a leader in
            electronic provision and installation services for building, civil,
            and engineering construction works. We also provide and install
            affordable and effective security solutions with high value, great
            attention to detail, and a high level of security for your
            establishment.
          </p>
          <p>
            Our systems combine surveillance (CCTV), monitored alarms (Smoke
            Detectors, Burglary Alarms, etc.), and Access Control. CCTV is the
            use of video cameras to transmit signals to a specific area on a
            limited set of monitors. It is not openly transmitted, though it may
            use point-to-point wireless links. CCTV is often used for
            surveillance in areas that require monitoring such as free trade
            zones, banks, casinos, airports, and more.
          </p>
          <p>
            Organizations that have benefited from our excellent services
            include Nooeng Engineering Limited, Galcon Construction Limited,
            Syntech Logistics Limited, etc. For further clarity, please find
            attached a copy of our company profile for your perusal.
          </p>
          <p>
            We look forward to a beneficial working relationship with your
            organization.
          </p>
          <p>Yours faithfully,</p>
          <p>
            <strong>Jide Adeniyi</strong>
            <br />
            Managing Director
          </p>
        </div> */}

        {/* Company Introduction */}
        <div className="card shadow letter">
          <div className=" p-4 mb-5 ">
            <h4 className="mb-3 ">
              <u>INTRODUCTION:</u>
            </h4>
            <p>
              <strong>THOPTECH ELECTRICAL LIMITED</strong> is a registered
              electrical company that has been in existence since 2004 and was
              officially registered with the Corporate Affairs Commission of the
              Federal Republic of Nigeria in 2010 as a limited company with
              registration number RC: 863546.
            </p>
            <p>
              Our company has executed projects in electrical design &
              construction, supply of electrical materials, general maintenance
              & repairs, and project management for both pre- and post-contract
              phases. Our services cover all parts of the country, based on the
              requirements of our clients.
            </p>
          </div>

          <div className="  p-4 mb-5 m-3 ">
            <h4 className="mb-3 ">
              <u>LETTER OF INTRODUCTION:</u>
            </h4>
            <p>
              We hereby introduce our company, Thoptech Electrical Limited, to
              your organization. Thoptech Electrical Limited is a leader in
              electronic provision and installation services for building,
              civil, and engineering construction works. We also provide and
              install affordable and effective security solutions with high
              value, great attention to detail, and a high level of security for
              your establishment.
            </p>
            <p>
              Our systems combine surveillance (CCTV), monitored alarms (Smoke
              Detectors, Burglary Alarms, etc.), and Access Control. CCTV is the
              use of video cameras to transmit signals to a specific area on a
              limited set of monitors. It is not openly transmitted, though it
              may use point-to-point wireless links. CCTV is often used for
              surveillance in areas that require monitoring such as free trade
              zones, banks, casinos, airports, and more.
            </p>
            <p>
              Organizations that have benefited from our excellent services
              include Nooeng Engineering Limited, Galcon Construction Limited,
              Syntech Logistics Limited, etc. For further clarity, please find
              attached a copy of our company profile for your perusal.
            </p>
            <p>
              We look forward to a beneficial working relationship with your
              organization.
            </p>
            <p>Yours faithfully,</p>
            <p>
              <strong>Jide Adeniyi</strong>
              <br />
              Managing Director
            </p>
          </div>

          {/* Services */}
          <div className=" p-4 mb-5">
            <h4 className="">
              <u>SERVICES RENDERED:</u>
            </h4>
            <ul className="text-white ">
              <li className="list-group-item">
                Electrical installations in building, civil, and industrial
                engineering projects
              </li>
              <li className="list-group-item">
                Electrical installations in highway projects
              </li>
              <li className="list-group-item">Installation of CCTV systems</li>
              <li className="list-group-item">
                Installation of alarm systems and access control
              </li>
              <li className="list-group-item">
                Supply of electrical materials and equipment
              </li>
              <li className="list-group-item">
                General electrical and electronics repairs and maintenance
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Statement />
      <Footer />

      {/* Optional Custom Styling */}
      <style jsx>{`
        h4 {
          font-weight: bold;
        }
        p {
          text-align: justify;
        }
        .card {
          border-radius: 1rem;
        }
        ul li {
          margin-bottom: 0.5rem;
        }
      `}</style>
    </div>
  );
}
