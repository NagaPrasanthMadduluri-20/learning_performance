"use client";
import React, { useRef, useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ChevronRight, ListCollapse } from "lucide-react";
import Link from "next/link";
import Text from "@/components/Text";
import RenderCourseItem, { renderAccreditations } from "./render-course-item";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { usePathname } from "next/navigation";
import useLanguageSlug from "@/lib/useLanguageSlug";
import { appData } from "@/data/appData";
const generic_menu = require("../data/menu.json");

const MegaMenu = ({ params }) => {
  const menuRef = useRef(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [allAccreditations, setAllAccreditations] = useState([]);
  const pathName = usePathname();
  const { lang, isValidSlug } = useLanguageSlug(pathName, appData);
  const handleTriggerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    if (menuRef.current) {
      const closeEvent = new Event("keydown");
      closeEvent.key = "Escape";
      menuRef.current.dispatchEvent(closeEvent);
    }
  };

  useEffect(() => {
    if (generic_menu.generic_menu.length > 0) {
      setHoveredCategory("All Courses");
      const allAccreds = generic_menu.generic_menu.flatMap(
        (category) => category.category_accredations
      );
    
      const uniqueAccreds = Array.from(
        new Set(allAccreds.map((a) => a.Accrediations))
      ).map((accred) => allAccreds.find((a) => a.Accrediations === accred));
      setAllAccreditations(uniqueAccreds);
    }
  }, []);

  const renderCourseWithLang = (course) => {
    return RenderCourseItem(course, { lang, isValidSlug, closeMenu });
  };


  const renderCategoryContent = () => {
    const courselength = generic_menu.generic_menu.flatMap(
      (category) => category.courses
    );
    if (hoveredCategory === "All Courses") {
      return (
        <>
         <Text
              variant="body1"
              className="font-semibold mb-4 sticky top-0 bg-background opacity-85 mt-4"
            >
              All Courses ({courselength.length}+ Courses)
            </Text>
            <Separator />
          {generic_menu.generic_menu.map((category, categoryIndex) =>
          <div key={categoryIndex}>
            <ul className="">
             
              { category.courses
                  .filter((course) => course.hp === "y")
                  .slice(0, 3)
                  .map(renderCourseWithLang)}
            </ul>
          </div>
        )}
          <div className="space-y-8">
            {generic_menu.generic_menu.map((category) => (
              <div key={category.menu_name}>
                <Text
                  variant="body1"
                  className="font-semibold mb-4 sticky top-0 bg-background opacity-85 mt-4"
                >
                  {category.menu_name} ({category.courses.length} Courses)
                </Text>
                <Separator />
                <ul className="">
                  {category.courses
                    .sort((a, b) => a.order_by - b.order_by)
                    .slice(0, 3)
                    .map(renderCourseWithLang)}
                </ul>
                <Link
                  href={category.slug}
                  className="block mt-4 text-blue-600 hover:underline text-[13px] font-medium text-center"
                  onClick={closeMenu}
                >
                  View All {category.menu_name} Courses
                </Link>
              </div>
            ))}
          </div>
        </>
      );
    } else {
      const currentCategory = generic_menu.generic_menu.find(
        (category) => category.menu_name === hoveredCategory
      );
      return currentCategory ? (
        <div>
          <Text
            variant="body1"
            className="font-semibold mb-4 sticky top-0 bg-background opacity-85 mt-4"
          >
            {currentCategory.menu_name} ({currentCategory.courses.length}{" "} Courses)
            <Separator className="mt-2"  />
          </Text>
          <ul className="">{currentCategory.courses.map(renderCourseWithLang)}</ul>
        </div>
      ) : null;
    }
  };

  return (
    <div>
      <NavigationMenu
        ref={menuRef}
        className="xs:hidden md:hidden lg:flex ml-4 z-50"
      >
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              onClick={handleTriggerClick}
              className="items-center border border-zinc-600"
            >
              <NavigationMenuLink className={navigationMenuTriggerStyle()} href={!isValidSlug ? `/courses` : `/${lang}/courses`}>
                <div className="flex flex-col mr-2">
                  <div className="w-4 h-[3px] mb-[2px] bg-[#0000008a] dark:bg-slate-50 rounded-sm" />
                  <div className="w-4 h-[3px] mb-[2px] bg-[#0000008a] dark:bg-slate-50 rounded-sm" />
                  <div className="w-4 h-[3px] mb-[2px] bg-[#0000008a] dark:bg-slate-50 rounded-sm" />
                </div>
                <Text variant="b"> All Courses </Text>
              </NavigationMenuLink>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid grid-cols-10 w-[1080px] h-[80vh]">
                <ul className="space-y-2 bg-[#f3f9fe] dark:bg-detailcontrast leading-9 col-span-3 h-full overflow-y-auto custom-scrollbar text-[13px] font-semibold">
                  <Text
                    variant="body1"
                    className="font-semibold mb-2 pl-4 pt-4"
                  >
                    Categories:
                  </Text>
                  <li
                    onMouseEnter={() => setHoveredCategory("All Courses")}
                    className={`transition-colors duration-200 flex items-center justify-between pl-4 ${
                      hoveredCategory === "All Courses"
                        ? "bg-popover dark:bg-popover drop-shadow-md"
                        : ""
                    }`}
                  >
                    <span className="flex gap-2 items-center">
                      <ListCollapse size={20} color="#3e9392" />
                      <Link
                        href={!isValidSlug ? `/courses` : `/${lang}/courses`}
                        className="font-semibold p-1"
                        onClick={closeMenu}
                      >
                        All Courses
                      </Link>
                    </span>
                    {hoveredCategory === "All Courses" && (
                      <ChevronRight className="w-5 h-5" />
                    )}
                  </li>
                  {generic_menu.generic_menu.map((category, index) => (
                    <li
                      key={index}
                      onMouseEnter={() =>
                        setHoveredCategory(category.menu_name)
                      }
                      className={`transition-colors duration-200 flex items-center justify-between pl-4 ${
                        hoveredCategory === category.menu_name
                          ? "bg-popover dark:bg-popover drop-shadow-md"
                          : ""
                      }`}
                    >
                      <span className="flex gap-2">
                        <Image
                          src={category.image_media_path}
                          alt={category.menu_name}
                          width={25}
                          height={15}
                        />
                        <Link
                          href={!isValidSlug ? `/${category.slug}` : `/${lang}/${category.slug}`}
                          className="font-semibold p-1"
                          onClick={closeMenu}
                        >
                          {category.menu_name}
                        </Link>
                      </span>
                      {hoveredCategory === category.menu_name && (
                        <ChevronRight className="w-5 h-5" />
                      )}
                    </li>
                  ))}
                </ul>
                <div className="col-span-5 h-full overflow-y-auto custom-scrollbar p-4 pr-0 pt-0 text-[13px] font-semibold">
                  {renderCategoryContent()}
                </div>
                <div className="col-span-2 h-full overflow-y-auto custom-scrollbar px-6 border-l-2 ">
                  {renderAccreditations(
                    hoveredCategory === "All Courses"
                      ? allAccreditations
                      : generic_menu.generic_menu.find(
                          (category) => category.menu_name === hoveredCategory
                        )?.category_accredations || []
                  )}
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default MegaMenu;
