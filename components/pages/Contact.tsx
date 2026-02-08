import React from "react";
import { Label } from "../ui/label";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Clock, Mail } from "lucide-react";
import styles from "./styles.module.css";
import Link from "next/link";
import { toast } from "sonner";

export default function Contact() {
  const social = [
    {
      link: "",
      icon: "bi bi-facebook",
    },
    {
      link: "",
      icon: "bi bi-youtube",
    },
    {
      link: "",
      icon: "bi bi-linkedin",
    },
    {
      link: "",
      icon: "bi bi-instagram",
    },
    {
      link: "",
      icon: "bi bi-tiktok",
    },
  ];

  const handleCopy = () => {
    toast.success("Email copied");
    navigator.clipboard.writeText("hiring@advancedvirtualstaff.com");
  };

  return (
    <div
      className={`w-full flex gap-4 px-30 global-padding z-50 ${styles.contactCont}`}
    >
      <Card className="w-full min-h-50 p-0 bg-transparent backdrop-blur-xs z-20">
        <CardContent className="p-4 w-full h-full  bg-sky-500/30 z-10 relative">
          <div className="flex flex-col w-full h-full gap-4  p-4">
            <Label variant="h2">Get Exclusive Access</Label>
            <Label variant="p" className="max-w-125">
              Be the first to know about hiring and training opportunities. So,
              what are you waiting for? 
            </Label>
            <Input
              className="h-12 bg-sky-400/20 border-white/10 placeholder:text-white/70 text-white"
              placeholder="Email Address"
            ></Input>
            <div className="flex items-center justify-end">
              <Button className="bg-white hover:bg-white/70 text-primary-blue-100 font-semibold">
                Subscribed!
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="w-full min-h-50 p-0 bg-transparent backdrop-blur-xs z-20">
        <CardContent className="p-4 w-full h-full  bg-sky-500/30 z-10 relative">
          <div className="flex flex-col w-full h-full gap-4  p-4">
            <Label variant="h2">Contact</Label>
            <div>
              <Label variant="p" className="max-w-125 flex align-baseline">
                Submit your application now but make
              </Label>
              <div className="flex gap-2">
                <Label variant="p">sure to check our</Label>
                <Link
                  href={"https://avs.advancedvirtualstaff.com/requirements"}
                  className=""
                >
                  <Label
                    variant="p"
                    className="text-white cursor-pointer hover:text-primary-blue-100 transition ease-in-out"
                  >
                    Requirements
                  </Label>
                </Link>
                <Label variant="p">first.</Label>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Mail className="text-white"></Mail>
                <Label className="cursor-pointer" onClick={handleCopy}>
                  hiring@advancedvirtualstaff.com
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-white"></Clock>
                <Label>8 AM - 5 PM, Monday - Saturday</Label>
              </div>
              <div className="w-full  flex gap-4 justify-end items-center">
                {social.map((item, i) => (
                  <i
                    key={i}
                    className={`${item.icon} text-2xl hover:scale-125 shadow-2xl transition ease-in-out cursor-pointer text-white`}
                  ></i>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
