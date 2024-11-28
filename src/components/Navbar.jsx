import React,{useEffect, useState} from 'react'
import {FiMenu} from "react-icons/fi"
 
const navMenu=[
    {
        name: "Home",
        link: "#hero",
    },
    {
        name: "About",
        link: "#about",
    },
    // {
    //     name: "Projects",
    //     link: "#projects",
    // },
    {
        name: "Contact",
        link: "#contact",
    },
];


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu =()=> {
    setShowMenu(!showMenu);
  }
  return (
    <>
      <nav className='bg-secondary pt-4'>
        <div className='container flex justify-between items-center py-3 sm:py-0'>
            <h1 className='text-3xl text-primary font-bold'>Portfolio</h1>
            {/* desktop Menu */}
            <div className='hidden sm:block'>
                <ul className='flex items-center gap-4 '>
                    {navMenu.map((menu)=>(
                        <li key={menu.name}>
                            <a className='text-xl font-semibold px-2 py-4 md:py-6 inline-blockcursor-pointer' href={menu.link}>{menu.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
            {/* mobile Menu */}
            <div className='block sm:hidden'>
                <FiMenu className='text-2xl cursor-pointer ' onClick={toggleMenu}/>
                {
                    showMenu && (
                        <div className='fixed top-16 bg-white left-0 right-0 shadow-md rounded-b-xl z-10 py-10 '>
                            <ul className='flex flex-col items-center gap-4'>
                                {
                                    navMenu.map((menu)=>(
                                        <li  key={menu.name}>
                                            <a className='text-xl font-semibold px-2 py-4  md:py-6 inline-block cursor-pointer' 
                                            href={menu.link}>{menu.name}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                    )
                }
            </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
