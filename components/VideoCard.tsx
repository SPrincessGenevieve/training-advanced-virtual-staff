import { useState } from "react";
import { Label } from "./ui/label";

export default function VideoCard({
  src,
  label,
}: {
  src: string;
  label: string;
}) {
  return (
    <div className="w-full h-[80vh] overflow-hidden">
      {src ? (
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-[80%] object-cover"
          // onCanPlay={() => setLoading(false)}
          // onWaiting={() => setLoading(true)}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-300">
          <span>Loading Data...</span>
        </div>
      )}
      <div className="text-white w-full h-[20%] flex items-center justify-center">
        <Label>{label}</Label>
      </div>
    </div>
  );
}
