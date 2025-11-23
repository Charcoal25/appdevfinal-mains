import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import SearchBar from "../components/SearchBar";
import useCart from "./UseCart";
import CartSidebar from "../components/CartSideBar"; // ✅ import the sidebar

// Images
import heroImg from "../assets/packagings.png";
import boxesImg from "../assets/boxes.png";
import shippingBagsImg from "../assets/shipping_bags.png";
import packagingImg from "../assets/packaging.png";
import wrapRollsImg from "../assets/wrap_rolls.png";
import logoImg from "../assets/logo.png";
import minimumOrdersIcon from "../assets/minimum_orders.png";
import ecoFriendlyIcon from "../assets/eco_friendly_materials.png";
import fastDeliveryIcon from "../assets/fast_delivery.png";
import freeAdviceIcon from "../assets/free_advice.png";

export default function HomeRedesign() {
  const { cart, removeItem, computeSubtotal } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const categories = [
    { name: "Boxes", img: boxesImg, path: "/boxes" },
    { name: "Shipping Bags", img: shippingBagsImg, path: "/shipping-bags" },
    { name: "Packaging", img: packagingImg, path: "/packaging" },
    { name: "Wrap Rolls", img: wrapRollsImg, path: "/wrap-rolls" },
  ];

  const whyItems = [
    { icon: minimumOrdersIcon, title: "Minimum Orders", description: "Custom boxes even for small quantity." },
    { icon: ecoFriendlyIcon, title: "Eco-friendly materials", description: "Production aligned with environmental standards." },
    { icon: fastDeliveryIcon, title: "Fast Delivery", description: "Fast and reliable shipping across regions." },
    { icon: freeAdviceIcon, title: "Free Advice", description: "Get support from our packaging specialists." },
  ];

  return (
    <div style={{ backgroundColor: "#fbf9f5", color: "#014440" }}>
      {/* NAVBAR */}
      <nav className="home-navbar">
        <div className="home-navbar-logo">
          <img src={logoImg} alt="Logo" />
          <span>Saipher CG</span>
        </div>

        <div className="home-navbar-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="home-navbar-right">
          <div style={{ flex: "1 1 250px" }}>
            <SearchBar style={{ width: "100%" }} />
          </div>
          <div style={{ position: "relative" }}>
            <button className="cart-button" onClick={toggleCart}>🛒</button>
            {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
          </div>
        </div>
      </nav>

      {/* CART SIDEBAR */}
      {isCartOpen && (
        <CartSidebar
          cart={cart}
          onRemove={removeItem}
          computeSubtotal={computeSubtotal}
          onClose={toggleCart} // close button
        />
      )}

      {/* HERO SECTION */}
      <section className="home-hero">
        <img src={heroImg} alt="Packaging" />
        <h1>Smart Packaging Solutions for Your Brand</h1>
        <p>Packaging that protects, organizes, and delivers.</p>
      </section>

      {/* CATEGORY SECTION */}
      <section className="category-section">
        {categories.map((cat, idx) => (
          <Link to={cat.path} key={idx} className="category-wrapper-link">
            <div className="category-wrapper">
              <div className="category-card">
                <img src={cat.img} alt={cat.name} />
              </div>
              <div className="category-name">{cat.name}</div>
            </div>
          </Link>
        ))}
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-section-container">
        <h2 className="why-heading">Why we are best in packaging industry?</h2>
        <div className="why-items">
          {whyItems.map((item, idx) => (
            <div key={idx} className="why-item">
              <img src={item.icon} alt={item.title} className="why-icon" />
              <h3 className="why-title">{item.title}</h3>
              <p className="why-description">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
