"use client";
import React from "react";

import { useRouter } from "next/navigation";
import { Facebook, Linkedin, Share2 } from "lucide-react";
import Image from "next/image";
import Tooltip from "@/components/ui/tooltip";

const SocialMediaLinks = () => {
  const router = useRouter();
  const { asPath } = router;
  let fullUrl = process.env.APP_URL + asPath;

  return (
    <div>
      <Tooltip
        content={
          <div>
            <ul className="flex items-center gap-x-9">
              <li>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${fullUrl}`}
                  target="blank"
                  rel="noopener noreferrer"
                >
                  <Facebook />
                </a>
              </li>

              <li>
                <a
                  href={`https://twitter.com/intent/tweet?text=${fullUrl}`}
                  target="blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <Image
                    src="/image.png"
                    alt="WhatsApp"
                    width={20}
                    height={20}
                  />
                </a>
              </li>
              <li>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${fullUrl}`}
                  target="blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin />
                </a>
              </li>
              <li>
                <a
                  href={`https://api.whatsapp.com/send?text=${fullUrl}`}
                  target="blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/icons8-whatsapp-32.png"
                    alt="WhatsApp"
                    width={25}
                    height={25}
                  />
                </a>
              </li>
            </ul>
          </div>
        }
        position="top"
      >
        <span className="flex items-center underline decoration-solid gap-x-2">
          <Share2 size={15} fill="#fff" />
          Share{" "}
        </span>
      </Tooltip>
    </div>
  );
};

export default SocialMediaLinks;
