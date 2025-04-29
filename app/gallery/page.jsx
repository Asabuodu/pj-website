"use client";
import React from "react";
import Navbar from "../components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/footer";
import ControlledCarousel from "../components/carousel";
import Gallery from "../components/gallery.jsx";
import VideoPlayer from "../components/video";

export default function GalleryPage() {
  return (
    <div>
      <Navbar />
      <ControlledCarousel />
      <VideoPlayer />
      <Gallery />
      <Footer />
    </div>
  );
}
