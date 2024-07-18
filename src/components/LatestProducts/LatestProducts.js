"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import Countdown from "../CountDown/Countdown";
// import StarRatings from './react-star-ratings';

const LatestProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("./latestProduct.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="lg:flex gap-12 pt-10 ">
      <div className="w-full lg:w-1/4  p-2">
        <h1 className="text-xl text-left border-b border-blue-500">Latest Products</h1>
        {products.length > 0 ? (
          <div className="md:flex lg:flex-col">
            {products.map((product, index) => (
              <div key={index} className="flex gap-3 bg-slate-50 ">
                <div>
                  <Image
                    width={100}
                    height={100}
                    src={product.img}
                    alt="product img"
                  ></Image>
                </div>
                <div className="py-3 md:text-sm ">
                  <h2>{product.name}</h2>

                  <StarRatings
                    rating={parseFloat(product.rating)}
                    starRatedColor="orange"
                    numberOfStars={5}
                    name={`rating-${product._id}`}
                    starDimension="20px"
                    starSpacing="2px"
                  />
                  <h4>{product.price}</h4>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No products available</p>
        )}
      </div>

      <div className=" w-full lg:w-3/4 p-2">
      <h1 className="text-2xl py-4">Deals of the week </h1>
        <div className="border-2 rounded-xl border-blue-600">

          <div className="flex">
            <div>
              <Image
                width={400}
                height={400}
                src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/consal.png"
                alt="deals img"
              ></Image>
            </div>
            <div>
              <Image
                width={100}
                height={100}
                src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/gadtet-150x150.png"
                className="border mt-6"
                alt="side img"
              ></Image>
              <Image
                width={100}
                height={100}
                src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/gade1-150x150.png"
                className="border mt-6"
                alt="side img2"
              ></Image>
              <Image
                width={100}
                height={100}
                src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/consal-150x150.png"
                className="border mt-6"
                alt="side img3"
              ></Image>
            </div>
            <div className="pl-8 lg:pt-12 md:pt-8 pt-6 text-center space-y-4">
              <h3 className=" text-blue-500">
                Game Console Controller + USB 3.0 Cable
              </h3>
              <h4 className="lg:text-2xl text-xl text-center">$ 99.00</h4>
              <div className="flex justify-between lg:text-xl text-lg  ">
                <h1>
                  <span className="text-slate-500">Already Sold</span> : 71
                </h1>
                <h1>
                  <span className="text-slate-500">Available:</span>29{" "}
                </h1>
              </div>
              <progress
                className="progress progress-warning "
                value="80"
                max="100"
              ></progress>
              <h3>Hurry Up! Offer ends in:</h3>
              <div >
              <Countdown></Countdown>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default LatestProducts;
