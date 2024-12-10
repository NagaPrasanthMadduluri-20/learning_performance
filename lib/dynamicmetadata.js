import { appData } from "@/data/appData";
import { getCanonicalUrl } from "./getCanonicalUrl";

export const generateDynamicMetadata = (data, lang = null, slug = null) => {


  // Define static pages that don't require language variations
  const staticPages = [
    "corporate-group-training",
    "join-as-a-corporate-trainer",
    'reviews-testimonials',
    'faqs',
    'resources',
    'upskill',
    'refund-policy',
    'rescheduling-policy',
    'terms-and-conditions',
    'privacy-policy',
    'accreditations',
    'contact-us',
    'info',
  ];



  // Check if the slug starts with a static page
  const isStaticPage = staticPages.some(page => 
    slug && (slug === page || slug.startsWith(`${page}`))
  )

console.log("isStaticPage", isStaticPage);
  // Check if pageSeos array exists
  if (!data?.pageSeos || !Array.isArray(data.pageSeos)) {
    return {
      title: "Page Title",
      description: "Page Description",
    };
  }

  // Find title and description from pageSeos array
  const titleObj = data.pageSeos.find(
    (item) => item.name === "title" && item.type === "SEO TITLE"
  );

  const descriptionObj = data.pageSeos.find(
    (item) => item.name === "description" && item.type === "META"
  );

  // Extract values or use fallbacks
  const title = titleObj?.value || "Page Title";
  const description = descriptionObj?.value || "Page Description";

  // Generate language alternatives only for non-static pages
  const languageAlternates = !isStaticPage
    ? appData.countries.reduce(
        (acc, country) => {
          const countryUrl = getCanonicalUrl(slug, country.code);
          // Use country code for hreflang, with special handling for US
          const hreflang =
            country.code === "us"
              ? "en-US"
              : `en-${country.code.toUpperCase()}`;

          acc[hreflang] = countryUrl;
          return acc;
        },
        {
          // Add x-default link (optional, but recommended)
          "x-default": getCanonicalUrl(slug, null),
        }
      )
    : {};

  return {
    title,
    description,
    alternates: {
      // For static pages, only include canonical URL without language alternates
      canonical: getCanonicalUrl(slug, isStaticPage ? null : lang),
      ...(Object.keys(languageAlternates).length > 0 && {
        languages: languageAlternates,
      }),
    },
    openGraph: {
      title,
      description,
    },
    twitter: {
      title,
      description,
    },
  };
};
