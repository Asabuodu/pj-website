"use client";
import Image from "next/image";
import React from "react";
import Navbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./globals.css";
// import Card from "react-bootstrap/Card";
import ControlledCarousel from "./components/carousel";
import Cert from "./components/cert";
import Cardholder from "./components/cards";
import VideoPlayer from "./components/video";
import Footer from "./components/footer";
import Gallery from "./components/gallery";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <div className="body">
        <ControlledCarousel />

        <div className="text-center my-4 my-5">
          <h4 className="mt-5">SERVICES RENDERED</h4>
          <Cardholder />
        </div>
        <Cert />
        <VideoPlayer />
        <Gallery />
      </div>

      <Footer />
    </div>
  );
}
