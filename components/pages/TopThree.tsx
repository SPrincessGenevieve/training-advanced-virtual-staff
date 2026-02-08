"use client";

import React, { useEffect, useState } from "react";
import FrostCard from "../FrostCard";
import { Label } from "../ui/label";
import styles from "./styles.module.css";
import { Card, CardContent } from "../ui/card";

interface ListT {
  label: string;
  link: string;
  href: string;
}

interface CourseT {
  category: string;
  list: ListT[];
}

interface SearchT {
  item: CourseT[];
  isTopThree: boolean;
}

const TopThreeList = [
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

export default function TopThree({ item, isTopThree }: SearchT) {
  const [isUltra, setIsUltra] = useState(0);

  console.log("ITEM: ", item);

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
        className={`w-full gap-30 py-20 bg-linear from-primary-blue-300 rounded-t-[10vh] to-primary-blue-100 ${isUltra < 670 ? "from-18% to-40%" : "from-10% to-70%"} flex flex-col gap-10 px-30 global-padding mt-30 bg-linear-180 ${styles.topThree}`}
      >
        {!isTopThree ? (
          <div className="flex flex-col gap-4">
            <div>
              <Label variant="h1">Searched results</Label>
              <Label variant="h2">Results: {item.length}</Label>
            </div>
            <div
              className={`flex flex-wrap gap-10 ${styles.courseList} ${isUltra < 670 ? "flex flex-col mt-20" : ""}`}
            >
              {item.length > 0 ? (
                item[0].list.map((item, i) => (
                  <Card
                    key={i}
                    onClick={() => window.open("", "_blank")}
                    className={`w-full cursor-pointer hover:scale-105 transition ease-in-out hover:shadow-primary-blue-400/70 hover:shadow-2xl max-w-80 h-100 p-0 border border-primary-blue-400 bg-transparent ${styles.CardCont}`}
                  >
                    <CardContent className="p-0 h-full flex flex-col justify-between border-0 bg-transparent">
                      <video
                        key={item.link}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        width={400}
                        height={400}
                        className="w-full h-[80%] object-cover"
                        style={{ pointerEvents: "none" }} // This makes it unclickable/untouchable
                      >
                        <source src={item.link} type="video/mp4" />
                      </video>
                      <div className="p-4 w-full h-[20%] flex items-center justify-center">
                        <Label>{item.label}</Label>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="w-full h-full min-h-50 rounded-2xl flex items-start">
                  <Label>No matches</Label>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <div>
              <Label variant="h1">Top 3 Categories</Label>
              <Label variant="h2">Most frequently requested skills</Label>
            </div>
            <div
              className={`flex gap-10 ${isUltra < 670 ? "flex flex-col mt-20" : ""}`}
            >
              {TopThreeList.map((item, i) => (
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
        )}
      </div>
    </div>
  );
}
