export const ResourcesapiData = {
type: "RESOURCES",
robots: { name: "INDEX FOLLOW", value: "index, follow" },
page_name: null,
category_name: null,
page_slug: "resources",
service_id: null,
link_title: "resources",
breadcrumb: [
  { name: "Home", url: "https://www.invensislearning.com/", position: 1 },
  {
    name: "Resources",
    url: "https://www.invensislearning.com/resources/",
    position: 2,
  },
],
breadcrumbSchema: {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: { "@id": "https://www.invensislearning.com/", name: "Home" },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@id": "https://www.invensislearning.com/resources/",
        name: "Resources",
      },
    },
  ],
},
webinar_mautic_id: "",
pageSeos: [
  {
    name: "title",
    value:
      "Resources - Webinars, Articles, Free Guides, Practice Test, Case Studies",
    type: "SEO TITLE",
  },
  {
    name: "description",
    value:
      "Get access to all the latest guides, articles, practice tests, case studies and free templates for globally-recognized courses such as PMP, PRINCE2, ITIL, Six Sigma, DevOps, COBIT5, and more.",
    type: "META",
  },
],
pageContents: [
    {
      template: "ResourceBanner",
      orders: 1,
      is_dynamic: false,
      contents: {
        resource_banner_primary_title: "GO BEYOND THE CURRICULUM",
        resource_banner_secondary_title: "To Continue Learning & Growing ",
        resource_banner_content:
          "Get access to all the latest guides, articles, practice tests, case studies and free templates for globally-recognized courses such as PMP, PRINCE2, ITIL, Six Sigma, DevOps, COBIT5, and more. Register now to be part of an exciting LMS to get exclusive access to premium webinars and podcasts.",
        resource_button_title: "Explore",
        bg_image: "https://stagingbeta.invensislearning.com/static/images/banners/resource_banner.png"
      },
    },
    {
      template: "ListOfAllResources",
      orders: 2,
      is_dynamic: true,
      contents: null,
    },
  ],
}