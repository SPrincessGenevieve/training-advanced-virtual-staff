"use client";
import React from "react";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function SearchPanel() {
  return (
    <div className="w-full h-auto bg-[pink] px-30 flex flex-col gap-2">
      <Label variant="h1" className="text-primary-blue-100 w-full max-w-150">
        Find a Perfect Online Course
      </Label>
      <Label variant="p" className="w-full max-w-120 text-primary-blue-100">
        You can access 7900+ different courses from 600 professional trainers
        for free
      </Label>
      <div className="flex w-full max-w-180 relative items-center">
        <Input
          className="h-14 rounded-xl border-primary-blue-200 bg-primary-blue-200/20 placeholder:text-primary-blue-100/40"
          placeholder="Facebook, Tiktok..."
        ></Input>
        <Button className="h-10 w-30 bg-white absolute right-1">
          <Label className="text-primary-blue-100 font-semibold">Search</Label>
        </Button>
      </div>
      <Label variant="p" className="w-full max-w-120 text-primary-blue-100">
        Trending Search: Linkedin, Facebook, Tiktok
      </Label>
    </div>
  );
}
