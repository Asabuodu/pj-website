"use client";
import React from "react";
import Navbar from "../components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/footer";
import ControlledCarousel from "../components/carousel";
import Gallery from "../components/gallery";

export default function GalleryPage() {
  return (
    <div>
      <Navbar />
      <ControlledCarousel />
      <Gallery />
      <Footer />
    </div>
  );
}
