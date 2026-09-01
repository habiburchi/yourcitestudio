import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard.jsx";
import ProductDetailModal from "./ProductDetailModal.jsx";
import { SHAPES, fetchProducts } from "../data/products.js";

export default function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("Semua");
  const [activeProduct, setActiveProduct] = useState(null);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  const shown = filter === "Semua" ? products : products.filter((p) => p.shape === filter);

  return (
    <section id="produk">
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 22 }}>
        <h2 className="display" style={{ fontSize: 30, fontWeight: 700 }}>
          Koleksi kami
        </h2>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {SHAPES.map((s) => (
            <button key={s} className={`chip ${filter === s ? "active" : ""}`} onClick={() => setFilter(s)}>
              {s}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <p style={{ textAlign: "center", fontWeight: 600, padding: "40px 0" }}>Memuat produk…</p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 18 }}>
          {shown.map((p, i) => (
            <ProductCard key={p.id} product={p} delay={i * 0.05} onOpen={setActiveProduct} />
          ))}
        </div>
      )}

      {activeProduct && <ProductDetailModal product={activeProduct} onClose={() => setActiveProduct(null)} />}
    </section>
  );
}