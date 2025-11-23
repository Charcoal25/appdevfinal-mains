// \src\pages\CustomerInfoForm.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useCart from "./UseCart"; // Your cart hook
import "./CustomerInfoForm.css"; // ✅ Import the CSS file
import TopNavbar from "../components/TopNavbar";

function CustomerInfoForm() {
  const navigate = useNavigate();
  const { cart, clearCart } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    contact: "",
    email: "",
    note: "",
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(false);

  // ✅ NEW STATES for Terms Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);

  useEffect(() => {
    document.body.classList.add("contact-bg");
    return () => {
      document.body.classList.remove("contact-bg");
    };
  }, []);

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
    setErrors({ ...errors, [field]: "" });
  };

  const handleClearField = (field) => () => {
    setFormData({ ...formData, [field]: "" });
  };

  const handleClearAll = () => {
    setFormData({ name: "", address: "", contact: "", email: "", note: "" });
    setErrors({});
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.address) newErrors.address = "Address is required.";
    if (!formData.contact) newErrors.contact = "Contact number is required.";
    if (!formData.email) newErrors.email = "Email address is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    if (!isAgreed) {
      setSubmitStatus("⚠️ You must agree to the Terms & Conditions before submitting.");
      return;
    }

    setSubmitDisabled(true);
    setSubmitStatus("Submitting...");

    const orderID = `ORD-${new Date()
      .toISOString()
      .replace(/[-:.TZ]/g, "")}-${Math.random()
      .toString(36)
      .substring(2, 6)
      .toUpperCase()}`;

    const cartDetails = cart
      .map((item, index) => {
        const unitPrice = (item.price / item.quantity).toFixed(2);
        return [
          `Item ${index + 1}: ${item.name}`,
          `Type/Size: ${item.selectedSize}`,
          item.selectedPieces !== undefined
            ? `Box Quantity: ${item.selectedPieces}`
            : item.note
            ? `Note: ${item.note}`
            : null,
          `Qty: ${item.quantity}`,
          `Unit Price: ₱${unitPrice}`,
          `Total: ₱${item.price.toFixed(2)}`,
        ]
          .filter(Boolean)
          .join("\n");
      })
      .join("\n\n");

    const subtotal = `₱${cart
      .reduce((acc, item) => acc + item.price, 0)
      .toFixed(2)}`;

    const formBody = new URLSearchParams({
      orderID: orderID,
      name: formData.name,
      address: formData.address,
      contact: formData.contact,
      email: formData.email,
      cartDetails: cartDetails,
      subtotal: subtotal,
      note: formData.note,
      secret: "secret",
    }).toString();

    try {
      const response = await fetch(
        "....",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formBody,
        }
      );

      const result = await response.json();

      if (result.result === "success") {
        setSubmitStatus(
          <>
            <p className="submit-success">
              ✅ Order ID: <strong>{orderID}</strong> submitted successfully.{" "}
              <br /> Please wait for our feedback through your provided contact
              information.
              <br />
              You may also reach us via&nbsp;
              <a
                href="https://idk"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#1877f2", textDecoration: "underline" }}
              >
                Messenger
              </a>
              .
            </p>
          </>
        );
        clearCart();
      } else {
        setSubmitStatus("Failed to send. Try again.");
        setSubmitDisabled(false);
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("Error sending order.");
      setSubmitDisabled(false);
    }
  };

  const handleBack = () => {
    navigate("/");
    setTimeout(() => clearCart(), 100);
  };

  return (
    <>
      <TopNavbar minimal />
      <div className="page-content-container">
        <h2>Customer Information</h2>

        {["name", "address", "contact", "email", "note"].map((field) => (
          <div key={field} className="customer-form-group">
           <label>
  {field === "contact"
    ? "Contact Number"
    : field === "email"
    ? "Email Address"
    : field.charAt(0).toUpperCase() + field.slice(1)}
  :
</label>
            <div className="customer-form-input-wrapper">
              <input
                type="text"
                value={formData[field]}
                onChange={handleChange(field)}
              />
              <button type="button" onClick={handleClearField(field)}>
                CLEAR
              </button>
            </div>
            {errors[field] && (
              <p className="error-text">{errors[field]}</p>
            )}
          </div>
        ))}

        {/* ✅ Terms & Conditions Link */}
        <p style={{ fontSize: "0.9rem", textAlign: "center", marginTop: "10px" }}>
          By placing an order, you agree to our{" "}
          <span
            onClick={() => setIsModalOpen(true)}
            style={{ color: "orange", cursor: "pointer", textDecoration: "underline" }}
          >
            Data Privacy Statement
          </span>.
        </p>

        <div className="customer-form-buttons">
          <button onClick={handleClearAll}>Clear All</button>
          <button onClick={handleBack}>Back</button>
          <button onClick={handleSubmit} disabled={submitDisabled || !isAgreed}>
            {submitDisabled ? "Submitting..." : "Submit Order"}
          </button>
        </div>

        {submitStatus &&
          (typeof submitStatus === "string" ? (
            <p
              className="submit-status"
              style={{
                color: submitStatus.includes("success") ? "green" : "red",
              }}
            >
              {submitStatus}
            </p>
          ) : (
            submitStatus
          ))}

        {/* ✅ Terms Modal */}
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-box">
              <h3>Data Privacy Statement.</h3>
              <div className="modal-content">
                <p>
                  
By providing your personal information, you consent to the collection, use, and processing of your data in accordance with the Data Privacy Act of 2012 (RA 10173).<br />
Your information will be used solely for legitimate business purposes such as processing orders, maintaining customer records, and providing updates on our products and services.<br />
We ensure that all personal data is kept confidential and protected against unauthorized access, disclosure, or misuse. We will not share your information with third parties without your consent, unless required by law.<br />
By proceeding with this transaction, you acknowledge that you have read and understood this Data Privacy Statement and agree to the processing of your personal information as described herein.<br />
      
                </p>
              </div>

          <div className="terms-wrapper">
  <div className="terms-container">
    <input
      type="checkbox"
      id="terms"
      checked={isAgreed}
      onChange={(e) => setIsAgreed(e.target.checked)}
    />
    <label htmlFor="terms">
I hereby consent to the processing of my personal information.</label>
  </div>
</div>



              <div style={{ marginTop: "15px", textAlign: "right" }}>
                <button
                  onClick={() => setIsModalOpen(false)}
                  style={{
                    background: "orange",
                    border: "none",
                    padding: "6px 12px",
                    borderRadius: "4px",
                    cursor: "pointer",
                    color: "white",
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default CustomerInfoForm;
