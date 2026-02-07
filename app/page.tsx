"use client";
import Header from "@/components/pages/Header";
import SearchPanel from "@/components/pages/SearchPanel";
import TopThree from "@/components/pages/TopThree";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";

export default function Page() {
  const ref = useRef<any>(null);
  return (
    <div className="w-full h-full">
      <Parallax pages={9.6} ref={ref}>
        <ParallaxLayer
          className="flex items-center justify-center w-full h-screen"
          offset={0}
          speed={1}
        >
          <Header onClick={() => ref.current?.scrollTo(0.5)}></Header>
        </ParallaxLayer>
        <ParallaxLayer offset={0.99} speed={0.5} className="">
          <div className="w-full h-screen py-4 bg-[blue]">
            <SearchPanel></SearchPanel>
            <TopThree></TopThree>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
