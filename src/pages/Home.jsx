import React from 'react'
import Burger from '../components/Burger'

function Home() {
  return (
    <div className='w-full h-screen relative'>
      <div className='flex zoomIn-burger justify-center items-center relative py-24 md:py-12 xl:py-4'>
        <p className='absolute zoomIn text-[60px] sm:text-[110px] md:text-[170px] lg:text-[190px] xl:text-[260px] leading-none text-center z-10 text-[#f4e6c0] font-black rakkas'>DELICIOUS <br/> BURGERS</p>
        <Burger className={'w-[280px] sm:w-[400px] md:w-[750px] xl:w-[1000px] h-[230px] sm:h-[300px] md:h-[500px] xl:h-[680px] z-20'}/>
      </div>
      <img className='absolute hidden lg:flex fries_r -right-32 top-60 z-50' src='./r.webp'/>
      <img className='absolute hidden lg:flex fries_l -left-32 top-[500px] z-50' src='./l.webp'/>
    </div>
  )
}

export default Home