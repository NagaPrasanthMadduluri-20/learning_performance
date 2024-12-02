"use client";
import Container from "../components/Container";

import Link from "next/link";
import React from "react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import {
  FacebookIcon,
  LinkedinIcon,
  Mail,
  MessageSquareText,
  Phone,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import Text from "@/components/Text";
import BottomStickyNavbar from "./[...slug]/sharedsections/BottomStickyNavbarSection";
import FooterCountryDropDown from "./components/FooterCountryDropDown";

const Footer = () => {
  const [data] = React.useState({
    footer: {
      refer_heading:
        "Refer a friend and get an Amazon coupon <br /> worth up to <span>USD 100!</span>",
      refer_href: "",
      copyright_text: `@2024 Invensis Learning Pvt Ltd.`,
      Company: {
        heading: "Company",
        list: [
          {
            name: "About us",
            href: "/about",
            title: "Click Here to Know More About Invensis Learning",
          },
          {
            name: "Accreditations",
            href: "/accreditations",
            title: "Click Here to View Accreditations",
          },
          {
            name: "Testimonials",
            href: "/testimonials",
            title: "Click Here to View Our Customer Testimonials",
          },

          {
            name: "Contact Us",
            href: "/contact-us",
            title: "Click Here To Contact Us",
          },
          {
            name: "Sitemap",
            href: "/home-sitemap",
            title: "Click Here to Visit Site Map",
          },
        ],
      },
      categories: {
        heading: "Company",
        list: [
          {
            name: "Agile Project Management Training",
            href: "/agile-project-management/",
            title: "Click Here to View All Agile Project Management Courses",
          },
          {
            name: "Project Management Courses",
            href: "/project-management/",
            title: "Click Here to View All Project Management Courses",
          },
          {
            name: "ITSM Certifications",
            href: "/it-service-management/",
            title: "Click Here to View All IT Service Management Courses",
          },

          {
            name: "Quality Management Courses",
            href: "/quality-management/",
            title: "Click Here to View All Quality Management Courses",
          },
          {
            name: "DevOps Courses",
            href: "/devops/",
            title: "Click Here to View All DevOps Courses",
          },
          {
            name: "IT Governance Training",
            href: "/it-security-and-governance/",
            title: "Click Here to View All IT Security and Governance Courses",
          },
        ],
      },
      Courses: {
        heading: "Company",
        list: [
          {
            name: "PMP Certification",
            href: "/pmp-certification-training/",
            title: "Click Here to View PMP Certification Course",
          },
          {
            name: "PRINCE2 Certification",
            href: "/prince2-foundation-practitioner-certification-training/",
            title: "Click Here to View PRINCE2 Certification Course",
          },
          {
            name: "Change Management Certification",
            href: "/change-management-certification/",
            title: "Click Here to View Change Management Certification Course",
          },
          {
            name: "ITIL Foundation Certification",
            href: "/itil-4-foundation/",
            title: "Click Here to View ITIL Foundation Certification Course",
          },
          {
            name: "CAPM Certification",
            href: "/capm-certification-training/",
            title: "Click Here to View CAPM Certification Course",
          },
          {
            name: "Lean Six Sigma Green Belt Certification",
            href: "/lean-six-sigma-green-belt-certification-training/",
            title:
              "Click Here to View Lean Six Sigma Green Belt Certification Course",
          },
          {
            name: "Lean Six Sigma Black Belt Certification",
            href: "/lean-six-sigma-black-belt-certification-training/",
            title:
              "Click Here to View Lean Six Sigma Black Belt Certification Course",
          },
          {
            name: "Root Cause Analysis Training",
            href: "/rca-through-six-sigma-training/",
            title: "Click Here to View Root Cause Analysis Training Course",
          },
          {
            name: "Lean Fundamentals Training",
            href: "/lean-fundamentals-training/",
            title: "Click Here to View Lean Fundamentals Training Course",
          },

          {
            name: "Six Sigma Awareness Training",
            href: "/six-sigma-awareness-training/",
            title: "Click Here to View Six Sigma Awareness Training Course",
          },
          {
            name: "Kaizen Training",
            href: "/kaizen-training/",
            title: "Click Here to View Kaizen Training Course",
          },
          {
            name: "VSM Training",
            href: "/value-stream-mapping-training/",
            title: "Click Here to View Value Stream Mapping Training Course",
          },
          {
            name: "DevOps Foundation Certification",
            href: "/devops-foundation-certification-training/",
            title: "Click Here to View DevOps Foundation Certification Course",
          },
          {
            name: "COBIT 5 Certification",
            href: "/cobit-5-certification/",
            title: "Click Here to View COBIT 5 Certification Course",
          },
          {
            name: "SIAM Certification",
            href: "/siam-foundation/",
            title: "Click Here to View SIAM Certification Course",
          },
          {
            name: "MS Project Training",
            href: "/microsoft-project-training/",
            title: "Click Here to View MS Project Training Course",
          },
          {
            name: "Project Management Fundamentals Training",
            href: "/project-management-fundamentals-training/",
            title:
              "Click Here to View Project Management Fundamentals Training Course",
          },
          {
            name: "Lean Project Management Training",
            href: "/lean-project-management/",
            title: "Click Here to View Lean Project Management Training Course",
          },
          {
            name: "Scrum Fundamentals",
            href: "/scrum-fundamentals/",
            title: "Click Here to View Scrum Fundamentals Course",
          },
          {
            name: "CSM Certification",
            href: "/csm-certification-training/",
            title: "Click Here to View CSM Certification Course",
          },
          {
            name: "CSPO Certification",
            href: "/cspo-certification-training/",
            title: "Click Here to View CSPO Certification Course",
          },
        ],
      },
      Explore: {
        heading: "Explore",
        list: [
          {
            name: "All Courses",
            href: "/courses/",
            title:
              "Click Here to Explore Our Certification and Training Programs",
          },
          {
            name: "Blog",
            href: "/blog/",
            title: "Click Here to View Blog Articles",
          },
          {
            name: "Resources",
            href: "/resources/",
            title: "Click Here to View Resources",
          },
          {
            name: "FAQs",
            href: "/faqs",
            title: "Click Here to View Faqs",
          },
          {
            name: "Info",
            href: "/info/",
            title: "Click Here to View Info Articles for Courses",
          },
          {
            name: "Skill Enhancement",
            href: "/upskill/",
            title: "Click Here to View Skill Enhancement Articles",
          },
        ],
      },
      JoinUs: {
        heading: "Join Us",
        list: [
          {
            name: "As a Trainer",
            href: "/join_as_a_trainer",
            title: "Click Here to Join As a Trainer with Invensis Learning",
          },
        ],
      },
      Enterprises: {
        heading: "Corporate Solution",
        list: [
          {
            name: "Corporate Group Training",
            href: "/corporategrouptraining",
            title: "Click Here to Know More About Corporate Group Training",
          },
        ],
      },
      Connectus: {
        heading: "Connect us",
        list: [],
      },
      SecurePayments: {
        heading: "Secure Payments",
      },
      copyright: {
        list: [
          {
            name: "Terms & Conditions",
            href: "/terms-and-conditions",
            title: "Click Here to View Terms & Conditions",
          },
          {
            name: "Privacy Policy",
            href: "/privacy-policy",
            title: "Click Here to View Privacy Policy",
          },
          {
            name: "Refund Policy",
            href: "/refund-policy",
            title: "Click Here to View Refund Policy",
          },
          {
            name: "Rescheduling Policy",
            href: "/rescheduling-policy",
            title: "Click Here to View Rescheduling Policy",
          },
        ],
      },
      socialmedia: {
        list: [
          {
            name: "facebook",
            href: "https://www.facebook.com/invensislearn/",
            icon: <FacebookIcon />,
            title: "Follow Us on Facebook",
          },
          {
            name: "linkedin",
            href: "https://www.linkedin.com/company/invensis-learning",
            title: "Follow Us on Linkedin",
            icon: <LinkedinIcon />,
          },
          {
            name: "twitter",
            href: "https://twitter.com/InvensisElearn",
            title: "Follow Us on Twitter",
            icon: <TwitterIcon />,
            // icon: (
            //   <svg
            //     class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  css-c1sh5i"
            //     focusable="false"
            //     aria-hidden="true"
            //     viewBox="0 0 24 24"
            //     data-testid="XIcon"
            //     aria-label="fontSize medium"
            //   >
            //     <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            //   </svg>
            // ),
          },
          {
            name: "youTube",
            title: "Follow Us on YouTube",
            href: "https://www.youtube.com/channel/UCq4xOlJ4xz6Fw7WcbFkrsUQ",
            icon: <YoutubeIcon />,
          },
        ],
      },
    },
  });

  // const chatWithUs = () => {
  //   return {
  //     __html: `<a href="javascript:$zopim.livechat.window.show();"> <MessageSquareText /> Chat with us</a>`,
  //   };
  // };
  // const supportEmail = () => {
  //   return {
  //     __html: `<a href="mailto:contact@invensislearning.com"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="img"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg> contact@invensislearning.com</a>`,
  //   };
  // };
  // const mobile = (mobile) => {
  //   return {
  //     __html: `<a href="tel:9876543456809"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="img"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"></path></svg> ${mobile}</a>`,
  //   };
  // };

  return (
    <div className="bg-footerbackground text-textcolorfooter">
      <div className="fixed bottom-0 bg-black w-full z-40">
        <BottomStickyNavbar />
      </div>
      <Container className="pb-0">
        <div className="flex flex-row gap-5 flex-wrap justify-between mb-4">
          <div>
            <Text variant="b" className="mb-3">
              {data.footer.Company.heading}
            </Text>
            <div className="text-[14px] font-medium">
              <ul>
                {data.footer.Company.list.map((link, index) => (
                  <li key={index} className="mb-2 opacity-65 hover:opacity-100">
                    <Link
                      href={link.href}
                      title={link.title}
                      target={link.name == "Sitemap" ? "_blank" : "_self"}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <Text variant="b" className="mb-3">
              {data.footer.Explore.heading}
            </Text>
            <div className="text-[14px] font-medium">
              <ul>
                {data.footer.Explore.list.map((link, index) => (
                  <li key={index} className="mb-2 opacity-65 hover:opacity-100">
                    {["All Courses", "Blog"].includes(link.name) ? (
                      <a target="_blank" href={link.href} title={link.title}>
                        {link.name}
                      </a>
                    ) : (
                      <Link href={link.href} target="_blank" title={link.title}>
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <Text variant="b" className="mb-3">
              {data.footer.JoinUs.heading}
            </Text>
            <div className="text-[14px] font-medium">
              <ul>
                {data.footer.JoinUs.list.map((link, index) => (
                  <li key={index} className="mb-2 opacity-65 hover:opacity-100">
                    <Link href={link.href} target="_blank" title={link.title}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <Text variant="b" className="mb-3">
              {data.footer.Enterprises.heading}
            </Text>
            <div className="text-[14px] font-medium">
              <ul>
                {data.footer.Enterprises.list.map((link, index) => (
                  <li key={index} className="mb-2 opacity-65 hover:opacity-100">
                    <Link href={link.href} target="_blank" title={link.title}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="footer-box">
            <Text variant="b" className="mb-3">
              {data.footer.Connectus.heading}
            </Text>{" "}
            <Text variant="body1">
              <Link href="" className="flex items-center mb-2 gap-x-3">
                {" "}
                <MessageSquareText
                  size={16}
                  fill="#efefef"
                  stroke="#0c0c0c"
                />{" "}
                <span className="opacity-65 hover:opacity-100">
                  Chat with us
                </span>
              </Link>{" "}
              <Link
                href="mailto:contact@invensislearning.com"
                className="flex items-center mb-2 gap-x-3"
              >
                <Mail size={16} fill="#efefef" stroke="#0c0c0c" />{" "}
                <span className="opacity-65 hover:opacity-100">
                  {" "}
                  contact@invensislearning.com{" "}
                </span>
              </Link>{" "}
              <Link href="/" className="flex items-center mb-2 gap-x-3">
                {" "}
                <Phone size={16} fill="#fefefe" stroke="#0c0c0c" />
                <span className="opacity-65 hover:opacity-100">
                  +1 470-260-0084
                </span>
              </Link>
            </Text>
          </div>
          {/* https://stagingbeta.invensislearning.com/static/images/payments-logo.png */}

          <div className="footer-box">
            <Text variant="b" className="mb-3">
              {data.footer.SecurePayments.heading}
            </Text>
            <Image
              src="/payments-logo.webp"
              alt="our payments options"
              width={160}
              height={60}
            />
            <Text variant="b" title="SSL PROTECTION" className="mt-3 mb-2">
              SSL PROTECTION
            </Text>
            <FooterCountryDropDown />
          </div>
        </div>
        <Separator />
      </Container>

      <Container className="pt-6 pb-0">
        <div>
          <Text variant="b" color="inherit" className="mb-3">
            Popular Training Categories
          </Text>
          <div className="text-[14px] font-medium">
            <ul className="flex flex-wrap leading-8 items-center [&>li]:after:content-['|'] [&>li]:after:mx-3 [&>li:last-child]:after:content-none">
              {data.footer.categories.list.map((link, index) => (
                <li
                  key={index}
                  style={{ margin: 0 }}
                  className="opacity-65 hover:opacity-100"
                >
                  <Link href={link.href} target="_blank" title={link.title}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 mb-8">
          <Text variant="b" className="mb-3">
            Popular Courses
          </Text>
          <div className="text-[14px] font-medium">
            <ul className="flex flex-wrap leading-8 items-center [&>li]:after:content-['|'] [&>li]:after:mx-3 [&>li:last-child]:after:content-none">
              {data.footer.Courses.list.map((link, index) => (
                <li
                  key={index}
                  style={{ margin: 0 }}
                  className="opacity-65 hover:opacity-100"
                >
                  <Link href={link.href} target="_blank" title={link.title}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Separator />
      </Container>

      <Container className="pt-6 pb-6">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="flex items-center justify-start gap-x-4">
              <Image
                src="/flag-icon-usa.svg"
                alt="USA"
                width={25}
                height={25}
              />
              <Text variant="body1" className="text-[13px] opacity-65">
                {" "}
                USA: +1 470-260-0084
              </Text>
            </div>
            <div className="flex items-center justify-start gap-x-4">
              <Image
                src="/flag-icon-switzerland.svg"
                alt="Switzerland"
                width={25}
                height={30}
              />
              <Text variant="body1" className="text-[13px] opacity-65">
                {" "}
                Switzerland: +41 22 518 20 42
              </Text>
            </div>
            <div className="flex items-center justify-start gap-x-4">
              <Image
                src="/flag-icon-australia.svg"
                alt="australia"
                width={25}
                height={30}
              />
              <Text variant="body1" className="text-[13px] opacity-65">
                {" "}
                Australia: +61 2 5300 2805
              </Text>
            </div>
            <div className="flex items-center justify-start gap-x-4">
              <Image
                src="/flag-icon-netherlands.svg"
                alt="netherlands"
                width={25}
                height={30}
              />
              <Text variant="body1" className="text-[13px] opacity-65">
                {" "}
                Netherlands: +31 20 262 2348
              </Text>
            </div>
            <div className="flex items-center justify-start gap-x-4">
              <Image
                src="/flag-icon-belgium.svg"
                alt="belgium"
                width={25}
                height={30}
              />
              <Text variant="body1" className="text-[13px] opacity-65">
                {" "}
                Belgium: +32 2 585 31 34
              </Text>
            </div>
            <div className="flex items-center justify-start gap-x-4">
              <Image
                src="/flag-icon-denmark.svg"
                alt="denmark"
                width={25}
                height={30}
              />
              <Text variant="body1" className="text-[13px] opacity-65">
                {" "}
                Denmark: +45 89 88 45 44
              </Text>
            </div>
            <div className="flex items-center justify-start gap-x-4">
              <Image
                src="/flag-icon-poland.svg"
                alt="poland"
                width={25}
                height={30}
              />
              <Text variant="body1" className="text-[13px] opacity-65">
                {" "}
                Poland: +48 91 883 47 51
              </Text>
            </div>
            {/* <Grid item sm={12} md={3} xs={12} className={classes.GridCol}>              
           <img
             src="/static/images/icons/flag-icon-hong-kong.svg"
             style={{ width: "25px !important" }}
             alt="hong-kong"
           />             
         Hong Kong: +852 5803 9039
       </Grid> */}
            <div className="flex items-center justify-start gap-x-4">
              <Image
                src="/flag-icon-united_kingdom.svg"
                style={{ width: "25px !important" }}
                alt="united_kingdom"
                width={25}
                height={30}
              />
              <Text variant="body1" className="text-[13px] opacity-65">
                {" "}
                UK : +44 20 3322 3280
              </Text>
            </div>
            <div className="flex items-center justify-start gap-x-4">
              <Image
                src="/flag-icon-india.svg"
                alt="india"
                width={25}
                height={30}
              />
              <Text variant="body1" className="text-[13px] opacity-65">
                {" "}
                India: +91 96202-00784
              </Text>
            </div>
          </div>
        </div>
      </Container>
      <Separator />
      <Container className="py-3">
        <div className="xs:flex xs:flex-col xs:justify-between md:flex md:flex-row md:items-center">
          <div className="">
            <Image
              alt="Logo"
              src="https://stagingbeta.invensislearning.com/static/images/logo-white.svg"
              width={150}
              height={50}
            />
          </div>
          <div className="text-[12px] font-medium">
            <ul className="xs:flex xs:flex-col xs:gap-2 xs:mb-3 md:flex md:flex-row items-start md:items-center [&>li]:after:content-['|'] [&>li]:after:mx-3 [&>li:last-child]:after:content-none">
              {data.footer.copyright.list.map((link, index) => (
                <li key={index} className="opacity-65 hover:opacity-100">
                  <Link href={link.href} title={link.title}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-x-4 items-center">
            {data.footer.socialmedia.list.map((link, index) => (
              <Link
                target="_blank"
                href={link.href}
                key={index}
                title={link.title}
                rel="noreferrer"
                className="opacity-65 hover:opacity-100"
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </Container>

      <div className="bg-[#292929]">
        <Container className="py-0">
          <Text variant="body1" className="text-[12px] opacity-65">
            {data.footer.copyright_text}
          </Text>
        </Container>
      </div>

      <Container>
        <Text className="text-[12px]">Disclaimer</Text>
        <div className="text-[9px] font-medium">
          <ul className="opacity-65 list-disc leading-5 ml-3">
            <li>
              PMI®, PMP®, CAPM®, PMI-ACP®, <i>PMBOK</i> are registered marks of
              the Project Management Institute. Inc.
            </li>
            <li>
              ITIL® is a registered trade mark of AXELOS Limited, used under
              permission of AXELOS Limited
            </li>
            <li>
              PRINCE2® is a registered trademark of AXELOS Limited, used under
              permission of AXELOS Limited
            </li>
            <li>
              The Swirl logoTM is a trade mark of AXELOS Limited, used under
              permission of AXELOS Limited. All rights reserved
            </li>
            <li>
              All APMG courses offered by Invensis Learning, an Affiliate of
              Quint Consulting Services, an Accredited Training Organisation of
              The APM Group Ltd
            </li>
            <li>
              DevOps Foundation® is registerd mark of the DevOps institute
            </li>
            <li>
              COBIT® is a trademark of ISACA® registered in the United States
              and other countries
            </li>
            <li>
              CSM, A-CSM, CSPO, A-CSPO, and CAL are registered trademarks of
              Scrum Alliance
            </li>
            <li>
              Invensis Learning is an Accredited Training Provider of EXIN for
              all their certification courses and exams
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
