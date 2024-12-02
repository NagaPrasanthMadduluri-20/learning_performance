import Container from "@/components/Container";
import Text from "@/components/Text";
import Image from "next/image";
import React from "react";

const MissionandVision = ({ MissionData, VisionData }) => {
  const missionContents = MissionData?.contents || {};
  const visionContents = VisionData?.contents || {};

  const heading = VisionData
    ? visionContents.heading
    : MissionData
    ? missionContents.heading
    : "";

    const renderVisionContent = () => {
        const visions = visionContents.ourvisions || [];
        
        return visions.map((vision, index) => (
          <div key={index} className="text-center">
            <div className="flex justify-center items-center mb-4">
              {vision.list_iconUrl && (
                <Image
                  src={vision.list_iconUrl}
                  alt={`vision-icon-${index}`}
                  width={150}
                  height={150}
                />
              )}
            </div>
            {vision.list_title && (
              <Text
                className={`text-${vision.list_color || 'primary'}-400 text-[16px] font-semibold mb-3 w-[90%] mx-auto`}
              >
                {vision.list_title}
              </Text>
            )}
            {vision.list_description && (
              <Text className="text-center">{vision.list_description}</Text>
            )}
          </div>
        ));
      };

// Render logic for Mission template
const renderMissionContent = () => {
  const subText = missionContents.SubText;

  return subText ? (
    <Text className={`text-center text-[16px] font-medium mx-auto ${MissionData ? "text-primary-foreground" : "text-primary" }`}>{subText}</Text>
  ) : null;
};

// If no data is present, return null or a placeholder
if (!MissionData && !VisionData) {
  return null;
}

return (
    <div className={`${MissionData  ? "bg-primary" : ""}`}>
  <Container>
    {heading && (
      <Text
        variant="h2"
        className={`text-center text-[20px] ${MissionData ? "text-primary-foreground" : "text-primary" } dark:text-primary-foreground mb-5`}
      >
        {heading}
      </Text>
    )}

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {VisionData && renderVisionContent()}
     
    </div>
    <div>
    {MissionData && renderMissionContent()}
    </div>
  </Container>
  </div>
);
};
export default MissionandVision;
