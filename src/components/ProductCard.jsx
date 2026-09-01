import React from "react";
import "./ProductCard.css";

export default function ProductCard({ product, delay = 0, onOpen }) {
  const { name, shape, price, finish, thumb, shopeeUrl } = product;

  return (
    <div
      className="product-card"
      style={{ animationDelay: `${delay}s`, cursor: "pointer" }}
      onClick={() => onOpen(product)}
    >
      <div className="product-thumb-wrap">
        <img src={thumb} alt={name} className="product-thumb" />
      </div>
      <p className="product-tag">
        {shape} · {finish}
      </p>
      <h3 className="display product-name">{name}</h3>
      <p className="product-price">{price}</p>
      <a
        href={shopeeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-shopee"
        onClick={(e) => e.stopPropagation()}
      >
        Beli di Shopee ↗
      </a>
    </div>
  );
}