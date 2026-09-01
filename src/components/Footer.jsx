import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <span className="footer-brand display">
        yourcite studio
      </span>

      <span className="footer-info">
        Semua produk tersedia di toko Shopee resmi kami.
      </span>

      <div className="footer-socials">
        <a 
          href="https://www.instagram.com/yourcitestudio/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a 
          href="https://www.tiktok.com/@yourcitestudio" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          TikTok
        </a>
        <a 
          href="" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      </div>
    </footer>
  );
}