"use client";
import Image from "next/image";
import Link from "next/link";
import Text from "@/components/Text";
import { ModeToggle } from "@/components/mode-toggle";
import Mobilemenu from "./mobile-menu";
import MegaMenu from "./mega-menu";
import { useTheme } from "next-themes";
import Container from "../components/Container";
import { useEffect, useRef, useState } from "react";
import ResourcesDropdown from "./components/ResourcesDropdown";
import { ShoppingCart } from "lucide-react";
import { usePathname } from "next/navigation";
import useLanguageSlug from "@/lib/useLanguageSlug";
import { appData } from "@/data/appData";

export default function Header({ params }) {
  const { theme } = useTheme();
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const pathName = usePathname();
  const { lang, isValidSlug } = useLanguageSlug(pathName, appData);
  //console.log("haeders", pathName);
  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const stickyElement = document.getElementById("stickynavscroll");

          if (stickyElement) {
            const stickyElementTop = stickyElement.getBoundingClientRect().top;

            if (
              currentScrollY > lastScrollY.current &&
              stickyElementTop <= 80
            ) {
              setIsHidden(true);
            } else if (
              currentScrollY < lastScrollY.current &&
              stickyElementTop > 0
            ) {
              setIsHidden(false);
            }
          }

          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container
      className={`py-0 px-0 max-w-full mx-auto shadow-lg sticky top-0 left-0 right-0 z-50 backdrop-blur-sm bg-white/30 dark:bg-black/30 transition-all duration-300 ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <header className="">
        <Container className="py-0">
        <nav className="flex items-center justify-between text-card-foreground h-20 xs:ml-3 lg:mx-auto xl:mx-auto 2xl:mx-auto">
          <div className="flex items-center gap-5 justify-center">
            {/* Hide at desktop */}
            <div className="lg:hidden z-40">
              <Mobilemenu />
            </div>
            {/* Logo */}
            <div className="max-w-full">
              <Link href={isValidSlug ? `/${lang}/` : `/`}>
                <Image
                  src={
                    theme === "dark"
                      ? "https://stagingbeta.invensislearning.com/static/images/logo-white.svg"
                      : "https://www.invensislearning.com/static/images/invensis-learning-logo.svg"
                  }
                  width={160}
                  height={140}
                  className="max-w-[160px]"
                  alt="Invensis Learning Logo"
                  priority
                />
              </Link>
            </div>

            {/* Hide navlinks and Menu in the order summary page */}
            {pathName !== "/ordersummary" && (
              <div>
                {" "}
                <MegaMenu />{" "}
              </div>
            )}
          </div>
          {/* Nav Links */}
          <div className="text-[14px] font-medium ml-16">
            <ul className={`gap-x-8 xs:hidden lg:flex xl:flex items-center justify-between py-3`} >
              {pathName !== "/ordersummary" && (
                <>
                  <li>
                    <Link
                      target="blank"
                      href={`/corporategrouptraining`}
                      className={
                        pathName === "/corporategrouptraining"
                          ? "text-primary"
                          : "hover:text-primary"
                      }
                    >
                      Corporate Group Training
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="blank"
                      href={`/testimonials`}
                      className={
                        pathName === "/testimonials"
                          ? "text-primary"
                          : "hover:text-primary"
                      }
                    >
                      Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="blank"
                      href={`/join_as_a_trainer`}
                      className={
                        pathName === "/join_as_a_trainer"
                          ? "text-primary"
                          : "hover:text-primary"
                      }
                    >
                      Join as a Trainer
                    </Link>
                  </li>

                  <ResourcesDropdown />
                </>
              )}
              <li className={`bg-lightbackground rounded-full flex items-center p-2 ${pathName !== "/ordersummary"  ? "ml-0" : "ml-[800px]"}`}>
                <Link target="blank" href={`/ordersummary`}>
                  <ShoppingCart size={18} fill="#6f727b" stroke="#6f727b" />
                </Link>
              </li>
            </ul>
         
          </div>
          {/* Toggle */}
          <div className=""><ModeToggle /></div>
        </nav>
        </Container>
      </header>
    </Container>
  );
}
