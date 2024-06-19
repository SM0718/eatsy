import React, {useState} from 'react'
import Logo from './Logo'
import { NavLink } from 'react-router-dom'
import Cart from './svg/Cart'
import Button from './Button'
import VisibleNav from '../components/VisibleNav'
import HiddenNav from './HiddenNav'

function Header() {

  const stylings = "before:content-[''] before:absolute before:size-2 before:bg-[#e84242] before:rounded-full before:-bottom-3"
  const [cartItems, setCartItems] = useState(null)
  const [entered, setEntered] = useState(false)
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
    <nav className='w-full flex justify-center items-center xl:py-8 xl:px-8'>
     <VisibleNav className={'hidden xl:flex'}/>
     <HiddenNav className={'xl:hidden flex'}/>
    </nav>
  )
}

export default Header