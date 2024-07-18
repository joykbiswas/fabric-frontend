import React from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoShirtOutline } from "react-icons/io5";
import { PiArmchairThin } from "react-icons/pi";
import { LiaClockSolid } from "react-icons/lia";
import { FaRegLightbulb } from "react-icons/fa";
import { FaKitchenSet } from "react-icons/fa6";
import { GiClothJar } from "react-icons/gi";
import { GiBarbedSun } from "react-icons/gi";
import { TbHorseToy } from "react-icons/tb";
import { MdElectricalServices } from "react-icons/md";
import { CiMobile3 } from "react-icons/ci";
import { GiHealthCapsule } from "react-icons/gi";
import { GiFlowerPot } from "react-icons/gi";
import { FaBaby } from "react-icons/fa6";
import { GiCarWheel } from "react-icons/gi";
const ProductsCategory = () => {
  return (
    <div>
      <div>
        <ul className="menu menu-xs rounded-lg w-full max-w-xs">
          <li>
            <details open>
              <summary className="bg-blue-200 hover:bg-blue-300 ">
                <a className=" p-2 font-semibold flex items-center text-lg gap-3 ">
                  <IoReorderThreeOutline className="text-xl " />
                  ALL CATEGORIES
                </a>
              </summary>

              <ul className="">
                <li className="">
                  <a className="p-1 flex items-center text-lg gap-3">
                  <PiArmchairThin className="text-xl "/> Furniture
                  </a>
                </li>
                <li>
                  <a className="p-1 flex items-center text-lg gap-3">
                  <IoShirtOutline className="text-xl "/>  Fashion
                  </a>
                </li>
                <li>
                  <a className="p-1 flex items-center text-lg gap-3">
                    
                  <LiaClockSolid className="text-xl "/>  Clocks
                  </a>
                </li>
                <li>
                  <a className="p-1 flex items-center text-lg gap-3">    
                  <FaRegLightbulb className="text-xl "/>  Lights
                  </a>
                </li>
                <li>
                  <details open>
                    <summary>
                    <a className=" flex items-center text-lg gap-3">
                    <GiClothJar className="text-xl "/>
                    Home & Kitchen
                    </a>
                    </summary>
                    <ul>
                      <li>
                        <a className=" flex items-center text-lg gap-3">
                        <FaKitchenSet className="text-xl "/>Kitchen & Dining
                        </a>
                      </li>
                      <li>
                        <a className=" flex items-center text-lg gap-3">
                        <GiBarbedSun lassName="text-xl "/> 
                        Bedding
                        </a>
                      </li>
                     
                    </ul>
                  </details>
                </li>
                <li>
                  <a className="p-1 flex items-center text-lg gap-3">
                    
                  <TbHorseToy className="text-xl "/> Toys
                  </a>
                </li>
                <li>
                  <a className="p-1 flex items-center text-lg gap-3">
                    
                  <CiMobile3 className="text-xl "/> Electronics
                  </a>
                </li>
                <li>
                  <a className="p-1 flex items-center text-lg gap-3">
                    
                  <GiHealthCapsule className="text-xl "/> Health & Beauty
                  </a>
                </li>
                <li>
                  <a className="p-1 flex items-center text-lg gap-3">
                    
                  <FaBaby className="text-xl "/> Mom & Baby
                  </a>
                </li>
                <li>
                  <a className="p-1 flex items-center text-lg gap-3">
                    
                  <GiFlowerPot className="text-xl "/> Accessories
                  </a>
                </li>
                <li>
                  <a className="p-1 flex items-center text-lg gap-3">
                    
                  <GiCarWheel className="text-xl "/> Car
                  </a>
                </li>
              </ul>
            </details>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default ProductsCategory;
