"use client";
import BtnDown from "@/components/pages/btn-down";
import Contact from "@/components/pages/Contact";
import Explore from "@/components/pages/Explore";
import Header from "@/components/pages/Header";
import Newbie from "@/components/pages/Newbie";
import QuickLinks from "@/components/pages/QuickLinks";
import RecommendedCourses, {
  course,
} from "@/components/pages/RecommendedCourses";
import SearchedCourse from "@/components/pages/SearchedCourse";
import SearchPanel from "@/components/pages/SearchPanel";
import TopThree from "@/components/pages/TopThree";
import WaveBottom from "@/components/pages/WaveBottom";
import { Label } from "@/components/ui/label";
import { useUserContext } from "@/context/UserContext";
import { useEffect, useRef, useState } from "react";

interface ListT {
  label: string;
  link: string;
  href: string;
}

interface CourseT {
  category: string;
  list: ListT[];
}

export default function Page() {
  const ref = useRef<any>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { setUserDetails } = useUserContext();
  const [pages, setPages] = useState(1);
  const [isTopThree, setIsTopThree] = useState(true);
  const searchRef = useRef<HTMLDivElement>(null);
  const courseRef = useRef<HTMLDivElement>(null);
  const topThreeRef = useRef<HTMLDivElement>(null);
  const seachedItemRef = useRef<HTMLDivElement>(null);
  const [filteredCourse, setFilteredCourse] = useState<CourseT[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (contentRef.current) {
      const height = contentRef.current.offsetHeight;
      const pageHeight = window.innerHeight;
      setPages(height / pageHeight);
    }
  }, []);

  const handleSearch = () => {
    if (search === "") {
      return;
    }
    topThreeRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setIsTopThree(false);

    const filteredData = course
      .map((courseItem) => ({
        ...courseItem,
        list: courseItem.list.filter((listItem) =>
          listItem.label.toLocaleLowerCase().includes(search.toLowerCase()),
        ),
      }))
      .filter((courseItem) => courseItem.list.length > 0);
    setFilteredCourse(filteredData);
  };

  useEffect(() => {
    if (search === "") {
      setIsTopThree(true);
    }
  }, [search]);

  return (
    <div className="w-full relative flex flex-col">
      <div className="relative w-full flex justify-center">
        <Header onClick={() => ref.current?.scrollTo(0.6)}></Header>
        <div
          onClick={() =>
            searchRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
          className="absolute -bottom-32.25 cursor-pointer"
        >
          <BtnDown></BtnDown>
        </div>
      </div>
      <div
        ref={searchRef}
        className="w-full h-auto  min-h-screen py-4 bg-linear-180 from-white from-50% to-primary-blue-100 to-20% mt-30"
      >
        <SearchPanel
          searchItem={search}
          onChange={(e) => setSearch(e.target.value)}
          onClick={handleSearch}
        ></SearchPanel>
        <div ref={topThreeRef}>
          <TopThree item={filteredCourse} isTopThree={isTopThree}></TopThree>
        </div>
        <div className="w-full" ref={courseRef}>
          <RecommendedCourses></RecommendedCourses>
        </div>
        <div className="flex flex-col w-full gap-30">
          <Explore></Explore>
          <Newbie></Newbie>
          <Contact></Contact>
          <QuickLinks></QuickLinks>
          <div className="z-50 px-30 global-padding">
            <Label variant="p">
              AVSPH Virtual Assistance Services     © 2025. All rights
              reserved. 
            </Label>
          </div>
          <WaveBottom></WaveBottom>
        </div>
      </div>
    </div>
  );
}
