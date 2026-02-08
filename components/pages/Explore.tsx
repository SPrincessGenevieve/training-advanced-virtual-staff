"use client";
import React from "react";
import { Label } from "../ui/label";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import styles from "./styles.module.css";

export default function Explore() {
  const exploreList = [
    {
      label: "Search Engine Optimization",
      list: "/icons/SEO 1.png",
      href: "https://rhinestone-bulb-8c7.notion.site/SEO-Fundamentals-cc29939af0754cc492430de388034662",
    },
    {
      label: "Bookkeeping",
      list: "/icons/Bookkeeping 1.png",
      href: "https://rhinestone-bulb-8c7.notion.site/Bookkeeping-Basics-84e390315b8745059eb8ad910cf6d35e",
    },
    {
      label: "Technical Writing",
      list: "/icons/Technical Writing 1.png",
      href: "https://rhinestone-bulb-8c7.notion.site/BASIC-COPYWRITING-027cbddb97054b508ae3da5cf9921b3f",
    },
    {
      label: "Social Media Management",
      list: "/icons/Social Media Management 1.png",
      href: "https://rhinestone-bulb-8c7.notion.site/SOCIAL-MEDIA-MANAGEMENT-40c3914898044f60b0eb79da577ba4f2",
    },
    {
      label: "Podcast Editing",
      list: "/icons/Podcast Editing 1.png",
      href: "https://rhinestone-bulb-8c7.notion.site/Podcast-Editing-1f8e78e753a64e0ba1c59aab63975ef7",
    },
    {
      label: "Programming & Tech",
      list: "/icons/Programming & Tech 1.png",
      href: "https://rhinestone-bulb-8c7.notion.site/Programming-Tech-30aa60418de64b3bb4e24ea65b415a58",
    },
    {
      label: "Email Marketing",
      list: "/icons/Email Marketing 1.png",
      href: "https://rhinestone-bulb-8c7.notion.site/Email-Marketing-649ae3a78a1240e68d2f2965fcf719df",
    },
    {
      label: "Lead Generation",
      list: "/icons/Lead Generation 1.png",
      href: "https://rhinestone-bulb-8c7.notion.site/Lead-Generation-ea869a3c908f4f4882b24bbf3767b306",
    },
    {
      label: "Data Entry",
      list: "/icons/Data Entry 1.png",
      href: "https://rhinestone-bulb-8c7.notion.site/Data-Entry-708cb2e6752943fd8ae8b2e0e6c3be0a",
    },
    {
      label: "Canva",
      list: "/icons/Vector.png",
      href: "https://rhinestone-bulb-8c7.notion.site/Canva-Tutorials-e34a53f1b5d24f5da75201148a78ae49",
    },
  ];
  return (
    <div className="w-full px-30 global-padding flex flex-col gap-4 z-50 bg-primary-blue-100">
      <div className="w-full max-w-160">
        <Label variant="h1" className="">
          Explore other training materials
        </Label>
      </div>
      <div className={`grid grid-cols-5 gap-4 mt-10 ${styles.exploreList}`}>
        {exploreList.map((item, i) => (
          <Card
            onClick={() => window.open(item.href, "_blank")}
            key={i}
            className="bg-transparent p-0  hover:scale-105 transition ease-in-out hover:shadow-primary-blue-400/70 hover:shadow-2xl cursor-pointer"
          >
            <CardContent className="bg-transparent min-h-20 p-0 relative">
              <div className="absolute w-full h-full backdrop-blur-xs z-20"></div>
              <div className="absolute w-full h-full bg-sky-500/30 z-10 "></div>
              <div className="z-30 absolute w-full h-full flex gap-4 items-center p-4">
                <div className="flex w-20 h-full">
                  <Image
                    priority
                    src={item.list}
                    alt=""
                    width={400}
                    height={400}
                    className="h-full min-w-20 w-full object-contain"
                  ></Image>
                </div>
                <Label>{item.label}</Label>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
