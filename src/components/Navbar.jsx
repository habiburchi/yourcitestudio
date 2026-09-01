import React from "react";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "26px 0 10px",
      }}
    >
      <span className="display" style={{ fontSize: 22, fontWeight: 700, letterSpacing: "0.5px" }}>
        yourcite studio
      </span>
      <a href="https://shopee.co.id/yourcitestudio" className="chip active" style={{ textDecoration: "none" }}>
        Belanja Sekarang
      </a>
    </nav>
  );
}
