import Banner from "@/components/Banner/Banner";
import BestSellers from "@/components/BestSellers/BestSellers";
import LatestProducts from "@/components/LatestProducts/LatestProducts";
import NavMenu from "@/components/Shared/Navmenu";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" ">
      <div className="max-w-screen-xl mx-auto">
        {/* <NavMenu></NavMenu> */}
        <Banner></Banner>
        <LatestProducts></LatestProducts>
        <BestSellers></BestSellers>
        
      </div>
    </div>
  );
}
