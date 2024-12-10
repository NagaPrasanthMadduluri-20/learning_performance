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
import { getCanonicalUrl } from "@/lib/getCanonicalUrl";
import { appData } from "@/data/appData";



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

  
export async function generateMetadata({ params }) {
  
  const { slug, lang, city } = params;

   // Generate language alternatives
   const languageAlternates = appData.countries.reduce((acc, country) => {
    const countryUrl = getCanonicalUrl(slug, country.code, city);
    // Use country code for hreflang, with special handling for US
    const hreflang = country.code === 'us' ? 'en-US' : `en-${country.code.toUpperCase()}`;
    
    acc[hreflang] = countryUrl;
    return acc;
  }, {
    // Add x-default link (optional, but recommended)
    'x-default': getCanonicalUrl(slug, null, city)
  });

  return {
    alternates: {
      canonical: getCanonicalUrl(slug, lang, city),
      languages: languageAlternates
    }
  }
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
