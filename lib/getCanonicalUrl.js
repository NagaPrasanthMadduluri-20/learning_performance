import NotFound from "@/app/not-found";
import { appData } from "@/data/appData";
import { categoriesData } from "@/data/categories";

export function getCanonicalUrl(slug, lang, city) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://learning-performance.vercel.app';
   

  // Define static pages that don't require language variations
  const staticPages = [
    'corporate-group-training', 
    'join-as-a-corporate-trainer', 
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
    "webinars"
  ];

 

  // Check if the slug starts with a static page
  const isStaticPage = staticPages.some(page => 
    slug && (slug === page || slug.startsWith(`${page}`))
  )
  
  // If it's a static page, return the base URL with the slug
  if (isStaticPage && (lang === undefined || lang === null) && (city === undefined || city === null)) {
    return `${baseUrl}/${slug}`;
  }



  // Explicitly check for valid country
  const isValidCountry = appData?.countries.some(country => country.code === lang);

  // If only country is provided (slug is undefined/null)
  if (isValidCountry && (slug === undefined || slug === null) && (city === undefined || city === null)) {
    return `${baseUrl}/${lang}`;
  }

// Handle pure domain case with null/undefined checks
if ((slug === undefined || slug === null) && 
(lang === undefined || lang === null) && 
(city === undefined || city === null)) {
return baseUrl;
}

const segments = [];

// Handle language/country segment first
if (isValidCountry) {
segments.push(lang);
}

// Handle courses specifically
const isCoursesSlug = slug === 'courses';
if (isCoursesSlug) segments.push('courses');

// Handle specific course or category slugs
const isValidCustomSlug = 
categoriesData?.courses.some(course => course.slug === slug) || 
categoriesData?.categories.some(category => category.slug === slug);

if (isValidCustomSlug && !isCoursesSlug) segments.push(slug);

if (!isValidCustomSlug && !isCoursesSlug && !isValidCountry  && !isStaticPage) {
return <NotFound/>;
}

// Handle city segment
if (city) segments.push(city);

return segments.length > 0 
? `${baseUrl}/${segments.join('/')}` 
: baseUrl;
}