"use client";
import Container from "@/components/Container";
import React, { useEffect, useRef, useState } from "react";
import Text from "@/components/Text";
import Image from "next/image";
import ProgressBar from "../ProgressBar";
import BlogCategoryList from "../BlogCategoryList";
import ScrollButton from "../ScrollButton";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

const BannerPost = ({
  Postdata,
  // categories,
  // currentCategory,
  // categoryBlogs,
}) => {
  const mainRef = useRef(null);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: [0, 1],
    };

    const getOffsetTop = (element) => {
      let offsetTop = 0;
      while (element) {
        offsetTop += element.offsetTop;
        element = element.offsetParent;
      }
      return offsetTop;
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        const targetId = entry.target.id;
        const targetTop = getOffsetTop(entry.target);
        const windowTop = window.pageYOffset + 96; // 24px offset

        if (windowTop >= targetTop) {
          setActiveSection(targetId);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const contentSections = document.querySelectorAll('[id^="contentItem-"]');
    contentSections.forEach((section) => observer.observe(section));

    // Add scroll event listener for more precise control
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset + 96; // 24px offset
      let currentActiveSection = "";

      contentSections.forEach((section) => {
        const sectionTop = getOffsetTop(section);
        if (scrollPosition >= sectionTop) {
          currentActiveSection = section.id;
        }
      });

      setActiveSection(currentActiveSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      contentSections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
  
    <main ref={mainRef} >
      <ProgressBar target={mainRef} topOffset={120} bottomOffset={100} />
      <Container className="py-0">
        <div className="flex flex-col md:grid md:grid-cols-12 md:gap-x-3 ">
          
          {[Postdata].map((item, index) => (
            
            <>
              <div className="mb-5 md:mb-0 md:col-span-2 mt-[5px]" key={index}>
                <div className="sticky top-24 ">
                  <Text className="font-semibold text-[16px]">
                    Table Of Contents
                  </Text>
                  <div className="flex gap-x-5">
                    {/* <ProgressBar
                      target={mainRef}
                      topOffset={120}
                      bottomOffset={100}
                      sideprogress="true"
                    /> */}
                    {/* <ol className="list-decimal ml-5 mb-4">
                      {item.content?.map((contentItem, contentIndex) => (
                        <li
                          key={contentIndex}
                          className={`text-[14px] font-semibold mt-4 cursor-pointer ${
                            activeSection === `contentItem-${contentItem.id}`
                              ? "text-blue-500 underline"
                              : "text-foreground hover:text-foreground"
                          }`}
                        >
                          <ScrollButton
                            variant="outline"
                            className="border-0 bg-transparent p-0 h-auto hover:text-blue-500 hover:bg-transparent text-left"
                            targetId={`contentItem-${contentItem.id}`}
                          >
                            {" "}
                            {contentItem.heading}{" "}
                          </ScrollButton>
                        </li>
                      ))}
                    </ol> */}
                  </div>
                </div>
              </div>

              <div className="mb-5 md:mb-0 md:col-span-7" >
                <div className="shadow-md p-3 pt-0 rounded-md bg-background">
                  <div>
                    <Text className="font-bold !text-[24px] mb-4">
                      {item.title} 
                    </Text>
                    <div className="mb-6">
                      <Image
                        src="/blog/blogsideimage2.avif"
                        alt={item.title}
                        width={400}
                        height={300}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-start gap-x-6 items-center my-4">
                      {/* <Image
                        src="/invensis.jpg"
                        alt="logo"
                        width={100}
                        height={80}
                      /> */}
                      <Text>
                        {" "}
                        <b>Author By - </b> Naveen Goshal 
                      </Text>
                      <Text className="px-2 py-1">
                        <b> Last Modified on </b> :- 13-10-2024
                      </Text>
                      <div className="flex items-center font-semibold text-[13px]">
                        {" "}
                        <Eye
                          fill="#000"
                          size={18}
                          strokeWidth={2}
                          stroke="#fff"
                          className="mr-1"
                        />
                         1008 views{" "}
                      </div>
                    </div>
                    <div className="flex justify-between mt-4 items-center">
                      {/* <Text>
                        {" "}
                        <b>Author :</b> {item.author}
                      </Text>

                      <Text className="font-semibold">{item.email}</Text> */}
                    </div>

                    {/* {item.content?.map((contentitem, contentindex) => (
                      <div
                        key={contentindex}
                        id={`contentItem-${contentitem.id}`}
                      >
                        <Text className="font-semibold text-[23px] mb-5 mt-5">
                          {contentitem.heading}
                        </Text>
                        <Text className="leading-6 text-justify">
                        
                          {contentitem.Description}
                        </Text>
                      </div>
                    ))} */}
                    {item.body}
                  </div>
                </div>
              </div>
            </>
          ))}
          <div className="mb-5 md:mb-0 md:col-span-3 mt-2">
            <div className="h-[100%]">
              {/* {[Postdata].map((item, index) => (
                <div
                  className="flex flex-col justify-between items-stretch space-y-4 h-[100%]"
                  key={index}
                >
                  <div className="h-[30%] relative">
                    <div className="sticky top-24 border-2 border-blue-400 bg-yellow-100 p-3 rounded-md">
                      <Text variant="h2" className="mb-5">
                        Enquire form
                      </Text>

                      <Input
                        placeholder="Enter Your First Name"
                        className="border-2 border-gray-200 h-11 focus-visible:ring-0 focus-visible:ring-offset-0 py-0 mb-3"
                      />
                      <Input
                        placeholder="Enter Your LastName"
                        className="border-2 border-gray-200 h-11 focus-visible:ring-0 focus-visible:ring-offset-0 py-0 mb-3"
                      />

                      <Input
                        type="email"
                        placeholder="Enter Your Email*"
                        className="border-2 border-gray-200 h-11 focus-visible:ring-0 focus-visible:ring-offset-0 py-0 mb-3"
                      />
                      <Input
                        placeholder="Enter Your Course*"
                        className="border-2 border-gray-200 h-11 focus-visible:ring-0 focus-visible:ring-offset-0 py-0 mb-3"
                      />
                      <div className="flex justify-center">
                        <Button>Submit</Button>
                      </div>
                    </div>
                  </div>
                  {item.title ===
                    "new blog for testing with different category" && (
                    <>
                      <div className=" h-[30%]">
                        <div className="sticky top-24 border-2 border-yellow-400 p-3 rounded-md">
                          <Image
                            src="/blog/sidetestingimage.webp"
                            alt="sidetestimage"
                            width={300}
                            height={400}
                          />
                          <Text className="font-semibold mt-5">
                            Get the Full Tailored course Training by clicki g on
                            the image
                          </Text>
                        </div>
                      </div>

                      <div className=" h-[30%]">
                        <div className="sticky top-24 border-2 border-green-400 bg-red-200 p-3 rounded-md">
                          <Image
                            src="/blog/webinarstraight.webp"
                            alt="sidetestimage"
                            width={300}
                            height={400}
                          />
                          <Text className="font-semibold mt-5">
                            Get the Full Tailored course Training by clicki g on
                            the image
                          </Text>
                        </div>
                      </div>
                    </>
                  )}
                  <div className=" h-[30%]">
                    <div className="sticky top-24 border-2 border-red-400 bg-green-200 p-3 rounded-md">
                      <Text variant="h3">Recommended Blogs</Text>

                      <ul className="list-disc ml-5 font-semibold space-y-4 mt-7">
                        <li className="hover:text-blue-300">Listed-blogs</li>
                        <li className="hover:text-blue-300">unlisted blogs</li>
                        <li className="hover:text-blue-300">Explore blogs</li>
                      </ul>

                      <div className="flex justify-center mt-5">
                        <Button>Explore Here</Button>
                      </div>
                    </div>
                  </div>
                  <div className=" h-[30%]">
                    <div className="sticky top-24 border-2 border-cyan-400 bg-blue-200 p-3 rounded-md">
                      <Text variant="h3">I am sticky bar Five</Text>
                      <Text>
                        {" "}
                        lorem ipsum bhjvgcccccccccc cccccccccccfn gfdyjtfjhmvmh
                        ufufiuhoikguftxy ti fuyfilgj hghjfjv ohkhgujv ohi
                        okigiuk
                      </Text>
                      <Text>
                        {" "}
                        lorem ipsum bhjvgcccccccccc cccccccccccfn gfdyjtfjhmvmh
                        ufufiuhoikguftxy ti fuyfilgj hghjfjv ohkhgujv ohi
                        okigiuk
                      </Text>
                      <Text>
                        {" "}
                        lorem ipsum bhjvgcccccccccc cccccccccccfn gfdyjtfjhmvmh
                        ufufiuhoikguftxy ti fuyfilgj hghjfjv ohkhgujv ohi
                        okigiuk
                      </Text>
                    </div>
                  </div>
                </div>
              ))} */}
            </div>
          </div>
        </div>
      </Container>
      {/* <Container className="py-3">
        <Text variant="h2" className="mb-5">
          Other Blog Categories
        </Text>
        <BlogCategoryList categories={categories} otherBlogCategories />
      </Container>
      <Container className="py-3">
        <Text variant="h2" className="mb-5">
          Other Posts in {currentCategory?.title}
        </Text>
        <BlogCategoryList blogs={categoryBlogs} bllllogs />
      </Container> */}
    </main>
  );
};

export default BannerPost;
