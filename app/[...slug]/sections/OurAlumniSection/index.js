import Container from "@/components/Container";
import Text from "@/components/Text";
import React from "react";

const OurAlumni = ({ OurAlumiData }) => {
  const { contents } = OurAlumiData;

  return (
    <Container className="py-2">
      <Text variant="h2">{contents.heading}</Text>
      <div className="grid grid-cols-3 gap-x-5">
      {contents.ouralumis.map((ouralumis, index) => (
        <div key={index} className="flex justify-between my-4">
      
            <Text className="border-l-blue-600 border-l-4 p-8 shadow-xl w-full" >{ouralumis.name}</Text>
       
        </div>
      ))}
         </div>
    </Container>
  );
};

export default OurAlumni;
