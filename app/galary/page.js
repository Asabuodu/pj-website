"use client";
import React from "react";
import Navbar from "../components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/footer";
import ControlledCarousel from "../components/carousel";

export default function Galary() {
  return (
    <div>
      <Navbar />
      <ControlledCarousel />
      <Footer />
    </div>
  );
}
