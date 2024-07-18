import React from 'react';
import { Slider } from './Slider';
import ProductsCategory from '../ProductsCategory/ProductsCategory';

const Banner = () => {
    return (
        <div className='md:flex gap-12'>
            <div className='w-full md:w-1/4 relative'><ProductsCategory></ProductsCategory></div>
            <div className='w-full md:w-3/4 '>
            <Slider></Slider>
            </div>
        </div>
    );
};

export default Banner;