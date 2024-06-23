import React, {useState} from 'react'
import Logo from './Logo'
import { NavLink } from 'react-router-dom'
import Cart from './svg/Cart'
import Button from './Button'
import Lines from './svg/Lines'
import SlidingNav from './SlidingNav'

function HiddenNav({className}) {

  const stylings = "before:content-[''] before:absolute before:size-2 before:bg-[#e84242] before:rounded-full before:-bottom-3"
  const [cartItems, setCartItems] = useState(null)
  const [show, setShow] = useState(false)
  const headerItems = [
    {
      name: 'HOME',
      slug: '/'
    },
    {
      name: 'ABOUT',
      slug: '/about'
    },
    {
      name: 'BLOG',
      slug: '/blog'
    },
    {
      name: 'SHOP',
      slug: '/shop'
    },
  ]

  return (
      <div className={`${className} w-full py-2 px-6 relative bg-white justify-between`}>
        <div className='text-7xl flex items-center gap-6'>
          <span onClick={() => setShow(true)} className='transition duration-600 flex flex-col gap-2 cursor-pointer group'>
            <Lines className={'transition duration-600 group-hover:-translate-y-1 group-hover:border-[#E64242]'}/>
            <Lines className={'group-hover:border-[#E64242]'}/>
            <Lines className={'transition duration-600 group-hover: group-hover:translate-y-1 group-hover:border-[#E64242] '}/>
          </span>
          <NavLink to={'/'} className={`cursor-pointer`}>
            <Logo />
          </NavLink>
        </div>
        
        <SlidingNav headerItems={headerItems} setShow={setShow} className={`${show? "hiddenNavSlideIn" : "hiddenNavSlideOut"} flexcd  absolute left-0 top-0`}/>
      </div>
  )
}

export default HiddenNav