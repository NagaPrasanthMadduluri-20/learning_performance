import React from "react";
// import { keys, pick } from "lodash";

export const getFirst = (array = []) => array[0];

export const timeSplit = (str) => {
  const string = str.toString();
  let part = string.split("");

  if (part.length === 2) {
    return part;
  } else {
    return ["0", string];
  }
};

export const setPageSeo = (seo, country = null) => {
  switch (seo.type) {
    case "SEO TITLE":
      return (
        <title key={seo.name}>
          {seo.value.split("__COUNTRY__").join(country)}
        </title>
      );
    default:
      return (
        <meta
          name={seo.name}
          content={seo.value.split("__COUNTRY__").join(country)}
          key={seo.name}
        />
      );
  }
}; //Set SEO Tags on head

export const getNumberAnthString = (number) => {
  if (number) {
    switch (number) {
      case "01":
        return number + "st";

      case "02":
        return number + "nd";
      case "03":
        return number + "rd";

      default:
        return number + "th";
    }
  }
  return;
};
export const getNumberAnthStringOnly = (n) => {
  if (n) {
    var s = ["th", "st", "nd", "rd"],
      v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
  }
  return;
};

export const getScheduleFromToTodatlDayes = (schedules) => {
  if (schedules) {
    const dates = [];
    const monthName = [];
    schedules.map((item) => {
      dates.push(...item.event_date);
      monthName.push(item.name.split(" ")[0]);
    });
    return (
      <>
        {monthName[0]} {getNumberAnthString(dates[0].date)} - {monthName[1]}{" "}
        {getNumberAnthString(dates[dates.length - 1].date)}
        {/* <span> - {dates.length} days Training (3 hours per day)</span> */}
      </>
    );
  }
  return;
};

export const getScheduleFromDates = (schedules) => {
  if (schedules) {
    const dates = [];
    const monthName = [];
    schedules.map((item) => {
      dates.push(...item.event_date);
      monthName.push(item.name.split(" ")[0]);
    });
    return (
      <>
         {monthName[0]} {getNumberAnthString(dates[0].date)} - {monthName[1]}{" "}
        {getNumberAnthString(dates[dates.length - 1].date)}
        {/* <span> - {dates.length} days Training (3 hours per day)</span> */}
      </>
    );
  }
  return;
};

export const strLimit = (str, limit) => {
  if (str === null) return;

  if (str.length > limit) {
    return str.substr(0, limit) + "...";
  } else {
    return str;
  }
};

export const markup = (schema) => ({ __html: schema });

export const disableBack = `history.pushState(null, null, location.href);history.back();history.forward();window.onpopstate = function () { history.go(1); };`;

// export const formatUserData = (data, userData) => {
//   if (data && userData) {
//     const merge = {
//       ...data,
//       ...userData,
//       ["contact_number"]:
//         userData.primary_contact_no === null ? "" : userData.primary_contact_no,
//       ["company_name"]: userData.company,
//       ["job_title"]: userData.designation,
//       ["billing_line1"]: userData.line1,
//       ["billing_country_id"]: userData.country_id,
//       ["billing_city_id"]: userData.city_id,
//       ["billing_zipcode"]: userData.zipcode,
//     };
//     return pick(merge, keys(data));
//   } else if (data) {
//     return data;
//   } else if (userData) {
//     return userData;
//   } else {
//     return {};
//   }
// };
