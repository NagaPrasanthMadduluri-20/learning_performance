export async function getUsers(slug, lang) {
  try {
    const endpoint =
      lang === null
        ? `https://stagingalpha.invensislearning.com/api/get-dynamic-page-details/GENERIC%20CATEGORY/${slug}/?geoLocation=&current_url=http://localhost:9091/${slug}/ }`
        : `https://stagingalpha.invensislearning.com/api/get-dynamic-page-details/CATEGORY/${slug}/${lang}?geoLocation=${lang}&current_url=http://localhost:9091/${lang}/${slug}/  }`;
    const res = await fetch(endpoint);
    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }
    const contentType = res.headers.get("Content-Type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Invalid response type");
    }
    const data = await res.json();
    if (!data) {
      throw new Error("Failed to fetch users");
    }
    return { CategoryData: data, error: null };
  } catch (error) {
    return {
      CategoryData: null,
      error: error.message || "Failed to fetch users",
    };
  }
}

export async function getUserById(slug, lang, city) {
  try {
    let endpoint;
    if (slug && city && lang) {
      // Case: Course City (e.g., domain/us/course-slug/city)
      endpoint = `https://stagingalpha.invensislearning.com/api/get-dynamic-page-details/COURSE%20CITY/${slug}/${lang}/${city}?geoLocation=${lang}&current_url=http://localhost:9091/${lang}/${slug}/${city}/`;
    } else if (slug || lang) {
      // Case: Course Country (e.g., domain/us/course-slug)
      endpoint =
        lang === null
          ? `https://stagingalpha.invensislearning.com/api/get-dynamic-page-details/GENERIC%20COURSE/${slug}?current_url=http://localhost:9091/${slug}/`
          : `https://stagingalpha.invensislearning.com/api/get-dynamic-page-details/COURSE%20COUNTRY/${slug}/${lang}?geoLocation=${lang}&current_url=http://localhost:9091/${lang}/${slug}/`;
    }
    const res = await fetch(endpoint);
    const data = await res.json();
    if (!data) {
      throw new Error("User not found");
    }
    return { CourseData: data, error: null };
  } catch (error) {
    return { CourseData: null, error: error.message || "Failed to fetch user" };
  }
}

export async function getCountryHome(lang) {
  try {
    let endpoint;
    if (lang === null || lang === undefined) {
      endpoint = `https://stagingalpha.invensislearning.com/api/get-static-page-details/HOME`;
    } else {
      endpoint = `https://stagingalpha.invensislearning.com/api/get-static-page-details/COUNTRY%20HOME/${lang}`;
    }
    const res = await fetch(endpoint);

    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }
    const contentType = res.headers.get("Content-Type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Invalid response type");
    }
    const data = await res.json();
    if (!data) {
      throw new Error("Failed to fetch users");
    }
    return { CountryHome: data, error: null };
  } catch (error) {
    return {
      CountryHome: null,
      error: error.message || "Failed to fetch users",
    };
  }
}

export async function getWebinar() {
  try {
    let endpoint;
    endpoint = `https://stagingalpha.invensislearning.com/api/get-static-page-details/RESOURCE%20WEBINAR%20LIST?current_url=`;
    const res = await fetch(endpoint);
    if (!res.ok) {
      console.log("error");
      throw new Error(`HTTP error ${res.status}`);
    }
    const data = await res.json();
    if (!data) {
      throw new Error("Failed to fetch webinars");
    }
    return { webinarData: data, error: null };
  } catch (error) {
    return {
      webinarData: null,
      error: error.message || "Failed to fetch webinars",
    };
  }
}

export async function getWebinarDetail(slug) {
  try {
    let endpoint;
    endpoint = `https://stagingalpha.invensislearning.com/api/get-dynamic-page-details/RESOURCE%20WEBINAR%20DETAILS/${slug}?current_url=`;
    const res = await fetch(endpoint);
    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }
    const data = await res.json();
    if (!data) {
      throw new Error("Failed to fetch webinar details");
    }
    return { webinarDetailData: data, error: null };
  } catch (error) {
    return {
      webinarDetailData: null,
      error: error.message || "Failed to fetch webinar details",
    };
  }
}

export async function getInfo() {
  try {
    let endpoint;
    endpoint = `https://stagingalpha.invensislearning.com/api/get-static-page-details/PATTERN%20LIST?current_url=`;
    const res = await fetch(endpoint);
    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }
    const data = await res.json();
    if (!data) {
      throw new Error("Failed to fetch webinar details");
    }
    return { infoData: data, error: null };
  } catch (error) {
    return {
      infoData: null,
      error: error.message || "Failed to fetch webinar details",
    };
  }
}

export async function getInfoDetail(slug) {
  try {
    let endpoint;
    endpoint = `https://stagingalpha.invensislearning.com/api/get-dynamic-page-details/PATTERN%20DETAILS/${slug}/`;
    const res = await fetch(endpoint);
    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }
    const data = await res.json();
    if (!data) {
      throw new Error("Failed to fetch webinar details");
    }
    return { infoDetailData: data, error: null };
  } catch (error) {
    return {
      infoDetailData: null,
      error: error.message || "Failed to fetch webinar details",
    };
  }
}

export async function getAssesmentsList() {
  try {
    let endpoint;
    endpoint = `https://stagingalpha.invensislearning.com/api/get-dynamic-page-details/ASSESSMENT%20LIST/assessments/?current_url=`;
    const res = await fetch(endpoint);
    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }
    const data = await res.json();
    if (!data) {
      throw new Error("Failed to fetch webinar details");
    }
    return { assessmentsData: data, error: null };
  } catch (error) {
    return {
      assessmentsData: null,
      error: error.message || "Failed to fetch webinar details",
    };
  }
}

export async function getAssesmentsLevelList(slug) {
  try {
    let endpoint;
    endpoint = `https://stagingalpha.invensislearning.com/api/get-dynamic-page-details/ASSESSMENT%20LEVEL%20LIST/${slug}?current_url=`;
    const res = await fetch(endpoint);
    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }
    const data = await res.json();
    if (!data) {
      throw new Error("Failed to fetch webinar details");
    }
    return { assessmentsLevelData: data, error: null };
  } catch (error) {
    return {
      assessmentsLevelData: null,
      error: error.message || "Failed to fetch webinar details",
    };
  }
}

export async function getAssesmentsDetail(slug) {
  try {
    let endpoint;
    endpoint = `https://stagingalpha.invensislearning.com/api/get-dynamic-page-details/ASSESSMENT%20DETAILS/${slug}/`;
    const res = await fetch(endpoint);
    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }
    const data = await res.json();
    if (!data) {
      throw new Error("Failed to fetch webinar details");
    }
    return { assessmentsDetailData: data, error: null };
  } catch (error) {
    return {
      assessmentsDetailData: null,
      error: error.message || "Failed to fetch webinar details",
    };
  }
}

export async function CorporategroupTraining() {
  try {
    let endpoint;
    endpoint = `https://stagingalpha.invensislearning.com/api/get-static-page-details/CORPORATE%20TRAINING?current_url=`;
    const res = await fetch(endpoint);
    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }
    const data = await res.json();
    if (!data) {
      throw new Error("Failed to fetch CorporateGroupTraining");
    }
    return { corporateGroupTrainingData: data, error: null };
  } catch (error) {
    return {
      corporateGroupTrainingData: null,
      error: error.message || "Failed to fetch CorporateGroupTraining",
    };
  }
}

export async function JoinAsATrainerapi() {
  try {
    let endpoint;
    endpoint = `https://stagingalpha.invensislearning.com/api/get-static-page-details/JOIN%20AS%20A%20TRAINER?current_url=`;
    const res = await fetch(endpoint);
    if (!res.ok) {
      throw new Error(`HTTP Error: ${res.status}`);
    }
    const data = await res.json();
    if (!data) {
      throw new Error("Failed to fetch JoinAsATrainer");
    }
    return { JoinAsATrainerData: data, error: null };
  } catch (error) {
    return {
      JoinAsATrainerData: null,
      error: error.message || "Failed to fetch JoinAsATrainer data",
    };
  }
}

export async function getBlog() {
  try {
    let endpoint;
    endpoint = `https://jsonplaceholder.typicode.com/posts/`;
    const res = await fetch(endpoint, {
      next: { revalidate: 10 }, // Revalidate every 10 seconds
    });
    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }

    const data = await res.json();
    return { blogData: data, error: null };
  } catch (error) {
    return {
      blogData: null,
      error: error.message || "Failed to fetch blog Data",
    };
  }
}

export async function getBlogDetails(slug) {
  try {
    let endpoint;
    endpoint = `https://jsonplaceholder.typicode.com/posts/${slug}`;
    const res = await fetch(endpoint, {
      next: { revalidate: 10 }, // Revalidate every 10 seconds
    });
    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }

    const data = await res.json();
    console.log(data);
    return { blogDetailsData: data, error: null };
  } catch (error) {
    console.error("Error in getBlog:", error);
    return {
      blogDetailsData: null,
      error: error.message || "Failed to fetch blog Data",
    };
  }
}

export async function getsitemapxml() {
  try {
    let endpoint;
    endpoint = `https://stagingalpha.invensislearning.com/api/get-static-page-details/HOME%20SITEMAP%20XML`;
    const res = await fetch(endpoint);
    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }
    const data = await res.json();
    if (!data) {
      throw new Error("Failed to fetch sitemapData");
    }
    return { sitemapData: data, error: null };
  } catch (error) {
    return {
      sitemapData: null,
      error: error.message || "Failed to fetch sitemapData",
    };
  }
}

export async function getglobalsitemapxml() {
  try {
    let endpoint;
    endpoint = `https://stagingalpha.invensislearning.com/api/get-static-page-details/GLOBAL%20SITEMAP%20XML`;
    const res = await fetch(endpoint);
    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }
    const data = await res.json();
    if (!data) {
      throw new Error("Failed to fetch sitemapData");
    }
    return { globalsitemapData: data, error: null };
  } catch (error) {
    return {
      globalsitemapData: null,
      error: error.message || "Failed to fetch sitemapData",
    };
  }
}

export async function getsitemaplist() {
  try {
    let endpoint;
    endpoint = `https://stagingalpha.invensislearning.com/api/get-static-page-details/HTML%20SITEMAP?current_url=`;
    const res = await fetch(endpoint);
    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }
    const data = await res.json();
    if (!data) {
      throw new Error("Failed to fetch sitemapData");
    }
    return { sitemapListData: data, error: null };
  } catch (error) {
    return {
      sitemapListData: null,
      error: error.message || "Failed to fetch sitemapData",
    };
  }
}

export async function getCourses(lang) {
  try {
    let endpoint;
    if (lang === null || lang === undefined) {
      endpoint = `https://stagingalpha.invensislearning.com/api/get-static-page-details/GENERICE%20COURSES?current_url=`;
    } else {
      endpoint = `https://stagingalpha.invensislearning.com/api/get-static-page-details/VIEW%20COURSE/${lang}?current_url=`;
    }
    const res = await fetch(endpoint);
    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }
    const data = await res.json();
    if (!data) {
      throw new Error("Failed to fetch webinar details");
    }
    return { AllCoursesData: data, error: null };
  } catch (error) {
    return {
      AllCoursesData: null,
      error: error.message || "Failed to fetch webinar details",
    };
  }
}

export async function getTestimonials() {
  try {
    let endpoint;
    endpoint = `https://stagingalpha.invensislearning.com/api/get-static-page-details/Review%20Testmonial`;
    const res = await fetch(endpoint);
    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }
    const data = await res.json();
    if (!data) {
      throw new Error("Failed to fetch webinar details");
    }
    return { TestimonialData: data, error: null };
  } catch (error) {
    return {
      TestimonialData: null,
      error: error.message || "Failed to fetch webinar details",
    };
  }
}

export async function getTermsandconditions() {
  try {
    let endpoint;
    endpoint = `https://stagingalpha.invensislearning.com/api/get-static-page-details/TERM%20AND%20CONDITIONS?current_url=`;
    const res = await fetch(endpoint);
    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }
    const data = await res.json();
    if (!data) {
      throw new Error("Failed to fetch webinar details");
    }
    return { TermsandconditionsData: data, error: null };
  } catch (error) {
    return {
      Termsandconditions: null,
      error: error.message || "Failed to fetch webinar details",
    };
  }
}


export async function getRefundPolicy() {
  try {
    let endpoint;
    endpoint = `https://stagingalpha.invensislearning.com/api/get-static-page-details/REFUND%20POLICY?current_url=`;
    const res = await fetch(endpoint);
    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }
    const data = await res.json();
    if (!data) {
      throw new Error("Failed to fetch webinar details");
    }
    return { RefundPolicyData: data, error: null };
  } catch (error) {
    return {
      RefundPolicyData: null,
      error: error.message || "Failed to fetch webinar details",
    };
  }
}

export async function getPrivacyPolicy() {
  try {
    let endpoint;
    endpoint = `https://stagingalpha.invensislearning.com/api/get-static-page-details/PRIVACY%20POLICY?current_url=`;
    const res = await fetch(endpoint);
    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }
    const data = await res.json();
    if (!data) {
      throw new Error("Failed to fetch webinar details");
    }
    return { PrivacyPolicyData: data, error: null };
  } catch (error) {
    return {
      PrivacyPolicyData: null,
      error: error.message || "Failed to fetch webinar details",
    };
  }
}

export async function getReschedulingPolicy() {
  try {
    let endpoint;
    endpoint = `https://stagingalpha.invensislearning.com/api/get-static-page-details/RESCHEDULING%20POLICY?current_url=`;
    const res = await fetch(endpoint);
    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }
    const data = await res.json();
    if (!data) {
      throw new Error("Failed to fetch webinar details");
    }
    return { ReschedulingPolicyData: data, error: null };
  } catch (error) {
    return {
      ReschedulingPolicyData: null,
      error: error.message || "Failed to fetch webinar details",
    };
  }
}

export async function getUpskill() {
  try {
    let endpoint;
    endpoint = `https://stagingalpha.invensislearning.com/api/get-static-page-details/UPSKILL%20LIST?current_url=`;
    const res = await fetch(endpoint);
    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }
    const data = await res.json();
    if (!data) {
      throw new Error("Failed to fetch webinar details");
    }
    return { UpskillData: data, error: null };
  } catch (error) {
    return {
      UpskillData: null,
      error: error.message || "Failed to fetch webinar details",
    };
  }
}

export async function getUpskillDetails(slug) {
  try {
    let endpoint;
    endpoint = `https://stagingalpha.invensislearning.com/api/get-dynamic-page-details/UPSKILL%20DETAILS/${slug}?current_url=`;
    const res = await fetch(endpoint);
    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }
    const data = await res.json();
    if (!data) {
      throw new Error("Failed to fetch webinar details");
    }
    return { UpskillDetailData: data, error: null };
  } catch (error) {
    return {
      UpskillDetailData: null,
      error: error.message || "Failed to fetch webinar details",
    };
  }
}

export async function getContactUs() {
  try {
    let endpoint;
    endpoint = `https://stagingalpha.invensislearning.com/api/get-static-page-details/CONTACT%20US?current_url=`;
    const res = await fetch(endpoint);
    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }
    const data = await res.json();
    if (!data) {
      throw new Error("Failed to fetch webinar details");
    }
    return { ContactUsData: data, error: null };
  } catch (error) {
    return {
      ContactUsData: null,
      error: error.message || "Failed to fetch webinar details",
    };
  }
}

export async function getAccreditations() {
  try {
    let endpoint;
    endpoint = `https://stagingalpha.invensislearning.com//api/get-static-page-details/ACCREDIATIONS?current_url=`;
    const res = await fetch(endpoint);
    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }
    const data = await res.json();
    if (!data) {
      throw new Error("Failed to fetch webinar details");
    }
    return { AccreditationData: data, error: null };
  } catch (error) {
    return {
      AccreditationData: null,
      error: error.message || "Failed to fetch webinar details",
    };
  }
}

export async function getfaqs() {
  try {
    let endpoint;
    endpoint = `https://stagingalpha.invensislearning.com/api/get-static-page-details/FAQS?current_url=`;
    const res = await fetch(endpoint);
    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }
    const data = await res.json();
    if (!data) {
      throw new Error("Failed to fetch webinar details");
    }
    return { FaqsData: data, error: null };
  } catch (error) {
    return {
      FaqsData: null,
      error: error.message || "Failed to fetch webinar details",
    };
  }
}