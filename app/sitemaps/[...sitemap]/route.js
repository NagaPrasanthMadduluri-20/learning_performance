// app/sitemaps/[...sitemap]/route.js
import { appData } from "@/data/appData";
import { categoriesData } from "@/data/categories";

export async function GET(request, { params }) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const currentDate = new Date().toISOString();
  const { sitemap } = params;
  console.log("sitemap: " + sitemap);

  let urlSet = [];

  if (sitemap[0] === "home-sitemap.xml") {
    urlSet = await generateMainSitemap(baseUrl, currentDate);
  } else if (sitemap[0] === "course-countries-sitemap.xml") {
    urlSet = await generateCoursesSitemap(baseUrl, currentDate);
  } else if (sitemap[0] === "course-cities-sitemap.xml") {
    urlSet = await generateCityCoursesSitemap(baseUrl, currentDate);
  } else if (sitemap[0] === "course-categories-sitemap.xml") {
    urlSet = await generateCategoriesSitemap(baseUrl, currentDate);
  } else if (sitemap[0] === "resources-sitemap.xml") {
    urlSet = await generateResoursesSitemap(baseUrl, currentDate);
  }

  const xml = generateSitemapXML(urlSet);

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

function generateSitemapXML(urlSet) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urlSet
        .map(
          (url) => `
        <url>
          <loc>${url.loc}</loc>
          <lastmod>${url.lastmod}</lastmod>
          <changefreq>${url.changefreq}</changefreq>
          <priority>${url.priority}</priority>
        </url>
      `
        )
        .join("")}
    </urlset>`;
}

async function generateMainSitemap(baseUrl, currentDate) {
  const urlSet = [];

  urlSet.push({
    loc: `${baseUrl}/`,
    lastmod: currentDate,
    changefreq: "weekly",
    priority: "0.8",
  });

  appData.countries.forEach((country) => {
    urlSet.push({
      loc: `${baseUrl}/${country.code}/`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: "0.8",
    });
  });

  urlSet.push({
    loc: `${baseUrl}/courses`,
    lastmod: currentDate,
    changefreq: "weekly",
    priority: "0.8",
  });
  appData.countries.forEach((country) => {
    urlSet.push({
      loc: `${baseUrl}/${country.code}/courses`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: "0.8",
    });
  });

  appData.Others[0].list.forEach((item) => {
    console.log(item);
    urlSet.push({
      loc: `${baseUrl}/${item.link_href}`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: "0.8",
    });
  });
  console.log("home-sitemap length", urlSet.length);
  return urlSet;
}


async function generateResoursesSitemap(baseUrl, currentDate) {
  const urlSet = [];

  urlSet.push({
    loc: `${baseUrl}/webinar`,
    lastmod: currentDate,
    changefreq: "weekly",
    priority: "0.8",
  });

  
  appData.webinars[0].list.forEach((webinar) => {
      urlSet.push({
        loc: `${baseUrl}/webinar/${webinar.link_href}`,
        lastmod: currentDate,
        changefreq: "weekly",
        priority: "0.8",
      });   
  });
  urlSet.push({
    loc: `${baseUrl}/upskill`,
    lastmod: currentDate,
    changefreq: "weekly",
    priority: "0.9",
  });   
  appData.upskill[0].list.forEach((upskill) => {
    urlSet.push({
      loc: `${baseUrl}/upskill/${upskill.link_href}`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: "0.9",
    });   
});
urlSet.push({
  loc: `${baseUrl}/info`,
  lastmod: currentDate,
  changefreq: "weekly",
  priority: "0.9",
}); 
appData.InfoArticles.forEach((info) => {
  urlSet.push({
    loc: `${baseUrl}/info/${info.link_href}`,
    lastmod: currentDate,
    changefreq: "weekly",
    priority: "0.9",
  }); 
});
  
  console.log("Resources-sitemap", urlSet.length);
  return urlSet;
}


async function generateCoursesSitemap(baseUrl, currentDate) {
  const urlSet = [];

  // Assuming you still have courses data somewhere
  const courses = categoriesData?.courses || [];

  // Generate course URLs for each country
  appData.countries.forEach((country) => {
    courses.forEach((course) => {
      urlSet.push({
        loc: `${baseUrl}/${country.code}/${course.slug}`,
        lastmod: currentDate,
        changefreq: "weekly",
        priority: "0.8",
      });
    });
  });
  console.log("course-countries-sitemap", urlSet.length);
  return urlSet;
}

async function generateCityCoursesSitemap(baseUrl, currentDate) {
  const urlSet = [];
  const courses = categoriesData?.courses || [];

  // Generate city-specific course URLs
  appData.countries.forEach((country) => {
    courses.forEach((course) => {
      // Check if country has cities and generate URLs for each city
      if (country.cities && country.cities.length > 0) {
        country.cities.forEach((city) => {
          urlSet.push({
            loc: `${baseUrl}/${country.code}/${course.slug}/${city.short_name}`,
            lastmod: currentDate,
            changefreq: "weekly",
            priority: "0.7",
          });
        });
      }
    });
  });
  console.log("course-cities-sitemap", urlSet.length);
  return urlSet;
}

async function generateCategoriesSitemap(baseUrl, currentDate) {
  const urlSet = [];
  const categories = categoriesData?.categories || [];

  // Generate category URLs
  categories.forEach((category) => {
    urlSet.push({
      loc: `${baseUrl}/${category.slug}`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: "0.8",
    });
  });

  // Generate country-specific category URLs
  appData.countries.forEach((country) => {
    categories.forEach((category) => {
      urlSet.push({
        loc: `${baseUrl}/${country.code}/${category.slug}`,
        lastmod: currentDate,
        changefreq: "weekly",
        priority: "0.8",
      });
    });
  });
  console.log("course-categories-sitemap", urlSet.length);
  return urlSet;
}

// Generate sitemap index
export async function generateSitemapIndex() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const currentDate = new Date().toISOString();

  return `<?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <sitemap>
        <loc>${baseUrl}/sitemaps/www.sitemap_production.xml</loc>
        <lastmod>${currentDate}</lastmod>
      </sitemap>
      <sitemap>
        <loc>${baseUrl}/sitemaps/courses.sitemap.xml</loc>
        <lastmod>${currentDate}</lastmod>
      </sitemap>
      <sitemap>
        <loc>${baseUrl}/sitemaps/citycourses.sitemap.xml</loc>
        <lastmod>${currentDate}</lastmod>
      </sitemap>
      <sitemap>
        <loc>${baseUrl}/sitemaps/categories.sitemap.xml</loc>
        <lastmod>${currentDate}</lastmod>
      </sitemap>
    </sitemapindex>`;
}
