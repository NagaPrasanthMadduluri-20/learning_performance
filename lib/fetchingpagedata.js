import { appData } from "@/data/appData";
import { categoriesData } from "@/data/categories";
import { getCountryHome, getCourses, getUserById, getUsers } from "@/services";

export async function fetchPageData(slug, lang, city) {
    const isCourse = categoriesData?.courses.some((course) => course.slug === slug);
    const isCategory = categoriesData?.categories.some(
      (category) => category.slug === slug
    );
    const isCourses = slug === "courses";
    const isCountry = appData?.countries.some((country) => country.code === lang);
  
    let data, error;
  
    if (isCourse) {
      ({ CourseData: data, error } = await getUserById(slug, lang, city));
    } else if (isCategory) {
      ({ CategoryData: data, error } = await getUsers(slug, lang));
    } else if (isCourses) {
      ({ AllCoursesData: data, error } = await getCourses(lang));
    } else if (isCountry) {
      ({ CountryHome: data, error } = await getCountryHome(lang));
    }
  
    return { data, error };
  }