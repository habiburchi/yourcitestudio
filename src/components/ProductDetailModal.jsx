import React from "react";
import ProductSpec from "./ProductSpec.jsx";
import "./ProductDetailModal.css";

export default function ProductDetailModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-box" 
        onClick={(e) => e.stopPropagation()}
        style={{ position: "relative" }} 
      >
        
        <button 
          className="modal-close" 
          onClick={onClose} 
          aria-label="Tutup"
          
        >
          ✕
        </button>

        <div className="modal-preview">
          <img src={product.setPhoto} alt={`Set kuku ${product.name}`} className="modal-set-photo" />
        </div>

        <p className="product-tag" style={{ textAlign: "center" }}>
          {product.shapeDetail} · {product.finish}
        </p>
        <h3 className="display" style={{ fontSize: 24, textAlign: "center", margin: "6px 0 4px" }}>
          {product.name}
        </h3>
        <p style={{ textAlign: "center", fontSize: 18, fontWeight: 700, marginBottom: 6 }}>
          {product.price}
        </p>

        <ProductSpec label="Desain" value={product.design} />
        <ProductSpec label="Bentuk Kuku" value={product.shapeDetail} />

        <a
          href={product.shopeeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-shopee"
          style={{ marginTop: 20 }}
        >
          Beli di Shopee ↗
        </a>
      </div>
    </div>
  );
}