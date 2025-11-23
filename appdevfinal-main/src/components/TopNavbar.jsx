import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import "./TopNavbar.css";

function TopNavbar({ cart, onViewCart }) {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // add your search logic here
  };

  return (
    <nav className="top-navbar">
      {/* Logo */}
      <div className="top-navbar-logo">
        <img src={logo} alt="Logo" className="logo-img" />
        <span className="logo-text">Saipher CG</span>
      </div>

      {/* Links */}
      <div className="top-navbar-links">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Home
        </Link>
        <Link
          to="/about"
          className={location.pathname === "/about" ? "active" : ""}
        >
          About Us
        </Link>
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "active" : ""}
        >
          Contact
        </Link>
      </div>

      {/* Search Bar */}
      {!isMobile && (
        <form className="top-navbar-search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">🔍</button>
        </form>
      )}

      {/* Cart */}
      <div className="top-navbar-cart">
        <button onClick={onViewCart} className="cart-button">
          🛒
          {cart?.length > 0 && <span className="cart-count">{cart.length}</span>}
        </button>
      </div>
    </nav>
  );
}

export default TopNavbar;
