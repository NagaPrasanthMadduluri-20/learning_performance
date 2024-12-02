export const AboutusData = {
    type: "ABOUT US",
  robots: { name: "INDEX FOLLOW", value: "index, follow" },
  page_name: null,
  category_name: null,
  page_slug: "about-us",
  service_id: null,
  link_title: "About Us",
  breadcrumb: [
    { name: "Home", url: "https://www.invensislearning.com/", position: 1 },
    {
      name: "About Us",
      url: "https://www.invensislearning.com/about-us",
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
          "@id": "https://www.invensislearning.com/about-us",
          name: "About Us",
        },
      },
    ],
  },
  webinar_mautic_id: "",
  pageSeos: [
    {
      name: "title",
      value: "Invensis Learning - About us",
      type: "SEO TITLE",
    },
    {
      name: "description",
      value:
        "Information about Invensis Learning, a globally-accredited professional training organization with an extensive portfolio of professional certification courses.",
      type: "META",
    },
  ],
  pageContents: [
    {
      template: "AboutUsBanner",
      orders: 1,
      is_dynamic: false,
      contents: {
        AboutusHeading: "Get to Know us",
        AboutusSubText:
          "With the changing business landscape, there is a need for professionals to expand their knowledge boundaries, solve complex problems and successfully deliver outcomes.",
        AboutusSecondSubText:
          "Invensis Learning acts a catalyst for professionals to acquire newer skills, certifications, and bridge the knowledge gaps. We constantly broaden our courseportfolio to meet the global requirements and consistently address the evolving learning needs.",
        bg_image: "/aboutus_images/Aboutusbanner.png"
      },
    },
    {
      template: "WhoWeAre",
      orders: 2,
      is_dynamic: false,
      contents: {
        heading: "Who We Are",
        description:
          "Invensis Learning, a Global Training organization, has emerged as a market leader in providing professional training solutions to more than 100,000 individuals across many Small, Medium and large enterprises worldwide. Invensis Learning is a trusted partner who caters to the training and certification requirements for enterprises which can be customized as per the business requirements.",
        imagePath: "/aboutus_images/whoweare.png",
        buttonHref: "/contact-us",
      },
    },
    {
      template: "WhatWeOffer",
      orders: 3,
      is_dynamic: false,
      contents: {
        heading: "Our Services",
        description:
          "We are an accredited training provider for all recognized certification courses. Having a global network of subject matter experts, trainers, and knowledge partners, we have evolved our training solutions to meet complex market demands.",
        imagePath:
          "https://alpha.invensislearning.com/storage/images/what-we-offer.svg",
        subHeadingList: null,
        whatweoffers: [
          {
            List_image_path:
              "https://alpha.invensislearning.com/storage/images/icon1.svg",
            List_details:
              "Five training delivery modes that cater to both individuals and enterprise teams spread across geographic locations and time zones.",
          },
          {
            List_image_path:
              "https://alpha.invensislearning.com/storage/images/icon2.svg",
            List_details:
              "Our training and certification courses are accredited by governing bodies such as  AXELOS, PeopleCert, IASSC, EXIN, EC Council, DevOps Institute,and more.",
          },
          {
            List_image_path:
              "https://alpha.invensislearning.com/storage/images/icon3.svg",
            List_details:
              "Be part of a unique learning ecosystem that combines both formal and informal learning options through instructor-led sessions, access to LMS.",
          },
        ],
      },
    },
    {
      template: "LearningAdvantage",
      orders: 4,
      is_dynamic: false,
      contents: {
        InvlAdvantages_primaridata: "Get the Invensis Learning <b>Advantage</b>",
        InvlAdvantages: [
          {
            image_url:
              "/static/images/icons/LearningAdv-Highly-qualified.svg",
            title: "<b>Highly qualified</b> and Accredited Trainers",
          },
          {
            image_url:
            "/static/images/icons/LearningAdv-Guaranteed.svg",
            title: "Training Satisfaction <b>Guaranteed</b>",
          },
          {
            image_url:
            "/static/images/icons/LearningAdv-Courseware.svg",
            title: "Accredited <b>High-Quality Courseware</b>",
          },
          {
            image_url:
            "/static/images/icons/LearningAdv-Reinforce.svg",
            title: "Reinforce with <b>Retrospective Session</b>",
          },
          {
            image_url:
            "/static/images/icons/LearningAdv-Choose-courses.svg",
            title: "Choose from a <b>Wide Range of Courses</b>",
          },
          {
            image_url:
            "/static/images/icons/LearningAdv-Access.svg",
            title: "Access to all our <b>Latest Resources</b>",
          },
        ]
      }
    },
    {
      template: "OurVision",
      orders: 5,
      is_dynamic: false,
      contents: {
        heading: "Our Vision",
        ourvisions: [
          {
            list_color: "yellow",
            list_title:
              "\u201cTo instil an Agile mindset across organizations and collaborate with them on their Business Agility journey.\u201d ",
            list_description:
              "provider for enterprises and individuals worldwide.",
            list_iconUrl:
              "https://alpha.invensislearning.com/storage/images/Group2.svg",
          },
          {
            list_color: "green",
            list_title:
              "\u201cTo be a globally-acclaimed training solutions provider and to reach the 100,000 certifications mark by end 2022.\u201d ",
            list_description:
              "across industries and fulfil their learning needs.",
            list_iconUrl:
              "https://alpha.invensislearning.com/storage/images/Group8.svg",
          },
        ],
      },
    },
    {
      template: "OurMission",
      orders: 6,
      is_dynamic: false,
      contents: {
        heading: "Our Mission",
        SubText:
          "\u201cTo train and upskill the global workforce and ensure continuous learning to help achieve the highest levels of expertise both at the individual and organizational level.\u201d",
      },
    },
    {
      template: "EnterpriseGlobally",
      orders: 7,
      is_dynamic: false,
      contents: {
        enterprise_Primary_title: "Upskilling Professionals <br/> of Leading",
        enterprise_Secondary_title: "Organizations Worldwide",
        enterprisegloballies: [
          {
            name: "Intel",
            title: "Intel",
            image_path:
              "https://alpha.invensislearning.com/storage/images/logos/clients/intel.svg",
          },
          {
            name: "UN",
            title: "UN",
            image_path:
              "https://alpha.invensislearning.com/storage/images/logos/clients/united-nation.svg",
          },
          {
            name: "IBM",
            title: "IBM",
            image_path:
              "https://alpha.invensislearning.com/storage/images/logos/clients/ibm.svg",
          },
          {
            name: "Verizon",
            title: "Verizon",
            image_path:
              "https://alpha.invensislearning.com/storage/images/logos/clients/verizon.svg",
          },
          {
            name: "Airbus",
            title: "Airbus",
            image_path:
              "https://alpha.invensislearning.com/storage/images/logos/clients/airbus.svg",
          },
          {
            name: "Bank of America",
            title: "Bank of America",
            image_path:
              "https://alpha.invensislearning.com/storage/images/logos/clients/bank-of-america.svg",
          },
          {
            name: "Ge",
            title: "Ge",
            image_path:
              "https://alpha.invensislearning.com/storage/images/logos/clients/ge.svg",
          },
          {
            name: "Amazon",
            title: "Amazon",
            image_path:
              "https://alpha.invensislearning.com/storage/images/logos/clients/amazon.svg",
          },
          {
            name: "novo nordisk",
            title: "novo nordisk",
            image_path:
              "https://alpha.invensislearning.com/storage/images/logos/clients/novo-nordisk.svg",
          },
          {
            name: "Swift",
            title: "Swift",
            image_path:
              "https://alpha.invensislearning.com/storage/images/logos/clients/Swift.svg",
          },
          {
            name: "Qatar airways",
            title: "Qatar airways",
            image_path:
              "https://alpha.invensislearning.com/storage/images/logos/clients/qatar.svg",
          },
          {
            name: "Total",
            title: "Total",
            image_path:
              "https://alpha.invensislearning.com/storage/images/logos/clients/Total.svg",
          },
        ],
      },
    },
    {
      template: "GlobalAccreditationsSlider",
      orders: 8,
      is_dynamic: false,
      contents: {
        heading: "Trusted by Global Governing Bodies",
        globalaccreditationssliders: [
          {
            image_path:
              "https://alpha.invensislearning.com/storage/images/logos/pmi-logo-slider.svg",
            title: "PMI - Project Management Institute",
          },
          {
            image_path:
              "https://alpha.invensislearning.com/storage/images/accreditations/prince2-ato.svg",
            title: "Prince2",
          },
          {
            image_path:
              "https://alpha.invensislearning.com/storage/images/accreditations/itil-ato.svg",
            title: "ITIL",
          },
          // {
          // image_path: "https://alpha.invensislearning.com/storage/images/accreditations/axelos-ato.svg",
          // title: "Axelos"
          // },
          {
            image_path:
              "https://alpha.invensislearning.com/storage/images/logos/devops-foundation-logo-new.svg",
            title: "Devops",
          },
          {
            image_path:
              "https://alpha.invensislearning.com/storage/images/accreditations/ec-ato.svg",
            title: "EC",
          },
          {
            image_path:
              "https://alpha.invensislearning.com/storage/images/accreditations/exin-ato.svg",
            title: "EXIN",
          },
          {
            image_path:
              "https://alpha.invensislearning.com/storage/images/accreditations/Iassc-logo2.svg",
            title: "ISSAC",
          },
        ],
      },
    },
  ],
  CategoryAndPopularCourse: [],
  CertificationTrainingCourse: [],
  HandPickedCourseSlider: [],
  CategoryCourseLevel: [],
  city_links: [],
  schedule_filters: null,
  schedules: [],
  schedules_schema: [],
  course_bundles: [],
  InvlPopularCourseIn: [],
  FaqTab: [],
  FaqSchema: [],
  FaqGeneralCourseSchema: [],
  FaqPaymentSchema: [],
  FaqPageTabs: [],
  testimonials: [],
  TestimonialSlider: [],
  ResourceCategory: [],
  CaseStudiesList: [],
  ArticlesList: [],
  FreeGuideList: [],
  TemplateList: [],
  WebinarList: [],
  RecommendedCourses: [],
  RelatedWebinars: [],
  UpskillCard: [],
  ResourceDetail: [],
  InfoTab: [],
  webinar_other_details: [],
}