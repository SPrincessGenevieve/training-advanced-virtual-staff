import React from "react";
import { Label } from "../ui/label";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";

export default function QuickLinks() {
  const quickLinks = [
    {
      label: "Home",
      link: "https://avs.advancedvirtualstaff.com/",
    },
    {
      label: "About Us",
      link: "https://avs.advancedvirtualstaff.com/about-us/",
    },
    {
      label: "Requirements",
      link: "https://avs.advancedvirtualstaff.com/requirements/",
    },
    {
      label: "Apply Here",
      link: "https://avs.advancedvirtualstaff.com/apply-here/",
    },
    {
      label: "FAQs",
      link: "https://avs.advancedvirtualstaff.com/faqs/",
    },
    {
      label: "Blog",
      link: "https://avs.advancedvirtualstaff.com/blog/",
    },
  ];

  return (
    <div
      className={`w-full gap-20 px-30 global-padding z-30 flex justify-between ${styles.quickListCont}`}
    >
      <div className={`w-[45%] flex flex-col gap-4 ${styles.quickListDesc}`}>
        <Label variant="h2" className="uppercase">
          Advanced Virtual Assistance
        </Label>
        <Label>
          Empowering Filipino Virtual Assistants in realizing their full
          potential by providing a platform for building their work-from-home
          career, and achieving their dreams.
        </Label>
      </div>
      <div className={`w-[45%] flex flex-col gap-4 ${styles.quickLiinkLink}`}>
        <Label variant="h2" className="uppercase">
          QUICK LINKS
        </Label>
        <div className="grid grid-cols-2 gap-2 w-full">
          {quickLinks.map((item, i) => (
            <Link key={i} href={item.link} className="cursor-pointer">
              <Label
                variant="p"
                className="cursor-pointer  hover:text-primary-blue-400"
              >
                {item.label}
              </Label>
            </Link>
          ))}
        </div>
      </div>
      <div className={`${styles.quickLiinkLogo}`}>
        <Image
          src={"/logo.png"}
          alt={""}
          width={400}
          height={400}
          className="w-45 h-auto"
        ></Image>
      </div>
    </div>
  );
}
