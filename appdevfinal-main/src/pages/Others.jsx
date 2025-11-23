// src/pages/Others.jsx
import React, { useState } from "react";
import ProductModal from "../components/ProductModalv2"; 
import "../pages/ProductGrid.css";

import product1a from "../assets/blank_image.jpg";
import product2a from "../assets/blank_image.jpg";
import product2b from "../assets/blank_image.jpg";
import product2c from "../assets/blank_image.jpg";



export const products = [
  //1
  {
    name: "Heavy Duty Heat Gun 2000W Hot Air Blower Gun",
    images: [product1a],
    price: "",
    types: {
      "Heavy Duty Heat Gunicon-tick-bold": 650,
      
    },

  multipliers: {
    "1000pcs": 1,         
  },
    description: `Hot Air Gun 2000W - Ideal for Shrink Wrap Film and Other Plastic Materials

Product Features:
✦ Versatile: Can be used for heating relief powder and shrinkable sheets.
✦ User-Friendly: Easy to operate.
✦ Long-lasting: Durable construction ensures longevity.
✦ High Quality: Crafted from premium materials for reliable performance.
✦ Adjustable Temperature: Offers flexibility in heat settings.
✦ Multipurpose: Ideal for bottle sealing, packaging, and other sealing applications.

Specifications:
▶ Model: 866B
▶ Size: 274 x 24 x 7 cm
▶ Weight: 0.730 kg
▶ Color: Black – Dark Blue
▶ Material: Metal
▶ Application: Used as a heating tool for sealing and covering.
`


,
  },

  //2
  {
    name: "Heavy Duty Impulse Sealer ",
    images: [product2a,product2b,product2c],
    price: "",
    types: {
      "100mm ": 510,
      "300mm ": 799,
    },

  multipliers: {
    "1000pcs": 1,         
  },    
    description: `100mm and 300mm Impulse Plastic Bag Sealer Machine

 -Is an essential tool for any household or kitchen. This machine efficiently seals plastic bags, preserving the freshness of your food and other perishables.

Product Features:

✦ Professional Appearance

✦Durable Construction

✦ Sturdy Design

✦ High-Quality Build

✦ Energy-Efficient

✦Compatible with Various Plastic Film Packages

➤ Application: Used for sealing goods to prevent spoilage, aid in fermentation processes, and for food preservation and packaging purposes using Sealer Plastic Bags.

Specifications:

Sealing Length: 100 and 300MM

Impulse Power: 200W

Voltage: 220V

Frequency: 50-60Hz

Sealing Width: 2mm

Sealing Thickness: 0.2-0.45mm

Main Material: ABS`
,QuantityNote: "",
  },
];

function Others({ addToCart, searchQuery = "", overrideData }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setModalIsOpen(true);
  };

  // Use overrideData if passed, else use local products
  const itemsToShow = overrideData || products;

  // Only filter when overrideData is not used
  const filteredItems = overrideData
    ? itemsToShow
    : itemsToShow.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: "2rem" }}> {/* vacant */}</h2>
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

export default Others;
