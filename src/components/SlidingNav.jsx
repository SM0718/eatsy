import React, { useState } from 'react'
import Logo from './Logo'
import Lines from './svg/Lines'
import Cross from './svg/Cross'
import { NavLink } from 'react-router-dom'
import Cart from './svg/Cart'
import Button from './Button'

function SlidingNav({className, setShow, headerItems}) {
  const [entered, setEntered] = useState(false)
  const [change, setChange] = useState(false)
  const [cartItems, setCartItems] = useState(null)
  return (
    <div className={`${className} w-[350px] h-screen bg-white shadow-xl z-50`}>
        <div className='w-full relative flex flex-col items-center justify-between py-8'>
          <div className=''>
            <Logo />
            <span onMouseEnter={() => setChange(true)} onMouseLeave={() => setChange(false)} onClick={() => setShow(false)} className='cursor-pointer absolute top-3 -right-10'>
                <Cross change={change}/>
            </span>
          </div>
          <ul className='w-2/3 flex flex-col gap-4'>
            {
              headerItems.map(items => <li className='w-full text-center text-[16px] border-b-2 pb-4'>
                <NavLink to={items.slug} className={({isActive}) => `${isActive? "font-bold" : ""} hover:text-[#E64242]`}>
                  {
                    items.name
                  }
                </NavLink>
              </li>)
            }
          </ul>
          <div className='flex flex-col items-center gap-8'>
        <div className='font-semibold group'>
          <p className='transition duration-300 text-center text-[#121212] text-[16px] group-hover:text-[#E64242]'>Order by phone</p>
          <p className='text-[#E64242] text-[24px]'>1-800-700-600</p>
        </div>

        <span onMouseEnter={() => setEntered(true)}  onMouseLeave={() => setEntered(false)} className='size-12 flex justify-center items-center gap-1 rounded-full bg-[#f1f1f1] cursor-pointer'>
            <Cart  entered={entered}/>
            <p className={`${cartItems? "flex" : "hidden"} font-bold`}>{cartItems}</p>
        </span>

        <Button className={'transition duration-300 text-[#e84242] text-[16px] rounded-full px-12 py-4 border-2 border-[#e84242] font-bold hover:bg-[#e84242] hover:text-white'}>VIEW FULL MENU</Button>
      </div>
        </div>

        
    </div>
  )
}

export default SlidingNav