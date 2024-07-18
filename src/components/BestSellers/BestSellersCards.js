import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
const BestSellersCards = ({ item }) => {
  const { img, name, price, type } = item;

  const cardStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="m-4 group">
      <div className="relative grid h-72 w-full rounded-xl items-end justify-center overflow-hidden text-center">
        <div
          style={cardStyle}
          className=" absolute inset-0 m-0 w-full rounded-none group-hover:scale-110 transition "
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/20" />
        </div>

        <div className="z-50 group-hover:flex hidden absolute top-0 right-2 text-white justify-between bg-gray-400 p-1 rounded-lg mt-4">
          <h2
            className="text-2xl font-bold tooltip tooltip-left"
            data-tip="add to cart"
          >
            <HiOutlineShoppingCart className="text-blue-600" />
          </h2>
        </div>

        <div className=" relative">
          <div className=" text-left ml-3 ">
            <h5 className="text-white mb-2 text-lg">{type}</h5>
            <h2 className=" bottom-0 left-0 text-white font-medium leading-[1.5] text-lg">
              {name}
            </h2>
            <h5 className="text-white text-lg">$ {price}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellersCards;
