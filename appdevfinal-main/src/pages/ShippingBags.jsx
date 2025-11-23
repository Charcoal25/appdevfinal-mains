// src/pages/ShippingBags.jsx
import React, { useState } from "react";
import ProductModal from "../components/ProductModalv2";
import "../pages/ProductGrid.css";

import polyMailers from "../assets/blank_image.jpg";
import bubbleMailers from "../assets/blank_image.jpg";
import kraftBags from "../assets/blank_image.jpg";
import laminatedBags from "../assets/blank_image.jpg";
import gussetBags from "../assets/blank_image.jpg";
import zipperBags from "../assets/blank_image.jpg";

export const products = [
  {
    name: "Poly Mailers",
    images: [polyMailers],
    price: "",
    types: { "Small": 40, "Medium": 70, "Large": 100 },
    multipliers: { "100pcs": 1 },
    description: "Durable and lightweight poly mailers ideal for shipping clothes, accessories, and non-fragile items.",
    QuantityNote: "100 pcs per quantity",
  },
  {
    name: "Bubble Mailers",
    images: [bubbleMailers],
    price: "",
    types: { "Small": 60, "Medium": 90, "Large": 130 },
    multipliers: { "100pcs": 1 },
    description: "Protect your shipments with bubble mailers featuring padded interiors to safeguard fragile products.",
    QuantityNote: "100 pcs per quantity",
  },
  {
    name: "Kraft Paper Bags",
    images: [kraftBags],
    price: "",
    types: { "Small": 30, "Medium": 55, "Large": 85 },
    multipliers: { "100pcs": 1 },
    description: "Eco-friendly kraft paper bags suitable for shipping and retail packaging with a natural aesthetic.",
    QuantityNote: "100 pcs per quantity",
  },
  {
    name: "Laminated Shipping Bags",
    images: [laminatedBags],
    price: "",
    types: { "Small": 50, "Medium": 80, "Large": 120 },
    multipliers: { "100pcs": 1 },
    description: "Moisture-resistant laminated bags perfect for products that need extra protection during transit.",
    QuantityNote: "100 pcs per quantity",
  },
  {
    name: "Gusseted Bags",
    images: [gussetBags],
    price: "",
    types: { "Small": 45, "Medium": 75, "Large": 110 },
    multipliers: { "100pcs": 1 },
    description: "Expandable gusseted bags for larger or bulkier items, providing extra space without compromising protection.",
    QuantityNote: "100 pcs per quantity",
  },
  {
    name: "Zipper Lock Bags",
    images: [zipperBags],
    price: "",
    types: { "Small": 35, "Medium": 60, "Large": 90 },
    multipliers: { "100pcs": 1 },
    description: "Reusable zipper lock bags suitable for shipping or storing items securely and conveniently.",
    QuantityNote: "100 pcs per quantity",
  },
];

function ShippingBags({ addToCart, searchQuery = "", overrideData }) {
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
      <h2 style={{ textAlign: "center", marginTop: "2rem" }}>Shipping Bags</h2>
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

export default ShippingBags;
