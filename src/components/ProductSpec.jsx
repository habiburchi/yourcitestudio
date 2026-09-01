import React from "react";
import "./ProductSpec.css";

export default function ProductSpec({ label, value }) {
  return (
    <div className="spec-row">
      <span className="spec-label">{label}</span>
      <span className="spec-value">{value}</span>
    </div>
  );
}
