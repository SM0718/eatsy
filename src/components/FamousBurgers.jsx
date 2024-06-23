import React from 'react'
import Slider from "react-slick";
import { famousBurgers } from '../infos/famousBurger'
import Button from './Button';
function FamousBurgers() {

    const settings = {
        className: "h-[700px] bg-gradient-to-r from-black to-white/0 slider-container",
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false
      };

  return (
    <>
      <Slider {...settings}>
    {
      famousBurgers.map((item, index) => (
        <div key={index} className='w-full h-[700px] flex'>
          <div className='w-2/3 bg-red-400'>i</div>
          <div className='w-1/3 bg-yellow-400'>j</div>
        </div>
      ))
    }
  </Slider>
    </>
    
  )
}

export default FamousBurgers