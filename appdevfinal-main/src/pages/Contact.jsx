import React, { useEffect } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaFacebookMessenger,
} from "react-icons/fa";
import { SiViber } from "react-icons/si"; // ✅ Viber icon
import "./PageStyles.css"; // ✅ ensure this matches your AboutUs styling

// ✅ Import images properly
import WhatsAppQR from "../assets/blank_image.jpg";
import ViberQR from "../assets/blank_image.jpg";

const Contact = () => {
  useEffect(() => {
    document.body.classList.add("aboutus-bg");
    return () => {
      document.body.classList.remove("aboutus-bg");
    };
  }, []);

  return (
    <div className="page-content-container">
      <div style={{ marginBottom: "30px" }}>
        <div
          style={{
            fontSize: "1.8rem",
            fontWeight: "bold",
            color: "#014440",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Contact Us
        </div>

        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            fontSize: "1rem",
            marginLeft: "auto",
            color: "#a6a6a6",
            lineHeight: "1.8",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <div>
            <FaEnvelope style={{ marginRight: "10px", color: "#014440" }} />
            xxxx@gmail.com
          </div>

          <div>
            <FaFacebook style={{ marginRight: "10px",  color: "#014440" }} />
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#a6a6a6", textDecoration: "none" }}
            >
              facebook.com/idk
            </a>
          </div>

          <div>
            <FaFacebookMessenger
              style={{ marginRight: "10px", color: "#014440" }}
            />
            <a
              href="https://m.me/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#a6a6a6", textDecoration: "none" }}
            >
              FacebookMessenger.com/idk
            </a>
          </div>

          <div>
            <FaPhoneAlt style={{ marginRight: "10px",  color: "#014440", }} />
            0990000000
          </div>

          {/* ✅ WhatsApp + Viber side by side */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "40px",
              flexWrap: "wrap",
              marginTop: "20px",
            }}
          >
            {/* WhatsApp */}
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "10px",
                }}
              >
                <FaWhatsapp style={{  color: "#014440", fontSize: "1.3rem" }} />
                <span style={{ fontWeight: "bold", color: "#014440", }}>
                  WhatsApp
                </span>
              </div>
              <img
                src={WhatsAppQR} // ✅ imported image
                alt="WhatsApp QR"
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "8px",
                  margin: "0 auto",
                  display: "block",
                }}
              />
            </div>

            {/* Viber */}
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "10px",
                }}
              >
                <SiViber style={{  color: "#014440", fontSize: "1.3rem" }} />
                <span style={{ fontWeight: "bold",  color: "#014440" }}>
                  Viber
                </span>
              </div>
              <img
                src={ViberQR} // ✅ imported image
                alt="Viber QR"
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "8px",
                  margin: "0 auto",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          paddingTop: "20px",
          fontSize: "0.9rem",
          color: "#a6a6a6",
          borderTop: "1px solid #333",
        }}
      >
        &copy; {new Date().getFullYear()} Saipher CG. All rights reserved.
      </div>
    </div>
  );
};

export default Contact;
