import Container from "@/components/Container";
import Text from "@/components/Text";
import Image from "next/image";
import React from "react";

const AccreditationsList = ({ accreditationListData }) => {
  const { contents } = accreditationListData;

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {contents.accreditationslistcards.map((accreditation, index) => (
          <div key={index}>
            <div className="bg-gray-200 flex justify-center items-center mb-4 p-5 w-[300px] h-[150px] overflow-hidden">
              <Image
                src={accreditation.image_path}
                alt={accreditation.title}
                width={150}
                height={150}
                className="w-full h-auto object-contain"
              />
            </div>
            <Text className="text-balance">{accreditation.detail}</Text>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default AccreditationsList;
