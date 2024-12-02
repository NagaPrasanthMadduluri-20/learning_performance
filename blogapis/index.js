import { getBlog, getBlogDetails } from "@/services";


export async function getAllBlogs() {
  let { blogData, error } = await getBlog();

  if (error) {
    console.error("Error fetching blog data:", error);
    return [];
  }

  if (!blogData || !blogData.blogdata) {
    console.error("Blog data is null or undefined");
    return [];
  }

  const blogdata = blogData.blogdata;

  if (!Array.isArray(blogdata)) {
    console.error("Blog data is not an array");
    return [];
  }

  // Sort blogs by date, most recent first
  return blogdata.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export async function getAllCategories() {
  let { blogData, error } = await getBlog();

  const blogdata = blogData.blogdata;
  if (error) {
    console.error("Error fetching blog data:", error);
    return [];
  }

  if (!Array.isArray(blogdata)) {
    console.error("Blog data is not an array");
    return [];
  }

  // Group blogs by category
  const categories = blogdata.reduce((acc, blog) => {
    if (!acc[blog.category]) {
      acc[blog.category] = {
        title: blog.categoryTitle,
        slug: blog.category.toLowerCase().replace(/ /g, '-'),
        blogs: []
      };
    }
    acc[blog.category].blogs.push(blog);
    return acc;
  }, {});

  return Object.values(categories);
}



export async function getPostBySlug(slug) {
  let { blogDetailsData, error } = await getBlogDetails(slug);
const Blogdetails = blogDetailsData.Blogdetails
  console.log(Blogdetails)
  if (error) {
    console.error("Error fetching blog data:", error);
    return null;
  }

  if (!Array.isArray(Blogdetails)) {
    console.error("Blog data is not an array");
    return null;
  }

  return Blogdetails.find(post => post.slug === slug) || null;
}

export async function getCategoryBySlug(slug) {
  const categories = await getAllCategories();
  return categories.find(category => category.slug === slug) || null;
}