import React from 'react'
import { burgerInfos } from '../infos/burgerInfos.js'
import { NavLink } from 'react-router-dom'
import Button from './Button.jsx'
function BurgerMenu() {

  return (
    <div className='w-full -my-72 sm:-my-24 lg:my-12'>
        <h1 className='rakkas text-[60px] md:text-[110px] lg:text-[130px] text-center text-[#f4e6c0]'>Bestsellers</h1>
        <div className='w-full md:w-5/6 lg:w-3/4 px-8 md:px-2 mx-auto flex flex-col lg:grid grid-cols-3 gap-8 overflow-hidden'>
          {
            burgerInfos.map((items, index) => 
            <div className={`${(index === 3)? "col-span-2" : "w-full"} ${(index === 6)? "col-span-2" : ""} sm:h-[450px] md:h-[600px] lg:h-[500px] relative rounded-3xl`}>
              <h1 className={`${(index === 2)? "text-white" : ""} absolute top-4 left-4 text-[20px] sm:text-[25px] md:text-[30px] font-black`}>{items.name}</h1>
              <NavLink to={'#'} className={'w-full h-full rounded-3xl z-30'}>
                  <img className='size-full rounded-3xl' src={items.img}/>
              </NavLink>
              <div className='w-full px-8 flex justify-between items-center absolute bottom-6'>
                <div>
                  <p className={`${(index === 2 || index === 3)? "text-white" : ""} text-[28px] text-[#121212] font-bold`}>
                    {
                    items.price
                  }
                  </p>
                  <p className={`text-[#828283] text-[13px] font-semibold`}>220gr / 600 cal</p>
                </div>
                <Button className={'tranistion duration-300 z-40 text-3xl text-[#E64242] border-2 border-[#E64242] rounded-full py-2 md:py-4 px-4 md:px-6 flex items-center justify-center hover:text-white hover:bg-[#E64242]'}>+</Button>
              </div>
              </div>)
          }
        </div>
    </div>
  )
}

export default BurgerMenu