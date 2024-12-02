import Text from "@/components/Text";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";
import {
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";

const list = [
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
];

const StayConnected = ({ webinar }) => {
  return (
    <>
      {webinar ? (
        <>
          <Text className="text-[19px] mt-5 mb-2"> Stay Connected </Text>
          <Separator />
        </>
      ) : (
        ""
      )}
      <div className="flex gap-x-4 items-center mt-5 ml-5">
        {list.map((link, index) => (
          <div
            key={index}
            className="px-3 py-1 rounded-md bg-gray-400 opacity-65 hover:opacity-100"
          >
            <Link
              target="_blank"
              href={link.href}
              title={link.title}
              rel="noreferrer"
              className=""
            >
              {link.icon}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default StayConnected;
