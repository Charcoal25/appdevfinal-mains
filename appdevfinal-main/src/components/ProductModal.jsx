import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./ProductModal.css";

Modal.setAppElement("#root");

function ProductModal({ isOpen, onRequestClose, product, addToCart }) {
  const [sizeOptions, setSizeOptions] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (product && product.types) {
      const options = Object.entries(product.types).map(([label, price]) => ({
        label,
        price,
      }));
      setSizeOptions(options);
      setSelectedSize(options[0]);
      setQuantity(1);
      setCurrentImageIndex(0);
    }
  }, [isOpen,product]);

  const calculateTotalPrice = () => {
    if (!selectedSize) return 0;
    return selectedSize.price * quantity;
  };

  const totalPrice = calculateTotalPrice();

  const handleAddToCart = () => {
    if (!selectedSize) return;
    addToCart({
      ...product,
      price: totalPrice,
      selectedSize: selectedSize.label,
      quantity,
      image: product.images?.[0] || "",
    });
    onRequestClose();
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  if (!product) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Product Modal"
      className="product-modal"
      overlayClassName="modal-overlay"
    >
      <h2 className="modal-title">{product.name}</h2>
        <div className="modal-scroll-content">
      {/* Fixed Carousel */}
      <div className="carousel-container">
        {product.images?.length > 0 && (
          <img
            src={product.images[currentImageIndex]}
            alt={`${product.name} ${currentImageIndex + 1}`}
            className="carousel-image"
          />
        )}
        {product.images?.length > 1 && (
          <div className="carousel-nav">
            <button onClick={handlePrevImage} className="carousel-button">
              ‹
            </button>
            <button onClick={handleNextImage} className="carousel-button">
              ›
            </button>
          </div>
        )}
      </div>

      {/* Scrollable middle content */}
      <div className="modal-body-scrollable">
        <div className="size-section">
          <div className="size-label">Select Type/Size:</div>
          <div className="size-options">
            {sizeOptions.map((option) => (
              <button
                key={option.label}
                onClick={() => setSelectedSize(option)}
                className={`size-button ${
                  selectedSize?.label === option.label ? "selected" : ""
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div className="quantity-section">
  <div className="quantity-label">Quantity:</div>
  <div style={{ display: "flex", alignItems: "center", marginTop: "0.5rem" }}>
  <div className="quantity-control">
    <button
      className="quantity-btn"
      onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
    >
      –
    </button>
    <input
      type="number"
      min="1"
      value={quantity}
      onChange={(e) =>
        setQuantity(Math.max(1, Number(e.target.value)))
      }
      className="quantity-input"
    />
    <button
      className="quantity-btn"
      onClick={() => setQuantity((prev) => prev + 1)}
    >
      +
    </button>
  </div>
  {product.QuantityNote && (
    <div className="quantity-note">({product.QuantityNote})</div>
  )}
</div>
</div>

        {product.description && (
          <div className="description-box">{product.description}</div>
        )}
      </div>
      </div>

      {/* Footer */}
      <div className="modal-footer">
        <button onClick={onRequestClose} className="cancel-button">
          Cancel
        </button>
        {/*<p className="total-price">Total: ₱{totalPrice.toFixed(2)}</p> */}
        <button onClick={handleAddToCart} className="add-button">
          Add to Cart
        </button>
      </div>
    </Modal>  
  );
}

export default ProductModal;
