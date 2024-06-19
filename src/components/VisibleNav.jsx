import React, {useState} from 'react'
import Logo from './Logo'
import { NavLink } from 'react-router-dom'
import Cart from './svg/Cart'
import Button from './Button'

function VisibleNav({className}) {

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
      <div className={`${className} w-full py-4 px-6 bg-white rounded-full justify-between`}>

      <div className='flex gap-12 items-center'>
        <NavLink to={'/'} className={'cursor-pointer'}>
            <Logo />
          </NavLink>
        <ul className='flex gap-8'>
          {
            headerItems.map(items => <li key={items.name} className='text-[16px] font-semibold'>
              <NavLink to={items.slug} className={({isActive}) => `${isActive? stylings : ""} relative flex justify-center`}>
                {
                  items.name
                }
              </NavLink>
            </li>)
          }
        </ul>
      </div>

      <div className='flex items-center gap-8'>
        <div className='font-semibold group'>
          <p className='transition duration-300 text-end text-[#121212] text-[16px] group-hover:text-[#E64242]'>Order by phone</p>
          <p className='text-[#E64242] text-[24px]'>1-800-700-600</p>
        </div>

        <span onMouseEnter={() => setEntered(true)}  onMouseLeave={() => setEntered(false)} className='size-12 flex justify-center items-center gap-1 rounded-full bg-[#f1f1f1] cursor-pointer'>
            <Cart  entered={entered}/>
            <p className={`${cartItems? "flex" : "hidden"} font-bold`}>{cartItems}</p>
        </span>

        <Button className={'transition duration-300 text-[#e84242] text-[16px] rounded-full px-12 py-4 border-2 border-[#e84242] font-bold hover:bg-[#e84242] hover:text-white'}>VIEW FULL MENU</Button>
      </div>
      </div>
  )
}

export default VisibleNav