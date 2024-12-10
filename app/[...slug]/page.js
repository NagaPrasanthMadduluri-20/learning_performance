import { categoriesData } from "@/data/categories";
import CourseScreen from "./screens/CourseScreen";
import CategoryScreen from "./screens/CategoryScreen";
import NotFound from "../not-found";
import ContextUpdater from "@/context/ContextUpdater";
import HomeScreen from "./screens/CountryHomeScreen";
import { appData } from "@/data/appData";
import CoursesScreen from "./screens/CountryCoursesScreen";
import { shouldShowNotFound } from "@/lib/pageValidation";
import { fetchPageData } from "@/lib/fetchingpagedata";
import { getCanonicalUrl } from "@/lib/getCanonicalUrl";




// export async function generateStaticParams() {
//   const params = [];

//   // Handle categories
//   categoriesData?.categories?.forEach((category) => {
//     params.push({ slug: [category.slug] });
//     appData?.countries?.forEach((country) => {
//       params.push({ slug: [country.code, category.slug] });
//     });
//   });

//   // Handle courses with cities
//   categoriesData?.courses.forEach((course) => {
//     params.push({ slug: [course.slug] });
//     appData?.countries?.forEach((country) => {
//       params.push({ slug: [country.code, course.slug] });
//       // Add city params if country has cities
//       const countryCities = country.cities || [];
//       countryCities.forEach((city) => {
//         params.push({ slug: [country.code, course.slug, city.short_name] });
//       });
//     });
//   });
//   return params;
// }


export async function generateStaticParams() {
  const params = [];

  // Handle categories
  categoriesData?.categories?.forEach((category) => {
    // Generic category page
    params.push({ slug: [category.slug] });

    // Category pages for each country
    appData?.countries?.forEach((country) => {
      params.push({ slug: [country.code, category.slug] });
    });
  });

  // Handle courses with cities
  categoriesData?.courses.forEach((course) => {
    // Generic course page
    params.push({ slug: [course.slug] });

    // Course pages for each country
    appData?.countries?.forEach((country) => {
      // Country-specific course page
      params.push({ slug: [country.code, course.slug] });

      // Course pages for cities in the country
      const countryCities = country.cities || [];
      countryCities.forEach((city) => {
        params.push({ 
          slug: [country.code, course.slug, city.short_name] 
        });
      });
    });
  });

  // Add country home pages
  appData?.countries?.forEach((country) => {
    params.push({ slug: [country.code] });
  });

  // Add generic pages
  params.push({ slug: ['courses'] });

  return params;
}

// Revalidation configuration
export const revalidate = 3600; // Revalidate every hour
// Or for more granular control:
export const dynamicParams = true; // Allow generating pages not pre-rendered at build time



function parsePathParams(params) {
  const pathParts = Object.entries(params).flatMap(([key, value]) =>
    Array.isArray(value) ? value : [value]
  );
  const twoLetterRegex = /^[a-zA-Z]{2}$/;
  const isCountrySlugPresent = twoLetterRegex.test(pathParts[0]);
  const lang = isCountrySlugPresent ? pathParts[0] : null;
  const slug = isCountrySlugPresent ? pathParts[1] : pathParts[0];
  const city =
    isCountrySlugPresent && pathParts.length >= 3
      ? pathParts[pathParts.length - 1]
      : null;
  return { pathParts, lang, slug, city };
}

export async function generateMetadata({ params }) {
  const { lang, slug, city } = parsePathParams(params);
  const { data } = await fetchPageData(slug, lang, city);

  // Generate language alternatives
  const languageAlternates = appData.countries.reduce((acc, country) => {
    const countryUrl = getCanonicalUrl(slug, country.code, city);
    // Use country code for hreflang, with special handling for US
    const hreflang = country.code === 'us' ? 'en-US' : `en-${country.code.toUpperCase()}`;
    
    acc[hreflang] = countryUrl;
    return acc;
  }, {
    // Add x-default link (optional, but recommended)
    'x-default': getCanonicalUrl(slug, null, city)
  });


  if (!data?.pageSeos) {
    return {
      title: "Certification Training Courses | ITIL, PMP, PRINCE2, Six Sigma, COBIT 5 | Invensis Learning",
      description: "Invensis Learning imparts ITIL, PMP, CAPM, PRINCE2, Six Sigma, COBIT 5, DevOps, Cloud Computing, Agile, &amp; Change Management Training courses for individuals and enterprises globally. Trainings are delivered through instructor-led classroom and live online training modes.",
    };
  }

  const metadata = {
    title: "Default Title",
    description: "Default Description",
    openGraph: {},
    twitter: {},
    keywords: "",
    alternates: {
      canonical: getCanonicalUrl(slug, lang, city),
      languages: languageAlternates
    },
  };

  data.pageSeos.forEach((seo) => {
    if (seo.type === "SEO TITLE" && seo.name === "title") {
      metadata.title = seo.value;
    } else if (seo.type === "META") {
      switch (seo.name) {
        case "description":
          metadata.description = seo.value;
          break;
        case "keywords":
          metadata.keywords = seo.value;
          break;
        case "og:title":
          metadata.openGraph.title = seo.value;
          break;
        case "og:description":
          metadata.openGraph.description = seo.value;
          break;
        case "og:image":
          metadata.openGraph.images = [{ url: seo.value }];
          break;
        case "twitter:card":
          metadata.twitter.card = seo.value.toLowerCase();
          break;
        case "twitter:title":
          metadata.twitter.title = seo.value;
          break;
        case "twitter:description":
          metadata.twitter.description = seo.value;
          break;
        case "twitter:site":
          metadata.twitter.site = seo.value;
          break;
        case "twitter:creator":
          metadata.twitter.creator = seo.value;
          break;
        case "twitter:image":
          metadata.twitter.images = [seo.value];
          break;
      }
    }
  });

  return metadata;
}

export default async function Page({ params }) {
  const { lang, slug, city } = parsePathParams(params);

  const isValidSlug =
    categoriesData?.courses?.some((course) => course.slug === slug) ||
    categoriesData?.categories?.some((category) => category.slug === slug) ||
    slug === "courses";

  const isValidLang = appData?.countries?.some(
    (country) => country.code === lang
  );

  if (shouldShowNotFound(slug, lang, isValidSlug, isValidLang)) {
    return <NotFound />;
  }

  const { data, error } = await fetchPageData(slug, lang, city);
  if (error) {
    return (
      <div>
        <NotFound />
      </div>
    );
  }

  if (!data) {
    console.log("No data found for this slug and language");
    return <div>Page not found</div>;
  }

  const pageType = data.type;
  const pageName = data.page_name;
  const country = lang;

  const isCourse = categoriesData?.courses.some(
    (course) => course.slug === slug
  );
  const isCategory = categoriesData?.categories.some(
    (category) => category.slug === slug
  );
  const isCourses = slug === "courses";
  const isCountry = appData?.countries.some((country) => country.code === lang);

  let content;
  if (isCourse) {
    content = <CourseScreen data={data} />;
  } else if (isCategory) {
    content = <CategoryScreen data={data} />;
  } else if (isCourses) {
    content = <CoursesScreen data={data} />;
  } else if (isCountry) {
    content = <HomeScreen data={data} />;
  }

  return (
    <>
      <ContextUpdater
        pageType={pageType}
        pageName={pageName}
        country={country}
      />
  
      {content}
    </>
  );
}
