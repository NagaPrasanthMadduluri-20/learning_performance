import CategoryCourseList from "@/lib/categoryCourseList";
import MapComponent from "@/lib/MapComponent";
import HomePageBanner from "./[...slug]/sharedsections/HomePageBanner";
import InvlTrainingAvatar from "./[...slug]/sharedsections/InvlTrainingAvatarSection";
import HomeTrainingDelivery from "./[...slug]/sharedsections/HomeTrainingDeliverySection";
import GlobalAccredatationSlider from "./[...slug]/sharedsections/GlobaAccredatationSliderSection";
import { getCountryHome } from "@/services";
import HomepageAbout from "./[...slug]/sections/HomepageAbout";
import { categoriesData } from "@/data/categories";
import Container from "@/components/Container";
import ContextUpdater from "@/context/ContextUpdater";
import CorporateUpskillSliderSection from "./[...slug]/sharedsections/CorporateUpskillSliderSection";



const templateMapping = {
  Banner: ({ content, globaldata }) => (
    <HomePageBanner BannerData={content} additionalData={globaldata} />
  ),
  InvlTrainingDeliveryMode: ({ content, globaldata }) => (
    <HomeTrainingDelivery deliveryData={content} additionalData={globaldata} />
  ),
  GlobalAccreditationsSlider: ({ content, globaldata }) => (
    <GlobalAccredatationSlider
      GlobalAccredatationSliderData={content}
      additionalData={globaldata}
    />
  ),
  InvlCorporateTrainingAvatar: ({ content, globaldata }) => (
    <InvlTrainingAvatar
      InvlTrainingData={content}
      additionalData={globaldata}
    />
  ),
  EnterpriseGlobally: ({ content, globaldata }) => (
    <CorporateUpskillSliderSection
      CorporateUpskillSliderData={content}
      additionalData={globaldata}
    />
  ),
  AboutInvensisLearning: ({ content, globaldata }) => (
    <>
      <HomepageAbout
        AboutInvensisLearningData={content}
        additionalData={globaldata}
      />
      <Container>
        <CategoryCourseList />
        <MapComponent />
      </Container>
    </>
  ),
};

export async function generateStaticParams() {
  const params = [{ lang: null }]; // Root page
  categoriesData?.countries.forEach((country) => {
    params.push({ lang: country });
  });
  return params;
}

function parsePathParams(params) {
  const lang = params.lang || null;
  return { lang };
}

export default async function Page ({ params }) {
   //console.log("params: ", params);

  // Extract lang parameter directly if your path follows /[lang]
  const { lang } = parsePathParams(params);
 
  let data, error;
  ({ CountryHome: data, error } = await getCountryHome(lang));

  const pageType = data.type;
  const pageName = data.page_name;
  
  const renderTemplate = (template, content) => {
    const TemplateComponent = templateMapping[template];
    return TemplateComponent ? (
      <>
        <TemplateComponent
          key={content.id}
          content={content}
          globaldata={data}
        />
      </>
    ) : null;
  };

  const { pageContents } = data;

  const renderContent = (contentArray) => {
    return contentArray.map((content, index) => {
      return <div key={index}>{renderTemplate(content.template, content)}</div>;
    });
  };

  return (
    <>
    <ContextUpdater pageType={pageType} pageName={pageName}  />
    <div>{renderContent(pageContents)}</div>
    </>
  ) 
}

{
  /* <>
      <HomePageBanner />
      <InvlTrainingAvatar />
      <HomeTrainingDelivery />
      <CorporateUpskillSliderSection />
      <GlobalAccredatationSlider/>
    </> */
}
