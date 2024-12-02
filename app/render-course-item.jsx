import Text from "@/components/Text";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

const RenderCourseItem = (course,{ lang, isValidSlug, closeMenu }) => {
  
  return (
    <li key={course.id}>
      <Link
        asChild
        href={!isValidSlug ? `/${course.slug}` : `/${lang}/${course.slug}`}
        className="flex items-center gap-x-5 hover:bg-lightbackground p-2"
        onClick={closeMenu}
      >
        <span>
          <Image
            src={`https://alpha.invensislearning.com/storage/new_menu_design/${course.image}`}
            alt={course.name}
            width={200}
            height={200}
            className="bg-white rounded-full w-11 h-11"
            
          />
        </span>
        <div>
          <Text className="font-semibold text-[13px]">
            {course.name}{" "}
            {course.label && (
              <sup
                className="text-white rounded-md p-[2px] text-[10px] "
                style={{
                  backgroundColor:
                    course.label === "Best Seller"
                      ? "#00C24E"
                      : course.label === "Trending"
                      ? "#FD600E"
                      : course.label === "New"
                      ? "#9747FF"
                      : "#3f51b5",
                }}
              >
                {course.label}
              </sup>
            )}
          </Text>
          <Text className="text-[10px] text-[#858BB1] flex h-5 items-center space-x-3 font-semibold">
            {course.Acc && (
              <>
                <span> {course.Acc} </span>
                <Separator orientation="vertical" />{" "}
              </>
            )}
            {course.d ? (
              <span>{course.d} Days</span>
            ) : (
              <span>Flexible training options</span>
            )}
            <Separator orientation="vertical" />
            <span>Instructor led</span>
            <Separator orientation="vertical" />
            <span>Live Training</span>
          </Text>
        </div>
      </Link>
    </li>
  );
};

export default RenderCourseItem;

export const renderAccreditations = (accreditations) => (
  <div>
  <div className="mt-4">
    <Text variant="body1" className="font-semibold mb-2">
      Accreditations:
    </Text>
    <div className="flex flex-col gap-2">
      {accreditations.map((accreditation, index) => (
        <div key={index} className="flex items-center gap-x-4">
          <Image
            key={index}
            src={`https://alpha.invensislearning.com/storage/new_menu_design/${accreditation.Accrediations}`}
            alt={accreditation.name || "Accreditation"}
            width={50}
            height={50}
            className="mb-2 bg-white rounded-full"
          />

          <Text variant="body2">{accreditation.name || "Accreditation"}</Text>
        </div>
      ))}
    </div>
  </div>
  </div>
);
