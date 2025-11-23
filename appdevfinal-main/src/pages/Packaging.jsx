// src/pages/Packaging.jsx
import React, { useState } from "react";
import ProductModalWithPieces from "../components/ProductModalv2";
import "../pages/ProductGrid.css";

import corrugatedBox from "../assets/blank_image.jpg";
import paperboardBox from "../assets/blank_image.jpg";
import rigidBox from "../assets/blank_image.jpg";
import foldingCarton from "../assets/blank_image.jpg";
import kraftBox from "../assets/blank_image.jpg";
import giftBox from "../assets/blank_image.jpg";

export const products = [
  {
    name: "Corrugated Boxes",
    images: [corrugatedBox],
    price: "",
    types: { "Small": 50, "Medium": 80, "Large": 120 },
    multipliers: { "50pcs": 1 },
    description: "Durable corrugated boxes ideal for shipping, storage, and moving items safely. Provides excellent protection and stacking strength.",
    QuantityNote: "50 pcs per quantity",
  },
  {
    name: "Paperboard Boxes",
    images: [paperboardBox],
    price: "",
    types: { "Small": 30, "Medium": 55, "Large": 90 },
    multipliers: { "50pcs": 1 },
    description: "Lightweight paperboard boxes perfect for retail packaging and lightweight items. Smooth surface for easy branding and printing.",
    QuantityNote: "50 pcs per quantity",
  },
  {
    name: "Rigid Boxes",
    images: [rigidBox],
    price: "",
    types: { "Small": 70, "Medium": 120, "Large": 180 },
    multipliers: { "50pcs": 1 },
    description: "Premium rigid boxes for luxury products. Provides superior strength and a high-quality presentation for gifts and specialty items.",
    QuantityNote: "50 pcs per quantity",
  },
  {
    name: "Folding Cartons",
    images: [foldingCarton],
    price: "",
    types: { "Small": 25, "Medium": 45, "Large": 75 },
    multipliers: { "50pcs": 1 },
    description: "Versatile folding cartons for food, cosmetics, or retail items. Easy to assemble and lightweight for convenient packaging.",
    QuantityNote: "50 pcs per quantity",
  },
  {
    name: "Kraft Boxes",
    images: [kraftBox],
    price: "",
    types: { "Small": 35, "Medium": 60, "Large": 95 },
    multipliers: { "50pcs": 1 },
    description: "Eco-friendly kraft boxes made from recycled materials. Ideal for sustainable packaging while maintaining durability.",
    QuantityNote: "50 pcs per quantity",
  },
  {
    name: "Gift Boxes",
    images: [giftBox],
    price: "",
    types: { "Small": 40, "Medium": 70, "Large": 110 },
    multipliers: { "50pcs": 1 },
    description: "Stylish gift boxes for birthdays, weddings, and special occasions. Enhances product presentation with an elegant look.",
    QuantityNote: "50 pcs per quantity",
  },
];

function Packaging({ addToCart, searchQuery = "", overrideData }) {
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
      <h2 style={{ textAlign: "center", marginTop: "2rem" }}>Packaging</h2>
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
      <ProductModalWithPieces
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        product={selectedProduct}
        addToCart={addToCart}
      />
    </div>
  );
}

export default Packaging;
