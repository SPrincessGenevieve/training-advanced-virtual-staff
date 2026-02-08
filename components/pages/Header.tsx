import BtnDown from "@/components/pages/btn-down";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Label } from "../ui/label";
import styles from "./styles.module.css";

export default function Header({ onClick }: { onClick: () => void }) {
  return (
    <div className="w-full h-full">
      <div
        className={`bg-linear-180 overflow-hidden from-primary-blue-100 from-5% via-primary-blue-200 via-40% to-sky-500 to-100% w-full h-[80vh] rounded-b-[8vh] relative flex items-center justify-center ${styles.headerCont}`}
      >
        <div
          className={`w-full h-18 gap-5 absolute top-0 flex items-center px-30 global-padding py-2`}
        >
          <Image
            priority
            src={"/logo-outline.png"}
            alt=""
            width={400}
            height={400}
            className="h-10 w-auto object-contain"
          ></Image>
          <Label className="font-light">ADVANCED VIRTUAL STAFF</Label>
        </div>
        <Image
          priority
          src={"/bg2.png"}
          className="w-full h-full opacity-30 absolute top-0 object-cover mix-blend-plus-lighter"
          width={3000}
          height={3000}
          alt=""
        ></Image>
        <div className="absolute z-30 left-0 w-full max-w-190 px-30 global-padding">
          <Label variant="h2">We Hire Virtual Staff</Label>
          <Label variant="h1">With These Skills</Label>
          <Label variant="p">
            These are the most requested skills by our clients. By taking these
            courses, you’re able to qualify and come work with us!
          </Label>
        </div>
        <Image
          priority
          src={"/per.png"}
          alt="person"
          width={3000}
          height={3000}
          className={`${styles.headerImage} absolute w-170 z-20 h-auto bottom-0 right-40`}
        ></Image>
      </div>
    </div>
  );
}
