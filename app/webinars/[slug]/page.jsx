import WebinarDetailBanner from "@/app/ResourcesComponents/WebinarDetailBanner";
import { generateDynamicMetadata } from "@/lib/dynamicmetadata";
import { getWebinarDetail } from "@/services";

const templateMapping = {
  WebinarDetail: ({ content, globaldata }) => (
    <WebinarDetailBanner finalcontent={content} additionalData={globaldata} />
  ),
};
export async function generateMetadata({ params }) {
  const { slug } = params;
  const { webinarDetailData: getwebinardetaildata } = await getWebinarDetail(slug);

  // If pageSeos is empty, create a fallback with the full URL
  if (!getwebinardetaildata.pageSeos || getwebinardetaildata.pageSeos.length === 0) {
    getwebinardetaildata.pageSeos = [
      {
        name: "title",
        value: `${process.env.NEXT_PUBLIC_BASE_URL}/webinars/${getwebinardetaildata.page_slug}`,
        type: "SEO TITLE",
      }
    ];
  }
  const currentslug = `webinars/${slug}`;
  return generateDynamicMetadata(getwebinardetaildata, null, currentslug);
}

const WebinarDetail = async ({ params }) => {
  const { slug } = params;
  let getwebinardetaildata, error;
  ({ webinarDetailData: getwebinardetaildata, error } = await getWebinarDetail(
    slug
  ));



  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const { pageContents } = getwebinardetaildata;

  const renderTemplate = (template, content) => {
    const TemplateComponent = templateMapping[template];
    return TemplateComponent ? (
      <TemplateComponent content={content} globaldata={getwebinardetaildata} />
    ) : null;
  };

  const renderContent = (contentArray) => {
    return contentArray.map((content, index) => (
      <div key={index}>{renderTemplate(content.template, content)}</div>
    ));
  };

  return (
    <div>
      {getwebinardetaildata && getwebinardetaildata.pageContents ? (
        renderContent(pageContents)
      ) : (
        <div>No webinar data available</div>
      )}
    </div>
  );
};

export default WebinarDetail;
