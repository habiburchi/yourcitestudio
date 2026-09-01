import React, { useEffect, useRef } from "react";
import doodleImg from "../assets/YourciteStudio.png";

export default function DoodleFace({ 
  flip = false, 
  rotate = 0, 
  style, 
  className = "" 
}) {
  const imgRef = useRef(null);

  // animation
  useEffect(() => {
    let animationFrameId;
    let startTime = null;

    const duration = 3500; 

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) % duration;
      
      const wave = (Math.sin((progress / duration) * Math.PI * 2 - Math.PI / 2) + 1) / 2;
      
      const scale = 1 + wave * 0.05;
      const translateY = wave * -4;
      const flipScale = flip ? -1 : 1;

      if (imgRef.current) {
        imgRef.current.style.transform = `rotate(${rotate}deg) scaleX(${flipScale}) scale(${scale}) translateY(${translateY}px)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [flip, rotate]);

  return (
    <img
      ref={imgRef}
      src={doodleImg}
      alt="Yourcite Studio Doodle"
      className={`doodle-face ${className}`}
      style={{
        width: "clamp(100px, 20vw, 200px)",
        height: "auto",
        objectFit: "contain",
        transformOrigin: "bottom center", 
        ...style,
      }}
    />
  );
}