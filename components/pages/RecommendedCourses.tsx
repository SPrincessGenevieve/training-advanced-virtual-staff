"use client";
import React, { useEffect, useState } from "react";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { useUserContext } from "@/context/UserContext";
import { Card, CardContent } from "../ui/card";
import Wave from "../Wave";
import Image from "next/image";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";

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
        href: "https://grow.google/certificates/digital-marketing-ecommerce/#?modal_active=none",
      },
      {
        label: "Facebook Ads",
        link: "/COURSE/fb.mp4",
        href: "https://www.facebook.com/business/learn/certification/exams/100-101-exam",
      },
      {
        label: "TikTok Ads",
        link: "/COURSE/tiktok.mp4",
        href: "https://ads.tiktok.com/business/learn/course/list",
      },
      {
        label: "Google Ads",
        link: "/COURSE/google-ads.mp4",
        href: "https://skillshop.exceedlms.com/student/catalog/list?category_ids=2844-google-ads-certifications&difficulty=1&sort=hot",
      },
      {
        label: "LinkedIn Ads",
        link: "/COURSE/LinkedIn.mp4",
        href: "https://training.marketing.linkedin.com/page/certifications",
      },
    ],
  },
  {
    category: "Automation",
    list: [
      {
        label: "Go High Level",
        link: "/COURSE/high-level.mp4",
        href: "https://www.gohighlevel.com/welcome-course",
      },
      {
        label: "HubSpot",
        link: "/COURSE/hubspot.mp4",
        href: "https://academy.hubspot.com/certification-overview",
      },
      {
        label: "Dubsado",
        link: "/COURSE/dubsado.mp4",
        href: "https://education.dubsado.com/certified-dubsado-specialist-2023",
      },
      {
        label: "Kajabi",
        link: "/COURSE/KAJABI.mp4",
        href: "https://university.mykajabi.com/courses",
      },
    ],
  },
  {
    category: "Operations",
    list: [
      {
        label: "Shopify",
        link: "/COURSE/shopify.mp4",
        href: "https://www.shopify.com/learn",
      },
      {
        label: "Project Management",
        link: "/COURSE/project-management.mp4",
        href: "https://grow.google/certificates/project-management/#?modal_active=none",
      },
      {
        label: "IT Support",
        link: "/COURSE/it-support.mp4",
        href: "https://grow.google/certificates/it-support/#?modal_active=none",
      },
    ],
  },
  {
    category: "Insights",
    list: [
      {
        label: "Google Analytics",
        link: "/COURSE/google-analytics.mp4",
        href: "https://analytics.google.com/analytics/academy/",
      },
      {
        label: "Data Analytics",
        link: "/COURSE/data-analytics.mp4",
        href: "https://grow.google/certificates/data-analytics/#?modal_active=none",
      },
      {
        label: "UX Design",
        link: "/COURSE/ux.mp4",
        href: "https://grow.google/certificates/ux-design/#?modal_active=none",
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
                onClick={() => window.open(item.href, "_blank")}
                className={`w-full cursor-pointer hover:scale-105 transition ease-in-out hover:shadow-primary-blue-400/70 hover:shadow-2xl max-w-80 h-100 p-0 border border-primary-blue-400 bg-transparent ${styles.CardCont}`}
              >
                <CardContent className="p-0 h-full flex flex-col justify-between border-0 bg-transparent">
                  <video
                    key={item.link}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    width={400}
                    height={400}
                    className="w-full h-[80%] object-cover"
                    style={{ pointerEvents: "none" }} // This makes it unclickable/untouchable
                  >
                    <source src={item.link} type="video/mp4" />
                  </video>
                  <div className="p-4 w-full h-[20%] flex items-center justify-center">
                    <Label>{item.label}</Label>
                  </div>
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
                  <video
                    key={item.link}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    width={400}
                    height={400}
                    className="w-full h-[80%] object-cover"
                    style={{ pointerEvents: "none" }} // This makes it unclickable/untouchable
                  >
                    <source src={item.link} type="video/mp4" />
                  </video>
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
