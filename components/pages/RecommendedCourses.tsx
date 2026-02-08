"use client";
import React, { useEffect, useState } from "react";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { useUserContext } from "@/context/UserContext";
import VideoCard from "../VideoCard";
import { Card, CardContent } from "../ui/card";
import Wave from "../Wave";
import Image from "next/image";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";
import { CldVideoPlayer } from "next-cloudinary";

interface ListT {
  label: string;
  link: string;
  href: string;
}

interface CourseT {
  category: string;
  list: ListT[];
}

export const course = [
  {
    category: "Marketing",
    list: [
      {
        label: "Digital Marketing & e-Commerce",
        link: "/COURSE/DigitalMarketing.mp4",
        href: "https://res.cloudinary.com/dqgkvrmve/video/upload/v1770556832/DigitalMarketing_eljgow.mp4",
      },
      {
        label: "Facebook Ads",
        link: "/COURSE/fb.mp4",
        href: "https://res.cloudinary.com/dqgkvrmve/video/upload/v1770556813/fb_hc1ywp.mp4",
      },
      {
        label: "TikTok Ads",
        link: "/COURSE/tiktok.mp4",
        href: "https://res.cloudinary.com/dqgkvrmve/video/upload/v1770556815/tiktok_g8ce2p.mp4",
      },
      {
        label: "Google Ads",
        link: "/COURSE/google-ads.mp4",
        href: "https://res.cloudinary.com/dqgkvrmve/video/upload/v1770556811/google-ads_ur8uzn.mp4",
      },
      {
        label: "LinkedIn Ads",
        link: "/COURSE/LinkedIn.mp4",
        href: "https://res.cloudinary.com/dqgkvrmve/video/upload/v1770556830/LinkedIn_eyyuls.mp4",
      },
    ],
  },
  {
    category: "Automation",
    list: [
      {
        label: "Go High Level",
        link: "/COURSE/high-level.mp4",
        href: "https://res.cloudinary.com/dqgkvrmve/video/upload/v1770556854/high-level_gqirbj.mp4",
      },
      {
        label: "HubSpot",
        link: "/COURSE/hubspot.mp4",
        href: "https://res.cloudinary.com/dqgkvrmve/video/upload/v1770556831/hubspot_hku66c.mp4",
      },
      {
        label: "Dubsado",
        link: "/COURSE/dubsado.mp4",
        href: "https://res.cloudinary.com/dqgkvrmve/video/upload/v1770556815/dubsado_egky5f.mp4",
      },
      {
        label: "Kajabi",
        link: "/COURSE/KAJABI.mp4",
        href: "https://res.cloudinary.com/dqgkvrmve/video/upload/v1770556862/KAJABI_dwv7fx.mp4",
      },
    ],
  },
  {
    category: "Operations",
    list: [
      {
        label: "Shopify",
        link: "/COURSE/shopify.mp4",
        href: "https://res.cloudinary.com/dqgkvrmve/video/upload/v1770556876/shopify_lyyh0u.mp4",
      },
      {
        label: "Project Management",
        link: "/COURSE/project-management.mp4",
        href: "https://res.cloudinary.com/dqgkvrmve/video/upload/v1770556828/project-management_slfinb.mp4",
      },
      {
        label: "IT Support",
        link: "/COURSE/it-support.mp4",
        href: "https://res.cloudinary.com/dqgkvrmve/video/upload/v1770556869/it-support_bgys6p.mp4",
      },
    ],
  },
  {
    category: "Insights",
    list: [
      {
        label: "Google Analytics",
        link: "/COURSE/google-analytics.mp4",
        href: "https://res.cloudinary.com/dqgkvrmve/video/upload/v1770556813/google-analytics_qst5he.mp4",
      },
      {
        label: "Data Analytics",
        link: "/COURSE/data-analytics.mp4",
        href: "https://res.cloudinary.com/dqgkvrmve/video/upload/v1770556786/data-analytics_zpict5.mp4",
      },
      {
        label: "UX Design",
        link: "/COURSE/ux.mp4",
        href: "https://res.cloudinary.com/dqgkvrmve/video/upload/v1770556858/ux_p4to9z.mp4",
      },
    ],
  },
];

export default function RecommendedCourses() {
  const router = useRouter();
  const filter = ["Marketing", "Automation", "Operations", "Insights"];
  const [filterAct, setActiveFilter] = useState("Marketing");
  const [filteredCourse, setFilteredCourse] = useState<CourseT | null>(null);
  const [filteredList, setFilteredList] = useState<ListT[]>([]);

  const handleFilter = (filter: string) => {
    setActiveFilter(filter);
  };

  useEffect(() => {
    setFilteredCourse(course.filter((item) => item.category === filterAct)[0]);
  }, [filterAct]);

  return (
    <div
      className={`w-full bg-primary-blue-100 px-30 global-padding ${styles.globalPadding} pb-20`}
    >
      <div
        className={`w-full flex ${styles.exploreMain} justify-between items-center`}
      >
        <div className={`w-full max-w-160 ${styles.exploreTitle}`}>
          <Label variant="h1" className="">
            Explore Recommended Courses
          </Label>
          <Label variant="p">
            High-impact skills for the modern remote professional
          </Label>
        </div>
        <div className={`${styles.exploreFilter}`}>
          {filter.map((item, i) => (
            <Button
              key={i}
              className={`rounded-full text-[1rem] ${styles.exploreFilterBtn}`}
              variant={item === filterAct ? "default" : "ghost"}
              onClick={() => handleFilter(item)}
            >
              {item}
            </Button>
          ))}
        </div>
      </div>
      <div className="py-20">
        <div className={`flex flex-wrap w-full gap-10 ${styles.courseList}`}>
          {filteredCourse !== undefined ? (
            filteredCourse &&
            filteredCourse.list.map((item, i) => (
              <Card
                key={i}
                onClick={() => window.open("", "_blank")}
                className={`w-full cursor-pointer hover:scale-105 transition ease-in-out hover:shadow-primary-blue-400/70 hover:shadow-2xl max-w-80 h-100 p-0 border border-primary-blue-400 bg-transparent ${styles.CardCont}`}
              >
                <CardContent className="p-0 h-full flex flex-col justify-between border-0 bg-transparent">
                  <VideoCard src={item.href} label={item.label}></VideoCard>
                </CardContent>
              </Card>
            ))
          ) : filteredList && filteredList.length > 0 ? (
            filteredList.map((item, i) => (
              <Card
                key={i}
                onClick={() => window.open(item.href, "_blank")}
                className={`w-full cursor-pointer hover:scale-105 transition ease-in-out hover:shadow-primary-blue-400/70 hover:shadow-2xl max-w-80 h-100 p-0 border border-primary-blue-400 bg-transparent ${styles.CardCont}`}
              >
                <CardContent className="p-0 h-full flex flex-col justify-between border-0 bg-transparent">
                  <CldVideoPlayer
                    src={item.href}
                    controls
                    className="w-full h-[80%] object-cover"
                  />
                  <div className="p-4 w-full h-[20%] flex items-center justify-center">
                    <Label>{item.label}</Label>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="w-full flex items-center justify-center">
              <Label>No match</Label>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
