//\src\components\CartSideBar.jsx
import React from "react";
import "./CartSideBar.css";
import { Link } from "react-router-dom";

const CartSidebar = ({ cart, onRemove, computeSubtotal,onClose  }) => {
  return (
    <div className="cart-sidebar">
       <button className="close-btn" onClick={onClose}>×</button> {/*exp*/}
      <h3>Your Cart</h3>

      <div className="cart-items-container">
        <ul className="cart-items">
          {cart.map((item, index) => (
            <li key={index} className="cart-item">
              <img src={item.image} alt={item.name} width="60" />
              <div>
                <p><strong>{item.name}</strong></p>
                <p>Type/Size: {item.selectedSize}</p>

                {/* Show Box Quantity only if available */}
                {item.selectedPieces !== undefined ? (
                  <p>Box Quantity: {item.selectedPieces}</p>
                ) : (
                  item.note && <p style={{ fontStyle: "italic", color: "#666" }}>{item.note}</p>
                )}

                <p>Qty: {item.quantity}</p>
                {/*<p>₱{(item.price / item.quantity).toFixed(2)} each</p>*/}
               {/*} <p>Total: ₱{item.price.toFixed(2)}</p>*/}

                <button className="remove-btn" onClick={() => onRemove(index)}>
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="cart-total">
        <p style={{ display: "none" }}>
    Subtotal: ₱{computeSubtotal().toFixed(2)}
  </p>    
        
        
        <Link to={cart.length === 0 ? "#" : "/order"}>
          <button
       className="checkout-btn"
       disabled={cart.length === 0}
       style={{ opacity: cart.length === 0 ? 0.5 : 1,
         cursor: cart.length === 0 ? "not-allowed" : "pointer"
         ,color: "white", }}
          >
          Set Order
         </button>
          </Link>
      </div>
    </div>
  );
};

export default CartSidebar;
