import React from "react";
import { PiTruckTrailer } from "react-icons/pi";
import { BiSolidNetworkChart } from "react-icons/bi";
import { TfiReload } from "react-icons/tfi";
import { MdOutlinePayments } from "react-icons/md";

const Service = () => {
  return (
    <div className="border-2 rounded-xl mb-5 m-2 flex lg:flex-col justify-between">
      <div className="flex items-center justify-center lg:gap-9 gap-3 lg:mx-4  p-2 lg:border-b lg:border-r-0 md:border-r sm:border-r my-4">
        <PiTruckTrailer className="text-4xl text-orange-500 " />
        <div>
          <h1 className="text-lg font-semibold">Free Delivery</h1>
          <p>from $50</p>
        </div>
      </div>
      <div className="flex items-center justify-center lg:gap-9 gap-3 lg:mx-4 p-2 lg:border-b lg:border-r-0 md:border-r sm:border-r my-4">
        <BiSolidNetworkChart className="text-4xl text-orange-500 " />
        <div>
        <h1 className="text-lg font-semibold">99% Positive</h1>
        <p>Feedbacks</p>
        </div>
      </div>
      <div className="flex items-center justify-center lg:gap-9 gap-3 lg:mx-4 p-2 lg:border-b lg:border-r-0 md:border-r sm:border-r my-4">
        <TfiReload className="text-4xl text-orange-500 " />
        <div >
        <h1 className="text-lg font-semibold">365 days</h1>
        <p>for free return</p>
        </div>
      </div>
      <div className="flex items-center justify-center lg:gap-9 gap-3 mx-4 lg:pb-3">
        <MdOutlinePayments className="text-4xl text-orange-500 " />
        <div>
        <h1 className="text-lg font-semibold">Payment</h1>
        <p>Secure System</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
