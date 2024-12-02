import BannerHome from "../components/BlogBannerHomeSection";
import Text from "@/components/Text";
import BlogCategoryList from "../components/BlogCategoryList";
import { Suspense } from "react";
import { getAllBlogs, getAllCategories } from "@/blogapis";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { getBlog } from "@/services";

const BlogContent = async () => {
  try {

    // const categories = await getAllCategories();

    const { blogData } = await getBlog()


    // if (latestBlogs.length === 0 || categories.length === 0) {
    //   return <div>No blog data available. Please try again later.</div>;
    // }
    return (
      <>
        {/* <div>
          <Text variant="h2" className="mb-5">
            Checkout The Category Blogs ({blogData.length})
          </Text>
          <BlogCategoryList />
        </div> */}

        <div>
          <Text variant="h2">Latest Blogs</Text>
          <BannerHome BannerHomeData={blogData} />
        </div>
      </>
    );
  } catch (error) {
    console.error("Error in BlogContent:", error);
    return (
      <div>
        An error occurred while loading the blog. Please try again later.
      </div>
    );
  }
};

const Blog = () => {
  return (
    <ErrorBoundary
      fallback={<div>Something went wrong. Please try again later.</div>}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <BlogContent />
      </Suspense>
    </ErrorBoundary>
  );
};

export default Blog;

export const dynamic = "force-dynamic";
