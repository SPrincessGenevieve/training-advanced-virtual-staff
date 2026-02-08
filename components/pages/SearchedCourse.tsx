"use client";

import React, { useEffect, useState } from "react";
import FrostCard from "../FrostCard";
import { Label } from "../ui/label";
import styles from "./styles.module.css";

export default function SearchedCourse() {
  const TopThree = [
    {
      link: "/topThree/Tiktok.gif",
      title: "Tiktok",
      desc: "18 Courses",
      href: "https://ads.tiktok.com/business/learn/course/list",
    },
    {
      link: "/topThree/shopify.gif",
      title: "Shopify",
      desc: "58 Courses",
      href: "https://www.shopify.com/learn",
    },
    {
      link: "/topThree/LinkedIn.gif",
      title: "LinkedIn Ads",
      desc: "23 Courses",
      href: "https://training.marketing.linkedin.com/page/certifications",
    },
  ];

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
    <div className="w-full flex flex-col ">
      <div
        className={`w-full py-20 bg-linear from-primary-blue-300 rounded-t-[10vh] to-primary-blue-100 ${isUltra < 670 ? "from-18% to-40%" : "from-65% to-5%"} flex flex-col gap-10 px-30 global-padding mt-30 bg-linear-180 ${styles.topThree}`}
      >
        <div>
          <Label variant="h1">Searched results</Label>
          <Label variant="h2">Most frequently requested skills</Label>
        </div>
        <div
          className={`flex gap-10 ${isUltra < 670 ? "flex flex-col mt-20" : ""}`}
        >
          {TopThree.map((item, i) => (
            <FrostCard
              href={() => window.open(item.href, "_blank")}
              src={item.link}
              title={item.title}
              desc={item.desc}
              key={i}
            ></FrostCard>
          ))}
        </div>
      </div>
    </div>
  );
}
