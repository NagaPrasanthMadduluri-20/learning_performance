import Container from "@/components/Container";
import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Text from "@/components/Text";
import Image from "next/image";

const BannerSide = ({ BannerSideHomeData }) => {
  return (
    <Container className="py-0">
      {/* <div>
        {BannerSideHomeData.map((item, index) => (
          <Link href={`blog/${item.slug}`} key={index}>
            <Card className="mb-6">
              <Image
                src={item.img}
                alt={item.title}
                width={200}
                height={200}
                className="rounded-t-sm w-full h-auto"
              />
              <CardContent>
                <div className="flex justify-between my-4">
                  <Image
                    src="/invensis.jpg"
                    alt="logo"
                    width={90}
                    height={50}
                  />
                  <Text className="font-semibold">{item.date}</Text>
                </div>
                <Text className="text-[20px] font-bold">{item.title}</Text>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div> */}
    </Container>
  );
};

export default BannerSide;
