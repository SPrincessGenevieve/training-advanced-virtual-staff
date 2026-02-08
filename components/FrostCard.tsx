import React from "react";
import { Label } from "./ui/label";
import Image from "next/image";

interface FrostT {
  src: string;
  title: string;
  desc: string;
  href: () => void;
}

export default function FrostCard({ src, title, desc, href }: FrostT) {
  return (
    <div
      onClick={href}
      className="cursor-pointer hover:scale-105 transition ease-in-out hover:shadow-primary-blue-400/70 hover:shadow-2xl w-full h-60 rounded-3xl border border-primary-blue-400 flex items-center justify-center overflow-hidden"
    >
      <div className="w-full relative h-full bg-primary-blue-400/40 backdrop-blur-sm p-2 flex flex-col items-center justify-center">
        <Image
          priority
          src={src}
          alt=""
          className="w-auto h-35"
          width={400}
          height={400}
        ></Image>
        <Label variant="h2">{title}</Label>
        <Label>{desc}</Label>
      </div>
    </div>
  );
}
