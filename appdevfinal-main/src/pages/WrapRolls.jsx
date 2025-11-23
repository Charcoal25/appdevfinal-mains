// src/pages/WrapRolls.jsx
import React, { useState } from "react";
import ProductModal from "../components/ProductModalv2"; 
import "../pages/ProductGrid.css";

import product1a from "../assets/blank_image.jpg";
import product1b from "../assets/blank_image.jpg";
import product2a from "../assets/blank_image.jpg";
import product2b from "../assets/blank_image.jpg";
import product3a from "../assets/blank_image.jpg";
import product3b from "../assets/blank_image.jpg";
import product4a from "../assets/blank_image.jpg";
import product4b from "../assets/blank_image.jpg";
import product5a from "../assets/blank_image.jpg";
import product5b from "../assets/blank_image.jpg";
import product6a from "../assets/blank_image.jpg";
import product6b from "../assets/blank_image.jpg";

export const products = [
  {
    name: "Eco-Friendly Biodegradable Wrap Roll",
    images: [product1a, product1b],
    price: "",
    types: { "50cm x 100m": 200, "100cm x 100m": 350 },
    multipliers: { "1 Roll": 1 },
    description: "Made from plant-based materials, this wrap roll is fully biodegradable and perfect for sustainable packaging.",
    QuantityNote: "1 roll per quantity",
  },
  {
    name: "Compostable Paper Wrap",
    images: [product2a, product2b],
    price: "",
    types: { "30cm x 50m": 120, "60cm x 50m": 210 },
    multipliers: { "1 Roll": 1 },
    description: "Durable paper wrap that can be composted after use. Ideal for gift wrapping or product protection.",
    QuantityNote: "1 roll per quantity",
  },
  {
    name: "Recycled Kraft Paper Roll",
    images: [product3a, product3b],
    price: "",
    types: { "50cm x 100m": 150, "100cm x 100m": 280 },
    multipliers: { "1 Roll": 1 },
    description: "Strong kraft paper made from 100% recycled materials, providing protection while minimizing environmental impact.",
    QuantityNote: "1 roll per quantity",
  },
  {
    name: "PLA Compostable Film",
    images: [product4a, product4b],
    price: "",
    types: { "30cm x 100m": 180, "50cm x 100m": 300 },
    multipliers: { "1 Roll": 1 },
    description: "Transparent film made from PLA (plant-based), fully compostable and safe for food packaging.",
    QuantityNote: "1 roll per quantity",
  },
  {
    name: "Eco Bubble Wrap",
    images: [product5a, product5b],
    price: "",
    types: { "50cm x 10m": 220, "100cm x 10m": 400 },
    multipliers: { "1 Roll": 1 },
    description: "Protective bubble wrap made from recycled and recyclable materials for a greener alternative to conventional plastic.",
    QuantityNote: "1 roll per quantity",
  },
  {
    name: "Recycled Tissue Wrap Roll",
    images: [product6a, product6b],
    price: "",
    types: { "50cm x 50m": 90, "100cm x 50m": 160 },
    multipliers: { "1 Roll": 1 },
    description: "Soft, recycled tissue paper perfect for wrapping delicate items while reducing environmental footprint.",
    QuantityNote: "1 roll per quantity",
  },
];

function WrapRolls({ addToCart, searchQuery = "", overrideData }) {
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
      <h2 style={{ textAlign: "center", marginTop: "2rem" }}>Eco-Friendly Wrap Rolls</h2>
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

export default WrapRolls;
