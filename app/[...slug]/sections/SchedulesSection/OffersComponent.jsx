"use client";
import { CircleCheck } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const OffersComponent = ({ OffersData, Offerindex }) => {
  const [offerApplied, setOfferApplied] = useState(false);

  const handleOfferApplied = () => {
    setOfferApplied(true);
    console.log("Offer applied");
  };

  return (
    <div>
      <div className="flex text-[12px] md:text-[14px] font-bold text-orange-500 md:items-center gap-x-1">
        {" "}
        <Image
          src="/offerpercent.svg"
          alt="offerpercent"
          width={15}
          height={15}
        />
        40% 0FF
      </div>
      <div className="flex flex-row gap-x-2 items-baseline">
        <div className="font-bold text-[16px] md:text-[20px] ">
          {OffersData.course_offer_price}
        </div>
        <div className="line-through text-[12px] md:text-[12px] font-bold text-gray-400">
          {OffersData.course_price}
        </div>
      </div>
      {Offerindex == 0 ? (
        <>
          <div className="text-green-700  dark:text-[#008000] brightness-125 text-[10px] flex font-bold md:items-center gap-x-1 mt-1 ">
            <CircleCheck size={15} fill="#008000" stroke="#fff" /> Special Offer
            Applied{" "}
          </div>
          <div className="text-red-500 brightness-125 text-[10px] font-bold mt-1">
            Hurry Up!!! Limited Seats Left{" "}
          </div>{" "}
        </>
      ) : (
        <>
          {offerApplied ? (
            <div className="text-green-700 dark:text-[#008000] text-[10px] flex font-bold items-center gap-x-1 mt-1">
              <CircleCheck size={15} fill="#008000" stroke="#fff" /> 10% Coupon
              Discount Applied!{" "}
            </div>
          ) : (
            ""
          )}
          <>
            <div className="text-[10px] font-semibold my-1">
              Coupon{" "}
              <span className="text-orange-400 underline underline-offset-1 mr-1">
                INVL10
              </span>
              <span
                className="text-red-500 border-red-400 border-2 rounded-sm px-1 cursor-pointer animate-out"
                onClick={handleOfferApplied}
              >
                Apply
              </span>
            </div>
            {!offerApplied ? (
              <div className="text-[10px] font-bold text-green-700 dark:text-[#008000] brightness-125">
                Recieve 10% Discount
              </div>
            ) : (
              ""
            )}
          </>
        </>
      )}
    </div>
  );
};

export default OffersComponent;
