// src/pages/Boxes.jsx
import React, { useState } from "react";
import ProductModal from "../components/ProductModalv2";
import "../pages/ProductGrid.css";

import corrugated from "../assets/blank_image.jpg";
import rigid from "../assets/blank_image.jpg";
import paperboard from "../assets/blank_image.jpg";
import folding from "../assets/blank_image.jpg";
import telescopic from "../assets/blank_image.jpg";
import mailer from "../assets/blank_image.jpg";

export const products = [
  {
    name: "Corrugated Boxes",
    images: [corrugated],
    price: "",
    types: { "Small": 50, "Medium": 80, "Large": 120 },
    multipliers: { "1 Box": 1 },
    description: "Strong corrugated boxes for shipping and storage. Provides excellent protection and durability.",
    QuantityNote: "1 box per quantity",
  },
  {
    name: "Rigid Boxes",
    images: [rigid],
    price: "",
    types: { "Small": 150, "Medium": 200, "Large": 300 },
    multipliers: { "1 Box": 1 },
    description: "High-quality rigid boxes for premium packaging, ideal for gifts and luxury items.",
    QuantityNote: "1 box per quantity",
  },
  {
    name: "Paperboard Boxes",
    images: [paperboard],
    price: "",
    types: { "Small": 40, "Medium": 70, "Large": 110 },
    multipliers: { "1 Box": 1 },
    description: "Lightweight and recyclable paperboard boxes suitable for retail packaging and display.",
    QuantityNote: "1 box per quantity",
  },
  {
    name: "Folding Carton Boxes",
    images: [folding],
    price: "",
    types: { "Small": 45, "Medium": 75, "Large": 115 },
    multipliers: { "1 Box": 1 },
    description: "Easily foldable carton boxes for products, quick assembly, and versatile packaging needs.",
    QuantityNote: "1 box per quantity",
  },
  {
    name: "Telescopic Boxes",
    images: [telescopic],
    price: "",
    types: { "Small": 60, "Medium": 100, "Large": 150 },
    multipliers: { "1 Box": 1 },
    description: "Two-part telescopic boxes providing adjustable height, perfect for varying product sizes.",
    QuantityNote: "1 box per quantity",
  },
  {
    name: "Mailer Boxes",
    images: [mailer],
    price: "",
    types: { "Small": 55, "Medium": 85, "Large": 130 },
    multipliers: { "1 Box": 1 },
    description: "Self-sealing mailer boxes designed for shipping with convenience and protection.",
    QuantityNote: "1 box per quantity",
  },
];

function Boxes({ addToCart, searchQuery = "", overrideData }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setModalIsOpen(true);
  };

  const itemsToShow = overrideData || products;
  const filteredItems = overrideData
    ? itemsToShow
    : itemsToShow.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: "2rem" }}>Boxes</h2>
      <div className="product-grid">
        {filteredItems.length > 0 ? (
          filteredItems.map((product, index) => (
            <div className="product-card" key={index}>
              <img
                src={product.images[0]}
                alt={product.name}
                onClick={() => handleProductClick(product)}
                className="product-image"
              />
              <p className="product-name">{product.name}</p>
              <p className="product-price">{product.price}</p>
              <button
                onClick={() => handleProductClick(product)}
                className="product-button"
              >
                View Product
              </button>
            </div>
          ))
        ) : (
          <p className="no-results">No products match your search.</p>
        )}
      </div>
      <ProductModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        product={selectedProduct}
        addToCart={addToCart}
      />
    </div>
  );
}

export default Boxes;
