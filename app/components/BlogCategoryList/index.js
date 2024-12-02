import Container from "@/components/Container";
import Text from "@/components/Text";
import Link from "next/link";
import React from "react";

const BlogCategoryList = ({ categories, blogs, bllllogs, otherBlogCategories, }) => {

  return (
    <Container className="pt-0">
      {bllllogs ? (
        <>
          <div className="flex flex-wrap gap-5 ">
            {blogs?.map((blog) => (
              <Link
                key={blog.slug}
                href={`/blog/${blog.slug}`}
                className="text-blue-600 hover:underline"
              >
                {" "}
                <Text className="font-semibold bg-lightbackground rounded-sm p-2">
                  {blog.title}
                </Text>
              </Link>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-wrap gap-5">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`${otherBlogCategories ? "/blog" : "/blog"}/${
                  category?.slug
                }`}
                className="text-blue-600 hover:underline"
              >
                {" "}
                <Text className="font-semibold bg-lightbackground rounded-sm p-2">
                  {category.title}{" "}
                </Text>
              </Link>
            ))}
          </div>
        </>
      )}
    </Container>
  );
};

export default BlogCategoryList;
