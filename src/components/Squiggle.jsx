import React from "react";

export default function Squiggle({ style }) {
  return (
    <svg
      viewBox="0 0 120 90"
      width="90"
      height="68"
      style={style}
      fill="none"
      stroke="#4854B4"
      strokeWidth="4.5"
      strokeLinecap="round"
    >
      <path d="M6 70 C20 20 40 20 46 45 C52 68 68 68 70 45 C72 24 90 22 96 40 C100 54 112 50 114 34" />
    </svg>
  );
}
