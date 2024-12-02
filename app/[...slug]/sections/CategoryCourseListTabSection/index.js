import Container from "@/components/Container";
import Text from "@/components/Text";
import CourseLevelCardSection from "../CourseLevelCardSection";


const CategoryCourseListTab = ({
  CategoryCourseListTabData,
  additionalData,
}) => {

   const { CategoryCourseLevel } = additionalData;

  return (
    <div className="bg-lightbackground" id="global-courses">
      <Container>
        <Text variant="h2">
          Explore Our Leading Agile Certification Courses {additionalData.location ? `in ${additionalData.location}` : "" }
         </Text>
        <CourseLevelCardSection CardData={CategoryCourseLevel}/>
        {/* <Suspense fallback={<div>Loading...</div>}>
          <ClientSideTabs CategoryCourseLevel={CategoryCourseLevel} />
        </Suspense> */}
      </Container>
    </div>
  );
};

export default CategoryCourseListTab;