import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import MarqueeStrip from "./components/MarqueeStrip.jsx";
import ProductGrid from "./components/ProductGrid.jsx";
import Footer from "./components/Footer.jsx";
import Squiggle from "./components/Squiggle.jsx";

export default function App() {
  return (
    <div className="page">
      <Squiggle style={{ position: "absolute", top: 90, right: 0 }} />
      <div className="doodle-squiggle" style={{ position: "absolute", top: 420, left: -10, opacity: 0.9 }}>
        <Squiggle />
      </div>

      <Navbar />
      <Hero />
      <MarqueeStrip />
      <ProductGrid />
      <Footer />
    </div>
  );
}
