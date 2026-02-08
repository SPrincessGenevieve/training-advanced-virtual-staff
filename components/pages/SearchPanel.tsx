"use client";
import React from "react";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface SearchT {
  onClick: () => void;
  searchItem: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function SearchPanel({
  onClick,
  searchItem,
  onChange,
}: SearchT) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onClick();
      }}
      className="w-full h-auto px-30 global-padding flex flex-col gap-2 py-18"
    >
      <Label variant="h1" className=" text-primary-blue-100 w-full max-w-150">
        Find a Perfect Online Course
      </Label>
      <Label variant="p" className="w-full max-w-120 text-primary-blue-100">
        You can access 7900+ different courses from 600 professional trainers
        for free
      </Label>
      <div className="flex w-full max-w-180 relative items-center">
        <div
          className="flex 
            focus-within:border-white 
            focus-within:ring-2 
            focus-within:ring-primary-blue-300/50 
            rounded-2xl 
            items-center 
            px-2 
            w-full 
            border 
            border-primary-blue-200 
            bg-primary-blue-200/20 
            placeholder:text-primary-blue-100/40"
        >
          <Input
            value={searchItem}
            onChange={onChange}
            className="h-14 w-full rounded-none border-0 shadow-none focus-visible:border-transparent focus-visible:ring-transparent "
            placeholder="Facebook, Tiktok..."
          ></Input>
          <Button
            onClick={onClick}
            className="h-10 w-30 bg-white  hover:bg-white/70"
          >
            <Label className="text-primary-blue-100 font-semibold">
              Search
            </Label>
          </Button>
        </div>
      </div>
      <Label variant="p" className="w-full max-w-120 text-primary-blue-100">
        Trending Search: Linkedin, Facebook, Tiktok
      </Label>
    </form>
  );
}
