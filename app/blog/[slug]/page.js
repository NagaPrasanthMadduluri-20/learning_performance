// import Container from "@/components/Container";
// import Link from "next/link"; // Import Link component
// import React from "react";
// import { getBlogDetails } from "@/services";
// import BannerPost from "@/app/components/BlogBannerPostSection";

// const ChildBlog = async ({ params }) => {
//   // Component names should be capitalized
//   const { slug } = params;
//   let getblogDetailsdata, error;
//   ({ blogDetailsData: getblogDetailsdata, error } = await getBlogDetails(slug));
//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   const { Blogdetails } = getblogDetailsdata;
//   return (
//     <div>
//       <BannerPost Postdata={Blogdetails} />
//     </div>
//   );
// };

// export default ChildBlog;

// import Container from "@/components/Container";
// import Link from "next/link";
import React from "react";
import BannerPost from "@/app/components/BlogBannerPostSection";
// import BannerHome from "@/app/components/BlogBannerHomeSection";
// import { getAllCategories, getCategoryBySlug, getPostBySlug } from "@/blogapis";
// import Text from "@/components/Text";
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";
import { getBlogDetails } from "@/services";
export const revalidate = 10;
const ChildBlog = async ({ params }) => {
  const { slug } = params;

  try {
    // const post = await getPostBySlug(slug);
    // const categories = await getAllCategories();
    const { blogDetailsData } = await getBlogDetails(slug);
      // const currentCategory = categories.find(
      //   (cat) => cat.slug === post.category
      // );
      // console.log("currentCategory",currentCategory)
      // const categoryBlogs = currentCategory ? currentCategory.blogs : [];

      return (
        <div>
        {/* <Breadcrumb className="my-5">
        <BreadcrumbList className="text-[10px] font-bold opacity-75">
          <BreadcrumbItem>
            <BreadcrumbLink href={`/blog`}>{`Home`}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/blog/${currentCategory?.slug}`}>
              {currentCategory?.title}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/blog/${post.slug}`}>
              {post.title}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb> */}
        <BannerPost
          Postdata={blogDetailsData}
          // categories={categories}
          // currentCategory={currentCategory}
          // categoryBlogs={categoryBlogs}
        />
        </div>
      );

    //const category = await getCategoryBySlug(slug);
    // if (category) {
    //   return (
    //     <div>
    //       <Text variant="h2" className="mb-5">
    //         {category.title}
    //       </Text>
    //       <Breadcrumb>
    //         <BreadcrumbList className="text-[10px] font-bold opacity-75">
    //           <BreadcrumbItem>
    //             <BreadcrumbLink href={`/blog`}>{`Home`}</BreadcrumbLink>
    //           </BreadcrumbItem>
    //           <BreadcrumbSeparator />
    //           <BreadcrumbItem>
    //             <BreadcrumbLink href={`/blog/${category.slug}`}>
    //               {category.title}
    //             </BreadcrumbLink>
    //           </BreadcrumbItem>
    //         </BreadcrumbList>
    //       </Breadcrumb>
    //       <BannerHome BannerHomeData={category.blogs} categoryparams={true} />
    //     </div>
    //   );
    // }

    return <div>Not found</div>;
  } catch (error) {
    return <div>Error: {error.message}</div>;
  }
};
export default ChildBlog;

// const { slug } = params;
// let getblogDetailsdata, error;

// ({ blogDetailsData: getblogDetailsdata, error } = await getBlogDetails(
//   slug
// ));

// if (error) {
//   throw new Error(error);
// }

// if (
//   !getblogDetailsdata ||
//   !getblogDetailsdata.Blogdetails ||
//   !Array.isArray(getblogDetailsdata.Blogdetails)
// ) {
//   throw new Error("Invalid blog data structure");
// }
