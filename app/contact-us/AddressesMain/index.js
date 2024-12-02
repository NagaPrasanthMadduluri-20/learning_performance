import Container from "@/components/Container";
import Text from "@/components/Text";
import { PhoneCall } from "lucide-react";
import Image from "next/image";
import React from "react";

const AddressesMain = ({ AddressesMainData }) => {
  const { contents } = AddressesMainData;
  return (
    <Container>
      <div className="flex flex-col md:flex-row  justify-center items-center gap-8">
        {contents.map((item, index) => (
          <div
            className="bg-gray-300 rounded-lg p-5 w-[100%] md:w-[50%] h-auto md:h-60 text-center"
            key={index}
          >
            <div className="">
              <Image
                src={item?.icon}
                alt="location icon"
                width={140}
                height={100}
                className="h-20 w-28 mx-auto"
              />
              <Text variant="h2" className="my-5">
                {item.heading}
              </Text>
              <Text className="text-wrap break-words">{item.description}</Text>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-gray-300 rounded-lg p-5 mt-10">
        <div className="flex justify-center">
          {" "}
          <PhoneCall
            fill="#ff9800"
            strokeWidth={2}
            stroke="#0c0c0c"
            size={50}
          />
        </div>

        <Text variant="h2" className="text-center my-4">
          Phone Number
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="flex items-center justify-start gap-x-4">
            <Image src="/flag-icon-usa.svg" alt="USA" width={25} height={25} />
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
  );
};

export default AddressesMain;
