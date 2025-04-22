"use client";
import React from "react";
import Navbar from "../components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/footer";
import ControlledCarousel from "../components/carousel";
import Cardholder from "../components/cards";

export default function Services() {
  return (
    <div>
      <Navbar />
      <ControlledCarousel />
      <Cardholder />
      <Footer />
    </div>
  );
}
