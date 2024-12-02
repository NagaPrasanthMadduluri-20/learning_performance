"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import { Card, CardContent } from "@/components/ui/card";
import Text from "@/components/Text";
import { usePathname } from "next/navigation";
import { CalendarDays, Eye, User, UserRound } from "lucide-react";

const AnimatedText = ({ children, className }) => (
  <div
    className={`relative group-hover:text-blue-600 transition-colors duration-300 mb-auto`}
  >
    {children}
    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-1000 group-hover:w-full"></span>
  </div>
);
// href={`${categoryparams ? "/blog" : ""}/${item.slug}`}
const BlogCard = ({ item, isTopCard, categoryparams }) => (
  <Link href={`/blog/${item.id}`}>
    <Card className="mb-6 overflow-hidden group cursor-pointer h-[100%] shadow-lg">
      <div className="relative h-64 overflow-hidden">
        <Image
          src="/blog/blogsideimage2.avif"
          alt={item.title}
          fill
          cover="true"
          className="transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardContent className="pb-0">
        <div  className="flex flex-col justify-between">
        <div className="flex justify-between my-4">        
          <div className="flex items-center font-semibold text-[13px]"> <Eye fill="#000" size={15} strokeWidth={2} stroke="#fff" className="mr-1"/>{item.views} {" "}views </div> 
            <Image src="/invensis.jpg" alt="logo" width={80} height={40} />
        </div>
        <AnimatedText>
          <Text
            className={`${
              isTopCard ? "!text-[24px] min-h-20" : "!text-[22px] min-h-16"
            } font-bold line-clamp-2`}
          >
            {item.title}
          </Text>
        </AnimatedText>
        <div
          className={`flex justify-between items-center mt-4`}
        >
          <Text className="flex items-center">
          <UserRound fill="#000" stroke="#fff" strokeWidth={1} size={15} className="mr-1"/> Naveen Goshal {item?.author}
          </Text>
          <Text className="flex items-center">
          <CalendarDays fill="#fff" stroke="#000" strokeWidth={1} size={15} className="mr-1" /> {" "} 20-10-2024 {item?.date}
          </Text>
        </div>
       
          </div>
      </CardContent>
    </Card>
  </Link>
);

const BannerHome = ({ BannerHomeData }) => {
  const topCards = BannerHomeData.slice(0, 2);
  const remainingCards = BannerHomeData.slice(2);

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {topCards.map((item, index) => (
          <BlogCard key={index} item={item} isTopCard={true} categoryparams />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-x-20 mt-9">
        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-stretch">
            {remainingCards.map((item, index) => (
              <BlogCard
                key={index}
                item={item}
                isTopCard={false}
                categoryparams
              />
            ))}
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className=" sticky top-24">
            <Text variant="h2"> Related Posts</Text>
            <ul>
              <li className="mt-2 font-medium hover:text-blue-400">
                <Link href="/">Non-Technical-blogs</Link>
              </li>
              <li className="mt-2 font-medium hover:text-blue-400">
                <Link href="/">Technical-blogs</Link>
              </li>
              <li className="mt-2 font-medium hover:text-blue-400">
                <Link href="/">Agile-blogs</Link>
              </li>
              <li className="mt-2 font-medium hover:text-blue-400">
                <Link href="/">Bussiness-blogs</Link>
              </li>
            </ul>
            <Text variant="h2" className="mt-28">
              {" "}
              Featured Posts
            </Text>
            <ul>
              <li className="mt-2 font-medium hover:text-blue-400">
                <Link href="/">Best blogs</Link>
              </li>
              <li className="mt-2 font-medium hover:text-blue-400">
                <Link href="/">General knowledge Blogs</Link>
              </li>
              <li className="mt-2 font-medium hover:text-blue-400">
                <Link href="/">Data Analytics Blogs</Link>
              </li>
              <li className="mt-2 font-medium hover:text-blue-400">
                <Link href="/">Bussiness blogs</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BannerHome;
