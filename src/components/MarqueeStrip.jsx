import React from "react";
import "./MarqueeStrip.css";

const ITEMS = [
  "📍Bandung",
  "Homemade Fake Nails",
  "Made By Order💭",
  "Kirim seluruh Indonesia",
  "Checkout via Shopee",
];

export default function MarqueeStrip() {
  // Gandakan item agar isi track cukup panjang untuk di-looping (-50%)
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {doubled.map((t, i) => (
          <span key={i} className="marquee-item">
            <span className="marquee-dot" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}