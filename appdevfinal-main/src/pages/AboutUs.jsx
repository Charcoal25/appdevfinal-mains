import React, { useEffect } from "react";
import logo from "../assets/logo.png";
import aboutImg from "../assets/about.png";
import missionImg from "../assets/mission.png";
import visionImg from "../assets/vision.png";
import "./PageStyles.css";
import { Link } from "react-router-dom";

import desc1a from "../assets/blank_image.jpg";
import desc1b from "../assets/blank_image.jpg";
import desc1c from "../assets/blank_image.jpg";

const sealingImages = [desc1a, desc1b, desc1c];

export default function AboutUs() {
  useEffect(() => {
    document.body.style.backgroundColor = "#fbf9f5"; // Home page bg color
    return () => {
      document.body.style.backgroundColor = null;
    };
  }, []);

  return (
    <>
      {/* Site Navbar */}
      <nav className="home-navbar">
        <div className="home-navbar-logo">
          <img src={logo} alt="Logo" />
          <span>Saipher CG</span>
        </div>

        <div className="home-navbar-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      <div
        className="page-content-container"
        style={{
          color: "#014440",
          padding: "2rem",
          maxWidth: "1200px",
          margin: "2rem auto",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "2rem",
            flexWrap: "wrap",
          }}
        >

        </div>

        {/* About Section */}
        <section
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            marginBottom: "3rem",
            alignItems: "center",
          }}
        >
          <img
            src={aboutImg}
            alt="About"
            style={{ width: "300px", borderRadius: "16px", flexShrink: 0 }}
          />
          <div style={{ flex: 1 }}>
            <h2 style={{ color: "#014440", marginBottom: "1rem" }}>About Us</h2>
            <p style={{ lineHeight: "1.6", color: "#201f1e" }}>
              Saipher CG provides innovative, eco-friendly packaging solutions for brands of all
              sizes. We focus on quality, sustainability, and customer satisfaction, ensuring every
              package we produce meets industry standards while supporting your business growth.
              Our products are designed to protect your items efficiently while promoting your
              brand identity.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section
          style={{
            display: "flex",
            flexWrap: "wrap-reverse",
            gap: "2rem",
            marginBottom: "3rem",
            alignItems: "center",
          }}
        >
          <div style={{ flex: 1 }}>
            <h2 style={{ color: "#014440", marginBottom: "1rem" }}>Mission</h2>
            <p style={{ lineHeight: "1.6", color: "#201f1e" }}>
              Our mission is to provide smart and sustainable packaging solutions that enhance brand
              identity and protect products efficiently. We aim to reduce environmental impact
              through eco-friendly materials while maintaining high-quality standards and reliable
              service for every client.
            </p>
          </div>
          <img
            src={missionImg}
            alt="Mission"
            style={{ width: "300px", borderRadius: "16px", flexShrink: 0 }}
          />
        </section>

        {/* Vision Section */}
        <section
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            marginBottom: "3rem",
            alignItems: "center", // Align text and image vertically
          }}
        >
          <img
            src={visionImg}
            alt="Vision"
            style={{ width: "300px", borderRadius: "16px", flexShrink: 0 }}
          />
          <div style={{ flex: 1 }}>
            <h2 style={{ color: "#014440", marginBottom: "1rem" }}>Vision</h2>
            <p style={{ lineHeight: "1.6", color: "#201f1e"}}>
              To be the leading provider of packaging solutions in the region, recognized for
              innovation, sustainability, and customer-centric services. We envision a future where
              packaging and environmental responsibility go hand in hand.
            </p>
          </div>
        </section>

       {/* Customer Guide Section */}
<section
  style={{
    marginTop: "4rem", // Push section down
    marginBottom: "4rem",
    textAlign: "center", // Center all text
  }}
>
  <h3 style={{ color: "#014440", marginBottom: "1rem" }}>
    Customer Guide: How to Measure Your Container for the Perfect Seal?
  </h3>
  <p
    style={{
      lineHeight: "1.6",
      color: "#201f1e",
      maxWidth: "700px",
      margin: "0 auto", // Center paragraph
      marginBottom: "2rem",
    }}
  >
    Follow these simple steps to ensure a perfect seal every time when using our
    packaging products.
  </p>
  <div
    style={{
      display: "flex",
      justifyContent: "center", // Center images
      flexWrap: "wrap",
      gap: "15px",
      marginTop: "2rem", // Space above images
    }}
  >
    {sealingImages.map((src, i) => (
      <img
        key={i}
        src={src}
        alt={`Sealing Step ${i + 1}`}
        style={{
          width: "200px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />
    ))}
  </div>
</section>

        {/* Footer */}
        <footer
          style={{
            textAlign: "center",
            paddingTop: "20px",
            fontSize: "0.9rem",
            color: "#014440",
            borderTop: "1px solid #ccc",
          }}
        >
          &copy; {new Date().getFullYear()} Saipher CG. All rights reserved.
        </footer>
      </div>
    </>
  );
}
