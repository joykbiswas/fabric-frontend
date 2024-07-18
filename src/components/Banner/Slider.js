"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

export const Slider = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliders = [{img: "https://ninetheme.com/themes/venam/v2/wp-content/uploads/2021/07/s_slider_bg02.jpg", title: "BEST DEAL! ", discount: "30% off", subTitle: "TOP HEADPHONE", des: "Headphones are a type of audio music, podcasts, audio books, and content privately.",}, {img: "https://ninetheme.com/themes/venam/v2/wp-content/uploads/2021/07/s_slider_bg03.jpg", title: "BEST DEAL!  ", discount: "50% off", subTitle: "TOP WATCH", des: "Posuere in netus a eu varius adipiscing suspendisse elementum vitae tempor suspendisse.",},{img: "https://ninetheme.com/themes/electron2/wp-content/uploads/2023/08/product-2-1536x1024.jpg", title: "BEST DEAL! ",discount: "30% off", subTitle: "TOP HEADPHONE",des: "Just trade in your eligible computer for credit toward a new one or recycle it for free.",}, {img: "https://ninetheme.com/themes/venam/v3/wp-content/uploads/2021/05/f_slider_bg01.jpg", title: "BEST DEAL!",discount: "25% off", subTitle: "TOP LIGHT", des: "Semper vulputate aliquam curae condimentum quisque gravida fusce convallis arcu cum at.",}, {img: "https://ninetheme.com/themes/venam/v4/wp-content/uploads/2021/05/f_slider_bg02.jpg", title: "BEST DEAL! ",discount: "45% off", subTitle: "TOP HEADPHONE",des: "Posuere in netus a eu varius adipiscing suspendisse elementum vitae tempor suspendisse.",},];
  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(() => setCurrentSlider(currentSlider === sliders.length - 1 ? 0 : currentSlider + 1), 5000);
    return () => clearInterval(intervalId);
  }, [currentSlider, sliders.length]);

  return (
        <>
            <div className="w-full h-60 sm:h-96 md:h-[540px] flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center before:absolute  before:inset-0 transform duration-1000 ease-linear"
                style={{ backgroundImage: `url(${sliders[currentSlider].img})` }}>
                {/* text container here */}
                <div className="drop-shadow-lg text-left px-5">
                    <div className="relative">
                    <h1 className="text-lg lg:text-xl font-bold mb-3 text-black">{sliders[currentSlider].title} 
                    
                    </h1>
                    <span className="absolute left-32 -top-8 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-red-500 text-center text-[20px] text-white ">{sliders[currentSlider].discount}</span>
                    </div>
                    <h1 className="text-4xl lg:text-4xl font-semibold  text-black">{sliders[currentSlider].subTitle}</h1>
                    <p className="text-sm md:text-base lg:text-lg py-2 text-black">{sliders[currentSlider].des}</p>
                    <button className="group rounded-full  relative z-10 h-14 w-32 overflow-hidden bg-black text-lg text-white">
                      <span className="absolute -inset-8 origin-left rotate-12 scale-x-0 transform bg-white transition-transform duration-700 group-hover:scale-x-100 group-hover:duration-300"></span><span className="absolute -inset-8 origin-left rotate-12 scale-x-0 transform bg-sky-700 transition-transform duration-500 group-hover:scale-x-100 group-hover:duration-700"></span><span className="absolute -inset-8 origin-left rotate-12 scale-x-0 transform bg-sky-900 transition-transform duration-300 group-hover:scale-x-50 group-hover:duration-500"></span><span className="absolute z-10 text-center text-white opacity-0 duration-100 ease-out group-hover:opacity-100 group-hover:duration-700">Shope Now</span>Shope Now</button>
                </div>
            </div>
           
        </>
  )};
