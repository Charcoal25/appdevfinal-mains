import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeRedesign from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";

import Boxes from "./pages/Boxes";       // former ShrinkWrapFilm
import ShippingBags from "./pages/ShippingBags";       // former Liners
import Packaging from "./pages/Packaging"; // former PackagingSupplies
import WrapRolls from "./pages/WrapRolls";            // former Roll

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeRedesign />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/boxes" element={<Boxes />} />
        <Route path="/shipping-bags" element={<ShippingBags />} />
        <Route path="/packaging" element={<Packaging />} />
        <Route path="/wrap-rolls" element={<WrapRolls />} />
      </Routes>
    </Router>
  );
}

export default App;
