import { getContactUs } from '@/services';
import React from 'react'
import ContactUsBanner from './ContactUsBanner';
import AddressesMain from './AddressesMain';
import ContactForm from './contactform';
import GlobalAccredatationSlider from '../[...slug]/sharedsections/GlobaAccredatationSliderSection';
import { generateDynamicMetadata } from '@/lib/dynamicmetadata';

const templateMapping = {

    ContactUsBanner: ({ content, globaldata }) =>  <ContactUsBanner contactPageData={content} additionalData={globaldata} />,
    AddressesMain: ({ content, globaldata }) => <AddressesMain AddressesMainData={content} additionalData={globaldata} />,
    ContactForm: ({ content, globaldata }) =>  <ContactForm />,
    GlobalAccreditationsSlider: ({ content, globaldata }) => <GlobalAccredatationSlider/>
  };
  
  export async function generateMetadata() {
    const { ContactUsData: getContactUsData } = await getContactUs();
    const slug = getContactUsData.page_slug;
    return generateDynamicMetadata(getContactUsData, null, slug);
  };

  const ContactUs = async() => {
    let getContactUsData, error;
    ({ ContactUsData: getContactUsData, error } = await getContactUs());
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    const { pageContents } = getContactUsData;
    const renderTemplate = (template, content) => {
      const TemplateComponent = templateMapping[template];
      return TemplateComponent ? (
        <TemplateComponent
          content={content}
          globaldata={getContactUsData}
        />
      ) : null;
    };
  
    const renderContent = (contentArray) => {
      return contentArray.map((content, index) => (
        <div key={index}>{renderTemplate(content.template, content)}</div>
      ));
    };
  
    return (
      <div>
        {getContactUsData && getContactUsData.pageContents ? (
          renderContent(pageContents)
        ) : (
          <div>No infodata available</div>
        )}
      </div>
    );
  }

export default ContactUs