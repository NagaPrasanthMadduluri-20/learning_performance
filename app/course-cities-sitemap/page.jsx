import Container from "@/components/Container";
import Text from "@/components/Text";
import { appData } from "@/data/appData";
import { categoriesData } from "@/data/categories";
import Link from "next/link";

const CoursesCitySitemap = () => {
  return (
    <Container>
      <Text variant="h2" className="text-center mb-5">
        Courses City SiteMap
      </Text>
      <div className="grid grid-cols-3 gap-4">
        {categoriesData?.courses.map((course) =>
          appData?.countries.map((countryData) => {
            const countryCities = countryData.cities || [];
            if (countryCities.length > 0) {
              return countryCities.map((cityData, cityIndex) => (
                <ul
                  className="list-disc ml-5 marker:text-orange-400"
                  key={`${countryData.code}-${cityData.id}-${cityIndex}`}
                >
                  <li className="mb-4 hover:underline">
                    <Link
                      href={`/${countryData.code}/${course.slug}/${cityData.short_name}`}
                    >
                      {course.name} in {cityData.name}
                    </Link>
                  </li>
                </ul>
              ));
            }
            return null; // Return null for countries without cities
          })
        )}
      </div>
    </Container>
  );
};

export default CoursesCitySitemap;
