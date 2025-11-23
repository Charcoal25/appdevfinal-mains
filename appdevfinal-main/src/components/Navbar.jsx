import React from "react";
import "./Navbar.css";

function Navbar({ onSelectTab, selectedTab }) {
  const tabs = [
    { label: "Shrink Wrap Film", value: "ShrinkWrapFilm" },
    { label: " Shrink Wrap Rolls", value: "Roll" },
    { label: "Liners", value: "Liners" },
    { label: "Packaging Supplies", value: "PackagingSupplies" },
    { label: "Others", value: "Others" },
  ];

  return (
    <div className="navbar-container">
      <nav className="navbar">
        {tabs.map((tab) => (
          <button
            key={tab.value} // ✅ use value as the key
            className={`navbar-button ${selectedTab === tab.value ? "selected" : ""}`} // ✅ compare value
            onClick={() => onSelectTab(tab.value)} // ✅ send value on click
          >
            {tab.label} {/* ✅ display label */}
          </button>
        ))}
      </nav>
    </div>
  );
}

export default Navbar;
