"use client";

import { cn } from "@/lib/utils";
import Container from "@/components/Container";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, MoveRight, X } from "lucide-react";
import Image from "next/image";

const Categorysections = [
  { id: "global-courses", title: "Global Courses" },
  { id: "explore-categories", title: "Explore Categories" },
  { id: "strengthen", title: "Strengthen Skills" },
  { id: "governing", title: "Governing Bodies" },
  { id: "category-trends", title: "Category Trends" },
  { id: "success-stories", title: "Success Stories" },
  { id: "testimonial", title: "Testimonials" },
  { id: `faqs`, title: `FAQS` },
  { id: "inquire-now", title: "Inquire Now" },
];

const Coursesections = [
  { id: "course-overview", title: "Course Overview" },
  { id: "why-pmp", title: "Why PMP" },
  { id: "syllabus", title: "Syllabus" },
  { id: "pre-requisites", title: "Prerequisites" },
  { id: "exam-format", title: "Exam Format" },
  { id: "key-highlights", title: "Key Highlights" },
  { id: "schedules", title: "Schedules" },
  { id: "corporate-training", title: "Corporate Training" },
  { id: `faqs`, title: `FAQS` },
  { id: "inquire-now", title: "Inquire Now" },
];

const StickyNavigationBar = ({ isCourse }) => {
  const [activeSection, setActiveSection] = useState(
    isCourse ? Coursesections[0].id : Categorysections[0].id
  );
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sections = isCourse ? Coursesections : Categorysections;
  const [scrollDirection, setScrollDirection] = useState("down");
  const lastScrollTop = useRef(0);
  const headerHeight = 40; // Adjust this value to match your header's height
  const OFFSET = 40;

// Handles sticky navigation behavior and observes navigation bar height
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const navOffsetTop = nav.offsetTop;

  // Add scroll event listener to determine when navigation becomes sticky
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      setIsSticky(scrollPosition > navOffsetTop - headerHeight);
    };
    
  // Use ResizeObserver to track changes in navigation bar height
    const resizeObserver = new ResizeObserver(() => {
      setNavHeight(nav.offsetHeight);
    });

    resizeObserver.observe(nav);
    window.addEventListener("scroll", handleScroll);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headerHeight]);

// Manages body padding to prevent content from jumping when navigation becomes sticky
  useEffect(() => {
    const updateNavHeight = () => {
      if (navRef.current) {
        const height = navRef.current.offsetHeight;
        setNavHeight(height);
        // Adjust body padding based on sticky state
        document.body.style.paddingTop = isSticky ? `${height}px` : "80px";
      }
    };

    updateNavHeight();
    window.addEventListener("resize", updateNavHeight);

    return () => window.removeEventListener("resize", updateNavHeight);
  }, [isSticky]);

// Ensures navigation height is correctly set and updated on resize
  useEffect(() => {
    const updateNavHeight = () => {
      if (navRef.current) {
        const height = navRef.current.offsetHeight;
        setNavHeight(height);
      }
    };

    updateNavHeight();
    window.addEventListener("resize", updateNavHeight);

    return () => window.removeEventListener("resize", updateNavHeight);
  }, []);

  // Detects and tracks scroll direction (up or down)
  useEffect(() => {
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop.current) {
        setScrollDirection("down");
      } else if (st < lastScrollTop.current) {
        setScrollDirection("up");
      }
      // Ensure lastScrollTop doesn't go below a certain threshold
      lastScrollTop.current = st <= OFFSET ? OFFSET : st;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  // Uses Intersection Observer to determine the currently active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting || entry.boundingClientRect.top <= OFFSET) {
            setActiveSection(entry.target.id);
            setIsSticky(true);
          }
        });
      },
      // Configure observation margins and thresholds
      {
        rootMargin: `-${OFFSET}px 0px -${window.innerHeight - OFFSET}px 0px`,
        threshold: [0, 0.9, 1],
      }
    );
// Observe each section
    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
       // Cleanup: stop observing sections
      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [navHeight, sections, scrollDirection]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetPosition = element.offsetTop - OFFSET;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      {isSticky && <div style={{ height: `${navHeight}px` }} />}
      <div
        className={cn(
          "sticky top-20 shadow-md w-full",
          isCourse ? "bg-[#223645] lg:bg-lightbackground" : "bg-[#223645]",
          isSticky ? "sticky top-0 left-0 right-0 z-50" : "relative z-40"
        )}
        style={{ top: isSticky ? `${headerHeight}px` : "0" }}
      >
        <Container className="pt-0 pb-0">
          <nav className="">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex justify-between items-center overflow-x-auto">
              {sections.map(({ id, title }) => (
                <div
                  key={id}
                  className={cn(
                    "pl-0 pr-7 text-[12px] font-semibold cursor-pointer whitespace-nowrap relative",
                    isCourse
                      ? activeSection === id
                        ? "text-primary"
                        : "text-foreground"
                      : activeSection === id
                      ? "text-primary-foreground"
                      : "text-primary-foreground",
                    activeSection === id && isSticky
                      ? "after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-5 after:h-0.5 after:bg-yellow-400"
                      : `${
                          isCourse
                            ? "text-foreground after:bg-transparent"
                            : "text-primary-foreground after:bg-transparent"
                        }`
                  )}
                  onClick={() => scrollToSection(id)}
                >
                  {title === "Inquire Now" ? (
                    <Button
                      variant="outline"
                      className="h-8 bg-primary text-primary-foreground hover:bg-primary/75 hover:text-primary-foreground my-2 border-none"
                      key={title}
                    >
                      {title} <MoveRight size={14} className="ml-2" />
                    </Button>
                  ) : (
                    <div
                      className={`${
                        isSticky ? "py-4 transistion-all duration-500" : "py-2"
                      }`}
                    >
                      {title}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Navigation */}
            <div className="lg:hidden flex justify-between items-center py-1">
              <Button
                variant="ghost"
                onClick={toggleMenu}
                className="text-primary-foreground"
                aria-label="Menu Toggle"
                id="Menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
              <Image src="https://stagingbeta.invensislearning.com/static/images/logo-white.svg" alt="logo" width={150} height={80}/>
              {isMenuOpen && (
                <div className={`absolute top-full left-0 right-0 bg-[#223645] shadow-lg z-50 p-3 `}>
                  {sections.map(({ id, title }) => (
                    <div
                      key={id}
                      className={cn(
                        "text-primary-foreground font-semibold cursor-pointer py-2 px-4",
                        activeSection === id && "bg-primary-foreground text-[#223645]"
                      )}
                      onClick={() => {
                        scrollToSection(id);
                        setIsMenuOpen(false);
                      }}
                    >
                      {title}
                    </div>
                  ))}
                </div>
              )}
              </div>
          </nav>
        </Container>
      </div>
    </>
  );
};
//  activeSection === id ? "text-primary" : "text-primary-foreground"
//  onClick={() => scrollToSection(id)}
export default StickyNavigationBar;
