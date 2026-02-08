"use client";
import React from "react";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

export default function BtnDown() {
  const [isUltra, setIsUltra] = useState(0);

  useEffect(() => {
    const checkWidth = () => {
      setIsUltra(window.innerWidth);
    };

    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <div className={isUltra < 500 ? "scale-60 m-3" : ""}>
      <svg
        width="288"
        height="199"
        viewBox="0 0 288 199"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="37" y="70" width="214" height="25" fill="#00A4F2" />
        <ellipse cx="34.1312" cy="103.5" rx="34.1312" ry="33.5" fill="white" />
        <ellipse cx="253.936" cy="107.5" rx="33.6761" ry="37.5" fill="white" />
        <g filter="url(#filter0_d_121_7)">
          <path
            d="M65 71H225V75C225 119.183 189.183 155 145 155C100.817 155 65 119.183 65 75V71Z"
            fill="#00A4F2"
          />
        </g>
        <path
          d="M129.75 108.625L143.5 122.375L157.25 108.625"
          stroke="white"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <filter
            id="filter0_d_121_7"
            x="42.5"
            y="69.5"
            width="205"
            height="129"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="21" />
            <feGaussianBlur stdDeviation="11.25" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0196078 0 0 0 0 0.247059 0 0 0 0 0.360784 0 0 0 0.21 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_121_7"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_121_7"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
