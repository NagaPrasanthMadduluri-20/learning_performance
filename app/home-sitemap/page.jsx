import Container from "@/components/Container";
import Text from "@/components/Text";
import { appData } from "@/data/appData";
import Link from "next/link";
import React from "react";

const HomeSitemap = () => {
  return (
    <>
      <Container>
        <Text variant="h2" className="text-center mb-5">
          Home SiteMap
        </Text>
        <div className="grid grid-cols-3">
          {appData.countries.map((country, countryindex) => (
            <ul
              key={countryindex}
              className="list-disc ml-5 marker:text-orange-400"
            >
              <li className="mb-2 hover:underline">
                <Link href={`/${country.code}`}> {country.name}</Link>
              </li>
            </ul>
          ))}
        </div>
      </Container>
      <Container className="pt-0">
        <Text variant="h2" className="text-center mb-5">
          Others
        </Text>
        <div className="grid grid-cols-3">
          {appData.Others[0].list.map((item, index) => (
            <ul key={index} className="list-disc ml-5 marker:text-orange-400">
              <li className="mb-2 hover:underline">
                <Link href={`/${item.link_href}`}> {item.link_name}</Link>
              </li>
            </ul>
          ))}
        </div>
      </Container>
    </>
  );
};

export default HomeSitemap;
