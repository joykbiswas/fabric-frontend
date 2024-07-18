"use client"
import React from "react";
import Service from "../Service/Service";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { useEffect, useState } from "react";
import BestSellersCards from "./BestSellersCards";
const BestSellers = () => {
    const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("./bestSellers.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data);
      });
  }, []);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const product = movies && movies.map((item) => (
    <BestSellersCards key={item.id} item={item}></BestSellersCards>
  ));
  return (
    <div className='lg:flex gap-12'>
      <div className='w-full lg:w-1/4 relative'>
        <Service></Service>
      </div>
      <div className='w-full lg:w-3/4 pt-7'>
      <h3 className="text-xl font-semibold ">Bestsellers</h3><hr className="w-32 border border-sky-600"></hr>
      <Carousel

        showDots={true}
        responsive={responsive}
        // customTransition="all .8"
        transitionDuration={1000}
        
      >
        {product}
        
      </Carousel>
      </div>
    </div>
  );
};

export default BestSellers;
