"use client";
import React from "react";
import { Label } from "../ui/label";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import styles from "./styles.module.css";

export default function Newbie() {
  const newbieList = [
    {
      label: "How To Make A Good Resume",
      list: "/icon2/record.png",
      href: "https://rhinestone-bulb-8c7.notion.site/How-to-Make-a-Good-Resume-d30e261c70a54e298014e0d30188c2bf",
    },
    {
      label: "Virtual Job Interview Guide",
      list: "/icon2/virtual-job.png",
      href: "https://rhinestone-bulb-8c7.notion.site/Virtual-Job-Interview-Guide-3de690703a764461b93258609423b5c4",
    },
    {
      label: "Work Portfolio Guide",
      list: "/icon2/portfolio.png",
      href: "https://rhinestone-bulb-8c7.notion.site/Work-Portfolio-Guide-c8f3b01ef73749deae9c5590332d7177",
    },
    {
      label: "Video Recording Tips",
      list: "/icon2/record.png",
      href: "https://avs.advancedvirtualstaff.com/training/#",
    },
    {
      label: "Audio Recording Tips",
      list: "/icon2/record.png",
      href: "https://avs.advancedvirtualstaff.com/training/#",
    },
  ];
  return (
    <div className="w-full px-30 global-padding flex flex-col gap-4 z-50">
      <div className="w-full max-w-160">
        <Label variant="h1" className="">
          Are you still a newbie?
        </Label>
        <Label variant="h1" className="">
          Here's for you!
        </Label>
      </div>
      <div className={`grid grid-cols-5 gap-4 mt-10 z-50 ${styles.newbieList}`}>
        {newbieList.map((item, i) => (
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
                    className="h-full w-full object-contain"
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
