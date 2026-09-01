import React from "react";
import DoodleFace from "./DoodleFace.jsx";

const HERO_NAILS = [
  { c: ["#9FD3E8", "#5aa6c9"], rot: -22, delay: 0, size: 0.95 },
  { c: ["#C9A7E8", "#8f6fc4"], rot: -8, delay: 0.08, size: 1.05, holo: true },
  { c: ["#8fd6a8", "#4fae76"], rot: 6, delay: 0.16, size: 1.15 },
  { c: ["#4854B4", "#333F94"], rot: 20, delay: 0.24, size: 1.0 },
];

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        padding: "80px 20px 40px", 
        textAlign: "center",
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      
      <DoodleFace
        rotate={12}
        style={{
          position: "absolute",
          top: -10,
          left: 10,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      
      <DoodleFace
        flip
        rotate={-12}
        style={{
          position: "absolute",
          bottom: 10,
          right: 15,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      
      <div style={{ position: "relative", zIndex: 1, maxWidth: 650, margin: "0 auto" }}>
      <h1
      className="display reveal"
      style={{
        fontFamily: "'BauhausLaceRndDisplay-Regular', sans-serif",
        fontSize: "clamp(24px, 4vw, 42px)", 
        fontWeight: 400,
        lineHeight: 1.15,
        marginTop: 20,
        marginBottom: 16,
        animationDelay: ".08s",
        
      }}
    >
      Custom Press On Nails
    </h1>

        <p
          className="reveal"
          style={{
            fontSize: 15.5,
            fontWeight: 600,
            maxWidth: 380,
            margin: "0 auto 26px",
            lineHeight: 1.7,
            animationDelay: ".16s",
          }}
        >
          if you’ve been thinking about getting these,<br></br>here’s everything you need to know before you make the move
        </p>

        <div className="reveal" style={{ animationDelay: ".24s" }}>
          <a
            href="#produk"
            className="btn-shopee"
            style={{ width: "auto", padding: "13px 30px", display: "inline-flex" ,fontSize:15.5}}
          >
            Lihat Produk
          </a>
        </div>

        <p style={{ marginTop: 24, fontSize: 15.5, fontWeight: 700, color: "#4854B4" }}>
          @yourcitestudio
        </p>
      </div>
    </section>
  );
}