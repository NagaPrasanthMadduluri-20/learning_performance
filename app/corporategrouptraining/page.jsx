import { CorporategroupTraining } from "@/services";
import StaticPageBanner from "../components/StaticPageComponents/StaticPageBanner";
import EnterprizeSection from "../components/StaticPageComponents/enterprizesection";
import HomeTrainingDelivery from "../[...slug]/sharedsections/HomeTrainingDeliverySection";
import RequestEnquiryForm from "../[...slug]/sections/RequestEnquiryForm";
import GlobalAccredatationSlider from "../[...slug]/sharedsections/GlobaAccredatationSliderSection";
import StaticCounters from "../components/StaticPageComponents/StaticCounters";
import HardEarnedExpertize from "../components/StaticPageComponents/HardEarnedExpertize";
import ContextUpdater from "@/context/ContextUpdater";
import CorporateUpskillSliderSection from "../[...slug]/sharedsections/CorporateUpskillSliderSection";
import { generateDynamicMetadata } from "@/lib/dynamicmetadata";

const templateMapping = {
  CorporateTrainingBanner: ({ content, globaldata }) => (
    <>
      <StaticPageBanner corporateData={content} additionalData={globaldata} />{" "}
    </>
  ),
  CorporateTrainingDescription: ({ content, globaldata }) => (
    <EnterprizeSection enterprizeData={content} additionalData={globaldata} />
  ),
  CorporateTrainingDeliveryModes: ({ content, globaldata }) => (
    <HomeTrainingDelivery additionalData={globaldata} />
  ),
  EnquiryFormTab: ({ content, globaldata }) => (
    <RequestEnquiryForm CorporateTraining={true} />
  ),
  GlobalAccreditationsSlider: ({ content, globaldata }) => (
    <GlobalAccredatationSlider additionalData={globaldata} />
  ),
  EnterpriseGlobally: ({ content, globaldata }) => (
    <CorporateUpskillSliderSection />
  ),
  Counters: ({ content, globaldata }) => (
    <StaticCounters StaticCounterData={content} />
  ),
  OurCommitment: ({ content, globaldata }) => <HardEarnedExpertize CommitmentData={content}/>,
};

export async function generateMetadata() {
  const { corporateGroupTrainingData: getcorporateGroupTrainingData } = await CorporategroupTraining();
  const slug = getcorporateGroupTrainingData.page_slug;
  const lang = getcorporateGroupTrainingData.country_code || null;
  return generateDynamicMetadata(getcorporateGroupTrainingData, lang, slug);
};

const CorporateGroupTraining = async () => {

  let getcorporateGroupTrainingData, error;
  ({ corporateGroupTrainingData: getcorporateGroupTrainingData, error } =
    await CorporategroupTraining());

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const pageType = getcorporateGroupTrainingData.type;
  const pageName = getcorporateGroupTrainingData.page_name;
  const { pageContents } = getcorporateGroupTrainingData;


  const renderTemplate = (template, content) => {
    const TemplateComponent = templateMapping[template];
    return TemplateComponent ? (
      <TemplateComponent
        content={content}
        globaldata={getcorporateGroupTrainingData}
      />
    ) : null;
  };
  const renderContent = (contentArray) => {
    
    return contentArray.map((content, index) => (
      <div key={index}>{renderTemplate(content.template, content)}</div>
    ));
  };

  return (
    <>
    <ContextUpdater pageType={pageType} pageName={pageName} />
    <div>
      {getcorporateGroupTrainingData &&
      getcorporateGroupTrainingData?.pageContents ? (
        renderContent(pageContents)
      ) : (
        <div>No Corporate Group Training Data available</div>
      )}
    </div>
    </>
  );
};

export default CorporateGroupTraining;
