import Container from "@/components/Container";
import Text from "@/components/Text";
import Link from "next/link";
import React from "react";

const CoursesSitemap = ({ sitemapData }) => {
  const FinalsitemapCoursesData = sitemapData.courses;
  const FinalsitemapInfoData = sitemapData.InfoArticles;
  const FinalsitemapWebinarData = sitemapData.webinars;
  const FinalsitemapUpskillData = sitemapData.upskill;
  const FinalsitemapOthersData = sitemapData.Others;
  return (
    <>
    <Container>
     <Text variant="h2" className="mb-3 hover:underline">
        <Link href={FinalsitemapCoursesData[0].primayUrl}>{FinalsitemapCoursesData[0].primaryHeading}</Link>
      </Text>
      <div className="grid grid-cols-1 gap-4">
        {FinalsitemapCoursesData.map((courseCategory, index) => (
          <div key={index} >
            {courseCategory.secondaryHeading && (
              <Text variant="h3" className="my-4 hover:underline">
                <Link  href={courseCategory.secondaryUrl}>{courseCategory.secondaryHeading}</Link>
              </Text>
            )}
            <ul className="list-disc ml-5 marker:text-orange-400 grid grid-cols-3 gap-1">
              {courseCategory.list?.map((item, subIndex) => (
                <li key={subIndex} className="hover:underline">
                  <Link href={item.link_href}>{item.link_name}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
     <Container className="py-3">
     <Text variant="h2" className="hover:underline mb-8">
       {" "}
 
        Resources
  
     </Text>
     <Text variant="h2" className="hover:underline mb-8">
       {" "}
 
        Info Articles
  
     </Text>
     <div className="grid grid-cols-3 gap-1">
     {FinalsitemapInfoData.map((item, index) => (
       <ul key={index} className="list-disc ml-5 marker:text-orange-400">
         <li className=" hover:underline">
           <Link href={item.link_href}> {item.link_name}</Link>
         </li>
       </ul>
     ))}
     </div>
   </Container>
   <Container className="py-3">
     <Text variant="h2" className="hover:underline mb-8">
       {" "}
       <Link href={FinalsitemapWebinarData[0].primayUrl}>
         {" "}
      {FinalsitemapWebinarData[0].primaryHeading}
       </Link>
     </Text>
     <div className="grid grid-cols-3 gap-1">
     {FinalsitemapWebinarData[0].list?.map((item, index) => (
       <ul key={index} className="list-disc ml-5 marker:text-orange-400">
         <li className=" hover:underline">
           <Link href={item.link_href}> {item.link_name}</Link>
         </li>
       </ul>
     ))}
     </div>
   </Container>
   <Container className="py-3">
     <Text variant="h2" className="hover:underline mb-8">
       {" "}
       <Link href={FinalsitemapUpskillData[0].primayUrl}>
         {" "}
        {FinalsitemapUpskillData[0].primaryHeading}
       </Link>
     </Text>
     <div className="grid grid-cols-3 gap-1">
     {FinalsitemapUpskillData[0].list?.map((item, index) => (
       <ul key={index} className="list-disc ml-5 marker:text-orange-400">
         <li className=" hover:underline">
           <Link href={item.link_href}> {item.link_name}</Link>
         </li>
       </ul>
     ))}
     </div>
   </Container>
   <Container className="py-3">
     <Text variant="h2" className="hover:underline mb-8">
       {" "}
     
         {" "}
        Others
     </Text>
     <div className="grid grid-cols-3 gap-1">
     {FinalsitemapOthersData[0].list?.map((item, index) => (
       <ul key={index} className="list-disc ml-5 marker:text-orange-400">
         <li className=" hover:underline">
           <Link href={item.link_href}> {item.link_name}</Link>
         </li>
       </ul>
     ))}
     </div>
   </Container>
   </>
  );
};

export default CoursesSitemap;
